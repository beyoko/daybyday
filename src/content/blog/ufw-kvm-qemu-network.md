---
title: 'System Upgrade to lost Network'
pubDate: '09/13/2024'
draft: false
tags:
  - 'Learn'
description: '系统升级引发的网络错误以及虚拟机网络无法连接。'
---

久违的系统更新，我却忘记了之前就是因为更新而丢失网络([系统升级后的回滚修复](/src/content/post/zh-cn/archDowngrade))，导致无法连接上WIFI的情况。
现在，Pacman经过更新后。重启后再次无法连上网络，启动iwd，一直处于“waiting for IWD”的状态。

## `systemd-network` 无法连接网络
查看`systemctl status systemd-network`，输出`io.systemd.Network.SetPersistentStorage`的错误。经过一番查询：

-  修改了`/etc/system/network/*`中的配置文件。
-  尝试将相关的包降级。

然而，这些尝试都未能恢复网络连接。

### Journalctl日志提供了线索
使用`journalctl -u systemd-networkd`查看日志，发现权限不足的异常信息（黄字）：
```
Sep 11 14:03:56 user systemd-networkd[518]: Failed to stat network namespace, ignoring: Permission denied
Sep 11 14:03:56 user systemd-networkd[518]: Failed to query network nsid, ignoring: Permission denied
Sep 11 14:03:56 user systemd-networkd[518]: Failed to stat the passed persistent storage fd: Permission denied
```
查看`/etc/system/network/*`下的配置文件，发现这些文件的权限为"-rw- --- ---"，即"Chmod 600"状态，仅Owner用户可以阅读和修改。

通过修改权限为“组成员”和“组以外的其他成员”都能阅读，使用`chmod 644 /etc/system/network/*`里的配置文件，成功连上WIFI。

### `networkd.SetPersistentStorage`无法连接
虽然能通过WIFI重新连上网络了，但是`systemctl status systemd-networkd`的错误依旧存在，还有日志的黄字权限异常仍旧未消失。

它的存在像心头的一道刺，问题的隐性累积，到爆发时，解决问题的阻力会随着累计的重量而升高，这是拖延症的一记重击。
既然是权限问题，除了在文件权限`chmod`上修改，还有一个就是管理软件权限的`apparmor`。

果然通过关闭`apparmor`，`journalctl`与`systemctl status`的问题就消失了。问题就出在`apparmor`上。
查看配置文档`/etc/apparmor.d/systemd-networkd`，发现上次更新日期已经是2021年。我找到另一个仍在维护的"apparmor"配置库[roddhjav/apparmor.d](https://github.com/roddhjav/apparmor.d)，替换配置文档后，`systemctl restart apparmor.service`重新启动"apparmor"，日志的黄字异常消失，`systemctl status --failed`的错误也不再出现，"State"恢复到"running"。

## Qemu(kvm)无法连接网络
物理机重新连接网络后，启动KVM，却无法通过SSH连接。查看虚拟网卡状态，无法读取IP，虚拟机内无法接入互联网。

### 方法
搜了一圈网上的答案，总结以下几个解决方法：

#### 将该静态IP放在UFW的白名单上。
这种解决方案提供了对桥接客机的最小访问权限，不会禁用桥接上的netfilter。需要客机有静态IP地址，因为无法从本地网络获取。 
修改`/etc/ufw/before.rules`，添加"FORWARD"规则：
```
# allow all traffic to 10.1.0.81
-A FORWARD -d 10.1.0.81 -j ACCEPT
-A FORWARD -s 10.1.0.81 -j ACCEPT
```

#### 禁用桥接的防火墙规则
这是最常见的方法。大多数服务器将主机桥作为主要接口，禁用通过该桥的netfilter将允许客机从本地网络访问。它将允许桥接客机作为本地网络的DHCP客户端。
加载"br_netfilter":
```
$ sudo modprobe br_netfilter
```

创建 `/etc/modules-load.d/br_netfilter.conf`:
```
$ sudo echo "br_netfilter" > /etc/modules-load.d/br_netfilter.conf
```

创建`/etc/sysctl.d/10-bridge.conf`:
```
net.bridge.bridge-nf-call-ip6tables=0
net.bridge.bridge-nf-call-iptables=0
net.bridge.bridge-nf-call-arptables=0
```

更新运行配置:
```
$ sudo sysctl -p /etc/sysctl.d/10-bridge.conf
```

确认状态：
```
$ sudo sysctl -a | grep "bridge-nf-call"
```

#### 将“Libvirt”防火墙的规则改为“iptables”
查看默认配置：`#firewall_backend = "nftables"`这条指令是以注释的状态放置在配置的最后一行，也是唯一一条有实质作用的代码。因此可以判定，这条代码为默认规则。
在`/etc/libvirtd/network.conf`中添加
```
firewall_backend = "iptables"`。
```
若没有可用的后端，网络驱动将无法启动。而我没有安装“nftables”，因此无法连通网络。一切都通了。

### 解决

- 使用`chmod 644 /etc/system/network/*`修改配置文件权限，成功连上WIFI。
- 在`/etc/libvirtd/network.conf`中添加`firewall_backend = "iptables"`，虚拟机重新连上网络。




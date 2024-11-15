---
title: 'kvm Nat port forwarding'
pubDate: '09/23/2024'
draft: false
tags:
  - 'Learn'
description: 'KVM/QEMU在NAT上进行端口转发'
---

## NAT+iptables做端口映射
[img](https://www.lantinglou.com/wp-content/uploads/2020/05/201607271469627876363827.png)

### NAT种类
NAT有两种，DNAT和SNAT，或称目的NAT和原NAT。
DNAT（目的NAT）： 数据包的目的地改为指定地址。
SNAT（原NAT）： 数据包的原地址改为指定地址。

#### SNAT
SNAT的作用是Host内部新建一个独立的虚拟子网。当子网发送数据出来时，数据源地址改为Host的实际地址。
> 可把Host当作网关。

`brtcl show`查看网络配置文件

在`/etc/libvirt/qemu/network/`中新建网络规则配置文件“*.xml”
```
<network>
    <name>new</name>
    <bridge name='virbr1'/> // 也可能为virbr0
    <forward mode='route' dev='eth0'/>
    <ip address="192.168.132.1" netmask="255.255.255.0">//定义网段
    <dhcp>
        <range start="192.168.132.2" end="192.168.132.254"/>//定义dhcp方式分配ip区间
    </dhcp>
    </ip>
</network>
```

使用virsh对虚拟网络进行管理
```
virsh # net-create /etc/libvirt/qemu/networks/new.xml
virsh # net-autostart new
```

在vm的配置文件或在QEMU中NAT的配置选择刚才的new。
重启`systemctl restart libvirt`刷新规则。

### 设置iptables规则 实现访问主机8000端口时转发至虚拟机80端口
假设宿主机ip：192.168.1.100
虚拟机ip：192.168.132.3

```
# iptables -A INPUT -p tcp --dport 8000 -j ACCEPT
```
- 这条指令的作用是允许宿主机（192.168.1.100）上的防火墙接受传入的TCP流量，并且目标端口为8000的流量将被允许通过。这个规则允许宿主机接受来自外部网络对端口8000的TCP连接请求。

```
#  iptables -t nat -A PREROUTING -d 192.168.1.100 -p tcp -m tcp --dport 8000 -j DNAT --to-destination 192.168.132.3:80   
```
- 这条指令的作用是在NAT表中的PREROUTING链上创建一条规则，用于目标地址为192.168.1.100且目标端口为8000的TCP流量。这条规则会将这些流量的目标地址和目标端口转发到虚拟机（192.168.132.3）的端口80上。
```
#  iptables -t nat -A POSTROUTING -s 192.168.132.0/255.255.255.0 -d 192.168.132.3 -p tcp -m tcp --dport 80 -j SNAT --to-source 192.168.132.1
```
- 这条指令的作用是在NAT表中的POSTROUTING链上创建一条规则，用于源地址为192.168.132.0/24（虚拟机子网）且目标地址为192.168.132.3且目标端口为80的TCP流量。这条规则会将这些流量的源地址修改为192.168.132.1，以确保虚拟机可以正确地响应这些流量并将响应传回给宿主机。

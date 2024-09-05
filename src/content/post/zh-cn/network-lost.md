---
title: 'DNS的配置失误: 流量无法输出输入'
pubDate: '02/07/2024'
draft: true
tags:
  - 'systemd'
  - 'DNS'
description: 'DNS 导致网页无法连通，配置文件修正。'
heroImage: '@/assets/images/cat02.png'
heroImageAlt: 'build fish'
---

# 无法连接网页
上周因为更新导致系统无法连接上网络的故障，经过回滚修复后，在家里是能正常上网了，但在外面不论是WIFI还是手机热点，能PING地址，但就是无法输出输入。。

一直搁置了一周的时间，终于突然想到问题可能出在了DNS的解析上。排查系统的启动程序`systemctl status`，没有漏掉的。
然后就是配置文档，分配DNS的组件`systemd-resolved`的配置文档位于`/etc/resolv.conf`:
```
nameserver 192.168.1.1
nameserver 192.168.**.**
# 星号的是我在家中路由所配置的内网IP地址。
```
当我将改为:
```
nameserver 8.8.8.8
nameserver 8.8.4.4
```
再次重启`systemd-resolved`服务后，网络就能正常连接上了。

配置为何会变成这个估计是之前更新导致无法连接网络时，排查修复忘记复原所导致的。我记得当初的配置就是用的`8.8.8.8`进行解析。

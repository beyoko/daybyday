---
title: '记一次滚坏后回滚修复'
pubDate: '06/23/2024'
draft: true
tags:
  - 'Archlinux'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'
heroImage: '/public/cat02.png'
heroImageAlt: 'build fish'
---

# 升级后无法进行WIFI链接
升级后重新启动电脑，启动电脑后无法连接到WIFI。查询了相关问题的日志：
- `ifconfig list` 显示 `DOWN`
- `rfkill list` 没有将接口隐藏
- 编辑IWD的配置文档
等等的方法都无法解决，但是庆幸的是还可以用网线来进行网络连接。
如无意外，这是IWD相关包升级的问题，因为查询了`cat /var/log/pacman.log`显示这次的更新里IWD在列。

# 解决方法
本来想要等几日，出相关包的更新，就可以解决了。但等了一个星期，有新的包就更新，还是没有解决问题。只好冒险"回滚": 
- ```cat /var/log/pacman.log | grep upgrade```找到出现问题的那次更新的包。
- ```cd /var/cache/pacman/pkg```找到相关的包的版本进行降级，```pacman -U *.tar.zst```。
顺利地将两次更新的逐次倒序降级后，终于可以重新连接上WIFI了。



---
title: 'file share'
pubDate: '09/16/2024'
draft: true
tags:
  - 'Learn'
description: '在虚拟机上安装OpenMediaVault，建造简易云盘。'
---

# 缘起
闲置的机械硬盘，用来备份家人的数据。

## 需求
利用本地网络，通过无线网络上传数据到机械硬盘上。
要直观易用，家里除了我使用电脑之外，主要使用的设备就是IOS。

### 流程
KVM(qemu) > 安装OpenMediaVault > 虚拟机OpenMediaVault配置桥接网络 > OpenMediaVault中配置SMB服务


## KVM
### archlinux
```
sudo pacman -S qemu-full libvirt virt-manager virt-viewer \
    edk2-ovmf libosinfo dnsmasq vde2 openbsd-netcat libguestfs \
    virglrenderer
```
#### 模块化启动服务
传统的单体型libvirt守护进程（`systemctl enable --now libvirtd`）通过集中管理的超虚拟机配置来管理多种虚拟化驱动程序。然而，这可能导致系统资源使用效率低下。

新引入的模块化libvirt为每种虚拟化驱动程序提供了一个特定的守护进程。因此，模块化libvirt守护进程在精细调节libvirt资源管理方面提供了更多的灵活性。
```
for drv in qemu interface network nodedev nwfilter secret storage; do \
  sudo systemctl enable virt${drv}d.service; \
  sudo systemctl enable virt${drv}d{,-ro,-admin}.socket; \
done
```

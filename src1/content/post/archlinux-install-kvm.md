---
title: 'Archlinux install Qemu(kvm)'
pubDate: '09/19/2024'
draft: true
tags:
  - 'Learn'
description: 'how to install Qemu on archlinux'
---

## 检查设备是否支持虚拟化
### 查看CPU是否支持VM capabilities
```
lscpu | grep -i Virtualization
```
-  Intel输出`VT-x`
-  AMD输出`AMD-Vi`

### 安装主程序以及相关依赖
```
sudo pacman -S qemu-full libvirt virt-manager virt-viewer \
    edk2-ovmf libosinfo swtpm dnsmasq vde2 openbsd-netcat libguestfs \
    virglrenderer
```
- qemu-full - 用户空间的KVM仿真器，管理主机与虚拟机之间的通信
- qemu-img - 提供创建、转换、修改和快照离线磁盘映像的功能
- libvirt - 一个开源API、守护进程和管理平台虚拟化的工具
- virt-manager - 创建和管理来宾虚拟机的图形用户界面工具
- virt-viewer - 连接到正在运行的虚拟机的图形控制台
- edk2-ovmf - 为虚拟机启用UEFI支持
- swtpm - 用于虚拟机的TPM（受信任的平台模块）仿真器
- libosinfo - 一个用于管理虚拟化操作系统信息的库

### 启动libvirt服务
libvirt守护进程有两种类型：单体型和模块化型。你使用的守护进程类型会影响你对各个虚拟化驱动程序的配置精细程度。

传统的单体型libvirt守护进程（libvirtd）通过集中管理的超虚拟机配置来管理多种虚拟化驱动程序。然而，这可能导致系统资源使用效率低下。

相比之下，新引入的模块化libvirt为每种虚拟化驱动程序提供了一个特定的守护进程。因此，模块化libvirt守护进程在精细调节libvirt资源管理方面提供了更多的灵活性。

虽然大多数Linux发行版已经开始提供模块化选项，但在撰写时，Ubuntu和Debian仍然只提供单体型守护进程。”

#### 模块化型
```
for drv in qemu interface network nodedev nwfilter secret storage; do
    sudo systemctl enable virt${drv}d.service;
    sudo systemctl enable virt${drv}d{,-ro,-admin}.socket;
done
```
循环“virt”+ “qemu interface network nodedev nwfilter secret storage”的`.servic`和`{,-ro,-admin}.socket`，开机自动启动。

#### 单体型
```
sudo systemctl enable libvirtd.service
```

### 添加内核支持
>     警告（IOMMU 在内核中似乎被禁用。请将 intel_iommu=on 添加到内核命令行参数中）”

#### GRUB
1. 打开GRUB的配置文档
```
sudo vim /etc/default/grub
```

2. 添加以下内核模块条目
```
# /etc/default/grub
GRUB_CMDLINE_LINUX="... intel_iommu=on iommu=pt"
```

3. 重新生成您的 `grub.cfg` 文件
```
sudo grub-mkconfig -o /boot/grub/grub.cfg
sudo reboot
```

#### systemd-boot
1. 打开配置文档
```
sudo vim /boot/loader/entries/arch.conf
```

2. 添加以下内核模块条目
```
options rw ... intel_iommu=on iommu=pt
```

3. 更新配置
```
sudo bootctl update
```

### 授予普通用户系统范围的访问权限
#### 将当前用户添加到`libvirt`组
```
sudo usermod -aG libvirt $USER
```

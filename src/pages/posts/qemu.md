---
title: 'install Qemu in Archlinux'
description: 'installation'
layout: '../../layouts/Post.astro'
pubDate: '03/02/2024'
tags:
  - Qemu
  - KVM
---

# installation

```
pacman -S qemu virt-manager virt-viewer dnsmasq vde2 bridge-utils openbsd-netcat libguestfs libvirt-openrc ebtables

## UEFI
pacman -S edk2-ovmf

## TPM
pacman -S swtpm

```

## enable nested virtulization (optional)

```
sudo modprobe -r kvm_intel
sudo modprobe kvm_intel nested=1
echo "options kvm-intel nested=1" | sudo tee /etc/modprobe.d/kvm-intel.conf
```

### verify nested virtualization

```
systool -m kvm_intel -v | grep nested
cat /sys/module/kvm_intel/parameters/nested
```

2. 创建虚拟机 - virt-intall

# 使用 iso 镜像创建全新的 proxmox 虚拟机，自动创建一个 60G 的磁盘。

virt-install --virt-type kvm \
--name pve-1 \
--vcpus 4 --memory 8096 \
--disk size=60 \
--network network=default,model=virtio \
--os-type linux \
--os-variant generic \
--graphics vnc \
--cdrom proxmox-ve_6.3-1.iso

# 使用已存在的 opensuse cloud 磁盘创建虚拟机

virt-install --virt-type kvm \
 --name opensuse15-2 \
 --vcpus 2 --memory 2048 \
 --disk opensuse15.2-openstack.qcow2,device=disk,bus=virtio \
 --disk seed.iso,device=cdrom \
 --os-type linux \
 --os-variant opensuse15.2 \
 --network network=default,model=virtio \
 --graphics vnc \
 --import

其中的 --os-variant 用于设定 OS 相关的优化配置，官方文档强烈推荐设定，其可选参数可以通过 osinfo-query os 查看。

---
title: 'Fixing sleep on Archlinux on Dell Latitude 7380'
pubDate: '01/20/2025'
draft: false
tags:
  - 'fix'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'
heroImage: '@/assets/images/cat01.png'
heroImageAlt: 'build fish'
---

自从刷掉购入时自带的厂商定制Windows10后，不论是安装官方原版的Windows10还是Ubuntu、Arch，Suspend时总会出现黑屏后Caps_Lock键闪烁（内核错误）的情况。
除了睡眠功能之外，其他一切运行得都非常好，但睡眠功能很烦人。当我尝试让笔记本休眠时，屏幕会变黑，但笔记本不会关闭，并且 Caps_lock 灯会开始闪烁（我查到这表示“内核恐慌”）。我尝试了很多种解决方案，包括 Arch Wiki 和随机论坛上找到的，都没有奏效，更新 BIOS 也于事无补。
久而久之我就习惯了每天关机的习惯，但万万没想到的是偶然的机会下，在Google搜索时点进了(Naman的博客)(https://prose.nsood.in/latitude-7290-linux-sleep)，同类机型和同样情况的解决方法。[Fixing sleep on Linux on a Dell Latitude 7290/7390/7490](https://prose.nsood.in/latitude-7290-linux-sleep)

## Fix
`acpi_enforce_resources=lax i915.enable_dc=0`将这段代码添加到 UEFI 引导加载程序中。

- `acpi_enforce_resources=lax`放宽内核对 ACPI 资源冲突的检查。
- `i915.enable_dc=0`禁用 Intel 集成显卡（i915 驱动）的显示省电功能（Display Power Saving Technology）。

这里有常见两种加载程序的添加路径:
### GRUB
`/etc/default/grub`到该路径的grub里，在`GRUB_CMDLINE_LINUX_DEFAULT=`处添加.
```
GRUB_CMDLINE_LINUX_DEFAULT=acpi_enforce_resources=lax i915.enable_dc=0
```
然后用 `grub-mkconfig -o /boot/grub/grub.cfg` 重新生成了 `grub.cfg`。

### SYSTEM-BOOT
`/boot/loader/entries/arch.conf`到此路径的`arch.conf`，“options root=”添加到尾端.
```
options root=UUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx rw acpi_enforce_resources=lax i915.enable_dc=0
```
然后`# bootctl update`更新引导列表，最后重启系统。

## Mark
lamargo 和 davze 在 Arch Linux 论坛上测试过的答案：[archlinux.org](https://bbs.archlinux.org/viewtopic.php?pid=1902330#p1902330)。


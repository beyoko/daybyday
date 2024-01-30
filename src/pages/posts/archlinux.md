# install

- `cfdisk /dev/sda` > `dos` > `new` > `+512M` > `new` > `+100%` > `write`
- `mkfs.ext4 /dev/sda1` && `mkfs.ext4 /dev/sda2`
- `mkdir  /mnt/boot`
- `mount /dev/sda1 /mnt/boot`
- `mount /dev/sda2 /mnt`
- `pacstrap /mnt base linux linux-firmware vim`
- `genfstab -U /mnt >> /mnt/etc/fstab`
- `arch-chroot /mnt `

- `ln -sf /usr/share/zoneinfo/Singapore /etc/localtime` && `hwclock --systohc`

- `passwd` `useradd -m -G wheel -s /bin/bash { user }` `passwd user`

- `pacman -S sudo`
- `pacman -S grub ` for virtualbox

- `grub-mkconfig -o /boot/grub/grub.cfg`

- `systemctl enable systemd-networkd`

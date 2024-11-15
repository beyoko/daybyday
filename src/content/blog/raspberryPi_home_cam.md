---
title: 'Raspberry Pi home cam setup'
pubDate: '09/30/2024'
draft: false
tags:
  - 'Learn'
description: '网上有无数树莓派运动监测的教程，但是可能年代久远，多多少少都存在一些问题。'
---

## 需求
  放在阳台门前的顶部，无人在家时才开机。如果有人闯入，在窗户门有物体移动时录像，房门关闭后停止录像。
  数据直接SMB传到NAS上时，NAS独立用一个SSD用来保存录像。


## 工具
-  树莓派
-  CSI接口摄像头

## 流程
### 启动摄像头
```
raspi-config     # 选择“Interfacing Options”,找到县相关“Camera”的那行，开启并保存退出.
```
如果没有“Camera”相关字样，检查摄像头有没有插好。 
#### CSI接口的摄像头
- 排线蓝色那端朝向以太网接口。
- 确定要插到底。
- 黑色挡板要卡紧。
- 一定要在关机断电的状态下进行插拔。

### Motion套件
用C语言编写，用来监控摄像头视频信号，能够检测画面的运动变化。
Cli工具，仅限HTTP接口进行配置。
可以输出文件有：
- JPG
- PPM
- 视频:mpeg4, msmpeg4, swf, flv, ffv1, mov, mp4, mkv, hevc (例子:     `ffmpeg_video_codec mp4`)
#### 安装
```
sudo apt install motion -y     
```

#### 开机启动
```
vim /etc/default/motion
```
将no改为yes

#### 配置
修改配置文档`/etc/motion/motion.conf`
```
daemon on     # 后台进程驻留
width 1920
height 1080     # 分辨率
framerate 100     # 最大采集帧率
netcam_keepalive on     # 使用 HTTP/1.1
threshold_tune on     # 自动调低运动监测帧率阈值
locate_motion_mode on     # 运动物体框出
text_double on     # 右下角时间显示字体增大
ipv6_enabled on     # 允许 IPv6
stream_maxrate 100     # 最大录制帧率
stream_localhost off     # 开启远程监控
stream_auth_method 1     # 监控基础加密（这里注意，如果改成 2 会出错，建议 1 或 0）
stream_authentication username:password     # 监控登陆的用户名和密码
```

#### 权限提权
  当第二次启动时出现文件权限错误时,将这两个文件的权限进行修改:
```
chmod 700 /var/run/motion/motion.pid     # 修改 motion.pid 文件权限
chmod 700 /var/log/motion/motion.log     # 修改 motion.log 文件权限

> 录制的视频会以时间作为文件名，以 mkv 文件格式保存在 /var/lib/motion 文件夹中。
```

#### 访问摄像头
进入motion的配置文件`/etc/motion/motion.conf`，找到`stream_localhost`，设定为“off”。

在浏览器打开链接 `树莓派IP:8081` .

> 如果账户和密码正确却不断弹出账户和密码框，进入`/etc/motion/motion.conf`找到`stream_auth_method`设定为“1”。






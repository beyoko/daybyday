---
title: 'Mise：开发环境的瑞士军刀'
pubDate: '03/22/2025'
draft: false
tags:
  - 'Mise'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'
heroImageAlt: 'build fish'
---

### Prune 

- `mise prune` 命令的功能是识别并删除任何不再被任何 mise 配置文件（全局或本地）引用的已安装工具版本.
- `mise prune` 命令提供了一个 `--dry-run` 标志，允许用户查看将要删除的内容而无需实际执行删除操作.

- `mise cache prune`该命令可用于删除 mise 缓存目录中的陈旧文件（Linux 上为 ~/.cache/mise，macOS 上为 ~/Library/Caches/mise）。虽然与卸载特定版本没有直接关系，但清除缓存有时可以解决意外问题。

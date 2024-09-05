---
title: '重构Astro4.0'
pubDate: '07/01/2024'
draft: true
tags:
  - 'Astro'
description: 'Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro.'
heroImage: '/public/cat02.png'
heroImageAlt: 'build fish'
---

# 从2.0 更新到4.0 的记录

## 错误搜集

- `Category`
- `<Image />` 无法显示

### <Image />

从原来直接使用`Astro.glob()`进行导入,到现在将Markdown文档归纳到`/Content/post/`文件夹中, 在`/Content`添加了一个`const.ts`配置文档.

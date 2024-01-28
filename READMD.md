# need 2 know

- body width size: `{ /src/components/Content }: "max-w-5wl"`was "max-w-3xl"(look like phone size)

# need 2 do

- 27/01/2024: when i 'running down' d page, header will be hidden.
- 25/01/2024: `Header.astro` tags link highlight && Album Gallery
- 01/23/2024: `Layouts/Posts.astro`-Line 72, mouse hightlight show copy icon
- (01/17/2024): tags 上检索的卡片展示预览 markdown 中内容的前 30%
- explain all code by gpt(to know what mean).
- (16/01/2024): make a navigation bar about markdown title in the bottom of page
- (15/01/2024): 1. page change theme "shining". 2. theme menu dark mode bakcground color 3. auto logo change to $theme(dark or light)
- (02/09/2024): input all file **Types**
- (09/01/2024): 底部添加非全屏内容**导航栏**
- (01/02/2024): when header title more then screen, left right touch bar can move the title
- - Markdown 主题导航栏 -----> look for [astro](https://github.com/withastro/docs/blob/main/src/components/UIString.astro)
- - connect markdown Footnotes on `<hr>`(look like tags)
- create a TitleBar(Markdown) use package:['smooth-scroll', 'scrollama'] they same look like well for react.
  - package: ["remark-directive", "remark"]
- create a buttom with for back to top
  - 我需要这个这个 Backtotop 的 Button 和 Main 页面块随着页面的宽度拉伸保持 5 的距离，自动适应 [O]
  - 将 BackToTop 的 Button 设置为显示当文档名字，当移动到该按钮上时，显示 BackTotop 以及返回主页
- add search engain
  - add package: ["@docsearch/react", "fast-glob"]
  - [demo](https://github.com/withastro/docs/blob/main/src/components/Header/Header.astro)
- Header: 当打开支线目录时，Header 的相应 Tags 切换成选中时的渲染状态。
- Search-Bar: 用 Typescript 编写，项目所用的库有 Nextjs，React，Tailwinds
  创建一个 Search Bar 来用搜索 Markdown 文件，其检索范围为文件名字 - 已 Search-Bar.astro 为轴点，将 Key 替换为 TagsLink 中的 Key 以此类推
  - [Mini-Search](https://github.com/lucaong/minisearch) package
    `<li key={post.title} className="text-blue-500">           `
  - [demo](https://github.com/one-aalam/astro-ink/blob/main/src/components/Search.svelte)

# backup

## Header.astro

header style change
`<header class="fixed w-full p-2 z-20 backdrop-blur-sm">`

# slug days (done)

only header code is working

> chosse [id] or [slug] : [id] is work with the craftdog button link tabs to all markdown

# header (done)

when page move to button, header bar still here, but hide 50%

# @astrojs/rss fix `/posts/*md`

# tailwind \*.md css style (done)

## may change `interface` contrl or find more version 2 get 'tabs'

hover:bg-gray-50 hover:dark:bg-gray-950 hover:ring-2 focus:ring-2 hover:ring-zinc-800 hover:dark:ring-zinc-200 hover:ring-offset-2 transition-all

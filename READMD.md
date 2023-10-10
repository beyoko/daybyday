# need 2 do

- connect markdown Footnotes on `<hr>`(look like tags)
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
  创建一个 Search Bar 来用搜索 Markdown 文件，其检索范围为文件名字

# backup

## Header.astro

header style change
`<header class="fixed w-full p-2 z-20 backdrop-blur-sm">`

# slug days

only header code is working

> chosse [id] or [slug] : [id] is work with the craftdog button link tabs to all markdown

# header

when page move to button, header bar still here, but hide 50%

# @astrojs/rss fix `/posts/*md`

# tailwind \*.md css style (done)

## tailwind puligins edit stlye

### add default css

### add chart.js to show jque

# tabs output error ['./src/pages/cat.../[tab].astro']

## [id].astro < find < allTags is not defined > Header.astro

## may change `interface` contrl or find more version 2 get 'tabs'

hover:bg-gray-50 hover:dark:bg-gray-950 hover:ring-2 focus:ring-2 hover:ring-zinc-800 hover:dark:ring-zinc-200 hover:ring-offset-2 transition-all

# DropdownMenu click menu icon change

`DropdownMenu.tsx` :39

```typescript
<NewIcon>{tag}</NewIcon>
```

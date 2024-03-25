# need 2 know

- body width size: `{ /src/components/Content }: "max-w-5wl"`was "max-w-3xl"(look like phone size)

# need 2 do

## add Toc function

- 13/03/2024: check Toc look like `TagsLink.tsx`.
- 12/03/2024: check `@/components/Toc.astro & TocCard.astro` `@/layouts/TocLayout.astro`

## day

- 03/23/2024: add image with link. showing up underline on image bottom
- 03/22/2024: title on image. bagpack `index.astro` `<ul>`info
- 20/03/2024: edit `post.data.*` to image(inside). look like "markdowner" blog
- 15/03/2024: recheck code, delete long
- 14/03/2024: check types and only in file. (delete `consts.ts` interface.)
- 13/03/2024: add Tags function on `Post.astro`
- 03/04/2024: rebuild `/Layouts/` & `/pages/`
- 02/03/2024: `yarn add rehype-autolink-headings rehype-toc`
- 01/03/2024: check `/layout/Post.astro` or `/components/Link.astro` or `/components/Toc.astro`
- 27/02/2024: when you need to hide `Header.astro`, try `BackToTopButton.tsx`.
- 27/02/2024: TOC package translation - `rehype-slug rehype-toc`. [reading](https://raahii.me/posts/add-toc-to-astro-blog/)
- 18/02/2024: add TOC to `Post.astro` in bottom. by [Astro-Toc](https://dev.to/dailydevtips1/adding-a-toc-in-astro-4keh?comments_sort=top)
- 18/02/2024: look it `TableToContents.astro`[TableToContents.astro](https://gist.github.com/maciejpedzich/000da5c6b3a91290d49a91c9fe940ca3)
- 02/07/2024: comparison def version(craftzdog)
- 06/02/2024: 1. change `ThemeToggleMenu.tsx` to `ThemeToggleButton`. 2. why phone mode not effice
- 05/02/2024: works `memo.astro` tags stone
- 30/01/2024: check this page to learn Astro [link](https://docs.astro.build/en/guides/content-collections/).
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

## rebuild

- 20/03/2024: fix `post.formatter.title/pubDate` >> `post.data.title/pubDate` || `const allPosts = await getCollection('post')`
- 19/03/2024: look it that full info for rebuild [rebuild](https://docs.astro.build/zh-cn/guides/content-collections/) and ['pages/posts > content/posts'](https://github.com/withastro/blog-tutorial-demo)
- 03/18/2024: edit `CategoryLayout.astro && [id].astro` look like `PostLayout.astro && [...slug.astro]`
- 18/03/2024: rebuild `BaseLayout.astro` code
- 16/03/2024: step to `@/content/` when click markdown file error: "content config failed to load.", i added `config.ts` in content folder. but still output this error.
- 11/03/2024: `Toc.astro` and `[...slug].astro` add to `Post.astro`
- 11/03/2024: `Toc.astro` and `[...slug].astro` add to `Post.astro`
- 03/07/2024: 1. add Tags function to `Post.astro` when i click >> Cat 2. edit `Post.astro` && `<MarkdownLayout>`
- 06/03/2024: `google*.astro` && `<div>Ad</div>` 是广告栏. Toc 位置在`[...slug].astro`, 重点查阅！
- 05/03/2024: learn jp version, like def version
- 04/03/2024: `error Cannot find module '@lib/utils/dateSortDesc' imported from '/home/oho/gt/test/daybyday/src/lib/post.ts'`

## Table Of Contents

- [demo1](https://gist.github.com/maciejpedzich/000da5c6b3a91290d49a91c9fe940ca3)
- [demo2](https://medium.com/@rezahedi/how-to-build-table-of-contents-in-astro-and-sectionize-the-markdown-content-78bee84e6a7f)

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

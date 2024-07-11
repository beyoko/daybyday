# day

- 11/07/2024: add new page `Blog/index` `BlogYearLayout`. function: categories year page.
- 10/07/2024: des the `Header.astro`.
- 09/07/2024: UI change. missing `index.astro` `<Image />`
- 08/07/2024: 1. when `hover` CIC, `MarkdownHeader` hide. 2. on moblie, hide Markdown header Msg. 3. Change `PostLayout` Css look like [antfu](https://antfu.me). 4. move "Markdown Post" tags to `Header` 5. check `Postlayout` "hightlight" HTML code to change Css.
- 06/07/2024: create a h line for `MarkdownHeader` title and button when hover.
- 04/07/2024: change `MarkdownHeader` UI. (find the demo)
- 02/07/2024: check new `BackToTopButton.tsx`. click the `MarkdownHeader`
- 01/07/2024: edit `MarkdownHeader`. use 'Line' to connect 'TOC' and 'BacktoTopButton'. why has double UI.
- 29/06/2024: when the page move to top, then menu will back to 'first look' `MarkdownHeader.tsx => (onClick={scrollToTop})` .
- 27/06/2024: `MarkdownHeader.tsx` Menu highlight `{currentText}` 
- 25/06/2024: check 'postlayout' tags, sort the line.
- 24/06/2024: add privacy mode from `egashira.dev`
- 12/06/2024: add `getReadingTime` function. but still not working.
- 08/06/2024: when page top, only show heading title(not heading msg), hide `BacktoTopButton`
- 05/06/2024: create a function: "Highlight Markdown page `<a/>` && opacity the other thinks". edit `MarkdownHeader` css, make some "muji".
- 03/06/2024: dismantle `BackToButton` & `MarkdownHeader`. `MarkdownHeader` use `@headlessui/react`: check `@/lib/HeadingMenu`
- 01/06/2024: mix `CurrentHeading` & `BacktoTopButton` & `TOC` to `MarkdownHeader`.  => import '@headlessui/react'
- 29/05/2024: mix `CurrentHeading` and `BacktoTopButton`, and cut `BacktoTopButton` code `window.scrollY`...
- 28/05/2024: move `CurrentHeading` to Top Bar - Center.
- 27/05/2024: conform `CurrentHeading` and `BacktoTopButton` ==>> `MarkdownHeader`
- 24/05/2024: try to make on `<...slug.astro>` to check "有内容时显示,无内容时不显示"
- 18/05/2024: check `slug.astro`: `<CurrentHeading>` 有内容时显示,无内容时不显示
- 17/05/2024: add a bottom bar. this bar display Heading N Toc.
- 05/15/2024: move `*.tsx` to `@/lib/` to manager.
- 14/05/2024: update TOC
- 29/04/2024: `Postlayout.astro` fix markdown style.
- 28/04/2024: need 2 fix 'TimeDate.astro' problem. change `Header.astro` home icon "border" to "- - - - -". change `Categories.astro` function: when click d button, look like `DropdownMenu.tsx`: find `@headlessui/react'` change the `{Menu}`.
- 27/04/2024: move `TOC.astro` to page bottom, and create a "Header" bar to connect the toc link.
- 26/04/2024: Toc problem maybe is come from `const { headings } = await post.render()`.
- 25/04/2024: move Toc in `PostLayout.astro`, need setup `{...Astro.props}` on `[...slug].astro`, but when i move to `Header.astro`, still error `render()`
- 24/04/2024: make Toc to a Menu
- 23/04/2024: 'imageZoomIn' && 'Toc make it look like `DropdownMenu.tsx`' 
- 22/04/2024: imageZoomIn: cant not click on mouse or click nothing happen.
- 19/04/2024: add Image ZoomIn function.
- 16/04/2024: CateCard new function: when mouse hover on the card, line 66~84 full the image. (use React: useState).
- 15/04/2024: Link Cards new function: opacity(move on the card, lift the card). !!!! but 66~84 width not match Image.
- 09/04/2024: something warn with `Cate...Layout.astro` Image style: `rounded-xl`  missing.
- 08/04/2024: [check this](https://github.com/ega4432/egashira.dev/blob/main/scripts/new-post.ts) `package.json` update `pritytown`
- 07/04/2024: maybe need stop now, running other project.
- 02/04/2024: still realtime toc problem, maybe i can looking at `[id].astro` && `Cat...Layout.astro`.
- 01/04/2024: follow and show the headings string in `Header.astro`. maybe look like `Location.astro`, look at `[...slug].astro` line 20, filter headings.
- 28/03/2024: fix `formatterdate` && `tags` problem
- 28/03/2024: fix `Categories.astro` problem.
- 27/03/2024: rebuild `Categories` >> `tags`[tags](https://docs.astro.build/zh-cn/tutorial/5-astro-api/2/)
- 26/03/2024: find way to enable `overflow-hidden`.
- 25/03/2024: add `PostListItem.astro` find way to enable `overflow-hidden`.
- 23/03/2024: add image with link. showing up underline on image bottom
- 22/03/2024: title on image. bagpack `index.astro` `<ul>`info
- 20/03/2024: edit `post.data.*` to image(inside). look like "markdowner" blog
- 15/03/2024: recheck code, delete long
- 14/03/2024: check types and only in file. (delete `consts.ts` interface.)
- 13/03/2024: add Tags function on `Post.astro`
- 04/03/2024: rebuild `/Layouts/` & `/pages/`
- 02/03/2024: `yarn add rehype-autolink-headings rehype-toc`
- 01/03/2024: check `/layout/Post.astro` or `/components/Link.astro` or `/components/Toc.astro`
- 27/02/2024: when you need to hide `Header.astro`, try `BackToTopButton.tsx`.
- 27/02/2024: TOC package translation - `rehype-slug rehype-toc`. [reading](https://raahii.me/posts/add-toc-to-astro-blog/)
- 18/02/2024: add TOC to `Post.astro` in bottom. by [Astro-Toc](https://dev.to/dailydevtips1/adding-a-toc-in-astro-4keh?comments_sort=top)
- 18/02/2024: look it `TableToContents.astro`[TableToContents.astro](https://gist.github.com/maciejpedzich/000da5c6b3a91290d49a91c9fe940ca3)
- 07/02/2024: comparison def version(craftzdog)
- 06/02/2024: 1. change `ThemeToggleMenu.tsx` to `ThemeToggleButton`. 2. why phone mode not effice
- 05/02/2024: works `memo.astro` tags stone
- 30/01/2024: check this page to learn Astro [link](https://docs.astro.build/en/guides/content-collections/).
- 27/01/2024: when i 'running down' d page, header will be hidden.
- 25/01/2024: `Header.astro` tags link highlight && Album Gallery
- 23/01/2024: `Layouts/Posts.astro`-Line 72, mouse hightlight show copy icon
- 17/01/2024: tags 上检索的卡片展示预览 markdown 中内容的前 30%
- explain all code by gpt(to know what mean).
- 16/01/2024: make a navigation bar about markdown title in the bottom of page
- 15/01/2024: 1. page change theme "shining". 2. theme menu dark mode bakcground color 3. auto logo change to $theme(dark or light)
- 10/01/2024: input all file **Types**
- 09/01/2024: 底部添加非全屏内容**导航栏**
- 02/01/2024: when header title more then screen, left right touch bar can move the title

## need 2 do
- change project name to "day-to-day".
- Markdown 主题导航栏 -----> look for [astro](https://github.com/withastro/docs/blob/main/src/components/UIString.astro)
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
  创建一个 Search Bar 来用搜索 Markdown 文件，其检索范围为文件名字 - 已 Search-Bar.astro 为轴点，将 Key 替换为 TagsLink 中的 Key 以此类推
  - [Mini-Search](https://github.com/lucaong/minisearch) package
    `<li key={post.title} className="text-blue-500">           `
  - [demo](https://github.com/one-aalam/astro-ink/blob/main/src/components/Search.svelte)

## rebuild

- 30/03/2024: fix <Image /> version update, `@astro/image` remove: image base in astro.
- 28/03/2024: `<Image />` still not working
- 27/03/2024: version 2.0 >>> 4.0 and mark cn notes.
- 20/03/2024: fix `post.formatter.title/pubDate` >> `post.data.title/pubDate` || `const allPosts = await getCollection('post')`
- 19/03/2024: look it that full info for rebuild [rebuild](https://docs.astro.build/zh-cn/guides/content-collections/) and ['pages/posts > content/posts'](https://github.com/withastro/blog-tutorial-demo)
- 18/03/2024: edit `CategoryLayout.astro && [id].astro` look like `PostLayout.astro && [...slug.astro]`
- 18/03/2024: rebuild `BaseLayout.astro` code
- 16/03/2024: step to `@/content/` when click markdown file error: "content config failed to load.", i added `config.ts` in content folder. but still output this error.
- 11/03/2024: `Toc.astro` and `[...slug].astro` add to `Post.astro`
- 11/03/2024: `Toc.astro` and `[...slug].astro` add to `Post.astro`
- 07/03/2024: 1. add Tags function to `Post.astro` when i click >> Cat 2. edit `Post.astro` && `<MarkdownLayout>`
- 06/03/2024: `google*.astro` && `<div>Ad</div>` 是广告栏. Toc 位置在`[...slug].astro`, 重点查阅！
- 05/03/2024: learn jp version, like def version
- 04/03/2024: `error Cannot find module '@lib/utils/dateSortDesc' imported from '/home/oho/gt/test/daybyday/src/lib/post.ts'`

## Image: ZoomIn

点击图片后，图片移动到页面居中位置，图片之外的位置透明50%背景黑。当再点击图片时，图片将进一步放大。再次点击已经放大后的图片将回到第一级的放大（居中位置，其余透明黑背景）。点击透明黑背景将回到页面原来状态的样子。

使用Typescript来实现这个需求：
“处理函数可以通过操作组件的状态或触发其他操作来实现点击后放大的效果，例如显示一个模态框或切换图像的尺寸。”

将Ts在Astro上调用:

```Astro
<AstroImage
  onClick={}
/>

```

- check ```map > (id, alt)```

## add Toc function

- 29/05/2024: translted `TOC.astro` to `.tsx`, maybe we can code look like `CurrentHeading.tsx`
- 25/05/2024: add ("- /  -/    -") title level model
- 14/05/2024: 1. hightlight Heading 2. current heading
- 11/05/2024: [new demo](https://github.com/withastro/docs/blob/882e0b0a9d16d1c822cb8c230a62a4bfcd308605/src/util/generateToc.ts)
- 10/05/2024: about headings h1~h6, check [this](https://docs.astro.build/zh-cn/guides/markdown-content/), title: [标题 ID 和插件]
- 09/05/2024: add heading level. h1 = "-", h2 = "  -", h3 = "    -"
- 27/04/2024: create a bar to use `TOC.astro`, show the page with top title msg, and this is a button, when click it, show up all TOC title msg. when move mouse to bottom, the bar is show up. when live the bar, bar is hidden.
- 26/04/2024: add TOC to `Header.astro`, look it `PostLayout.astro` line 35~43
- 25/04/2024: add Toc to `Header.astro`, need 2 fix `error: render()`
- 24/04/2024: look the GemiPro1.5 in Poe code. it look like great, but still fix it.
- 23/04/2024: look like `DropdownMent.tsx` side by `BackToTopButtom.tsx`
- 13/04/2024: add `heading.text` to `Header.astro`. when click the `heading.text`, link up to `heading.slug`
- 10/04/2024: 显示markdown内容标题时，有一个层级的效果。比如：标题H2比H1的多两个空格作为显示，标题H3则比上一级的H2多两个空格，以此类推。
- 03/04/2024: check `/test/DavidRojoM` maybe it can fix "error :`ERROR] Cannot read properties of undefined (reading 'render') `"
- 01/04/2024: when i add toc to other file(not `[...slug].astro`), error :`ERROR] Cannot read properties of undefined (reading 'render') `
- 30/03/2024: move Toc to `Header.astro` 2. demo is not `"rehype-toc"`, think about that. why s here.
- 13/03/2024: check Toc look like `TagsLink.tsx`.
- 12/03/2024: check `@/components/Toc.astro & TocCard.astro` `@/layouts/TocLayout.astro`


## Table Of Contents

- [demo1](https://gist.github.com/maciejpedzich/000da5c6b3a91290d49a91c9fe940ca3)
- [demo2](https://medium.com/@rezahedi/how-to-build-table-of-contents-in-astro-and-sectionize-the-markdown-content-78bee84e6a7f)
- [demo3](https://github.com/ega4432/egashira.dev)

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

## about Link Cards new function: opacity
style code:
```Astro
    <section>
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          latestPosts.map((post) => (
            <Link
              className="text-black hover:text-black dark:text-white dark:hover:text-white bg-white dark:bg-zinc-950 rounded-xl"
              href={`/post/${post.slug}/`}
            >
              <li class="relative p-4 text-center opacity-50 hover:opacity-100 bg-white dark:bg-black border-2 border-black dark:border-white rounded-xl">
                <h4 class="mt-3 text-xl font-bold">{post.data.title}</h4>
                <div>{post.data.description}</div>
                <p>
                  <FormattedDate date={post.data.pubDate} />
                </p>
              </li>
            </Link>
          ))
        }
      </ul>
    </section>
```

when opacity "<li>" you need to setup background in "<li>" father.

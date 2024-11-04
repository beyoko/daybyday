## need 2 do
- fix `BaseLayout` title error.
- 把`<Header/>`的`{tags}`移到`Postlist.astro`的`<Years/>`下方,填满可视页面.
- `{category}` when on `CategoryLayout.astro` hightlight `Header.astro` string `{tags}`
- fix `Years.astro` phone degin.
- `Years.astro` link to `YearMore`. && 'Years.astro' back button.
- rebuild `CategoryLayout.astro`.
- re-back `BlogLink` add to seris.
- rebuild `PostList`. first page is all Post. hold `Header` Tags.
- add `Tags` page, add `TimeLine` page. `Home` is About me. to `Header`.
- `DropdownMenu` hover text color look like `MarkdownMenu`.
- every year more 5 list. click "more" to see all list.
- find the way fix `CategoryLayout.astro` link up lazy problem.
- short `.tsx` file. back to astro style. make it fast.
- new function: `PostLayout.astro` connet local `.md`, look like IOS, windows up.
- change <a> `href` = `{post.url}` look like "craftdog", make it fast. is to low. 
- code fast and clean. del the "opacity". all clear it.
- fix 'imageHero' cant output.
- `BlogLink` phone version.
- add `imageGally`.
- add new Website to show Project. (fix `/content/project` output markdown style error)
- fix `BlogLinkList`.
- upgrade `<section>` style like `max-2xl p-6`. reading feel good.
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

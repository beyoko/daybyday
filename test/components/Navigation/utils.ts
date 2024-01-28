/// <reference types="astro/astro-jsx" />
import type { MarkdownInstance, MDXInstance } from 'astro'
import type { HTMLAttributes } from 'astro/types'
import { DepGraph } from 'dependency-graph'
import type * as Schemas from 'schema-dts'

export type RequireSome<T, P extends keyof T> = Omit<T, P> &
  Required<Pick<T, P>>
export type Optional<T, P extends keyof T> = Omit<T, P> & Partial<Pick<T, P>>

// WebPage 接口：定义了一个 WebPage 接口，
// 继承了 Schemas.WebPage，并增加了 title 和 navigation 属性，
// 其中 navigation 包含了用于页面导航的信息。
export interface WebPage extends Optional<Schemas.WebPage, 'name'> {
  title: string
  navigation?: {
    order: number
    permalink?: string
    title?: string
  }
}

export interface Entry {
  title: string
  excerpt?: string
  url: string
  order: number
  parentKey?: string
  children?: Entry[]
}

// 是一个联合类型，可以是 MarkdownInstance 或 MDXInstance，
// 表示页面的不同类型
export type Page =
  | MarkdownInstance<Optional<WebPage, '@type'>>
  | MDXInstance<Optional<WebPage, '@type'>>

// 根据页面路径查找对应的页面，主要用于获取指定路径的页面
export function fetchPage(pathname: string) {
  const page = fetchPages().find(
    ({ frontmatter, url }) =>
      (frontmatter.navigation?.permalink || frontmatter.url || url) === pathname
  )

  if (!page) {
    return undefined
  }

  delete page.frontmatter.navigation

  return page
}

// 将文件路径转换为页面的 URL
function fileToUrl(file: string) {
  const start = file.indexOf('/src/pages') + '/src/pages'.length
  const end = file.lastIndexOf('.')
  const path = file
    .substring(start, end)
    .replace(/\/index$/, '')
    .replace(/^\//, '')

  return path || '/'
}

// 通过 import.meta.glob 来获取匹配指定模式的页面，
// 然后对结果进行处理，包括转换 frontmatter，设置默认的 @type，
// 以及生成页面的 URL。
export function fetchPages() {
  const results = import.meta.glob<Page>(
    [
      '/src/pages/posts/*.md',
      '/src/pages/posts/*.mdx',
      '/src/pages/posts/*.astro'
    ],
    { eager: true }
  )
  return Object.values<Page>(results).map(page => ({
    ...page,
    frontmatter: {
      '@type': 'WebPage',
      ...page.frontmatter
    },
    url: page.url || fileToUrl(page.file)
  })) as Page[]
}

// 根据 URL 获取父页面的 key
function getParentKey(url: string) {
  const segments = url.split('/')

  if (segments.length === 1) return undefined
  return segments.slice(0, segments.length - 1).join('/')
}

// 遍历页面节点，找到包含导航信息的页面条目，返回一个排序后的 Entry 数组
export function findNavigationEntries(nodes: Page[] = fetchPages(), key = '') {
  let pages: Entry[] = []

  for (const entry of nodes) {
    if (entry.frontmatter.navigation) {
      const nav = entry.frontmatter.navigation
      const url =
        nav?.permalink || entry.frontmatter.url?.toString() || entry.url
      if (!url) {
        // TODO: console warning?
        continue
      }
      const parent = getParentKey(url)
      if ((!key && !parent) || parent === key) {
        pages.push({
          ...nav,
          title: entry.frontmatter.title.toString(),
          excerpt: entry.frontmatter.headline?.toString(),
          url
        })
      }
    }
  }

  return pages
    .sort((a, b) => a.order - b.order)
    .map(entry => {
      if (entry.url) {
        entry.children = findNavigationEntries(nodes, entry.url)
      }

      return entry
    })
}

// 递归查找页面的依赖关系，构建页面依赖图
function findDependencies(
  pages: Entry[],
  depGraph: DepGraph<Entry>,
  parentKey?: string
) {
  for (let page of pages) {
    depGraph.addNode(page.url, page)
    if (parentKey) {
      depGraph.addDependency(page.url, parentKey)
    }
    if (page.children) {
      findDependencies(page.children, depGraph, page.url)
    }
  }
}

// 获取页面依赖图
function getDependencyGraph(nodes: Page[] = []) {
  let pages = findNavigationEntries(nodes)
  let graph = new DepGraph<Entry>()
  findDependencies(pages, graph)
  return graph
}

// 根据给定的激活页面的 key，找到其在导航中的面包屑条目
export function findBreadcrumbEntries(
  activeKey: string,
  options: { includeSelf: boolean } = { includeSelf: true }
) {
  let graph = getDependencyGraph(fetchPages())
  if (!graph.hasNode(activeKey)) {
    // Fail gracefully if the key isn't in the graph
    return []
  }
  let deps = graph.dependenciesOf(activeKey)
  if (options.includeSelf) {
    deps.push(activeKey)
  }

  return activeKey
    ? deps.map((key: void) => {
        let data = Object.assign({}, graph.getNodeData(key))
        delete data.children
        return data
      })
    : []
}

// 找到激活页面在导航中的前一个和后一个页面。
export function findPaginationEntries(activeKey: string): {
  next?: Entry
  prev?: Entry
} {
  const entries = findNavigationEntries(fetchPages())

  function walk(node: Entry): Entry[] {
    return node.children?.length
      ? [node, ...node.children.map(walk).flat()]
      : [node]
  }

  const flatEntries = entries.map(walk).flat()

  const index = flatEntries.findIndex(({ url }) => url === activeKey)

  const next =
    index <= flatEntries.length - 1 ? flatEntries[index + 1] : undefined
  const prev = index > 0 ? flatEntries[index - 1] : undefined

  return { next, prev }
}

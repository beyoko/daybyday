---
title: 'Q&A GPT'
description: 'Header'
layout: '../../layouts/Post.astro'
pubDate: 'jul 20 2023'
heroImage: /public/fish.png
tags:
  - Question
---

```typescript
// DropdownMenu.tsx
import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { IoMenu } from 'react-icons/io5/index.js'
import DropdownMenuItem from './DropdownMenuItem'

interface Props {
  tags: string[]
}

export default function DropdownMenu({ tags }: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm hover:bg-gray-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
          aria-label="menu"
        >
          <IoMenu className="h-5 w-5" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-zinc-400 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none divide-zinc-400 dark:divide-zinc-700">
          <div className="py-1">
            {tags.map(tag => {
              return (
                <DropdownMenuItem
                  key={tag}
                  href={`/categories/${tag.toLowerCase()}`}
                >
                  {tag}
                </DropdownMenuItem>
              )
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
} // DropdownMenu.tsx
```

```
// TagsLink.tsx
import React from 'react'

interface Props {
tags: string[]
}

export default function TagsLink({ tags }: Props) {
return tags.map(tag => {
return (
<a key={tag} href={`/categories/${tag.toLowerCase()}`}>
{tag}
</a>
)
})
}
```

```Header.astro
---
import ThemeToggleButton from './ThemeToggleButton';
import TagsLink from '../components/TagsLink';

const allPosts = await Astro.glob('../pages/posts/*.md')
const allTags = new Set<string>()
allPosts.map(post => {
    post.frontmatter.tags &&
    post.frontmatter.tags.map((tag: string) => allTags.add(tag))
  })

---

<header class="fixed w-full p-2 z-20">
  <div class="mx-auto max-w-3xl">
      <nav class="flex items-center justify-between gap-3 text-base ">
        <a href="/" class="group">
          <h2 class="font-semibold tracking-tighter p-2 font-mplus text-lg">
            CIC
          </h2>
        </a>
        <ThemeToggleButton client:visible />
        <div class="flex">
          <TagsLink client:visible tags={Array.from(allTags)} />
        </div>
      </nav>
  </div>
</header>

```

when i run in pc, Header by TagsLink.tsx. when in phone, Header by DropdownMenu

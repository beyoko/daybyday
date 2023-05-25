---
title: 'first note about nextjs'
description: 'fix nextjs project'
layout: '../../layouts/Post.astro'
pubDate: '05/22/2023'
tags:
  - Nextjs
---

# new "one" home page

## backgournd -> threejs -> DNA(find in youtu)

one font center on d page

> `import { motion } from 'framer-motion'` maybe... can use this

```css
body {
  animation: fade 3s ease;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 500px) {
  #name {
    font-size: 13vw;
  }

  #info {
    font-size: 5.3vw;
  }
}
```

# background-image

content (props) in `@/components/layout.js`

```css
body {
  background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><circle cx="2" cy="2" r="0.5" fill="black"/></svg>');
  margin: 0;
}

dark: body {
  background-color: black;
  background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><circle cx="2" cy="2" r="0.5" fill="white" fill-opacity="0.5"/></svg>');
  color: white;
}
    }
```

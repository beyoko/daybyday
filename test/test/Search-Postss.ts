const fs = require('fs')
const path = require('path')
const util = require('util')
const marked = require('marked')

const readdir = util.promisify(fs.readdir)
const readFile = util.promisify(fs.readFile)

const postsDirectory = path.join(process.cwd(), 'posts') // 你的 Markdown 文件目录

async function searchPosts(query) {
  const allPostFiles = await readdir(postsDirectory)
  const results = []

  for (const postFile of allPostFiles) {
    const filePath = path.join(postsDirectory, postFile)
    const fileContent = await readFile(filePath, 'utf8')

    // 解析 Markdown 文件，例如提取标题和正文
    const { title, content } = parseMarkdown(fileContent)

    if (
      title.toLowerCase().includes(query.toLowerCase()) ||
      content.toLowerCase().includes(query.toLowerCase())
    ) {
      results.push({
        title,
        content,
        url: `/pages/posts/${postFile.replace(/\.md$/, '')}`
      })
    }
  }

  return results
}

function parseMarkdown(content) {
  const lines = content.split('\n')
  const title = lines[0].replace(/^#\s+/g, '')
  const content = lines.slice(1).join('\n')

  return { title, content }
}

module.exports = { searchPosts }

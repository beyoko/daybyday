import { useState } from 'react'
import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { getCollection } from 'astro:content'

const YearPostMini = () => {
  const [postsByYear, setPostsByYear] = useState({})

  // Fetch posts and organize by year
  useState(() => {
    const fetchPosts = async () => {
      const allPosts = await getCollection('post')
      const sortedPosts = allPosts.reduce((acc, post) => {
        const year = new Date(post.data.pubDate).getFullYear()
        acc[year] = acc[year] || []
        acc[year].push(post)
        return acc
      }, {})

      // Sort years descending
      const sortedYears = Object.keys(sortedPosts).sort((a, b) => b - a)
      const sortedByYear = {}
      sortedYears.forEach((year) => {
        sortedByYear[year] = sortedPosts[year].sort(
          (a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate),
        )
      })

      setPostsByYear(sortedByYear)
    }

    fetchPosts()
  }, [])

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md">
        <ChevronDownIcon className="w-5 h-5" />
      </Menu.Button>

      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg">
        {Object.entries(postsByYear).map(([year, posts]) => (
          <div key={year} className="p-2">
            <div className="font-bold">{year}</div>
            <ul className="pl-4">
              {posts.map((post) => (
                <li key={post.slug} className="py-1">
                  {post.data.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Menu.Items>
    </Menu>
  )
}

export default YearPostMini

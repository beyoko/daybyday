import { ArrowUpIcon } from '@heroicons/react/24/solid'

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm bg-white dark:bg-zinc-950 md:hover:border-zinc-950 dark:md:hover:border-zinc-50  md:hover:bg-zinc-50 dark:md:hover:bg-zinc-950">
      <button onClick={scrollToTop}>
        <ArrowUpIcon className="h-4 w-4" />
      </button>
    </div>
  )
}

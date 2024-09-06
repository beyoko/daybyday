import { ui, defaultLang } from './ui'

export const useTranslations = (lang: keyof typeof ui = defaultLang) => {
  return function t(
    key: keyof (typeof ui)[typeof defaultLang],
    tags?: Record<string, string>,
  ) {
    const translation = ui[lang][key] || ui[defaultLang][key]

    // If the translation is not found, return the key
    if (!translation) return key

    // Replace the tags in the translation with the values passed, if any
    // example: t('components.themeSwitcher.toggleDarkMode', { darkMode: 'dark mode' })
    // where in the translation file we have: 'Toggle {darkMode}'
    return (ui[lang][key] || ui[defaultLang][key]).replace(
      /\{(\w+)\}/g,
      (_, match) => tags?.[match] || '',
    )
  }
}

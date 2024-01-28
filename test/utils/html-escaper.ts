/** Unescape HTML while catering for `&#x3C;` (`<`) and `'&#x26;'` (`&`), which the Astro compiler outputs. */
export function unescape(str: string) {
  return unEsc(str).replaceAll('&#x3C;', '<').replaceAll('&#x26;', '&')
}

const html = ((): {
  escape: (text: string) => string
  unescape: (text: string) => string
} => {
  'use strict'

  const { replace } = ''

  // escape
  const es = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g
  const ca = /[&<>'"]/g

  const esca = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }
  const pe = (m: string) => esca[m]

  const escape = (es: string) => replace.call(es, ca, pe)

  // unescape
  const unes = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"'
  }
  const cape = (m: string) => unes[m]

  const unescape = (un: string) => replace.call(un, es, cape)

  return {
    escape,
    unescape
  }
})()

// demo
const escaped = html.escape('<div>Hello, & World!</div>')
const unescaped = html.unescape('&lt;div&gt;Hello, &amp; World!&lt;/div&gt;')

console.log(escaped)
console.log(unescaped)

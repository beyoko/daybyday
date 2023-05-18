module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roto: ['Roboto', 'sans-serif', 'Helvetica', 'Arial']
      },
      typography: {
        DEFAULT: {
          css: {}
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        roto: ['Roboto', 'sans-serif', 'Helvetica', 'Arial'],
        nova: ["'proxima-soft'", 'Verdana', 'sans-serif'],
      },
      backgroundImage: {
        lightBgImg:
          'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><circle cx="2" cy="2" r="0.5" fill="black"/></svg>\')',
        darkBgImg:
          'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><circle cx="2" cy="2" r="0.5" fill="white" fill-opacity="0.5"/></svg>\')',
        ulBgImg:
          'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><circle cx="2" cy="2" r="2" fill="black"/></svg>\')',
        FourOFourBgImg:
          'url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4"><circle cx="2" cy="2" r="2" fill="red" fill-opacity="0.5"/></svg>\')',
      },
      typography: {
        DEFAULT: {
          css: {},
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

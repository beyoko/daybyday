export default {
  parser: '@typescript-eslint/parser',
  extends: ['plugin:astro/recommended'],
  overrides: [
    {
      files: ['*.astro'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      }
    }
  ]
}

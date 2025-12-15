module.exports = {
  plugins: {
    // ✅ Autoprefixer para compatibilidade entre navegadores
    autoprefixer: {},

    // ✅ PurgeCSS - Remove CSS não utilizado
    '@fullhuman/postcss-purgecss': {
      content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './lib/**/*.{js,ts,jsx,tsx}',
      ],
      // Classes que NUNCA devem ser removidas
      safelist: {
        standard: [
          'html',
          'body',
          'show',
          'active',
          'disabled',
          'hidden',
          'sr-only',
          /^(bg|text|border|shadow)-/,
          /^fa-/,
        ],
        deep: [/^(container|form|btn)/],
      },
      defaultExtractor: (content) => {
        // Extrai classes custom + Tailwind + BEM
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        const innerMatches = content.match(/[`'"][^`'"]*[`'"]/g) || [];
        return broadMatches.concat(innerMatches);
      },
      // Skip minify aqui (Next.js faz depois)
      only: ['./styles.css'],
    },

    // ✅ CSSNano - Minifica CSS
    cssnano: {
      preset: [
        'default',
        {
          // Preserve calc() expressions
          normalizeValues: false,
          discardComments: {
            removeAll: true,
          },
        },
      ],
    },
  },
};

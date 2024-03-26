const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    boxShadow: {
      none: 'var(--remota-theme-shadows-none)',
      xs: 'var(--remota-theme-shadows-xs)',
      sm: 'var(--remota-theme-shadows-sm)',
      md: 'var(--remota-theme-shadows-md)',
      lg: 'var(--remota-theme-shadows-lg)',
      xl: 'var(--remota-theme-shadows-xl)',
    },
    extend: {
      borderColor: {
        default: '#D7DBDF',
        secondary: '#DFE3E6',
      },
      backgroundColor: {
        default: '#FFFFFF',
        screen: '#FBFCFD',
        selected: '#e6e8eb',
        subtle: '#f8f9fa',
        hover: '#eceef0',
        element: '#ECEEF0',
      },
      colors: {
        default: '#11181C',
        secondary: '#687076',
      },
      height: {
        15: '3.75rem',
      },
      fontSize: {
        lg: [
          '18px',
          {
            lineHeight: 1.5,
          },
        ],
        base: [
          '16px',
          {
            lineHeight: 1.625,
            letterSpacing: '-0.011rem',
          },
        ],
        sm: [
          '15px',
          {
            lineHeight: 1.6,
            letterSpacing: '-0.009rem',
          },
        ],
        xs: [
          '14px',
          {
            lineHeight: 1.57,
            letterSpacing: '-0.006rem',
          },
        ],
        '2xs': [
          '13px',
          {
            lineHeight: 1.61,
            letterSpacing: '-0.003rem',
          },
        ],
        '3xs': [
          '12px',
          {
            lineHeight: 1.58,
          },
        ],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.slate.700'),
            hr: {
              borderColor: theme('colors.slate.100'),
              marginTop: '3em',
              marginBottom: '3em',
            },
            '.lead': {
              fontSize: '1.125em',
              lineHeight: 'calc(32 / 18)',
            },
            'h1, h2, h3': {
              letterSpacing: '-0.025em',
            },
            h2: {
              fontSize: '1.25em',
              fontWeight: '600',
              marginBottom: `1.25em`,
            },
            h3: {
              fontSize: '1.125em',
              marginTop: '2.4em',
              marginBottom: '1em',
              lineHeight: '1.4',
            },
            h4: {
              marginTop: '2.5em',
              marginBottom: '0.75em',
              fontSize: '1em',
              fontWeight: '600',
            },
            'h2 small, h3 small, h4 small': {
              fontFamily: theme('fontFamily.mono').join(', '),
              color: theme('colors.slate.500'),
              fontWeight: 500,
            },
            'h2 small': {
              fontSize: theme('fontSize.lg')[0],
              ...theme('fontSize.lg')[1],
            },
            'h3 small': {
              fontSize: theme('fontSize.base')[0],
              ...theme('fontSize.base')[1],
            },
            'h4 small': {
              fontSize: theme('fontSize.sm')[0],
              ...theme('fontSize.sm')[1],
            },
            'h2, h3, h4': {
              'scroll-margin-top': 'var(--scroll-mt)',
            },
            'h2 code, h3 code': {
              font: 'inherit',
            },
            ul: {
              listStyleType: 'none',
              paddingLeft: '1em',
              marginTop: '1em',
              marginBottom: '2em',
            },
            'ul > li': {
              position: 'relative',
              // paddingLeft: '0',
              paddingLeft: '0.5em',
              listStyleType: 'disc',
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
            '--tw-prose-bullets': theme('colors.slate.300'),
            a: {
              fontWeight: theme('fontWeight.semibold'),
              textDecoration: 'none',
              borderBottom: `1px solid ${theme('colors.sky.300')}`,
            },
            'a:hover': {
              borderBottomWidth: '2px',
            },
            'a code': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            strong: {
              color: theme('colors.slate.900'),
              fontWeight: theme('fontWeight.semibold'),
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            'strong code': {
              fontWeight: 650,
            },

            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            thead: {
              color: theme('colors.slate.700'),
              borderBottomColor: theme('colors.slate.200'),
            },
            'thead th': {
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.slate.100'),
            },
            'tbody tr:last-child': {
              borderBottomWidth: '1px',
            },
            'tbody code': {
              fontSize: theme('fontSize.xs')[0],
            },
            'figure figcaption': {
              textAlign: 'center',
              fontStyle: 'italic',
            },
            'figure > figcaption': {
              marginTop: `${12 / 14}em`,
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    plugin(({ addComponents, addVariant, matchUtilities, theme }) => {
      addVariant('hocus', ['&:hover', '&:focus-visible']);
      matchUtilities(
        { heading: (value) => value },
        { values: theme('heading') }
      );
      addComponents({
        '.icon-2xs': {
          height: theme('height.3'),
          width: theme('width.3'),
        },
        '.icon-xs': {
          // note(simek): figure out how to access `h-3.5` using path
          height: '0.875rem',
          width: '0.875rem',
        },
        '.icon-sm': {
          height: theme('height.4'),
          width: theme('width.4'),
        },
        '.icon-md': {
          height: theme('height.5'),
          width: theme('width.5'),
        },
        '.icon-lg': {
          height: theme('height.6'),
          width: theme('width.6'),
        },
        '.icon-xl': {
          height: theme('height.8'),
          width: theme('width.8'),
        },
        '.icon-2xl': {
          height: theme('height.10'),
          width: theme('width.10'),
        },
        '.break-words': { 'word-break': 'break-word' },
        '.pause-animation': { 'animation-play-state': 'paused' },
        '.transform-box': { 'transform-box': 'fill-box' },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.variant-numeric-normal': {
          'font-variant-numeric': 'normal',
        },
        '.variant-numeric-slashed': {
          'font-variant-numeric': 'slashed-zero',
        },
        '.variant-numeric-tubular': {
          'font-variant-numeric': 'tabular-nums',
        },
      });
    }),
    require('@tailwindcss/typography'),
  ],
};

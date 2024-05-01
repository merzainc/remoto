const defaultTheme = require('tailwindcss/defaultTheme');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  blocklist: ['[html:has(&)]:bg-blue-500'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '340px',
      sm: '420px',
      'sm-gutters': '468px',
      md: '740px',
      'md-gutters': '788px',
      lg: '960px',
      'lg-gutters': '1008px',
      xl: '1200px',
      'xl-gutters': '1248px',
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
    extend: {
      colors: {
        code: {
          highlight: 'rgb(125 211 252 / 0.1)',
        },
        default: '#11181C',
        secondary: '#687076',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      backgroundColor: {
        default: '#FFFFFF',
        screen: '#FBFCFD',
        selected: '#e6e8eb',
        subtle: '#f8f9fa',
        hover: '#eceef0',
        element: '#ECEEF0',
      },
      borderColor: {
        default: '#D7DBDF',
        secondary: '#DFE3E6',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: theme('colors.zinc.700'),
            hr: {
              borderColor: theme('colors.zinc.100'),
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
              color: theme('colors.zinc.500'),
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
            // 'ul > li::before': {
            //   content: '""',
            //   width: '0.75em',
            //   height: '0.125em',
            //   position: 'absolute',
            //   top: 'calc(0.875em - 0.0625em)',
            //   left: 0,
            //   borderRadius: '999px',
            //   backgroundColor: theme('colors.zinc.300'),
            // },
            '--tw-prose-bullets': theme('colors.zinc.300'),
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
              color: theme('colors.zinc.900'),
              fontWeight: theme('fontWeight.semibold'),
            },
            'a strong': {
              color: 'inherit',
              fontWeight: 'inherit',
            },
            kbd: {
              background: theme('colors.zinc.100'),
              borderWidth: '1px',
              borderColor: theme('colors.zinc.200'),
              padding: '0.125em 0.25em',
              color: theme('colors.zinc.700'),
              fontWeight: 500,
              fontSize: '0.875em',
              fontVariantLigatures: 'none',
              borderRadius: '4px',
              margin: '0 1px',
            },
            code: {
              fontWeight: 550,
              fontVariantLigatures: 'none',
            },
            'strong code': {
              fontWeight: 650,
            },
            pre: {
              color: theme('colorszince.50'),
              borderRadius: theme('borderRadius.xl'),
              padding: theme('padding.5'),
              boxShadow: theme('boxShadow.md'),
              display: 'flex',
              marginTop: `${20 / 14}em`,
              marginBottom: `${32 / 14}em`,
            },
            'p + pre': {
              marginTop: `${-4 / 14}em`,
            },
            'pre + pre': {
              marginTop: `${-16 / 14}em`,
            },
            'pre code': {
              flex: 'none',
              minWidth: '100%',
            },
            table: {
              fontSize: theme('fontSize.sm')[0],
              lineHeight: theme('fontSize.sm')[1].lineHeight,
            },
            thead: {
              color: theme('colors.zinc.700'),
              borderBottomColor: theme('colors.zinc.200'),
            },
            'thead th': {
              paddingTop: 0,
              fontWeight: theme('fontWeight.semibold'),
            },
            'tbody tr': {
              borderBottomColor: theme('colors.zinc.100'),
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
        dark: {
          css: {
            color: theme('colors.zinc.400'),
            '--tw-prose-lead': theme('colors.zinc.400'),
            'h2, h3, h4, thead th': {
              color: theme('colors.zinc.200'),
            },
            'h2 small, h3 small, h4 small': {
              color: theme('colors.zinc.400'),
            },
            kbd: {
              background: theme('colors.zinc.700'),
              borderColor: theme('colors.zinc.600'),
              color: theme('colors.zinc.200'),
            },
            code: {
              color: theme('colors.zinc.200'),
            },
            hr: {
              borderColor: theme('colors.zinc.200'),
              opacity: '0.05',
            },
            pre: {
              boxShadow: 'inset 0 0 0 1px rgb(255 255 255 / 0.1)',
            },
            '--tw-prose-bullets': theme('colors.zinc.500'),
            a: {
              color: theme('colors.white'),
              borderBottomColor: theme('colors.sky.400'),
            },
            strong: {
              color: theme('colors.zinc.200'),
            },
            thead: {
              color: theme('colors.zinc.300'),
              borderBottomColor: 'rgb(148 163 184 / 0.2)',
            },
            'tbody tr': {
              borderBottomColor: 'rgb(148 163 184 / 0.1)',
            },
            blockQuote: {
              color: theme('colors.white'),
            },
          },
        },
      }),
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      height: {
        15: '3.75rem',
      },
      width: {
        15: '3.75rem',
      },
      size: {
        15: '3.75rem',
      },
      opacity: {
        inherit: 'inherit',
      },
      scale: {
        98: '.98',
        1025: '1.025',
        175: '1.75',
        200: '2.0',
      },
      spacing: {
        18: '4.5rem',
        full: '100%',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      keyframes: {
        'flash-code': {
          '0%': { backgroundColor: 'rgb(125 211 252 / 0.1)' },
          '100%': { backgroundColor: 'transparent' },
        },
      },
      animation: {
        'flash-code': 'flash-code 1s forwards',
        'flash-code-slow': 'flash-code 2s forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    function ({ addVariant }) {
      addVariant(
        'supports-backdrop-blur',
        '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
      );
      addVariant('supports-scrollbars', '@supports selector(::-webkit-scrollbar)');
      addVariant('children', '& > *');
      addVariant('scrollbar', '&::-webkit-scrollbar');
      addVariant('scrollbar-track', '&::-webkit-scrollbar-track');
      addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb');
      addVariant('demo-dark', '.demo-dark &');
    },
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          highlight: (value) => ({ boxShadow: `inset 0 1px 0 0 ${value}` }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
    function ({ addUtilities, theme }) {
      let backgroundSize = '7.07px 7.07px';
      let backgroundImage = (color) =>
        `linear-gradient(135deg, ${color} 10%, transparent 10%, transparent 50%, ${color} 50%, ${color} 60%, transparent 60%, transparent 100%)`;
      let colors = Object.entries(theme('backgroundColor')).filter(
        ([, value]) => typeof value === 'object' && value[400] && value[500]
      );

      addUtilities(
        Object.fromEntries(
          colors.map(([name, colors]) => {
            let backgroundColor = colors[400] + '1a'; // 10% opacity
            let stripeColor = colors[500] + '80'; // 50% opacity

            return [
              `.bg-stripes-${name}`,
              {
                backgroundColor,
                backgroundImage: backgroundImage(stripeColor),
                backgroundSize,
              },
            ];
          })
        )
      );

      addUtilities({
        '.bg-stripes-white': {
          backgroundImage: backgroundImage('rgba(255 255 255 / 0.75)'),
          backgroundSize,
        },
      });

      addUtilities({
        '.ligatures-none': {
          fontVariantLigatures: 'none',
        },
      });
    },
  ],
};

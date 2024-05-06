/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu', 'sans-serif'],
      'noto-sans-khmer': ['Noto Sans Khmer', 'sans-serif'],
    },
    container: {
      padding: '1rem',
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // require('tailwindcss-clip-path'),
    // function ({ addUtilities }) {
    //   addUtilities({
    //     '.clip-cut-lg': {
    //       'clip-path': 'polygon(95% 0, 100% 50%, 100% 100%, 0 99%, 0 0)',
    //     },
    //     '.clip-cut-md': {
    //       'clip-path': 'polygon(calc(100% - 50px) 0, 100% calc(100% - 176px), 100% 100%, 0 100%, 0 0)',
    //     },
    //     '.clip-cut-sm': {
    //       'clip-path': 'polygon(calc(100% - 30px) 0, 100% 6%, 100% 100%, 0 100%, 0 0)',
    //     },
    //     '.clip-contact': {
    //       'clip-path': 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)',
    //     },
    //     '.clip-cut': {
    //       'clip-path': 'polygon(0 0, 80% 0, 100% 10%, 100% 100%, 0 100%, 0 0)',
    //     },
    //     '.clip-cut-tri': {
    //       'clip-path': 'polygon(0 calc(100% - 22px), 100% 1%, 100% 100%)',
    //     },
    //     '.clip-cut-tri-sm': {
    //       'clip-path': 'polygon(0 calc(100% - 17px), 100% 1%, 100% 100%)',
    //     },
    //     '.AccordionContent': {
    //       overflow: 'hidden',
    //     },
    //     '.AccordionContent[data-state="open"]': {
    //       animation: 'slideDown 300ms ease-out',
    //     },
    //     '.AccordionContent[data-state="closed"]': {
    //       animation: 'slideUp 300ms ease-out',
    //     }
    //   })
    // }
  ],
}

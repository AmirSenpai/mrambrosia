/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          paper: '#F5F0E6',
          ink: '#111111',
          'deep-green': '#123D2A',
          'light-green': '#B8E0B5',
          coral: '#F26B68',
          'soft-blue': '#BBD7E8',
          'muted-yellow': '#E8D28C',
          card: '#FBF8F0',
          border: '#171717',
        },
        fontFamily: {
          sans: ['Vazirmatn', 'system-ui', 'sans-serif'],
        },
        boxShadow: {
          'soft': '4px 4px 0px 0px rgba(17, 17, 17, 1)',
          'soft-sm': '2px 2px 0px 0px rgba(17, 17, 17, 1)',
        }
      },
    },
    plugins: [require('daisyui')],
    daisyui: {
      themes: [
        {
          light: {
            ...require("daisyui/src/theming/themes")["light"],
            "base-100": "#F5F0E6",
            "base-200": "#FBF8F0",
            "base-300": "#E5DFD3",
            "neutral": "#111111",
            "primary": "#123D2A",
            "secondary": "#F26B68",
            "accent": "#BBD7E8",
          },
          dark: {
            ...require("daisyui/src/theming/themes")["dark"],
            "base-100": "#1A1A1A",
            "base-200": "#242424",
            "base-300": "#333333",
            "neutral": "#F5F0E6",
            "primary": "#B8E0B5",
            "secondary": "#F26B68",
            "accent": "#BBD7E8",
          }
        }
      ],
    },
  }
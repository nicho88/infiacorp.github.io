/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    'node_modules/tv-*/dist/tv-*.umd.min.js',
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },

    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      }
    },
    fontFamily: {
      'trickster': ['trickster'],
      'trickster-black': ['tricksterblack'],
      'acumin': ['Acumin']
    },
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      colors: {
        'warna14': '#1440DA',
        'warna15': '#000000',
        'warna9c':'#9C9C9C',
        'warna21':'#2142B8',
        'warna001': '#001E87',
        'warnad9': '#D9D9D9',
        'warna0e': '#0E35C0'

      },

      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }

      // fontSize: {
      //   '3xlplus': '32px',
      //   '4xlplus': '40px',
      //   '6xlplus': '64px',
      //   '8xlplus': '98px'
      // }
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
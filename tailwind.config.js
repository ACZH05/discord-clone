/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      content: {},
      fontFamily: {
        whitney: ['Whitney']
      }
    },
  },
  safelist: [
    'hover:bg-[#5865f2]',
    'hover:bg-[#23a559]',
  ],
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


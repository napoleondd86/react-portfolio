/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px .75rem .75rem rgba(128, 128, 128, 0.3)',
      },
    },
  },
  plugins: [],
}


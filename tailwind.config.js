/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px .75rem .75rem rgba(128, 128, 128, 0.3)',
      },
      backgroundImage: {
        hazy: "url('/images/bg-hazy.png')",
        bghazy1: "url('/src/assets/images/bg-hazy1.png')",
        bghazy2: "url('/src/assets/images/bg-hazy2.png')",
        bgtopo: "url('/src/assets/images/bg-topo.png')",
        bgtopo1: "url('/src/assets/images/bg-topo1.png')",
        bgtopo2: "url('/src/assets/images/bg-topo2.png')",
        bgtopo3: "url('/src/assets/images/bg-topo3.png')",
        bgtopo4: "url('/src/assets/images/bg-topo4.png')",
        bgtopo5: "url('/src/assets/images/bg-topo5.png')",
        bgwatercolortree: "url('/src/assets/images/bg-watercolor-tree.png')",
        bgwatercolortree1: "url('/src/assets/images/bg-watercolor-tree2.png')",
        bgwatercolor: "url('/src/assets/images/bg-watercolor.png')",
        bgwatercolor1: "url('/src/assets/images/bg-watercolor1.png')",
        bgwatercolor2: "url('/src/assets/images/bg-watercolor2.png')",
      }
    },
  },
  plugins: [
  require('tailwindcss/nesting'),
  require('tailwindcss'),
  require('autoprefixer'),
  require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio'),

],
}


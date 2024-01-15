/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px .75rem .75rem #6530504c',
      },
      backgroundImage: {
        hazy: "url('/images/bg-hazy.png')",
        bghazy1: "url('/images/bg-hazy1.png')",
        bghazy2: "url('/images/bg-hazy2.png')",
        bgtopo: "url('/images/bg-topo.png')",
        bgtopo1: "url('/images/bg-topo1.png')",
        bgtopo2: "url('/images/bg-topo2.png')",
        bgtopo3: "url('/images/bg-topo3.png')",
        bgtopo4: "url('/images/bg-topo4.png')",
        bgtopo5: "url('/images/bg-topo5.png')",
        bgtopo6: "url('/images/bg-topo6.png')",
        bgtopo7: "url('/images/bg-topo7.png')",
        bgtopo8: "url('/images/bg-topo8.png')",
        bgtopo9: "url('/images/bg-topo9.png')",
        bgwatercolortree: "url('/images/bg-watercolor-tree.png')",
        bgwatercolortree1: "url('/images/bg-watercolor-tree2.png')",
        bgwatercolor: "url('/images/bg-watercolor.png')",
        bgwatercolor1: "url('/images/bg-watercolor1.png')",
        bgwatercolor2: "url('/images/bg-watercolor2.png')",
        bgsubtle: "url('/images/bg-subtle.png')",
        bgsubtle1: "url('/images/bg-subtle1.png')",
        bgsubtle2: "url('/images/bg-subtle2.png')",
      
      },
      colors: {
        mypink: '#cd9c7b',
        mypink100: '#f4ebe8',
        finn: '#653050',
        finn100: '#f5e9f3',
        raffia: '#e9e0b5',
        raffia100: '#f7f5e9',
        cwhite: '#ddf1d3',
        cwhite100: '#f2f7f0',
        nevada: '#5c686f',
        nevada100: '#e7ecee',
        xanadu: '#7d847d',
        xanadu100: '#e9ebe9',
        coraltree: '#ab6465',
        coraltree100: '#f7e9e9',
        rainee: '#bbc5ac',
        rainee100: '#f3f5ed',
        sepiaskin: '#965a43',
        sepiaskin100: '#f5e7e0',
        myorange: '#c66b5e',
        myorange100: '#f6e5e2',
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


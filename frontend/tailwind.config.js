import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      {mytheme: {
          
        "primary": "#7700ff",
                  
        "primary-content": "#dfd9ff",
                  
        "secondary": "#00d0ff",
                  
        "secondary-content": "#001016",
                  
        "accent": "#0083ff",
                  
        "accent-content": "#000616",
                  
        "neutral": "#060410",
                  
        "neutral-content": "#c5c5c9",
                  
        "base-100": "#2b2b2b",
                  
        "base-200": "#242424",
                  
        "base-300": "#1d1d1d",
                  
        "base-content": "#d0d0d0",
                  
        "info": "#00a7ff",
                  
        "info-content": "#000a16",
                  
        "success": "#00ca5f",
                  
        "success-content": "#000f03",
                  
        "warning": "#e43c00",
                  
        "warning-content": "#120100",
                  
        "error": "#ff93aa",
                  
        "error-content": "#16080b",
                  },}
    ],
  },  
}
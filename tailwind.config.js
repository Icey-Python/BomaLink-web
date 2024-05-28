/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      screens: {
        mobile : "360px"
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      mogra: ["mogra", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },

  },
  plugins: [],
}


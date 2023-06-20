/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'abyss': '#2155CD',
      'sky': '#0AA1DD',
      'cyan' : '#79DAE8',
      'gray' : '#F1F1F1',
      'lightgray' : '#BFBFBF',
    },
    extend: {
      fontFamily: {
        'body':['Poppins', 'sans-serif'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'svg-pattern': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'1920\' height=\'568\' viewBox=\'0 0 1920 568\' fill=\'none\'%3E%3Crect width=\'1920\' height=\'677\' rx=\'100\' fill=\'url(%23paint0_linear_107_189)%27/%3E%3Cdefs%3E%3ClinearGradient id=\'paint0_linear_107_189\' x1=\'960\' y1=\'0\' x2=\'960\' y2=\'677\' gradientUnits=\'userSpaceOnUse\'%3E%3Cstop stop-color=\'%230AA1DD\'/%3E%3Cstop offset=\'1\' stop-color=\'%232155CD\'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E")',
      },

    },
  },
  plugins: [],
}

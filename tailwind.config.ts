import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary: '#E75325',
        'gray-ligth': '#414141'
      },
      backgroundImage: theme => ({
        'radial-primary': "radial-gradient(circle, rgba(231,83,37,1) 0%, rgba(38,14,6,1) 60%)"
      })
    },
  },
  important: true,
  plugins: [],
}
export default config;

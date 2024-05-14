import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "bgColour": '#E8EBED',
        "discord": '#7289da',
        "linkedin": '#0077B5'
      },
      screens: {
        'sm': '759px'
      }
    }
  },
  plugins: [],
}
export default config

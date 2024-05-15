import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        rightBounce: 'rightBounce 1s infinite',
      },
      keyframes: {
        rightBounce: {
          '0%, 100%': { transform: 'translateX(0)', animateTimingFunction: 'cubicBezier(0.8,0,1,1)' },
          '50%': { transform: 'translateX(25%)', animateTimingFunction: 'cubicBezier(0,0,0.2,1)' },
        }
      },
      colors: {
        "bgLightColour": '#E8EBED',
        "bgDarkColour": '#344B7E',
        "discord": '#7289da',
        "github": "#333",
        "linkedin": '#0077B5',
        "email": "#d44638"
      },
      screens: {
        // 'sm': '759px'
      }
    }
  },
  plugins: [],
}
export default config


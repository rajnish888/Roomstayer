/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {

			keyframes: {
				"caret-blink": {
				  "0%,70%,100%": { opacity: "1" },
				  "20%,50%": { opacity: "0" },
				},
			  },
			  animation: {
				"caret-blink": "caret-blink 1.25s ease-out infinite",
			  },

			fontSize: {
				'custom-32': '32px',
			  },
			colors: {
				blue: {
					50: "#EFF9FF",
					100: "#DEF3FF",
					200: "#BADEFD",
					300: "#76D9FF",
					400: "#2EC8FF",
					500: "#02A2E0",
					600: "#008ED2",
					700: "#0070AA",
					800: "#005F8C",
					900: "#074E73",
					950: "#04324D",
				},
				
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			
			boxShadow: {
				'shadow-one': '4px 4px 32px 0 rgba(0, 0, 0, 0.16)', 
				'shadow-two': '0 10px 15px rgba(0, 0, 0, 0.3)', 
				'shadow-three': '0 0 10px rgba(255, 255, 255, 0.5)', 
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};

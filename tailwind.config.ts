
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: '#e1e4ec',
				input: '#e1e4ec',
				ring: '#1f52f1',
				background: '#ffffff',
				foreground: '#23272f',
				primary: {
					DEFAULT: '#1f52f1',
					dark: '#0b2567',
					light: '#bed5fd',
					foreground: '#ffffff'
				},
				secondary: {
					DEFAULT: '#ffffff',
					foreground: '#1f52f1'
				},
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#ffffff'
				},
				muted: {
					DEFAULT: '#f4f5fa',
					foreground: '#6c6f7e'
				},
				accent: {
					DEFAULT: '#23272f',
					foreground: '#ffffff'
				},
				popover: {
					DEFAULT: '#ffffff',
					foreground: '#23272f'
				},
				card: {
					DEFAULT: '#ffffff',
					foreground: '#23272f'
				},
				sidebar: {
					DEFAULT: '#f4f5fa',
					foreground: '#23272f',
					primary: '#1f52f1',
					'primary-foreground': '#ffffff',
					accent: '#23272f',
					'accent-foreground': '#ffffff',
					border: '#e1e4ec',
					ring: '#1f52f1'
				},
				"brand-blue": "#1f52f1",
				"brand-accent": "#23272f"
			},
			borderRadius: {
				lg: '0.75rem',
				md: '0.625rem',
				sm: '0.5rem'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite'
			},
			backgroundImage: {
				'hero-pattern': "linear-gradient(to right, #1f52f1, #23272f)",
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;


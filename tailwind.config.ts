import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        letterSpacing: {
			'x-tight': '-0.022rem',
			tightest: '-0.015rem',
            tighter: '-0.010rem',
            tight: '-0.005rem',
            normal: '0rem',
            wide: '0.004rem',
            wider: '0.008rem',
            widest: '0.014rem',
            'x-wide': '0.016rem',
            '2x-wide': '0.018rem',
            '3x-wide': '0.020rem',
            '4x-wide': '0.022rem'
        },
        fontSize: {
            '2xs': '0.702rem',
            xs: '0.790rem',
            sm: '0.889rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.266rem',
            '2xl': '1.424rem',
            '3xl': '1.602rem',
            '4xl': '1.802rem',
            '5xl': '2.027rem'
        },
		extend: {
			fontFamily: {
				jost: ['var(--font-jost)'],
				"space-grotesk": ['var(--font-space-grotesk)'],
			},
			borderWidth: {
				'6': "6px",
			},
			colors: {			
				background: 'hsl(var(--color-primary-background))',
				foreground: 'hsl(var(--color-primary-foreground))',
				card: {
					DEFAULT: 'hsl(var(--color-primary-card))',
					foreground: 'hsl(var(--color-primary-card-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--color-primary-popover))',
					foreground: 'hsl(var(--color-primary-popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--color-primary-muted))',
					foreground: 'hsl(var(--color-primary-muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--color-primary-accent))',
					foreground: 'hsl(var(--color-primary-accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--color-primary-destructive))',
					foreground: 'hsl(var(--color-primary-destructive-foreground))'
				},
				border: '#000',
				input: 'hsl(var(--color-primary-input))',
				ring: 'hsl(var(--color-primary-ring))',
				chart: {
					'1': 'hsl(var(--color-primary-chart-1))',
					'2': 'hsl(var(--color-primary-chart-2))',
					'3': 'hsl(var(--color-primary-chart-3))',
					'4': 'hsl(var(--color-primary-chart-4))',
					'5': 'hsl(var(--color-primary-chart-5))'
				},
				contrast: {
					DEFAULT: 'hsl(var(--color-contrast-background))',
					background: 'hsl(var(--color-contrast-background))',
				},
				gradient: {
					'1': 'hsl(var(--color-primary-primary))',
					'2': '#ff5c5b',
					'3': '#ff5287',
					'4': '#ff41b2',
					'5': '#eb58dd',
					'6': 'hsl(var(--color-secondary-primary))'
				},
				primary: {
					DEFAULT: 'hsl(var(--color-primary-primary))',
					background: 'hsl(var(--color-primary-background))',
					card: 'hsl(var(--color-primary-card))',
					popover: 'hsl(var(--color-primary-popover))',
					secondary: 'hsl(var(--color-primary-secondary))',
					muted: 'hsl(var(--color-primary-muted))',
					accent: 'hsl(var(--color-primary-accent))',
					destructive: 'hsl(var(--color-primary-destructive))',
					border: 'hsl(var(--color-primary-border))',
					input: 'hsl(var(--color-primary-input))',
					ring: 'hsl(var(--color-primary-ring))',
					chart: {
						'1': 'hsl(var(--color-primary-chart-1))',
						'2': 'hsl(var(--color-primary-chart-2))',
						'3': 'hsl(var(--color-primary-chart-3))',
						'4': 'hsl(var(--color-primary-chart-4))',
						'5': 'hsl(var(--color-primary-chart-5))'
					}
				},
				secondary: {
					DEFAULT: 'hsl(var(--color-secondary-primary))',
					background: 'hsl(var(--color-secondary-background))',
					card: 'hsl(var(--color-secondary-card))',
					popover: 'hsl(var(--color-secondary-popover))',
					secondary: 'hsl(var(--color-secondary-secondary))',
					muted: 'hsl(var(--color-secondary-muted))',
					accent: 'hsl(var(--color-secondary-accent))',
					destructive: 'hsl(var(--color-secondary-destructive))',
					border: 'hsl(var(--color-secondary-border))',
					input: 'hsl(var(--color-secondary-input))',
					ring: 'hsl(var(--color-secondary-ring))',
					chart: {
						'1': 'hsl(var(--color-secondary-chart-1))',
						'2': 'hsl(var(--color-secondary-chart-2))',
						'3': 'hsl(var(--color-secondary-chart-3))',
						'4': 'hsl(var(--color-secondary-chart-4))',
						'5': 'hsl(var(--color-secondary-chart-5))'
					}
				},
				success: {
					DEFAULT: 'hsl(var(--color-success-primary))',
					background: 'hsl(var(--color-success-background))',
					card: 'hsl(var(--color-success-card))',
					popover: 'hsl(var(--color-success-popover))',
					secondary: 'hsl(var(--color-success-secondary))',
					muted: 'hsl(var(--color-success-muted))',
					accent: 'hsl(var(--color-success-accent))',
					destructive: 'hsl(var(--color-success-destructive))',
					border: 'hsl(var(--color-success-border))',
					input: 'hsl(var(--color-success-input))',
					ring: 'hsl(var(--color-success-ring))',
					chart: {
						'1': 'hsl(var(--color-success-chart-1))',
						'2': 'hsl(var(--color-success-chart-2))',
						'3': 'hsl(var(--color-success-chart-3))',
						'4': 'hsl(var(--color-success-chart-4))',
						'5': 'hsl(var(--color-success-chart-5))'
					}
				},
				info: {
					DEFAULT: 'hsl(var(--color-info-primary))',
					background: 'hsl(var(--color-info-background))',
					card: 'hsl(var(--color-info-card))',
					popover: 'hsl(var(--color-info-popover))',
					secondary: 'hsl(var(--color-info-secondary))',
					muted: 'hsl(var(--color-info-muted))',
					accent: 'hsl(var(--color-info-accent))',
					destructive: 'hsl(var(--color-info-destructive))',
					border: 'hsl(var(--color-info-border))',
					input: 'hsl(var(--color-info-input))',
					ring: 'hsl(var(--color-info-ring))',
					chart: {
						'1': 'hsl(var(--color-info-chart-1))',
						'2': 'hsl(var(--color-info-chart-2))',
						'3': 'hsl(var(--color-info-chart-3))',
						'4': 'hsl(var(--color-info-chart-4))',
						'5': 'hsl(var(--color-info-chart-5))'
					}
				},
				warning: {
					DEFAULT: 'hsl(var(--color-warning-primary))',
					background: 'hsl(var(--color-warning-background))',
					card: 'hsl(var(--color-warning-card))',
					popover: 'hsl(var(--color-warning-popover))',
					secondary: 'hsl(var(--color-warning-secondary))',
					muted: 'hsl(var(--color-warning-muted))',
					accent: 'hsl(var(--color-warning-accent))',
					destructive: 'hsl(var(--color-warning-destructive))',
					border: 'hsl(var(--color-warning-border))',
					input: 'hsl(var(--color-warning-input))',
					ring: 'hsl(var(--color-warning-ring))',
					chart: {
						'1': 'hsl(var(--color-warning-chart-1))',
						'2': 'hsl(var(--color-warning-chart-2))',
						'3': 'hsl(var(--color-warning-chart-3))',
						'4': 'hsl(var(--color-warning-chart-4))',
						'5': 'hsl(var(--color-warning-chart-5))'
					}
				},
				danger: {
					DEFAULT: 'hsl(var(--color-danger-primary))',
					background: 'hsl(var(--color-danger-background))',
					card: 'hsl(var(--color-danger-card))',
					popover: 'hsl(var(--color-danger-popover))',
					secondary: 'hsl(var(--color-danger-secondary))',
					muted: 'hsl(var(--color-danger-muted))',
					accent: 'hsl(var(--color-danger-accent))',
					destructive: 'hsl(var(--color-danger-destructive))',
					border: 'hsl(var(--color-danger-border))',
					input: 'hsl(var(--color-danger-input))',
					ring: 'hsl(var(--color-danger-ring))',
					chart: {
						'1': 'hsl(var(--color-danger-chart-1))',
						'2': 'hsl(var(--color-danger-chart-2))',
						'3': 'hsl(var(--color-danger-chart-3))',
						'4': 'hsl(var(--color-danger-chart-4))',
						'5': 'hsl(var(--color-danger-chart-5))'
					}
				},
				on: {
					contrast: {
						DEFAULT: 'hsl(var(--color-contrast-foreground))',
						background: 'hsl(var(--color-contrast-foreground))',
					},
					primary: {
						DEFAULT: 'hsl(var(--color-primary-primary-foreground))',
						background: 'hsl(var(--color-primary-foreground))',
						card: 'hsl(var(--color-primary-card-foreground))',
						popover: 'hsl(var(--color-primary-popover-foreground))',
						secondary: 'hsl(var(--color-primary-secondary-foreground))',
						muted: 'hsl(var(--color-primary-muted-foreground))',
						accent: 'hsl(var(--color-primary-accent-foreground))',
						destructive: 'hsl(var(--color-primary-destructive-foreground))'
					},
					secondary: {
						DEFAULT: 'hsl(var(--color-secondary-primary-foreground))',
						background: 'hsl(var(--color-secondary-foreground))',
						card: 'hsl(var(--color-secondary-card-foreground))',
						popover: 'hsl(var(--color-secondary-popover-foreground))',
						secondary: 'hsl(var(--color-secondary-secondary-foreground))',
						muted: 'hsl(var(--color-secondary-muted-foreground))',
						accent: 'hsl(var(--color-secondary-accent-foreground))',
						destructive: 'hsl(var(--color-secondary-destructive-foreground))'
					},
					success: {
						DEFAULT: 'hsl(var(--color-success-primary-foreground))',
						background: 'hsl(var(--color-success-foreground))',
						card: 'hsl(var(--color-success-card-foreground))',
						popover: 'hsl(var(--color-success-popover-foreground))',
						secondary: 'hsl(var(--color-success-secondary-foreground))',
						muted: 'hsl(var(--color-success-muted-foreground))',
						accent: 'hsl(var(--color-success-accent-foreground))',
						destructive: 'hsl(var(--color-success-destructive-foreground))'
					},
					info: {
						DEFAULT: 'hsl(var(--color-info-primary-foreground))',
						background: 'hsl(var(--color-info-foreground))',
						card: 'hsl(var(--color-info-card-foreground))',
						popover: 'hsl(var(--color-info-popover-foreground))',
						secondary: 'hsl(var(--color-info-secondary-foreground))',
						muted: 'hsl(var(--color-info-muted-foreground))',
						accent: 'hsl(var(--color-info-accent-foreground))',
						destructive: 'hsl(var(--color-info-destructive-foreground))'
					},
					warning: {
						DEFAULT: 'hsl(var(--color-warning-primary-foreground))',
						background: 'hsl(var(--color-warning-foreground))',
						card: 'hsl(var(--color-warning-card-foreground))',
						popover: 'hsl(var(--color-warning-popover-foreground))',
						secondary: 'hsl(var(--color-warning-secondary-foreground))',
						muted: 'hsl(var(--color-warning-muted-foreground))',
						accent: 'hsl(var(--color-warning-accent-foreground))',
						destructive: 'hsl(var(--color-warning-destructive-foreground))'
					},
					danger: {
						DEFAULT: 'hsl(var(--color-danger-primary-foreground))',
						background: 'hsl(var(--color-danger-foreground))',
						card: 'hsl(var(--color-danger-card-foreground))',
						popover: 'hsl(var(--color-danger-popover-foreground))',
						secondary: 'hsl(var(--color-danger-secondary-foreground))',
						muted: 'hsl(var(--color-danger-muted-foreground))',
						accent: 'hsl(var(--color-danger-accent-foreground))',
						destructive: 'hsl(var(--color-danger-destructive-foreground))'
					},
				}
			},
			borderRadius: {
				base: '5px',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
			shadow: 'var(--shadow)'
			},
			translate: {
			boxShadowX: '4px',
			boxShadowY: '4px',
			reverseBoxShadowX: '-4px',
			reverseBoxShadowY: '-4px',
			},
			fontWeight: {
			base: '500',
			heading: '700',
			},
		}
	},
	plugins:
		[
			require("tailwindcss-animate"),
			require('@tailwindcss/typography')
		],
	} satisfies Config;

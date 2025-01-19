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
      "x-tight": "-0.022rem",
      tightest: "-0.015rem",
      tighter: "-0.010rem",
      tight: "-0.005rem",
      normal: "0rem",
      wide: "0.004rem",
      wider: "0.008rem",
      widest: "0.014rem",
      "x-wide": "0.016rem",
      "2x-wide": "0.018rem",
      "3x-wide": "0.020rem",
      "4x-wide": "0.022rem",
    },
    fontSize: {
      "2xs": "0.702rem",
      xs: "0.790rem",
      sm: "0.889rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.266rem",
      "2xl": "1.424rem",
      "3xl": "1.602rem",
      "4xl": "1.802rem",
      "5xl": "2.027rem",
    },
    extend: {
      fontFamily: {
        jost: ["var(--font-jost)"],
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        foreground: "rgb(var(--color-on-background) / <alpha-value>)",
        card: {
          DEFAULT: "rgb(var(--color-primary-card) / <alpha-value>)",
          foreground: "rgb(var(--color-on-primary-card) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--color-primary-popover) / <alpha-value>)",
          foreground: "rgb(var(--color-on-primary-popover) / <alpha-value>)",
        },
        gradient: {
            '1': "rgb(var(--color-gradient-1) / <alpha-value>)",
            '2': "rgb(var(--color-gradient-2) / <alpha-value>)",
            '3': "rgb(var(--color-gradient-3) / <alpha-value>)",
            '4': "rgb(var(--color-gradient-4) / <alpha-value>)",
            '5': "rgb(var(--color-gradient-5) / <alpha-value>)",
            '6': "rgb(var(--color-gradient-6) / <alpha-value>)"
        },
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          accent: "rgb(var(--color-primary-accent) / <alpha-value>)",
          border: "rgb(var(--color-primary-border) / <alpha-value>)",
          card: "rgb(var(--color-primary-card) / <alpha-value>)",
          chart: {
            "1": "rgb(var(--color-primary-chart-1) / <alpha-value>)",
            "2": "rgb(var(--color-primary-chart-2) / <alpha-value>)",
            "3": "rgb(var(--color-primary-chart-3) / <alpha-value>)",
            "4": "rgb(var(--color-primary-chart-4) / <alpha-value>)",
            "5": "rgb(var(--color-primary-chart-5) / <alpha-value>)",
          },
          container: "rgb(var(--color-primary-container) / <alpha-value>)",
          foreground: "rgb(var(--color-on-primary) / <alpha-value>)",
          input: "rgb(var(--color-primary-input) / <alpha-value>)",
          muted: "rgb(var(--color-primary-muted) / <alpha-value>)",
          popover: "rgb(var(--color-primary-popover) / <alpha-value>)",
          ring: "rgb(var(--color-primary-ring) / <alpha-value>)",
          secondary: "rgb(var(--color-primary-secondary) / <alpha-value>)",
          vibrant: "rgb(var(--color-vibrant-primary) / <alpha-value>)",
          fixed: {
            DEFAULT: "rgb(var(--color-primary-fixed) / <alpha-value>)",
            dim: "rgb(var(--color-primary-fixed-dim) / <alpha-value>)",
          },
          "100": "rgb(var(--color-primary-100) / <alpha-value>)",
          "200": "rgb(var(--color-primary-200) / <alpha-value>)",
          "300": "rgb(var(--color-primary-300) / <alpha-value>)",
          "400": "rgb(var(--color-primary-400) / <alpha-value>)",
          "500": "rgb(var(--color-primary-500) / <alpha-value>)",
          "600": "rgb(var(--color-primary-600) / <alpha-value>)",
          "700": "rgb(var(--color-primary-700) / <alpha-value>)",
          "800": "rgb(var(--color-primary-800) / <alpha-value>)",
          "900": "rgb(var(--color-primary-900) / <alpha-value>)",
        },

        secondary: {
          DEFAULT: "rgb(var(--color-secondary) / <alpha-value>)",
          accent: "rgb(var(--color-secondary-accent) / <alpha-value>)",
          border: "rgb(var(--color-secondary-border) / <alpha-value>)",
          card: "rgb(var(--color-secondary-card) / <alpha-value>)",
          chart: {
            "1": "rgb(var(--color-secondary-chart-1) / <alpha-value>)",
            "2": "rgb(var(--color-secondary-chart-2) / <alpha-value>)",
            "3": "rgb(var(--color-secondary-chart-3) / <alpha-value>)",
            "4": "rgb(var(--color-secondary-chart-4) / <alpha-value>)",
            "5": "rgb(var(--color-secondary-chart-5) / <alpha-value>)",
          },
          container: "rgb(var(--color-secondary-container) / <alpha-value>)",
          foreground: "rgb(var(--color-on-secondary) / <alpha-value>)",
          input: "rgb(var(--color-secondary-input) / <alpha-value>)",
          muted: "rgb(var(--color-secondary-muted) / <alpha-value>)",
          popover: "rgb(var(--color-secondary-popover) / <alpha-value>)",
          ring: "rgb(var(--color-secondary-ring) / <alpha-value>)",
          secondary: "rgb(var(--color-secondary-secondary) / <alpha-value>)",
          vibrant: "rgb(var(--color-vibrant-secondary) / <alpha-value>)",
          fixed: {
            DEFAULT: "rgb(var(--color-secondary-fixed) / <alpha-value>)",
            dim: "rgb(var(--color-secondary-fixed-dim) / <alpha-value>)",
          },
          "100": "rgb(var(--color-secondary-100) / <alpha-value>)",
          "200": "rgb(var(--color-secondary-200) / <alpha-value>)",
          "300": "rgb(var(--color-secondary-300) / <alpha-value>)",
          "400": "rgb(var(--color-secondary-400) / <alpha-value>)",
          "500": "rgb(var(--color-secondary-500) / <alpha-value>)",
          "600": "rgb(var(--color-secondary-600) / <alpha-value>)",
          "700": "rgb(var(--color-secondary-700) / <alpha-value>)",
          "800": "rgb(var(--color-secondary-800) / <alpha-value>)",
          "900": "rgb(var(--color-secondary-900) / <alpha-value>)",
        },

        tertiary: {
          DEFAULT: "rgb(var(--color-tertiary) / <alpha-value>)",
          accent: "rgb(var(--color-tertiary-accent) / <alpha-value>)",
          border: "rgb(var(--color-tertiary-border) / <alpha-value>)",
          card: "rgb(var(--color-tertiary-card) / <alpha-value>)",
          chart: {
            "1": "rgb(var(--color-tertiary-chart-1) / <alpha-value>)",
            "2": "rgb(var(--color-tertiary-chart-2) / <alpha-value>)",
            "3": "rgb(var(--color-tertiary-chart-3) / <alpha-value>)",
            "4": "rgb(var(--color-tertiary-chart-4) / <alpha-value>)",
            "5": "rgb(var(--color-tertiary-chart-5) / <alpha-value>)",
          },
          container: "rgb(var(--color-tertiary-container) / <alpha-value>)",
          input: "rgb(var(--color-tertiary-input) / <alpha-value>)",
          muted: "rgb(var(--color-tertiary-muted) / <alpha-value>)",
          popover: "rgb(var(--color-tertiary-popover) / <alpha-value>)",
          ring: "rgb(var(--color-tertiary-ring) / <alpha-value>)",
          secondary: "rgb(var(--color-tertiary-secondary) / <alpha-value>)",
          vibrant: "rgb(var(--color-vibrant-tertiary) / <alpha-value>)",
          fixed: {
            DEFAULT: "rgb(var(--color-tertiary-fixed) / <alpha-value>)",
            dim: "rgb(var(--color-tertiary-fixed-dim) / <alpha-value>)",
          },
          "100": "rgb(var(--color-tertiary-100) / <alpha-value>)",
          "200": "rgb(var(--color-tertiary-200) / <alpha-value>)",
          "300": "rgb(var(--color-tertiary-300) / <alpha-value>)",
          "400": "rgb(var(--color-tertiary-400) / <alpha-value>)",
          "500": "rgb(var(--color-tertiary-500) / <alpha-value>)",
          "600": "rgb(var(--color-tertiary-600) / <alpha-value>)",
          "700": "rgb(var(--color-tertiary-700) / <alpha-value>)",
          "800": "rgb(var(--color-tertiary-800) / <alpha-value>)",
          "900": "rgb(var(--color-tertiary-900) / <alpha-value>)",
        },

        success: {
          DEFAULT: "rgb(var(--color-success) / <alpha-value>)",
          accent: "rgb(var(--color-success-accent) / <alpha-value>)",
          border: "rgb(var(--color-success-border) / <alpha-value>)",
          card: "rgb(var(--color-success-card) / <alpha-value>)",
          chart: {
            "1": "rgb(var(--color-success-chart-1) / <alpha-value>)",
            "2": "rgb(var(--color-success-chart-2) / <alpha-value>)",
            "3": "rgb(var(--color-success-chart-3) / <alpha-value>)",
            "4": "rgb(var(--color-success-chart-4) / <alpha-value>)",
            "5": "rgb(var(--color-success-chart-5) / <alpha-value>)",
          },
          container: "rgb(var(--color-success-container) / <alpha-value>)",
          input: "rgb(var(--color-success-input) / <alpha-value>)",
          muted: "rgb(var(--color-success-muted) / <alpha-value>)",
          popover: "rgb(var(--color-success-popover) / <alpha-value>)",
          ring: "rgb(var(--color-success-ring) / <alpha-value>)",
          secondary: "rgb(var(--color-success-secondary) / <alpha-value>)",
          vibrant: "rgb(var(--color-vibrant-success) / <alpha-value>)",
          "100": "rgb(var(--color-success-100) / <alpha-value>)",
          "200": "rgb(var(--color-success-200) / <alpha-value>)",
          "300": "rgb(var(--color-success-300) / <alpha-value>)",
          "400": "rgb(var(--color-success-400) / <alpha-value>)",
          "500": "rgb(var(--color-success-500) / <alpha-value>)",
          "600": "rgb(var(--color-success-600) / <alpha-value>)",
          "700": "rgb(var(--color-success-700) / <alpha-value>)",
          "800": "rgb(var(--color-success-800) / <alpha-value>)",
          "900": "rgb(var(--color-success-900) / <alpha-value>)",
        },

        info: {
          DEFAULT: "rgb(var(--color-info) / <alpha-value>)",
          accent: "rgb(var(--color-info-accent) / <alpha-value>)",
          border: "rgb(var(--color-info-border) / <alpha-value>)",
          card: "rgb(var(--color-info-card) / <alpha-value>)",
          chart: {
            "1": "rgb(var(--color-info-chart-1) / <alpha-value>)",
            "2": "rgb(var(--color-info-chart-2) / <alpha-value>)",
            "3": "rgb(var(--color-info-chart-3) / <alpha-value>)",
            "4": "rgb(var(--color-info-chart-4) / <alpha-value>)",
            "5": "rgb(var(--color-info-chart-5) / <alpha-value>)",
          },
          container: "rgb(var(--color-info-container) / <alpha-value>)",
          input: "rgb(var(--color-info-input) / <alpha-value>)",
          muted: "rgb(var(--color-info-muted) / <alpha-value>)",
          popover: "rgb(var(--color-info-popover) / <alpha-value>)",
          ring: "rgb(var(--color-info-ring) / <alpha-value>)",
          secondary: "rgb(var(--color-info-secondary) / <alpha-value>)",
          vibrant: "rgb(var(--color-vibrant-info) / <alpha-value>)",
          "100": "rgb(var(--color-info-100) / <alpha-value>)",
          "200": "rgb(var(--color-info-200) / <alpha-value>)",
          "300": "rgb(var(--color-info-300) / <alpha-value>)",
          "400": "rgb(var(--color-info-400) / <alpha-value>)",
          "500": "rgb(var(--color-info-500) / <alpha-value>)",
          "600": "rgb(var(--color-info-600) / <alpha-value>)",
          "700": "rgb(var(--color-info-700) / <alpha-value>)",
          "800": "rgb(var(--color-info-800) / <alpha-value>)",
          "900": "rgb(var(--color-info-900) / <alpha-value>)",
        },

        warning: {
          DEFAULT: "rgb(var(--color-warning) / <alpha-value>)",
          accent: "rgb(var(--color-warning-accent) / <alpha-value>)",
          border: "rgb(var(--color-warning-border) / <alpha-value>)",
          card: "rgb(var(--color-warning-card) / <alpha-value>)",
          chart: {
            "1": "rgb(var(--color-warning-chart-1) / <alpha-value>)",
            "2": "rgb(var(--color-warning-chart-2) / <alpha-value>)",
            "3": "rgb(var(--color-warning-chart-3) / <alpha-value>)",
            "4": "rgb(var(--color-warning-chart-4) / <alpha-value>)",
            "5": "rgb(var(--color-warning-chart-5) / <alpha-value>)",
          },
          container: "rgb(var(--color-warning-container) / <alpha-value>)",
          input: "rgb(var(--color-warning-input) / <alpha-value>)",
          muted: "rgb(var(--color-warning-muted) / <alpha-value>)",
          popover: "rgb(var(--color-warning-popover) / <alpha-value>)",
          ring: "rgb(var(--color-warning-ring) / <alpha-value>)",
          secondary: "rgb(var(--color-warning-secondary) / <alpha-value>)",
          vibrant: "rgb(var(--color-vibrant-warning) / <alpha-value>)",
          "100": "rgb(var(--color-warning-100) / <alpha-value>)",
          "200": "rgb(var(--color-warning-200) / <alpha-value>)",
          "300": "rgb(var(--color-warning-300) / <alpha-value>)",
          "400": "rgb(var(--color-warning-400) / <alpha-value>)",
          "500": "rgb(var(--color-warning-500) / <alpha-value>)",
          "600": "rgb(var(--color-warning-600) / <alpha-value>)",
          "700": "rgb(var(--color-warning-700) / <alpha-value>)",
          "800": "rgb(var(--color-warning-800) / <alpha-value>)",
          "900": "rgb(var(--color-warning-900) / <alpha-value>)",
        },

        danger: {
          DEFAULT: "rgb(var(--color-danger) / <alpha-value>)",
          accent: "rgb(var(--color-danger-accent) / <alpha-value>)",
          border: "rgb(var(--color-danger-border) / <alpha-value>)",
          card: "rgb(var(--color-danger-card) / <alpha-value>)",
          chart: {
            "1": "rgb(var(--color-danger-chart-1) / <alpha-value>)",
            "2": "rgb(var(--color-danger-chart-2) / <alpha-value>)",
            "3": "rgb(var(--color-danger-chart-3) / <alpha-value>)",
            "4": "rgb(var(--color-danger-chart-4) / <alpha-value>)",
            "5": "rgb(var(--color-danger-chart-5) / <alpha-value>)",
          },
          container: "rgb(var(--color-danger-container) / <alpha-value>)",
          input: "rgb(var(--color-danger-input) / <alpha-value>)",
          muted: "rgb(var(--color-danger-muted) / <alpha-value>)",
          popover: "rgb(var(--color-danger-popover) / <alpha-value>)",
          ring: "rgb(var(--color-danger-ring) / <alpha-value>)",
          secondary: "rgb(var(--color-danger-secondary) / <alpha-value>)",
          vibrant: "rgb(var(--color-vibrant-danger) / <alpha-value>)",
          "100": "rgb(var(--color-danger-100) / <alpha-value>)",
          "200": "rgb(var(--color-danger-200) / <alpha-value>)",
          "300": "rgb(var(--color-danger-300) / <alpha-value>)",
          "400": "rgb(var(--color-danger-400) / <alpha-value>)",
          "500": "rgb(var(--color-danger-500) / <alpha-value>)",
          "600": "rgb(var(--color-danger-600) / <alpha-value>)",
          "700": "rgb(var(--color-danger-700) / <alpha-value>)",
          "800": "rgb(var(--color-danger-800) / <alpha-value>)",
          "900": "rgb(var(--color-danger-900) / <alpha-value>)",
        },

        surface: {
          DEFAULT: "rgb(var(--color-surface) / <alpha-value>)",
          bright: "rgb(var(--color-surface-bright) / <alpha-value>)",
          dim: "rgb(var(--color-surface-dim) / <alpha-value>)",
          container: {
            DEFAULT: "rgb(var(--color-surface-container) / <alpha-value>)",
            lowest:
              "rgb(var(--color-surface-container-lowest) / <alpha-value>)",
            low: "rgb(var(--color-surface-container-low) / <alpha-value>)",
            high: "rgb(var(--color-surface-container-high) / <alpha-value>)",
            highest:
              "rgb(var(--color-surface-container-highest) / <alpha-value>)",
          },
          tint: "rgb(var(--color-surface-tint) / <alpha-value>)",
          variant: "rgb(var(--color-surface-variant) / <alpha-value>)",
        },

        error: {
          DEFAULT: "rgb(var(--color-error) / <alpha-value>)",
          container: "rgb(var(--color-error-container) / <alpha-value>)",
        },
        outline: {
          DEFAULT: "rgb(var(--color-outline) / <alpha-value>)",
          variant: "rgb(var(--color-outline-variant) / <alpha-value>)",
        },
        scrim: "rgb(var(--color-scrim) / <alpha-value>)",
        shadow: "rgb(var(--color-shadow) / <alpha-value>)",
        ring: {
          DEFAULT: "rgb(var(--color-primary-ring) / <alpha-value>)",
          base: "rgb(var(--color-ring-base) / <alpha-value>)",
          offset: "rgb(var(--color-ring-offset) / <alpha-value>)",
        },
        inverse: {
          surface: "rgb(var(--color-inverse-surface) / <alpha-value>)",
          primary: "rgb(var(--color-inverse-primary) / <alpha-value>)",
          "on-surface": "rgb(var(--color-inverse-on-surface) / <alpha-value>)",
        },

        muted: {
          DEFAULT: "rgb(var(--color-primary-muted) / <alpha-value>)",
          foreground:
            "rgb(var(--color-on-primary-muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--color-primary-accent) / <alpha-value>)",
          foreground: "rgb(var(--color-on-primary-accent) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--color-vibrant-danger) / <alpha-value>)",
          foreground: "rgb(var(--color-on-vibrant-danger) / <alpha-value>)",
        },
        border: "rgb(var(--color-primary-border) / <alpha-value>)",
        input: "rgb(var(--color-primary-input) / <alpha-value>)",
        chart: {
          "1": "rgb(var(--color-primary-chart-1) / <alpha-value>)",
          "2": "rgb(var(--color-primary-chart-2) / <alpha-value>)",
          "3": "rgb(var(--color-primary-chart-3) / <alpha-value>)",
          "4": "rgb(var(--color-primary-chart-4) / <alpha-value>)",
          "5": "rgb(var(--color-primary-chart-5) / <alpha-value>)",
        },
        on: {
          background: "rgb(var(--color-on-background) / <alpha-value>)",
          error: {
            DEFAULT: "rgb(var(--color-on-error) / <alpha-value>)",
            container: "rgb(var(--color-on-error-container) / <alpha-value>)",
          },
          primary: {
            DEFAULT: "rgb(var(--color-on-primary) / <alpha-value>)",
            accent: "rgb(var(--color-on-primary-accent) / <alpha-value>)",
            card: "rgb(var(--color-on-primary-card) / <alpha-value>)",
            container: "rgb(var(--color-on-primary-container) / <alpha-value>)",
            muted: "rgb(var(--color-on-primary-muted) / <alpha-value>)",
            popover: "rgb(var(--color-on-primary-popover) / <alpha-value>)",
            secondary: "rgb(var(--color-on-primary-secondary) / <alpha-value>)",
            vibrant: "rgb(var(--color-on-vibrant-primary) / <alpha-value>)",
            fixed: {
              DEFAULT: "rgb(var(--color-on-primary-fixed) / <alpha-value>)",
              variant:
                "rgb(var(--color-on-primary-fixed-variant) / <alpha-value>)",
            },
          },
          secondary: {
            DEFAULT: "rgb(var(--color-on-secondary) / <alpha-value>)",
            accent: "rgb(var(--color-on-secondary-accent) / <alpha-value>)",
            card: "rgb(var(--color-on-secondary-card) / <alpha-value>)",
            container:
              "rgb(var(--color-on-secondary-container) / <alpha-value>)",
            muted: "rgb(var(--color-on-secondary-muted) / <alpha-value>)",
            popover: "rgb(var(--color-on-secondary-popover) / <alpha-value>)",
            secondary:
              "rgb(var(--color-on-secondary-secondary) / <alpha-value>)",
            vibrant: "rgb(var(--color-on-vibrant-secondary) / <alpha-value>)",
            fixed: {
              DEFAULT: "rgb(var(--color-on-secondary-fixed) / <alpha-value>)",
              variant:
                "rgb(var(--color-on-secondary-fixed-variant) / <alpha-value>)",
            },
          },
          tertiary: {
            DEFAULT: "rgb(var(--color-on-tertiary) / <alpha-value>)",
            accent: "rgb(var(--color-on-tertiary-accent) / <alpha-value>)",
            card: "rgb(var(--color-on-tertiary-card) / <alpha-value>)",
            container:
              "rgb(var(--color-on-tertiary-container) / <alpha-value>)",
            muted: "rgb(var(--color-on-tertiary-muted) / <alpha-value>)",
            popover: "rgb(var(--color-on-tertiary-popover) / <alpha-value>)",
            secondary:
              "rgb(var(--color-on-tertiary-secondary) / <alpha-value>)",
            vibrant: "rgb(var(--color-on-vibrant-tertiary) / <alpha-value>)",
            fixed: {
              DEFAULT: "rgb(var(--color-on-tertiary-fixed) / <alpha-value>)",
              variant:
                "rgb(var(--color-on-tertiary-fixed-variant) / <alpha-value>)",
            },
          },
          success: {
            DEFAULT: "rgb(var(--color-on-success) / <alpha-value>)",
            accent: "rgb(var(--color-on-success-accent) / <alpha-value>)",
            card: "rgb(var(--color-on-success-card) / <alpha-value>)",
            container: "rgb(var(--color-on-success-container) / <alpha-value>)",
            muted: "rgb(var(--color-on-success-muted) / <alpha-value>)",
            popover: "rgb(var(--color-on-success-popover) / <alpha-value>)",
            secondary: "rgb(var(--color-on-success-secondary) / <alpha-value>)",
            vibrant: "rgb(var(--color-on-vibrant-success) / <alpha-value>)",
          },
          info: {
            DEFAULT: "rgb(var(--color-on-info) / <alpha-value>)",
            accent: "rgb(var(--color-on-info-accent) / <alpha-value>)",
            card: "rgb(var(--color-on-info-card) / <alpha-value>)",
            container: "rgb(var(--color-on-info-container) / <alpha-value>)",
            muted: "rgb(var(--color-on-info-muted) / <alpha-value>)",
            popover: "rgb(var(--color-on-info-popover) / <alpha-value>)",
            secondary: "rgb(var(--color-on-info-secondary) / <alpha-value>)",
            vibrant: "rgb(var(--color-on-vibrant-info) / <alpha-value>)",
          },
          warning: {
            DEFAULT: "rgb(var(--color-on-warning) / <alpha-value>)",
            accent: "rgb(var(--color-on-warning-accent) / <alpha-value>)",
            card: "rgb(var(--color-on-warning-card) / <alpha-value>)",
            container: "rgb(var(--color-on-warning-container) / <alpha-value>)",
            muted: "rgb(var(--color-on-warning-muted) / <alpha-value>)",
            popover: "rgb(var(--color-on-warning-popover) / <alpha-value>)",
            secondary: "rgb(var(--color-on-warning-secondary) / <alpha-value>)",
            vibrant: "rgb(var(--color-on-vibrant-warning) / <alpha-value>)",
          },
          danger: {
            DEFAULT: "rgb(var(--color-on-danger) / <alpha-value>)",
            accent: "rgb(var(--color-on-danger-accent) / <alpha-value>)",
            card: "rgb(var(--color-on-danger-card) / <alpha-value>)",
            container: "rgb(var(--color-on-danger-container) / <alpha-value>)",
            muted: "rgb(var(--color-on-danger-muted) / <alpha-value>)",
            popover: "rgb(var(--color-on-danger-popover) / <alpha-value>)",
            secondary: "rgb(var(--color-on-danger-secondary) / <alpha-value>)",
            vibrant: "rgb(var(--color-on-vibrant-danger) / <alpha-value>)",
          },
          surface: {
            DEFAULT: "rgb(var(--color-on-surface) / <alpha-value>)",
            variant: "rgb(var(--color-on-surface-variant) / <alpha-value>)",
          },
        },
      },
      borderRadius: {
        lg: "var(--border-radius)",
        md: "calc(var(--border-radius) * .67)",
        sm: "calc(var(--border-radius) * .33 )",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;

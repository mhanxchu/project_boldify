import type { Config } from "tailwindcss";

/**
 * Tailwind CSS 4 Configuration
 * 
 * Note: Tailwind CSS 4 uses a CSS-first approach with @theme directive in globals.css.
 * This config file is optional but useful for:
 * - Content path configuration
 * - Additional theme extensions
 * - Plugin configuration
 * 
 * Most theme customization is done via CSS variables in globals.css using @theme inline.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // In Tailwind 4, theme is primarily configured via CSS @theme directive
  // This extend section complements the CSS-based configuration
  theme: {
    extend: {
      // Colors are defined via CSS variables in globals.css using @theme inline
      // These mappings ensure TypeScript autocomplete works correctly
      colors: {
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        card: {
          DEFAULT: "hsl(var(--color-card))",
          foreground: "hsl(var(--color-card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--color-popover))",
          foreground: "hsl(var(--color-popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--color-primary))",
          foreground: "hsl(var(--color-primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--color-secondary))",
          foreground: "hsl(var(--color-secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--color-muted))",
          foreground: "hsl(var(--color-muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--color-accent))",
          foreground: "hsl(var(--color-accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--color-destructive))",
          foreground: "hsl(var(--color-destructive-foreground))",
        },
        border: "hsl(var(--color-border))",
        input: "hsl(var(--color-input))",
        ring: "hsl(var(--color-ring))",
        gold: {
          DEFAULT: "hsl(var(--color-gold))",
          light: "hsl(var(--color-gold-light))",
          dark: "hsl(var(--color-gold-dark))",
          subtle: "hsl(var(--color-gold-subtle))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        "serif-heading": ["var(--font-serif-heading)", "Georgia", "serif"],
        "serif-body": ["var(--font-serif-body)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;


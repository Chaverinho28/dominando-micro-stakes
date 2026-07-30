/** Central design tokens consumed by CSS custom properties and future component variants. */
export const theme = {
  colors: { background: '#050814', surface: '#0f172a', text: '#f8fafc', muted: '#94a3b8', primary: '#10b981', danger: '#fb7185', warning: '#fbbf24' },
  typography: { fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif', base: '1rem', scale: { sm: '.875rem', lg: '1.125rem', xl: '1.5rem' } },
  spacing: { xs: '4px', sm: '8px', md: '16px', lg: '24px', xl: '32px' },
  radius: { sm: '8px', md: '12px', lg: '16px', pill: '999px' },
  shadows: { card: '0 12px 30px rgba(2, 6, 23, .22)', floating: '0 20px 50px rgba(2, 6, 23, .45)' },
} as const

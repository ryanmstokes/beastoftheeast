import type { Theme } from 'theme-ui'

export const theme: Theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    parragraph: '#4a4a4a',
  },
  sizes: {
    full: '100%',
    container: '1028px',
    logo: '50px',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 64],
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
    burger: {
      color: 'text',
      background: 'none',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    },
  },
  text: {
    heading: {
      color: 'text',
      fontFamily: 'heading',
      fontSize: [5, 6],
      fontWeight: '400',
      lineHeight: '115%',
    },
    paragraph: {
      fontSize: [4, 3],
      color: 'dark',
      fontWeight: '100',
    },
  },
  forms: {
    label: {
      fontFamily: 'heading',
      fontSize: 3,
    },
  },
  cards: {
    primary: {
      background: '#f4f4f4',
    },
  },
}

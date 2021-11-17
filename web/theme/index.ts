import type { Theme } from 'theme-ui'

export const theme: Theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    dark: {
      primary: '#000',
      secondary: '#2d2b2b',
    },
    primary: '#33e',
    secondary: 'blue',
    paragraph: '#4a4a4a',
    light: '#fff',
    background: {
      primary: '#fff',
      secondary: 'whitesmoke',
      transparent: 'rgba(255,255,255,0)',
    },
  },
  borders: {
    primary: '1px solid',
  },
  sizes: {
    full: '100%',
    container: '1028px',
    containerMobile: '95%',
    logo: '50px',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 64],
  buttons: {
    primary: {
      color: 'light',
      bg: 'dark.primary',
      '&:hover': {
        backgroundColor: 'dark.secondary',
        color: 'grey',
      },
    },
    secondary: {
      color: 'light',
      bg: 'background.secondary',
    },
    burger: {
      color: 'dark.primary',
      background: 'none',
      alignItems: 'center',
      cursor: 'pointer',
      display: ['flex', 'none'],
      lineHeight: '11px',
      marginTop: '10px',
      opacity: 0.8,
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

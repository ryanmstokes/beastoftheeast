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
    light: {
      primary: '#fff',
      secondary: '#919191',
    },
    background: {
      primary: '#fff',
      secondary: 'whitesmoke',
      transparent: 'rgba(255,255,255,0)',
      icon: '#2d2b2b',
      dark: '#2d2b2b',
    },
  },
  borders: {
    primary: '1px solid #bdbcbc',
  },
  sizes: {
    full: '100%',
    container: ['95%', '95%', '1028px'],
    containerMobile: '95%',
    logo: '50px',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 40, 48, 64],
  buttons: {
    primary: {
      color: 'light.primary',
      bg: 'dark.primary',
      '&:hover': {
        backgroundColor: 'dark.secondary',
        color: 'grey',
      },
      pl: 4,
      pr: 4,
      pt: 3,
      pb: 3,
      fontSize: 2,
      fontFamily: 'heading',
      cursor: 'pointer',
    },
    secondary: {
      color: 'light.primary',
      bg: 'background.secondary',
    },
    nav: {
      color: 'white',
      bg: 'dark.secondary',
      '&:hover': {
        backgroundColor: 'dark.secondary',
        color: 'grey',
      },
      px: 3,
      pt: 2,
      pb: 2,
      fontSize: 2,
      fontFamily: 'heading',
    },
    burger: {
      color: 'dark.primary',
      background: 'none',
      alignItems: 'center',
      cursor: 'pointer',
      display: ['flex', 'flex', 'none'],
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
      mt: 2,
      lineHeight: '1.7rem',
    },
    footer: {
      fontSize: 2,
      fontWeight: '100',
    },
  },
  links: {
    nav: {
      mr: 3,
      fontSize: [1, 2, 2],
      fontFamily: 'heading',
      color: 'light.secondary',
      textDecoration: 'none',
      ':hover': {
        color: 'dark.secondary',
      },
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
  layout: {
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      width: ['containerMobile', 'containerMobile'],
      alignItems: 'center',
    },
  },
}

const footer = {
  display: ['none', 'Flex'],
  position: 'fixed',
  bottom: 0,
  bg: 'white',
  height: '80px',
  width: 'full',
  '@media screen and (max-height: 850px) and (min-width: 1000px)': {
    display: 'none',
  },
  alignItems: 'center',
}
const nav = {
  alignSelf: 'center',
  display: ['none', 'flex'],
  alignItems: 'center',
}
const container = {
  display: 'flex',
  justifyContent: 'space-between',
  width: ['containerMobile', 'containerMobile', 'containerMobile', 'full'],
  alignItems: 'center',
}

export { footer, nav, container }

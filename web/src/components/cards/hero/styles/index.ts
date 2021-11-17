const hero = {
  position: 'relative',
  width: 'full',
  display: 'block',
  margin: '0 auto',
  marginTop: '6%',
  borderRadius: '19px',
  '-webkit-scrollbar': {
    display: 'none',
  },
  p: '35px',
  pb: '47px',
  maxWidth: ['90%', '490px'],
  bg: 'transparent',
}

const fakeBackdrop = {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  width: 'full',
  opacity: '0.8',
  backgroundColor: 'background.primary',
  borderRadius: '19px',
  '-webkit-scrollbar': {
    display: 'none',
  },
  zIndex: -1,
}

export { hero, fakeBackdrop }

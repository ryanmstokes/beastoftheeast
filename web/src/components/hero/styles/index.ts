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
  bg: 'rgba(255,255,255,0)',
}
const fakeBackdrop = {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  width: 'full',
  opacity: '0.8',
  bg: 'white',
  borderRadius: '19px',
  '-webkit-scrollbar': {
    display: 'none',
  },
  zIndex: -1,
}

const icon = {
  marginTop: '3.5px',
}

const dateWrap = {
  border: '1px solid #999',
  p: 2,
  borderRadius: '4px',
  cursor: 'pointer',
  bg: 'white',
  mb: 0,
}
const dateField = {
  width: '50%',
  cursor: 'pointer',
}

const chevronDown = {
  color: '#424040',
}

export { hero, fakeBackdrop, icon, dateWrap, dateField, chevronDown }

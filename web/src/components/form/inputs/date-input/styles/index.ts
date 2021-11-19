const dateWrap = {
  border: 'primary',
  p: 0,
  mb: 0,
  width: 'full',
}

const dateInput = {
  border: 0,
  overflow: 'hidden',
  width: '100%',
  color: '#2d2b2b',
  mb: 0,
  px: 3,
  py: '13px',
  '::-webkit-calendar-picker-indicator': {
    cursor: 'pointer',
  },
  backgroundColor: 'background.secondary',
  fontFamily: 'body',
}

export { dateWrap, dateInput }

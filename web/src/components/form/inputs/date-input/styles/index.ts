const dateWrap = {
  border: 'primary',
  borderColor: 'dark.secondary',
  p: 0,
  borderRadius: '4px',
  mb: 0,
}

const dateInput = {
  border: 0,
  overflow: 'hidden',
  width: '100%',
  color: '#2d2b2b',
  mb: 0,
  px: 3,
  py: '13px',
  borderRadius: '4px',
  '::-webkit-calendar-picker-indicator': {
    cursor: 'pointer',
  },
  backgroundColor: 'background.secondary',
  fontFamily: 'body',
}

export { dateWrap, dateInput }

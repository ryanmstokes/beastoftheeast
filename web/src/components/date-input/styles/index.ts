const dateWrap = {
  border: '1px solid black',
  p: 0,
  borderRadius: '4px',
  bg: 'whitesmoke',
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
  bg: 'whitesmoke',
}

export { dateWrap, dateInput }

const iconWrap = {
  ml: -15,
  alignSelf: 'center',
  position: 'absolute',
  right: 3,
  top: '12px',
}

const iconStyle = {
  color: 'colors.dark.primary',
}

const selectFieldWrap = {
  bg: 'background.secondary',
  border: 'primary',
  borderColor: 'colors.dark.secondary',
  mb: 3,
  cursor: 'pointer',
  position: 'relative',
}

const selectField = {
  alignSelf: 'stretch',
  p: 3,
  width: 'full',
  border: 'none',
  cursor: 'pointer',
  ['-moz-appearance']: 'none',
  ['-webkit-appearance']: 'none',
  zIndex: 99,
  background: 'transparent',
}

export { iconWrap, iconStyle, selectFieldWrap, selectField }

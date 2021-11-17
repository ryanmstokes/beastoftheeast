const videoBG = {
  position: 'absolute',
  zIndex: -1,
  width: ['auto', 'auto', 'auto', '100%'],
  height: ['100%', '100%', '100%', 'auto'],
  minHeight: '750px',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  ml: ['-60%', 0],
  '@media screen and (max-height: 850px) and (min-width: 1000px)': {
    width: '100%',
    height: 'auto',
  },
  '@media screen and (min-height: 670px) and (min-width: 1000px) and (max-width: 1500px)':
    {
      width: 'auto',
      height: '100%',
    },
  '@media screen and (min-height: 1000px) and (max-width: 1700px)': {
    width: 'auto',
    height: '100%',
  },
}

export { videoBG }

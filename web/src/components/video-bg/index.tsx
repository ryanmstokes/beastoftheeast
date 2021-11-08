const VideoBG = () => {
  const videoBG = {
    position: 'absolute',
    zIndex: -1,
    width: 'auto',
    height: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }
  return (
    <video id="background-video" loop autoPlay style={videoBG}>
      <source src="/stockvideo.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoBG

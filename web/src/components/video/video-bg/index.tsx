/** @jsx jsx */
import { jsx } from 'theme-ui'
import { videoBG } from 'src/components/video/video-bg/styles'

const VideoBG = () => (
  <video id="background-video" loop autoPlay sx={videoBG}>
    <source src="/stockvideo.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>
)

export default VideoBG

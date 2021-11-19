/** @jsxRuntime classic */
import { MetaTags } from '@redwoodjs/web'
import Hero from 'src/components/cards/hero'
import VideoBG from 'src/components/video/video-bg'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        description="Holiday Campervanns for rent in Scotland."
      />
      <VideoBG />
      <Hero />
    </>
  )
}

export default HomePage

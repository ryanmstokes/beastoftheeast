/** @jsxRuntime classic */
import { MetaTags } from '@redwoodjs/web'
import VideoBG from 'src/components/video/video-bg'
import Hero from 'src/components/cards/hero'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Home"
        description="Holiday Campervans for rent in Scotland."
      />
      <VideoBG />
      <Hero />
    </>
  )
}

export default HomePage

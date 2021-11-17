/** @jsxRuntime classic */
import { MetaTags } from '@redwoodjs/web'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../../../theme/index'
import AppBar from 'src/components/global/app-bar'
import Hero from 'src/components/cards/hero'
import VideoBG from 'src/components/video/video-bg'
import Footer from 'src/components/global/footer'

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <MetaTags
        title="Home"
        description="Holiday Campervanns for rent in Scotland."
      />
      <VideoBG />
      <AppBar />
      <Hero />
      <Footer />
    </ThemeProvider>
  )
}

export default HomePage

/** @jsxRuntime classic */
import { MetaTags } from '@redwoodjs/web'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../../../theme/index'
import AppBar from 'src/components/app-bar/'
import Hero from 'src/components/hero'
import VideoBG from 'src/components/video-bg'
import Footer from 'src/components/footer'

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

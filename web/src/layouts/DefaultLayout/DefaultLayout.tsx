import AppBar from 'src/components/global/app-bar'
import Footer from 'src/components/global/footer'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../../../theme/index'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default DefaultLayout

import AppBar from 'src/components/global/app-bar'
import Footer from 'src/components/global/footer'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../../../theme/index'

type DefaultLayoutProps = {
  children?: React.ReactNode
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  console.log('theme', props)
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar />
        {props.children}
        <Footer theme={props.theme} />
      </ThemeProvider>
    </>
  )
}

export default DefaultLayout

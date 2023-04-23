import {ThemeProvider} from 'styled-components'
import ScrollToTop from './Components/ScrollToTop'
import {Outlet} from 'react-router-dom'
import theme from './theme'

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <ScrollToTop />
                <Outlet />
            </ThemeProvider>
        </>
    )
}

export default App

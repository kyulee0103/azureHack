import ScrollToTop from './Components/ScrollToTop'
import {Outlet} from 'react-router-dom'

function App() {
    return (
        <>
            <ScrollToTop />
            <Outlet />
        </>
    )
}

export default App

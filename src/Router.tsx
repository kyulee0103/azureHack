import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Main from './Pages/Main'
import NotFound from './Pages/NotFound'
import Chat from './Pages/Chat'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Main />,
            },
            {
                path: 'chat',
                element: <Chat />,
            },
        ],
        errorElement: <NotFound />,
    },
])

export default router

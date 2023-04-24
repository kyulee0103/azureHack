import {createBrowserRouter} from 'react-router-dom'
import {isMobile} from 'react-device-detect'
import App from './App'
import Main from './Pages/Main'
import NotFound from './Pages/NotFound'
import Chat from './Pages/Chat'
import KaKaoLogin from './Pages/Login/KaKaoLogin'
import Hello from './Pages/Hello'
import Again from './Pages/Again'
import Register from './Pages/Login/Register'
import Result from './Pages/Result'
import PCHello from './Pages/PCHello'

const router = createBrowserRouter([
    isMobile
        ? {
              path: '/',
              element: <App />,
              children: [
                  {path: '', element: <Hello />},
                  {
                      path: '/main',
                      element: <Main />,
                  },
                  {
                      path: 'home',
                      element: <Again />,
                  },
                  {
                      path: 'register',
                      element: <Register />,
                  },
                  {
                      path: '/kakaoLogin',
                      element: <KaKaoLogin />,
                  },
                  {
                      path: '/chat',
                      element: <Chat />,
                  },
                  {
                      path: '/result',
                      element: <Result />,
                  },
              ],
              errorElement: <NotFound />,
          }
        : {
              path: '/',
              element: <App />,
              children: [
                  {
                      path: '/',
                      element: <PCHello></PCHello>,
                  },
              ],
              errorElement: <NotFound />,
          },
])

export default router

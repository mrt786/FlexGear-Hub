import About from './About.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Navbar from './Navbar.jsx'
import Payment from './Payment.jsx'
import Register from './Register.jsx'
import {
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const Layout = ({ children }) => (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );  
  const router  = createBrowserRouter([{
          path:'/',
          element: 
            <Layout>
            <Home/>
            </Layout>,
      },
      {
        path:'/about',
        element: 
          <Layout>
          <About/>
          </Layout>,
      },
      {
        path:'/register',
        element: 
          <Layout>
          <Register/>
          </Layout>,
      },
      {
        path:'/login',
        element: 
          <Layout>
          <Login/>
          </Layout>,
      },
    ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

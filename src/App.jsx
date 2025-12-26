import './App.css'
import Layout from './components/layout/layout.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from "./components/custom-components/ScrollToTop.jsx";
import KidsCorner from './pages/KidsCorner.jsx'
import IndividualBlog from './pages/IndividualBlog.jsx'
import Tools from './pages/Tools.jsx'
import Blogs from './pages/Blogs.jsx'
import Resources from './pages/Resources.jsx'
import { Toaster } from './components/ui/toaster'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import CookiePolicy from './pages/CookiePolicy.jsx'

function App() {


  return (
    <>
    <ScrollToTop/>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/kit-corner' element={<KidsCorner/>}/>
           <Route path='/individual-blog' element={<IndividualBlog/>}/> {/* /stories/:id */}
           <Route path='/tools' element={<Tools/>}/> 
           <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/resources' element={<Resources/>}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>  {/* ← ADD */}
          <Route path='/terms-of-service' element={<TermsOfService/>}/>  {/* ← ADD */}
          <Route path='/cookie-policy' element={<CookiePolicy/>}/>  {/* ← ADD */}
        </Routes>
      </Layout>
      <Toaster />
    </>
  )
}

export default App

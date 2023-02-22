import Navbar from './Components/Navbar'
import Hero from './Components/Home/Hero'
import Project from './Components/Home/Project.jsx'
import Projects from './Components/Projects.jsx'
import Testomonial from './Components/Home/Testimonials'
import About from './Components/About'
import { Route, Routes } from 'react-router-dom'
import FollowUs from './Components/FollowUs'
import Skills from './Components/Home/Skills'
import Footer from './Components/Footer'
import BlogPage from './Components/Blog/BlogPage'
function App() {
  return (
    <>
   <Navbar/>
    <Routes>
      <Route path='/' element={<><Hero/><Project/><Testomonial/><Skills/><Footer/></>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/follow' element={<FollowUs/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
    </Routes>

    </>
  )
}

export default App

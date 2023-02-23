import { Route, Routes } from 'react-router-dom'
import ProjectsPage from './Components/Pages/Projects/Projects.jsx'
import AboutPage from './Components/Pages/About/About'
import FollowUsPage from './Components/Pages/FollowUs/FollowUs'
import Navbar from './Components/common/Navbar'
import Hero from './Components/Pages/Home/Hero'
import Project from './Components/Pages/Home/Project.jsx'
import Testomonial from './Components/Pages/Home/Testimonials'
import Skills from './Components/Pages/Home/Skills'
import Footer from './Components/common/Footer'
import BlogPage from './Components/Pages/Blog/BlogPage'
import Awards from './Components/Pages/Home/AwardsAndCertificates'
const HomePage = () =>{
  return(
    <>
    <Hero/>
    <Project/>
    <Testomonial/>
    <Skills/>
    <Awards/>
    <Footer/>
    </>
  )
}
function App() {
  return (
    <>
   <Navbar/>
    <Routes>
      <Route 
        path='/' 
        element={<HomePage/>}/>
      <Route 
        path='/about' 
        element={<AboutPage/>}/>
      <Route 
        path='/follow' 
        element={<FollowUsPage/>}/>
      <Route 
        path='/projects' 
        element={<ProjectsPage/>}/>
      <Route 
        path='/blog' 
        element={<BlogPage/>}/>
    </Routes>
    </>
  )
}

export default App

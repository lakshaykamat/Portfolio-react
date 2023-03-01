import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/common/Navbar'
import HomePage  from './Components/Pages/Home/HomePage'
import ProjectsPage from './Components/Pages/Projects/ProjectsPage.jsx'
import AboutPage from './Components/Pages/About/AboutPage'
import { about } from './assets/about'
import { projects } from './assets/projects'
import {testimonials} from './assets/testimonials'
import {skills} from './assets/skills'
import {awards} from './assets/certificates'
import { socialMediaLinks } from './assets/socialMediaLinks';
import Footer from './Components/common/Footer'
function App() {
  return (
    <div className='font-[Montserrat]'>
   <Navbar/>
    <Routes>
      <Route 
        path='/' 
        element={<HomePage 
        testomonials={testimonials}
        skills={skills}
        awards={awards}
        />}/>
      <Route 
        path='/about' 
        element={
        <AboutPage
        about={about}
        socialMediaLinks={socialMediaLinks}/>}/>
      {/* <Route 
        path='/follow' 
        element={
        <FollowUsPage
        socialMediaLinks={socialMediaLinks}/>}/> */}
      <Route 
        path='/projects' 
        element={<ProjectsPage
        projects={projects}/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App

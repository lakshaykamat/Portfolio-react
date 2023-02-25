import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/common/Navbar'
import HomePage  from './Components/Pages/Home/HomePage'
import ProjectsPage from './Components/Pages/Projects/ProjectsPage.jsx'
import FollowUsPage from './Components/Pages/FollowUs/FollowUs'
import AboutPage from './Components/Pages/About/About'
import BlogPage from './Components/Pages/Blog/BlogPage'
import {testimonials} from './assets/testimonials'
import {skills} from './assets/skills'
import {awards} from './assets/certificates'
import { socialMediaLinks } from './assets/socialMediaLinks';
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
        element={<AboutPage/>}/>
      <Route 
        path='/follow' 
        element={<FollowUsPage
        socialMediaLinks={socialMediaLinks}/>}/>
      <Route 
        path='/projects' 
        element={<ProjectsPage/>}/>
      <Route 
        path='/blog' 
        element={<BlogPage/>}/>
    </Routes>
    </div>
  )
}

export default App

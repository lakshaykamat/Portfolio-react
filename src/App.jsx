import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/common/Navbar'
import HomePage  from './Components/Pages/Home/HomePage'
import ProjectsPage from './Components/Pages/Projects/ProjectsPage.jsx'
import FollowUsPage from './Components/Pages/FollowUs/FollowUs'
import AboutPage from './Components/Pages/About/About'
import BlogPage from './Components/Pages/Blog/BlogPage'

function App() {
  return (
    <div className='font-[Montserrat]'>
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
    </div>
  )
}

export default App

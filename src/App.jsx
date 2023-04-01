import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/common/Navbar'
import HomePage from './Components/Pages/Home/HomePage'
import ProjectsPage from './Components/Pages/Projects/ProjectsPage.jsx'
import AboutPage from './Components/Pages/About/AboutPage'
import Footer from './Components/common/Footer'
import BlogPage from './Components/Pages/Blog/BlogPage'


import { about } from './assets/about'
import { projects } from './assets/projects'
import { testimonials } from './assets/testimonials'
import { skills } from './assets/skills'
import { awards } from './assets/certificates'
import { socialMediaLinks } from './assets/socialMediaLinks';
import BlogRead from './Components/Pages/Blog/BlogRead'


function App () {
  return (
    <div className='font-[Montserrat]'>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<HomePage
            testimonials={testimonials}
            skills={skills}
            awards={awards}
          />} />
        <Route
          path='/about'
          element={
            <AboutPage
              about={about}
              socialMediaLinks={socialMediaLinks} />} />
        <Route
          path='/blog'
          element={<BlogPage />} />
        <Route
          path='/blog/:id'
          element={<BlogRead />} />
        <Route
          path='/projects'
          element={<ProjectsPage
            projects={projects} />} />
        <Route
          path='*'
          element={<h1 className='text-4xl text-center'>Page not found</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

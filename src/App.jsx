import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Projects from './Components/Project'
import Testomonial from './Components/Testimonials'
import About from './Components/About'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <>
   <Navbar/>
    <Routes>
      <Route path='/' element={<><Hero/><Projects/><Testomonial/></>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
   {/* <Hero/>
   <Projects/>
   <Testomonial/>
   <About/> */}
    </>
  )
}

export default App

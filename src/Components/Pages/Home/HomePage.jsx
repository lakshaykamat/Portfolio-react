import Hero from './Hero'
import Project from './Project.jsx'
import Testomonial from './Testimonials'
import Skills from './Skills'
import Awards from './AwardsAndCertificates'
import Footer from './../../common/Footer'
import Resume from './ResumeCV'
const HomePage = () =>{
    return(
      <>
      <Hero/>
      <Testomonial/>
      {/* <Project/> */}
      <Resume/>
      <Skills/>
      <Awards/>
      <Footer/>
      </>
    )
  }
  export default HomePage
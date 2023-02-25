import Hero from './Hero'
import Project from './Project.jsx'
import Testomonial from './Testimonials'
import Skills from './Skills'
import AwardsAndCertificates from './AwardsAndCertificates'
import Footer from './../../common/Footer'
import Resume from './ResumeCV'
const HomePage = ({testomonials,skills,awards}) =>{
    return(
      <>
      <Hero/>
      <Testomonial
      testimonials={testomonials}/>
      {/* <Project/> */}
      <Resume/>
      <Skills
      skills={skills}/>
      <AwardsAndCertificates
      
      awards={awards}/>
      <Footer/>
      </>
    )
  }
  export default HomePage
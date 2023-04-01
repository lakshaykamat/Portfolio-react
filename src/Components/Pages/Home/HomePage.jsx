import Hero from './Hero'
import Project from './Project.jsx'
import Testimonials from './Testimonials'
import Skills from './Skills'
import AwardsAndCertificates from './AwardsAndCertificates'
import Resume from './ResumeCV'
import resumePDF from '../../../../public/resume.pdf'
const HomePage = ({testimonials,skills,awards}) =>{
  const para = {
    Hero: "I'm a web developer with a passion for creating beautiful and functional websites. I specialize in front-end development and have experience with a variety of technologies including HTML, CSS, JavaScript, and React.",
    resume: "Hello, my name is Lakshay Kamat, and I am a web developer with three years of experience in the field. I have worked with many different languages, including React, Node.js, Django, and Angular. Additionally, I have experience working as a backend developer. I have a strong understanding of programming concepts, including data structures and algorithms, object-oriented programming, and SQL."
  }
    return(
      <>
      <Hero
      para={para.Hero}/>
      <Testimonials
      testimonials={testimonials}/>
      {/* <Project/> */}
      <Resume
      pdf={resumePDF}
      para={para.resume}/>
      <Skills
      skills={skills}/>
      <AwardsAndCertificates
      awards={awards}/>
      </>
    )
  }
  export default HomePage
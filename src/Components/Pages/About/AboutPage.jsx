import React from "react";
import AboutSection from "./AboutSection";
import FollowSection from './FollowSection'

const AboutPage = (props) => {
  return (
    <>
   <AboutSection
   para={props.about.para}
   degree={props.about.degree}
   image={props.about.image}
   achievements={props.about.achievements}/>
   <FollowSection
   socialMediaLinks={props.socialMediaLinks}/>
    </>
  );
};

export default AboutPage;

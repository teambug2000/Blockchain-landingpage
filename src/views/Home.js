import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Brand from '../components/sections/Brand';
import Testimonial from '../components/sections/Testimonial';
import About from '../components/sections/About';

const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <Brand invertMobile imageFill className="illustration-section-02" />
      {/* About */}
      <About invertMobile imageFill className="illustration-section-02" />
      <FeaturesSplit invertMobile imageFill className="illustration-section-02" />
      <Testimonial />
    </>
  );
}

export default Home;
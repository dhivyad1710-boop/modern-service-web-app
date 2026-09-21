import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Loader from "./components/Loader";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import ReviewSlider from "./components/ReviewSlider";
import FAQ from "./components/FAQ";
import ReviewForm from "./components/ReviewForm";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {


  const [loading, setLoading] = useState(true);



  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);


    return () => clearTimeout(timer);

  }, []);




  if (loading) {
    return <Loader />;
  }




  return (

    <div className="page-content">


      <Navbar />


      <Hero />


      {/* DIVIDER */}

      <div className="section-divider">
        <span></span>
      </div>



      <Services />


      {/* DIVIDER */}

      <div className="section-divider">
        <span></span>
      </div>


      <WhyChooseUs />


      {/* DIVIDER */}

      <div className="section-divider">
        <span></span>
      </div>



      <AboutUs />


      {/* DIVIDER */}

      <div className="section-divider">
        <span></span>
      </div>



      <Projects />


      {/* DIVIDER */}

      <div className="section-divider">
        <span></span>
      </div>



      {/* TESTIMONIALS */}

      <Testimonials />


      {/* DIVIDER */}

      <div className="section-divider">
        <span></span>
      </div>



      {/* LIVE CUSTOMER REVIEWS */}

      <ReviewSlider />


      {/* DIVIDER */}

      <div className="section-divider">
        <span></span>
      </div>



      {/* FAQ */}

      <FAQ />


      {/* DIVIDER */}

      <div className="section-divider">
        <span></span>
      </div>



      {/* REVIEW FORM */}

      <ReviewForm />


      {/* DIVIDER */}

      <div className="section-divider">
        <span></span>
      </div>



      {/* CONTACT */}

      <Contact />


      {/* DIVIDER */}

      <div className="section-divider">
        <span></span>
      </div>



      {/* FOOTER */}

      <Footer />


    </div>

  );
}


export default App;
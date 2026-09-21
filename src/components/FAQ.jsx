import { useState } from "react";
import "./FAQ.css";

import {
  FaBolt,
  FaSolarPanel,
  FaFaucet,
  FaHome,
} from "react-icons/fa";


const categories = [
  {
    id: "electrical",
    title: "Electrical",
    subtitle: "Power Solutions",
    icon: <FaBolt />,
    questions: [
      {
        question: "What electrical services do you provide?",
        answer:
          "Bright Home Solution provides electrical wiring, repairs, lighting installation, appliance installation, maintenance, and customised electrical solutions for residential and commercial spaces.",
      },
      {
        question: "Do you handle electrical repairs?",
        answer:
          "Yes. Our team handles electrical issues, troubleshooting, repairs, and safety inspections with professional service.",
      },
      {
        question: "Do you install new lighting systems?",
        answer:
          "Yes. We provide modern lighting installation solutions including indoor, outdoor, and energy-efficient lighting setups.",
      },
    ],
  },

  {
    id: "solar",
    title: "Solar",
    subtitle: "Clean Energy",
    icon: <FaSolarPanel />,
    questions: [
      {
        question: "Do you provide solar installation?",
        answer:
          "Yes. We provide professional solar installation solutions for residential and commercial properties.",
      },
      {
        question: "Do you provide solar maintenance?",
        answer:
          "Yes. We provide support and maintenance to keep solar systems working efficiently.",
      },
    ],
  },

  {
    id: "plumbing",
    title: "Plumbing",
    subtitle: "Water Solutions",
    icon: <FaFaucet />,
    questions: [
      {
        question: "What plumbing services do you provide?",
        answer:
          "We provide plumbing installation, repairs, maintenance, leakage solutions, and customised plumbing services.",
      },
      {
        question: "Do you handle new plumbing installations?",
        answer:
          "Yes. We support plumbing requirements for new constructions, renovations, and property improvements.",
      },
    ],
  },

  {
    id: "home",
    title: "Home",
    subtitle: "Complete Solutions",
    icon: <FaHome />,
    questions: [
      {
        question: "Do you provide residential and commercial services?",
        answer:
          "Yes. We provide complete solutions for homes, offices, shops, and commercial properties.",
      },
      {
        question: "Can you handle customised projects?",
        answer:
          "Yes. We provide solutions based on your property requirements, budget, and preferences.",
      },
    ],
  },
];


function FAQ() {

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const [openQuestion, setOpenQuestion] = useState(null);


  return (

    <section 
      id="faq"
      className="faq-section"
    >


      <div className="faq-header">

        <span>COMMON QUESTIONS</span>

        <h2>
          Frequently Asked Questions
        </h2>

        <p>
          Find answers about our electrical,
          solar, plumbing, and home solutions.
        </p>

      </div>



      <div className="service-selector">


        {categories.map((category)=>(
          
          <button
            key={category.id}
            className={
              activeCategory.id === category.id
              ? "service-card active"
              : "service-card"
            }

            onClick={()=>{

              setActiveCategory(category);
              setOpenQuestion(null);

            }}

          >

            <div className="service-icon">

              {category.icon}

            </div>


            <h3>
              {category.title}
            </h3>


            <p>
              {category.subtitle}
            </p>


          </button>

        ))}


      </div>



      <div className="active-service">


        <div className="active-icon">

          {activeCategory.icon}

        </div>


        <h3>
          {activeCategory.title} Solutions
        </h3>


      </div>




      <div className="faq-list">


        {activeCategory.questions.map((item,index)=>(


          <div
            className={
              openQuestion === index
              ? "faq-item open"
              : "faq-item"
            }

            key={index}

          >


            <button
              onClick={()=>{

                setOpenQuestion(
                  openQuestion === index
                  ? null
                  : index
                );

              }}

            >

              <span>
                {item.question}
              </span>


              <b>
                {openQuestion === index ? "−" : "+"}
              </b>


            </button>



            <div className="faq-answer">

              <p>
                {item.answer}
              </p>

            </div>



          </div>


        ))}


      </div>


    </section>
  );
}


export default FAQ;
import React, { useState } from 'react';
import './Faq.css';
import FAQ from './FAQ';

const FaqPage = () => {
  const [faqs, setFaqs] = useState([
    {
      question: ' What is medical waste?',
      answer:
        'Medical waste is any waste that is generated in the diagnosis, treatment, or immunization of humans or animals, in research pertaining thereto, or in the production or testing of biologicals. This includes items like used needles, syringes, gloves, bandages, and other materials that may have been in contact with bodily fluids.',
      open: true,
    },
    {
      question: ' Why is proper disposal of medical waste important?',
      answer:
        'Proper disposal is crucial to prevent the spread of infections, protect public health, ensure safety for healthcare workers and waste handlers, and minimize environmental impact.',
      open: false,
    },
    {
      question: ' What are the main categories of medical waste?',
      answer:
        ' Medical waste is typically categorized into infectious waste, hazardous (chemical and pharmaceutical) waste, sharps waste, pathological waste, and general (non-hazardous) medical waste.',
      open: false,
    },
    {
      question: 'How should medical waste be segregated?',
      answer:
        'Medical waste should be segregated at the point of generation into appropriate containers. For example, sharps should go into puncture-resistant containers, while infectious waste should be placed in biohazard bags.',
      open: false,
    },
    {
      question:
        ' What are the recommended methods for disposing of medical waste?',
      answer:
        ' Common disposal methods include incineration, autoclaving (steam sterilization), chemical disinfection, and microwave treatment. The choice of method depends on the type of waste and local regulations.',
      open: false,
    },
    {
      question: ' What are sharps and how should they be disposed of?',
      answer:
        ' Sharps are items that can puncture or cut skin, such as needles, scalpels, and broken glass. They should be disposed of in rigid, puncture-resistant containers that are properly labeled.',
      open: false,
    },
    {
      question: ' What regulations govern the disposal of medical waste?',
      answer:
        'Regulations vary by country and region. In the United States, for example, the Environmental Protection Agency (EPA) and Occupational Safety and Health Administration (OSHA) have guidelines for medical waste management.',
      open: false,
    },
    {
      question: '  How should COVID-19 related medical waste be handled?',
      answer:
        'COVID-19 related medical waste should be treated as infectious waste and disposed of according to local guidelines, which may include incineration or autoclaving to ensure the destruction of the virus.',
      open: false,
    },
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="app__faq">
      <div className="faqs">
        {faqs.map((faq, index) => (
          <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
};

export default FaqPage;

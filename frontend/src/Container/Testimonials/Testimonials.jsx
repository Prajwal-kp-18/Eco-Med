import React from 'react';
import './Testimonials.css';
import annie from '../../assets/annie.jpg';
import kpark from '../../assets/kpark.jpg';
import tim from '../../assets/tim.jpg';
import { FaQuoteLeft } from 'react-icons/fa6';
import { FaQuoteRight } from 'react-icons/fa6';

const Testimonials = () => {
  return (
    <div className="wrapper">
      <div className="box">
        <FaQuoteLeft size={27} className="icon" />
        <p>
          Let the waste of "THE SICK", Not contaminate the lives of "THE
          HEALTHY"
        </p>

        <div className="content">
          <div className="info">
            <div className="name">K. PARK</div>
            <div className="job">Auther | Writer</div>
          </div>
          <div className="image">
            <img src={kpark} alt="photo" />
          </div>
        </div>
      </div>
      <div className="box">
        <FaQuoteLeft size={27} className="icon" />
        <p>
          The Waste products in Earth's crust are also the human on this
          expanded,spectral sense. one's garbage doesn't go 'AWAY' - it just
          goes somewhere else
        </p>
        <div className="content">
          <div className="info">
            <div className="name">Timothy Morton</div>
            <div className="job">Writer | Professor</div>
          </div>
          <div className="image">
            <img src={tim} alt="photo" />
          </div>
        </div>
      </div>
      <div className="box">
        <FaQuoteLeft size={27} className="icon" />
        <p>
          There is no such thing as 'AWAY'. When we throw anything away, it must
          go somewhere
        </p>
        <div className="content">
          <div className="info">
            <div className="name">Annie Leonard</div>
            <div className="job">Director | Greenpeace USA</div>
          </div>
          <div className="image">
            <img src={annie} alt="photo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

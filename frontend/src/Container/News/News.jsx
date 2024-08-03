import React from 'react';
import japan from '../../assets/japan.jpg';
import pimp from '../../assets/pimp.jpg';
import ind from '../../assets/ind.jpg';
import gov from '../../assets/gov.jpg';
import mwp from '../../assets/mwp.jpg';
import wm from '../../assets/wm.jpg';
import mwwm from '../../assets/mwwm.jpg';
import ht from '../../assets/ht.jpg';
import cmb from '../../assets/cmb.jpg';
import './News.css';

const News = () => {
  return (
    <div className="app__news">
      <div className="cards-container ">
        <div className="card">
          <a href="https://kuenselonline.com/japan-and-undp-donate-specialised-medical-waste-trucks/">
            <div className="card-header">
              <img src={japan} alt="news-image" id="news tag" />
            </div>
            <div className="card-content">
              <h3 id="title">
                Japan and UNDP donate specialised medical waste trucks
              </h3>
              <p className="news-description">
                The Government of Japan and the United Nations Development
                Programme (UNDP) have handed over five specialised medical waste
                collection trucks to the Ministry of Health to enhance Bhutan’s
                healthcare waste management..........
              </p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="https://punemirror.com/PCMC/pimpri-chinchwad-biomedical-waste-dumped-into-open-drains-in-valhekarwadi/cid1717683113.htm">
            <div className="card-header">
              <img src={pimp} alt="news-image" id="news tag" />
            </div>
            <div className="card-content">
              <h3 id="news title">
                Pimpri-Chinchwad: Biomedical waste dumped into open drains in
                Valhekarwadi
              </h3>
              <p className="news-description">
                Large quantities of biomedical waste are being dumped near the
                drain on Hotel Ranmala Road in Valhekarwadi, posing a serious
                health risk to residents.........
              </p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="https://www.downtoearth.org.in/blog/waste/is-india-prepared-to-manage-its-burgeoning-medical-waste-challenge--95565">
            <div className="card-header">
              <img src={ind} alt="news-image" id="news tag" />
            </div>
            <div className="card-content">
              <h3 id="news title">
                Is India prepared to manage its burgeoning medical waste
                challenge?
              </h3>
              <p className="news-description">
                Ineffective management of medical and biohazardous waste or
                accidents at any stage, from generation to disposal, have the
                potential to cause serious ecological consequences......
              </p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="https://www.thehindu.com/news/national/karnataka/biomedical-waste-disposal-govt-hospitals-face-challenges-as-companies-quote-high-prices/article67760337.ece">
            <div className="card-header">
              <img src={gov} alt="news-image" id="news tag" />
            </div>
            <div className="card-content">
              <h3 id="news title">
                Biomedical waste disposal: Govt. hospitals face challenges as
                companies quote high prices
              </h3>
              <p className="news-description">
                The government should set up a centralised common bio medical
                waste treatment facility for its hospitals, doctors suggest
              </p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="https://www.reuters.com/markets/deals/waste-management-buy-stericycle-72-bln-deal-2024-06-03/">
            <div className="card-header">
              <img src={mwp} alt="news-image" id="news tag" />
            </div>
            <div className="card-content">
              <h3 id="news title">
                Waste Management adds medical-waste portfolio with $7.2 bln
                Stericycle deal
              </h3>
              <p className="news-description">
                {' '}
                Waste Management said on Monday it will take Stericycle
                (SRCL.O), opens new tab private in a deal valued at $7.2
                billion, as it looks to tap into the growing healthcare waste
                disposal market in the United States.
              </p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="https://www.businesswire.com/news/home/20240602670467/en/WM-to-Acquire-Stericycle-a-Leader-in-Medical-Waste-Services-for-7.2-Billion">
            <div className="card-header">
              <img src={wm} alt="news-image" id="news tag" />
            </div>
            <div className="card-content">
              <h3 id="news title">
                WM to Acquire Stericycle, a Leader in Medical Waste Services,
                for $7.2 Billion
              </h3>
              <p className="news-description">
                Expands WM’s Comprehensive Environmental Solutions in the
                Growing Healthcare Market While Advancing WM’s Sustainability
                Commitments
              </p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="https://www.openpr.com/news/3528667/medical-waste-management-market-size-to-touch-usd-18-4-billion">
            <div className="card-header">
              <img src={mwwm} alt="news-image" id="news tag" />
            </div>
            <div className="card-content">
              <h3 id="news title">
                Medical Waste Management Market Size to touch USD 18.4 Billion
                by 2032
              </h3>
              <p className="news-description">
                The Medical Waste Management Market is a crucial aspect of the
                global healthcare industry{' '}
              </p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="https://www.hindustantimes.com/cities/mumbai-news/mpcb-tightens-biomedical-waste-disposal-norms-101711653037458.html/">
            <div className="card-header">
              <img src={ht} alt="news-image" id="news tag" />
            </div>
            <div className="card-content">
              <h3 id="news title">
                MPCB tightens biomedical waste disposal norms
              </h3>
              <p className="news-description">
                MPCB issues new guidelines on biomedical waste management
                following audit, HCFs must register with CBWTF, segregate waste
                to avoid legal action from April 1.
              </p>
            </div>
          </a>
        </div>

        <div className="card">
          <a href="https://www.thehindu.com/news/national/tamil-nadu/coimbatores-salem-kochi-highway-turns-dumping-ground-for-healthcare-facilities-in-kerala/article67795934.ece">
            <div className="card-header">
              <img src={cmb} alt="news-image" id="news tag" />
            </div>
            <div className="card-content">
              <h3 id="news title">
                Coimbatore’s Salem-Kochi highway turns dumping ground for
                healthcare facilities in Kerala
              </h3>
              <p className="news-description">
                The Salem-Kochi highway in Coimbatore has become a hotspot for
                medical waste disposal, with multiple dumping sites emerging
                along its stretch.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default News;

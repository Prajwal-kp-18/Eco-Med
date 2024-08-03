import './Header.css';
import SlideShow from './slideShow';

const Header = () => {
  return (
    <>
      <header className="app__header">
        <div className="app__slideshow">
          <SlideShow />
        </div>
        <div className="hero-main">
          <div className="hero">
            <h1 className="hero-head">Welcome To EcoMed</h1>
            <p className="hero-para">
              By adhering to safety protocols and regulatory <br />
              guidelines, healthcare facilities can minimize risks <br />
              and ensure sustainable disposal practices !!!
            </p>
          </div>
          {/* <div className="cta">
            <button className="bn5">hello</button>
            <button className="bn5">hello</button>
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;

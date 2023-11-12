import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
          WELCOME TO MY PERSONAL WEBSITE
          </h1>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/aku.png" alt="Hero Section" />
      </div>       
  
    </section>
  );
}

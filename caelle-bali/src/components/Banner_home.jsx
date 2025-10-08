import "./Banner_home.css";
import caelleBanner from "../assets/caelle.png";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-media">
        <img
          src={caelleBanner}
          alt="Caélle Bali Banner"
          className="banner-image"
        />
      </div>

      <div className="banner-overlay">
        <h4>INTRODUCING</h4>
        <h1>CAÉLLE</h1>
        <p>
          Jewellery inspired by Bali’s beauty, crafted with meaning and movement.
        </p>
        <button className="banner-btn">SHOP NOW</button>
      </div>
    </div>
  );
}

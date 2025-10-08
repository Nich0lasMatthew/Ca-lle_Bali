import "../pages/Home.css";
import caelleBanner from "../assets/caelle.png";

export default function Home() {
  return (
    <main className="home">
      {/* Banner Section */}
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
            Jewellery inspired by Bali’s beauty, crafted with meaning and
            movement.
          </p>
          <button className="banner-btn">SHOP NOW</button>
        </div>
      </div>

      {/* Featured Section */}
      <section className="featured">
        <h3>Featured Pieces</h3>
        <div className="featured-grid">
          <div className="featured-item">Item 1</div>
          <div className="featured-item">Item 2</div>
          <div className="featured-item">Item 3</div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <h3>Our Story</h3>
        <p>
          Caélle Bali is inspired by the essence of simplicity and elegance.
          Each piece is carefully designed and handcrafted to reflect the
          island’s natural beauty and timeless craftsmanship.
        </p>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h3>Experience the Art of Handcrafted Beauty</h3>
        <button>Shop Now</button>
      </section>
    </main>
  );
}

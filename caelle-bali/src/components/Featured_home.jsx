import React from "react";
import catalog from "../data/catalog.json";
import "./Featured_home.css";
import caelleImage from "../assets/caelle-with-text.png";

const Featured = () => {
  return (
    <section className="featured">
      <h3 className="featured-heading">Most Popular</h3>
      <div className="featured-grid">
        {catalog
          .filter(
            (item) => item.Status === "Available" && Number(item["Stock / Quantity"]) >= 5
          )
          .map((item) => (
            <div key={item.ID} className="featured-item">
              <div className="featured-image-container">
                <img
                  src={caelleImage}
                  alt={item["Product Name"]}
                  className="featured-image"
                />
              </div>
              <div className="featured-content">
                <div className="featured-product-name">
                  {item["Product Name"]}
                </div>
                <div className="featured-price">
                  Rp{Number(item["Final Price (IDR)"]).toLocaleString("id-ID")}
                </div>
                <p className="featured-description">{item.Description}</p>
                <a
                  href={item["WhatsApp Link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="featured-btn"
                >
                  Order via WhatsApp
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Featured;

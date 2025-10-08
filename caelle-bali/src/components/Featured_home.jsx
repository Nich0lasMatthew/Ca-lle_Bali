import React from "react";
import catalog from "../data/catalog.json";
import "./Featured_home.css";

// Import all images in the assets folder automatically
const images = import.meta.glob("../assets/*", { eager: true });

const Featured = () => {
  return (
    <section className="featured">
      <h3 className="featured-heading">Most Popular</h3>
      <div className="featured-grid">
        {catalog
          .filter((item) => item.Status === "Available")
          .map((item) => {
            const imagePath = `../assets/${item["Image File Name / URL"]}`;
            const image = images[imagePath]?.default; // get resolved image path

            return (
              <div key={item.ID} className="featured-item">
                <img
                  src={image}
                  alt={item["Product Name"]}
                  className="featured-image"
                />
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
            );
          })}
      </div>
    </section>
  );
};

export default Featured;

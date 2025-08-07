import React from "react";
import featuresData from "../data/featuresData";
import "../styles/features.css";
import colors from "../styles/colors";

const FeaturesSection = () => {
  return (
    <section className="features-section" id="features">
      <h2
        className="features-title"
        style={{ color: colors.darkBlue }}
      >
        Hızlı Cari ile Neler Yapabilirsiniz?
      </h2>

      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div className="feature-item" key={index}>
            <img
              src={feature.icon}
              alt={feature.title}
              className="feature-icon"
            />
            <h3
              className="feature-title"
              style={{ color: colors.darkBlue }}
            >
              {feature.title}
            </h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

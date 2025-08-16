import React from "react";
import featuresData from "../data/featuresData";
import "../styles/features.css";
import colors from "../styles/colors";

const FeaturesSection = () => {
  return (
    <section
      className="features-section"
      id="features"
      style={{ backgroundColor: colors.white }}
    >
      <h2 className="features-title" style={{ color: colors.darkblue }}>
        Hızlı Cari ile Neler Yapabilirsiniz?
      </h2>

      <div className="features-grid">
        {featuresData.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div className="feature-item" key={index}>
              <Icon
                className="feature-icon"
                strokeWidth={0.75}
                color="#e20a17"
              />
              <h3 className="feature-title" style={{ color: colors.darkblue }}>
                {feature.title}
              </h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;

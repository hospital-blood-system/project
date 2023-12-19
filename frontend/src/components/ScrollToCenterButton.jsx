import React from "react";

const ScrollToCenterButton = () => {
  const scrollToCenter = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const centerOffset = (documentHeight - windowHeight) / 2;

    window.scrollTo({
      top: centerOffset,
      behavior: "smooth",
    });
  };

  return (
    <a href="#" className="custom-button2" onClick={scrollToCenter}>
      İlanlar
    </a>
  );
};

export default ScrollToCenterButton;
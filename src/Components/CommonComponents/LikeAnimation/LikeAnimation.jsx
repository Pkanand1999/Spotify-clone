import React, { useState } from "react";
import "./LikeAnimation.css";

const LikeAnimation = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
      <div

        className={`heart ${isActive ? "is-active" : ""} controlPos`}
        onClick={handleClick}
      ></div>
  );
};

export default LikeAnimation;

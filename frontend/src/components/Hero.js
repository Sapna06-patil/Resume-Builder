import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.js";
import TempImage from "../Images/Temp.jpg";
const Hero = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);

  const handleCreateResumeClick = () => {
    // Redirect to login page
    navigate("/login");
  };
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Boost Your Career Chasing</h1>
        <h2>
          Land your dream job with already made{" "}
          <span className="highlight">Eye catchy Resumes</span>.
        </h2>
        <p>
          Create awesome resumes with one of our template in just few seconds.
        </p>
        <button onClick={handleCreateResumeClick} className="cta-btn">
          Create Resume for free
        </button>
      </div>
      <div className="hero-image">
        <img
          src={TempImage}
          alt="Resume Example"
          style={{ width: "449px", height: "602px" }}
        />
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import JoinFamily from "../components/JoinFamily";
import Footer from "../components/Footer";
import "./App.css";
const Home = () => (
  <div>
    <Header />
    <Hero />
    <Features />
    <JoinFamily />
    <Footer />
  </div>
);

export default Home;

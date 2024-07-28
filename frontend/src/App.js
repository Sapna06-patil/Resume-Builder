import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Register from "./components/Register.js";
import Login from "./components/Auth.js";
import Profile from "./pages/Profile.js";
import ProfileForm from "./components/ProfileForm.js"; // Import the ProfileForm
import { AuthProvider } from "./context/AuthContext";

const App = () => (
  <AuthProvider>
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<ProfileForm />} /> // Add the
        route for the ProfileForm
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
// import React from "react";
// import "./App.css";
// import Header from "./components/Header";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import JoinFamily from "./components/JoinFamily";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Hero />
//       <Features />
//       <JoinFamily />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ProfileForm.css"; // Import the CSS file

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    profession: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    experiences: [
      {
        employer: "",
        company: "",
        address: "",
        role: "",
        start: "",
        finish: "",
        currentlyWork: false,
        description: "",
      },
    ],
  });

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await axios.get("/api/profile", {
          headers: { Authorization: token },
        });
        if (data.profile) {
          setFormData(data.profile);
        }
      } catch (error) {
        console.error("Error fetching profile", error);
      }
    };
    fetchProfile();
  }, [token]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleExperienceChange = (index, e) => {
    const newExperiences = formData.experiences.map((exp, i) => {
      if (i === index) {
        return { ...exp, [e.target.name]: e.target.value };
      }
      return exp;
    });
    setFormData({ ...formData, experiences: newExperiences });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/profile", formData, {
        headers: { Authorization: token },
      });
      if (data.success) {
        navigate("/profile");
      } else {
        alert("Error saving profile");
      }
    } catch (error) {
      console.error("Error saving profile", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Profession</label>
        <input
          type="text"
          name="profession"
          value={formData.profession}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>State</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Zip Code</label>
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </div>
      <h3>Experiences</h3>
      {formData.experiences.map((experience, index) => (
        <div key={index}>
          <div>
            <label>Employer</label>
            <input
              type="text"
              name="employer"
              value={experience.employer}
              onChange={(e) => handleExperienceChange(index, e)}
            />
          </div>
          <div>
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={experience.company}
              onChange={(e) => handleExperienceChange(index, e)}
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={experience.address}
              onChange={(e) => handleExperienceChange(index, e)}
            />
          </div>
          <div>
            <label>Role</label>
            <input
              type="text"
              name="role"
              value={experience.role}
              onChange={(e) => handleExperienceChange(index, e)}
            />
          </div>
          <div>
            <label>Start Date</label>
            <input
              type="date"
              name="start"
              value={experience.start}
              onChange={(e) => handleExperienceChange(index, e)}
            />
          </div>
          <div>
            <label>Finish Date</label>
            <input
              type="date"
              name="finish"
              value={experience.finish}
              onChange={(e) => handleExperienceChange(index, e)}
              disabled={experience.currentlyWork}
            />
          </div>
          <div>
            <label>Currently Work Here</label>
            <input
              type="checkbox"
              name="currentlyWork"
              checked={experience.currentlyWork}
              onChange={(e) =>
                handleExperienceChange(index, {
                  target: { name: "currentlyWork", value: e.target.checked },
                })
              }
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              name="description"
              value={experience.description}
              onChange={(e) => handleExperienceChange(index, e)}
            />
          </div>
          <hr />
        </div>
      ))}
      <button type="submit">Save Profile</button>
    </form>
  );
};

export default ProfileForm;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await axios.get("/api/profile", {
        headers: { Authorization: token },
      });
      setProfile(data.profile);
    };
    fetchProfile();
  }, [token]);

  return (
    <div>
      {profile ? (
        <div>
          <h1>
            {profile.firstName} {profile.lastName}
          </h1>
          <p>{profile.profession}</p>
          <p>
            {profile.address}, {profile.city}, {profile.state} -{" "}
            {profile.zipCode}
          </p>
          <h2>Experiences</h2>
          <ul>
            {profile.experiences.map((exp) => (
              <li key={exp._id}>
                {exp.role} at {exp.company} ({exp.start} -{" "}
                {exp.currentlyWork ? "Present" : exp.finish})
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

import React, { useEffect } from "react";
const Profile = () => {
  useEffect(() => {
    document.title = "Profile | Light Academy";
  }, []);
  return (
    <div>
      <h1>Hello from profile</h1>
    </div>
  );
};

export default Profile;

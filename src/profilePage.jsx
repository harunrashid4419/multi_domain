import { useEffect } from "react";
import { useState } from "react";

const profileMap = {
  ayush: {
    name: "Ayush",
    age: 21,
  },
  sharma: {
    name: "Sharma",
    age: 27,
  },
};

// eslint-disable-next-line react/prop-types
const ProfilePage = ({ tanentName }) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    setProfile(profileMap[tanentName]);
  }, [tanentName]);
  

  if (!profile) {
    return <div>Profile do not found</div>;
  }

  return (
    <div>
      <p>profile page</p>
      <div>Profile Name: {profile.name}</div>
      <div>Age: {profile.age}</div>
    </div>
  );
};

export default ProfilePage;

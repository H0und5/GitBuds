import React, { useState, useEffect } from "react";
import classes from "./App.module.css";

import SearchInput from "./components/SearchInput";
import UserProfile from './components/UserProfile';

const App = () => {
  // state of follower profiles
  const [profiles, setProfiles] = useState();

  // Import 1 profile on load.
  useEffect(() => {
    fetch("https://api.github.com/users/D-Pagey")
      .then((data) => data.json())
      .then((databaseData) => {
        // const profile = Object.entries(databaseData);

        const initialRawProfile = {
          login: databaseData.login, 
          bio: databaseData.bio, 
          blog: databaseData.blog, 
          company: databaseData.company,
          email: databaseData.email,
          followers: databaseData.followers,
          following: databaseData.following,
          followers_url: databaseData.followers_url,
          location: databaseData.location,
          id: databaseData.id,
          name: databaseData.name,
          public_gists: databaseData.public_gists,
          public_repos: databaseData.public_repos,
          twitter_username: databaseData.twitter_username,
          updated_at: databaseData.updated_at,
          url: databaseData.url,
        }

        const initialUpdatedProfile = Object.values(initialRawProfile);

        console.log(databaseData)
        const profile = initialUpdatedProfile
        console.log([profile])
        

        setProfiles(profile);
      });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>GitBud</h1>
        <SearchInput />
      </div>
      {profiles}
      {console.log(profiles)}

    </div>
  );
};

export default App;

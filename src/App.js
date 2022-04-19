import React, { useState, useEffect } from "react";
import classes from "./App.module.css";

import SearchInput from "./components/SearchInput";
import UserProfile from './components/UserProfile';

const App = () => {
  // state of follower profiles
  const [ profiles, setProfiles ] = useState([]);

  // Import 1 profile on load.
  useEffect(() => {

    fetch("https://api.github.com/users/H0und5")
      .then((data) => data.json())
      .then((databaseData) => {
        // const profile = Object.entries(databaseData);

        console.log(databaseData)

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
          url: databaseData.html_url,
        }

        setProfiles(oldState => [...oldState, initialRawProfile]);

        // const updatedProfiles = Object.entries(initialRawProfile);

      });
  }, []);

  const onSearchEnteredHandler = (input) => {

    console.log(input)

    fetch(`https://api.github.com/users/${input}`)
    .then(data => data.json())
    .then(databaseData => {
      console.log(databaseData.followers_url)

      fetch(`${databaseData.followers_url}`)
      .then(data => data.json())
      .then(database => {
        console.log(database)
      })
    })

  }



  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h1>GitBuds</h1>
        <SearchInput 
          searchEntered={onSearchEnteredHandler}
        />
      </div>

      <div className={classes.divider}></div>
      {profiles.map(profile => <UserProfile
        key={profile.id}
        login={profile.login}
        bio={profile.bio}
        blog={profile.blog}
        company={profile.company}
        email={profile.email}
        followers={profile.followers}
        following={profile.following}
        location={profile.location}
        name={profile.name}
        public_gists={profile.public_gists}
        public_repos={profile.public_repos}
        twitter_username={profile.twitter_username}
        updated_at={profile.updated_at}
        url={profile.url}
      />)}

    </div>
  );
};

export default App;

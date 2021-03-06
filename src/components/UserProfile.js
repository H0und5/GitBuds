// import icons
import linkOut from "../images/external-link.svg";
import emailOut from "../images/external-email.svg";
import siteOut from "../images/external-site.svg";
import twitterOut from "../images/external-twitter.svg";


// import css classes
import classes from "./UserProfile.module.css";


// define UserProfile component below.
const UserProfile = ({
  login,
  bio,
  blog,
  company,
  email,
  followers,
  following,
  location,
  name,
  public_gists,
  public_repos,
  twitter_username,
  updated_at,
  url,
}) => {


  // name.length > 8 ? name.substring(0, 8).concat("...") : nameUpdated

  let nameUpdated = JSON.stringify(name)

  if (nameUpdated === 'null') {
    nameUpdated = "None";

    console.log(nameUpdated, typeof name)

  } 
  
  if (name.length > 8) {
    nameUpdated = name.substring(0, 8).concat("...");

    console.log(nameUpdated)
  } 
  
  if (name.length <= 8 && name.length > 0) {
    nameUpdated = name
  }


  // Updating name string value with character trim

  // Updating company string value with character trim

  let companyUpdated = JSON.stringify(company)


  if (companyUpdated === 'null') {
    companyUpdated = "None";

    console.log(typeof companyUpdated, companyUpdated)
  }
  
  if (companyUpdated.length > 8) {
    companyUpdated = company.substring(0, 8).concat("...");
  }

  if (companyUpdated.length <= 8 && companyUpdated.length > 0) {
    companyUpdated = companyUpdated.substring(0, 8).concat("...");
  }

  // Updating location value 

  let locationUpdated = JSON.stringify(location);

  if (location === null) {
    locationUpdated = "None";

    console.log(locationUpdated, typeof location)
  } 
  
  if (locationUpdated.length > 7) {
    locationUpdated = location.substring(0, 7).concat("...");
  }

  // Updating last update stirng value with character trim
  let lastUpdatedMonth = updated_at.substring(5, 7);
  let lastUpdatedDay = updated_at.substring(8, 10);

  let lastUpdated = lastUpdatedMonth + '/' + lastUpdatedDay

  // Return JSX
  return (
    <div className={classes.userProfileContainer}>
      <div className={classes.userProfileHeader}>
        <h2>@{login}</h2>
        <a href={url} target="_blank" rel="noreferrer">
          <img src={linkOut} alt="" width="20" height="20" />
        </a>
      </div>

      <div className={classes.userProfileBio}>{bio}</div>

      <div className={classes.userProfileStats}>
        <div className={classes.userProfileStatRow}>
          {/* Name */}
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Name</p>
              <h4>{nameUpdated}</h4>
            </div>
          </div>
          {/* Company */}
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Company</p>
              <h4>{companyUpdated}</h4>
            </div>
          </div>
          {/* Location */}
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Location</p>
              <h4>{locationUpdated}</h4>
            </div>
          </div>
          {/* Last Updated */}
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Last Update</p>
              <h4>{lastUpdated}</h4>
            </div>
          </div>
        </div>
        <div className={classes.userProfileStatRow}>
          {/* Public Gists */}
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Public Gists</p>
              <h4>{public_gists}</h4>
            </div>
          </div>
          {/* Public Repos */}
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Public Repos</p>
              <h4>{public_repos}</h4>
            </div>
          </div>
          {/* Followers */}
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Followers</p>
              <h4>{followers}</h4>
            </div>
          </div>
          {/* Following */}
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Following</p>
              <h4>{following}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.userProfileDivider}></div>

      <div className={classes.userProfileFooter}>
        <div className={classes.userProfileLinks}>
          <a href={email} target="_blank" rel="noreferrer">
            <img src={emailOut} alt="" width="20" height="20" />
          </a>
        </div>
        <div className={classes.userProfileLinks}>
          <a href={blog} target="_blank" rel="noreferrer">
            <img src={siteOut} alt="" width="20" height="20" />
          </a>
        </div>
        <div className={classes.userProfileLinks}>
          <a href={`https://twitter.com/${twitter_username}`} target="_blank" rel="noreferrer">
            <img src={twitterOut} alt="" width="20" height="20" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

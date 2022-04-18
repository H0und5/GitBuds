import linkOut from '../images/external-link.svg';
import classes from './UserProfile.module.css';

const UserProfile = (props) => {
  const {
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
  } = props;

  return (
    <div className={classes.userProfileContainer}>
      
      <div className={classes.userProfileHeader}>
        <h2>@{login}</h2>
        <a href={url} target="_blank" rel="noreferrer"><img src={linkOut} alt="" width="20" height="20" /></a>
      </div>
      
      <div className={classes.userProfileBio}>{bio}</div>

      <div className={classes.userProfileStats}>
        <div className={classes.userProfileStatRow}>
          <div>Name: {name}</div>
          <div>Company: {company}</div>
          <div>Location: {location}</div>
          <div>Last Update: {updated_at}</div>
        </div>
        <div className={classes.userProfileStatRow}>
          <div>Public Gists: {public_gists}</div>
          <div>Public Repos: {public_repos}</div>
          <div>Followers: {followers}</div>
          <div>Following: {following}</div>
        </div>
      </div>

      <div className={classes.userProfileDivider}></div>

      <div className={classes.userProfileFooter}>
        <div>Email: {email}</div>
        <div>Website: {blog}</div>
        <div>Twitter: {twitter_username}</div>
      </div>
    
    </div>
  );
};

export default UserProfile;

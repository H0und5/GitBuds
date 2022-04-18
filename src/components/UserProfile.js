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
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Name</p> 
              <h4>{name}</h4> 
            </div>
            <div className={classes.userProfileStatBoxCutoff}></div>
          </div>
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Company</p> 
              <h4>{company}</h4> 
            </div>
            <div className={classes.userProfileStatBoxCutoff}></div>
          </div>
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Location</p> 
              <h4>{location}</h4> 
            </div>
            <div className={classes.userProfileStatBoxCutoff}></div> 
          </div>
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Last Updated</p> 
              <h4>{updated_at}</h4> 
            </div>
            <div className={classes.userProfileStatBoxCutoff}></div>
          </div>
        </div>
        <div className={classes.userProfileStatRow}>
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Public Gists</p> 
              <h4>{public_gists}</h4> 
            </div>
            <div className={classes.userProfileStatBoxCutoff}></div>
          </div>
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Public Repos</p> 
              <h4>{public_repos}</h4> 
            </div>
            <div className={classes.userProfileStatBoxCutoff}></div>
          </div>
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Followers</p> 
              <h4>{followers}</h4> 
            </div>
            <div className={classes.userProfileStatBoxCutoff}></div>
          </div>
          <div className={classes.userProfileStatBox}>
            <div className={classes.userProfileStatBoxContent}>
              <p>Followers</p> 
              <h4>{following}</h4> 
            </div>
            <div className={classes.userProfileStatBoxCutoff}></div>
          </div>
        </div>
      </div>

      <div className={classes.userProfileDivider}></div>

      <div className={classes.userProfileFooter}>
        <div className={classes.userProfileLinks}>
          <a href={email}><p>Email</p></a>
        </div>
        <div className={classes.userProfileLinks}>
          <a href={blog}><p>Website</p></a>
        </div>
        <div className={classes.userProfileLinks}>
          <a href={twitter_username}><p>Twitter</p></a>
        </div>
      </div>
    
    </div>
  );
};

export default UserProfile;

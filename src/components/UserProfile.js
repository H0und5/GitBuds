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
    <div>
      
      <div>
        <h2>{login}</h2>
        <a href={url}><img src="./images/external-link.svg" /></a>
      </div>
      
      <div>Bio: {bio}</div>

      <div>
        <div>
          <div>Name: {name}</div>
          <div>Company: {company}</div>
          <div>Location: {location}</div>
          <div>Last Update: {updated_at}</div>
        </div>
        <div>
          <div>Public Gists: {public_gists}</div>
          <div>Public Repos: {public_repos}</div>
          <div>Followers: {followers}</div>
          <div>Following: {following}</div>
        </div>
      </div>

      <div>
        <div>Email: {email}</div>
        <div>Website: {blog}</div>
        <div>Twitter: {twitter_username}</div>
      </div>
    
    </div>
  );
};

export default UserProfile;

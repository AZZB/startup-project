import React from 'react';




const Profile = (props) => {
  const { user, showSpinner } = props;

  if(showSpinner) return <h4>Loading...</h4>

  return (
    <div>
      <div>profile</div>
      <h3>{user && user.username}</h3>
    </div>
  );
}


export default Profile;

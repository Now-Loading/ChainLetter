import React from 'react';
// import PropType from 'prop-types';
import { useAuthContext } from '../../contexts/AuthContext';

import './UserPanel.scss';

const UserPanel = () => {
  const { currentUser } = useAuthContext();

  return (
    <div className="userPanel">
      {currentUser.photoURL ? <img src={currentUser.photoURL} alt="userImage" className="userImage" /> : <></>}
      {/* below is a placeholder for the URL above, which is always currently blank */}
      <img src="https://i.imgur.com/LbDUJDk.jpg" alt="harold" className="userImage" />
      <h3>{currentUser.displayName}</h3>
      <div className="panelLinks">
        {/* below need to be changed to links */}
        <h4>Profile</h4>
        <h4>Bookmarks</h4>
        <h4>Started</h4>
        <h4>Contributed</h4>
        <h4>Drafts</h4>
      </div>
    </div>
  );
};

export default UserPanel;

// UserPanel.propTypes = {
//   stories: PropType.arrayOf(Object).isRequired,
// };

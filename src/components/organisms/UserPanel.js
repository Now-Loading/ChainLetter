import React from 'react';
// import PropType from 'prop-types';
import { useAuthContext } from '../../contexts/AuthContext';

import './UserPanel.scss';

const UserPanel = () => {
  const { currentUser } = useAuthContext();

  return (
    <div className="user-panel">
      {currentUser.photoURL ? <img src={currentUser.photoURL} alt="userImage" className="user-image" /> : <></>}
      {/* below is a placeholder for the URL above, which is always currently blank */}
      <img src="https://i.imgur.com/LbDUJDk.jpg" alt="harold" className="user-image" />
      <h3>{currentUser.displayName}</h3>
      <div className="panel-links">
        {/* below need to be changed to links */}
        <div className="panel-link-individual">
          <h4>Profile</h4>
        </div>
        <div className="panel-link-individual">
          <h4>Bookmarks</h4>
          <p>5</p>
        </div>
        <div className="panel-link-individual">
          <h4>Contributed</h4>
          <p>13</p>
        </div>
        <div className="panel-link-individual">
          <h4>Contributed</h4>
          <p>24</p>
        </div>
        <div className="panel-link-individual">
          <h4>Drafts</h4>
          <p>3</p>
        </div>
      </div>
    </div>
  );
};

export default UserPanel;

// UserPanel.propTypes = {
//   stories: PropType.arrayOf(Object).isRequired,
// };

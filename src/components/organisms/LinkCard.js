import React from 'react';
import PropType from 'prop-types';
import './LinkCard.scss';
import { AiOutlineLink } from 'react-icons/ai';
import { BsStar } from 'react-icons/bs';
import { useAuthContext } from '../../contexts/AuthContext';

const LinkCard = ({ story }) => {
  const { currentUser } = useAuthContext();

  return (
    <article className="card">
      <div className="side-bar">
        <div className="side-bar-user-icon">
          {currentUser.photoUrl ? <img src={currentUser.photoURL} alt="userImage" className="user-image" /> : <p className="user-initial">{currentUser.displayName.charAt(0).toUpperCase()}</p>}
        </div>
        <div className="side-bar-links">
          <div className="links">
            <AiOutlineLink />
            <p>5</p>
          </div>
          <div className="stars">
            <BsStar />
            <p>23</p>
          </div>
        </div>
      </div>
      <div className="card-info">
        <header>
          <span className="byline">
            {`${story.authorName} on ${story.createdDate?.toDate().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })}`}
          </span>
          <h3>{story.title}</h3>
        </header>
        <p>
          {story.content}
        </p>
      </div>
    </article>
  );
};

export default LinkCard;

LinkCard.propTypes = {
  story: PropType.arrayOf(Object).isRequired,
};

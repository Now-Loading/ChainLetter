import React from 'react';
import PropType from 'prop-types';
import LinkCard from './LinkCard';
import UserPanel from './UserPanel';
import { useAuthContext } from '../../contexts/AuthContext';
import './StoryList.scss';

const StoryList = ({ stories }) => {
  const { currentUser } = useAuthContext();

  return (
    <div className="story-list-component">
      <section className="story-list">
        {
          stories.map((story) => (
            <LinkCard story={story} key={story.id} />
          ))
        }
      </section>
      {currentUser ? <UserPanel /> : <></>}
    </div>
  );
};

export default StoryList;

StoryList.propTypes = {
  stories: PropType.arrayOf(Object).isRequired,
};

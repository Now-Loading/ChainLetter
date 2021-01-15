import React from 'react';
import PropType from 'prop-types';
import LinkCard from './LinkCard';
import './StoryList.scss';

const StoryList = ({ stories }) => (
  <div className="story-list-component">
    <section className="story-list">
      {
        stories.map((story) => (
          <LinkCard story={story} key={story.id} />
        ))
      }
    </section>
    <article className="user-info-panel">
      <h3>author name</h3>
    </article>
  </div>
);

export default StoryList;

StoryList.propTypes = {
  stories: PropType.arrayOf(Object).isRequired,
};

import React from 'react';
import PropType from 'prop-types';
import LinkCard from './LinkCard';
import './StoryList.scss';

const StoryList = ({ stories }) => (
  <section className="story-list">
    {
      stories.map((story) => (
        <LinkCard story={story} key={story.id} />
      ))
    }
  </section>
);

export default StoryList;

StoryList.propTypes = {
  stories: PropType.arrayOf(Object).isRequired,
};

import React from 'react';
import PropType from 'prop-types';

const StoryList = ({
  stories,
}) => {
  const storyItems = () => (
    stories.map((story, i) => <li key={`item-${Math.random(i)}`}>{story.content}</li>)
  );

  return (
    <ul>
      {storyItems()}
    </ul>
  );
};

export default StoryList;

StoryList.propTypes = {
  stories: PropType.arrayOf(Object).isRequired,
};

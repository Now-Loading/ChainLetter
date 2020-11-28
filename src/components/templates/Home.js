import React, { useState, useLayoutEffect } from 'react';
import StoryList from '../organisms/StoryList';

const story = {
  title: 'Test',
  content: 'Some story content',
};
const tmpStories = Array(5).fill({ ...story });

const Home = () => {
  const [stories, setStories] = useState([]);

  useLayoutEffect(() => {
    setStories(tmpStories);
  }, []);

  return (
    stories.length
      ? <StoryList stories={stories} />
      : <span>Loading...</span>
  );
};

export default Home;

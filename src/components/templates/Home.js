import React, { useState, useLayoutEffect } from 'react';
import { db } from '../../firebase';
import StoryList from '../organisms/StoryList';

const Home = () => {
  const [stories, setStories] = useState([]);

  useLayoutEffect(() => {
    const getLinks = async () => {
      const snapshot = await db.collection('links')
        .get();

      const docs = snapshot.docs.map((doc) => doc.data());

      setStories(docs);
    };

    getLinks();
  }, []);

  return !!stories.length && <StoryList stories={stories} />;
};

export default Home;

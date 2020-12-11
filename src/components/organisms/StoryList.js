import React from 'react';
import PropType from 'prop-types';
import './StoryList.scss';

const StoryList = ({ stories }) => (
  <section className="story-list">
    {
      stories.map((story) => (
        <article key={story.id}>
          <header>
            <h3>{story.title}</h3>
            <span className="byline">
              {`by ${story.author}`}
            </span>
          </header>
          <p>
            {story.content}
          </p>
        </article>
      ))
    }
  </section>
);

export default StoryList;

StoryList.propTypes = {
  stories: PropType.arrayOf(Object).isRequired,
};

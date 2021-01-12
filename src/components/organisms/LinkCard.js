import React from 'react';
import PropType from 'prop-types';
import './LinkCard.scss';

const LinkCard = ({ story }) => (
  <article className="link-card">
    <div className="side-bar">
      <p>bar</p>
    </div>
    <div className="card">
      <header>
        <span className="byline">
          {`${story.authorName} on ${new Date(story.createdDate * 1000).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: '2-digit' })}`}
        </span>
        <h3>{story.title}</h3>
      </header>
      <p>
        {story.content}
      </p>
    </div>
  </article>
);

export default LinkCard;

LinkCard.propTypes = {
  story: PropType.arrayOf(Object).isRequired,
};

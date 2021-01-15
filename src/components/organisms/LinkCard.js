import React from 'react';
import PropType from 'prop-types';
import './LinkCard.scss';

const LinkCard = ({ story }) => (
  <article className="card">
    <div className="side-bar">
      <div className="side-bar-icon">icon</div>
      <div className="side-bar-links">
        <p>links</p>
        <p>stars</p>
      </div>
    </div>
    <div className="card-info">
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

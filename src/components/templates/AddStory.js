import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../organisms/Modal';

const AddStory = ({ toggleModal }) => {
  const [newStory, setNewStory] = useState({
    title: localStorage.getItem('new-title') || '',
    body: localStorage.getItem('new-body') || '',
  });

  const handleStoryContentChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title' && value.length > 75) return;
    if (name === 'body' && value.length > 240) return;

    setNewStory((prev) => ({
      ...prev,
      [name]: value,
    }));
    localStorage.setItem(`new-${name}`, value);
  };

  return (
    <Modal
      title="Create New Story Link"
      subTitle="write the first lines of a brand new story"
      confirmText="Submit Story"
      canCancel
      submitHandler={() => {}}
      cancelHandler={() => toggleModal(false)}
    >
      <label htmlFor="story-add-title">
        <div>
          Title
        </div>
        <input
          id="story-add-title"
          type="text"
          name="title"
          value={newStory.title}
          onChange={handleStoryContentChange}
        />
      </label>
      <label htmlFor="story-add-content">
        <div>
          Story
        </div>
        <textarea
          id="story-add-content"
          name="body"
          value={newStory.body}
          onChange={handleStoryContentChange}
        />
      </label>
      <span>
        Characters Left:
        {240 - newStory.body.length}
      </span>
    </Modal>
  );
};

export default AddStory;

AddStory.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

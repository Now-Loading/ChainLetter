import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../organisms/Modal';
import { db } from '../../firebase';
import { useAuthContext } from '../../contexts/AuthContext';

const AddStory = ({ toggleModal }) => {
  const { currentUser } = useAuthContext();
  // pull values from localStorage if they exist
  const [newStory, setNewStory] = useState({
    title: localStorage.getItem('story-title') || '',
    content: localStorage.getItem('story-content') || '',
    tags: localStorage.getItem('story-tags') || '',
  });

  const [tags, setTags] = useState([]);

  /**
   * Attempts to add story to firestore when user clicks submit
   * @param {Object} event
   */
  const addNewStory = async (event) => {
    event.preventDefault();
    // don't attempt if no values in the form fields
    if (
      !newStory.title.trim()
      || !newStory.content.trim()
    ) return;

    try {
      await db.collection('links')
        .add({
          title: newStory.title,
          content: newStory.content,
          author: currentUser.displayName,
        });
      localStorage.removeItem('story-title');
      localStorage.removeItem('story-content');
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      toggleModal(false);
    }
  };

  /**
   * Saves values of field to localStorage whenever user changes field
   * @param {Object} event
   */
  const handleStoryContentChange = (event) => {
    const { name, value } = event.target;
    let formattedValue = value;
    if (name === 'title' && value.length > 75) return;
    if (name === 'content' && value.length > 240) return;
    if (name === 'tags') {
      formattedValue = formattedValue.replace(/[^\w]/, '');
    }

    setNewStory((prev) => ({
      ...prev,
      [name]: formattedValue,
    }));
    localStorage.setItem(`story-${name}`, formattedValue);
  };

  const onKeyUp = (event) => {
    if (tags.length === 3) return;
    if (event.key === ',' || event.key === 'Enter' || event.key === ' ') {
      setTags((prev) => [...prev, newStory.tags]);
      setNewStory((prev) => ({
        ...prev,
        tags: '',
      }));
    }
    if (event.key === 'Backspace') {
      setTags((prev) => {
        const newTags = [...prev];
        newTags.pop();
        return newTags;
      });
    }
  };

  return (
    <Modal
      title="Create New Story Link"
      subTitle="write the first lines of a brand new story"
      confirmText="Submit Story"
      canCancel
      submitHandler={addNewStory}
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
          name="content"
          value={newStory.content}
          onChange={handleStoryContentChange}
        />
      </label>
      <span>
        Characters Left:
        {240 - newStory.content.length}
      </span>
      <label htmlFor="story-add-content">
        <div>
          Tags
        </div>
        <input
          type="text"
          id="story-add-tags"
          name="tags"
          value={newStory.tags}
          onChange={handleStoryContentChange}
          onKeyUp={onKeyUp}
        />
      </label>
      {tags ? (tags.map((tag) => (`#${tag} `))) : <></>}
      <span>
        Each tag must be separated by a comma.
      </span>
      <span>
        No special characters allowed.
      </span>
    </Modal>
  );
};

export default AddStory;

AddStory.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

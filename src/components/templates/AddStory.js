import React, { useState } from 'react';
import firebase from 'firebase/app';
import PropTypes from 'prop-types';
import Modal from '../organisms/Modal';
import { db } from '../../firebase';
import { useAuthContext } from '../../contexts/AuthContext';
import Button from '../atoms/Button';

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
    // don't attempt if no values in the form fields OR if the user is not logged in
    if (
      !newStory.title.trim()
      || !newStory.content.trim()
      || !currentUser
    ) return;
    try {
      await db.collection('links')
        .add({
          title: newStory.title,
          content: newStory.content,
          tags,
          authorName: currentUser.displayName,
          authorId: currentUser.uid,
          createdDate: firebase.firestore.Timestamp.now(),
          parentStoryId: '',
        });
      localStorage.removeItem('story-title');
      localStorage.removeItem('story-content');
      localStorage.removeItem('story-tags');
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
    if (event.key === ',' || event.key === 'Enter') {
      if (tags.length === 3) {
        return;
      }
      setTags((prev) => [...prev, newStory.tags]);
      setNewStory((prev) => ({
        ...prev,
        tags: '',
      }));
    }
    if (newStory.tags === '' && event.key === 'Backspace') {
      setTags((prev) => {
        const newTags = [...prev];
        newTags.pop();
        return newTags;
      });
    }
  };

  const button = (
    <Button
      type="button"
      text="Submit Story"
      clickHandler={addNewStory}
      variant="primary"
    />
  );

  return (
    <Modal
      title="Create New Story Link"
      subTitle="write the first lines of a brand new story"
      cancelHandler={() => toggleModal(false)}
      buttons={button}
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
      { Boolean(tags) && tags.map((tag) => `#${tag} `) }
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

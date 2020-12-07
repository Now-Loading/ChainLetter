import React from 'react';
import Modal from '../organisms/Modal';

const AddStory = () => {
  console.log('blah');
  return (
    <Modal
      title="Create New Story Link"
      subTitle="write the first lines of a brand new story"
      confirmText="Login"
      canCancel
      submitHandler={() => {}}
      cancelHandler={() => {}}
    >
      <label htmlFor="story-add-title">
        <div>
          Title
        </div>
        <input id="story-add-title" type="text" name="title" />
      </label>
      <label htmlFor="story-add-content">
        <div>
          Story
        </div>
        <input id="story-add-content" type="password" name="content" />
      </label>
    </Modal>
  );
};

export default AddStory;

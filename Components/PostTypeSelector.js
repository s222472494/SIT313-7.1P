
import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const PostTypeSelector = ({ onSelect }) => {
  const options = [
    { key: 'question', text: 'Question', value: 'question' },
    { key: 'article', text: 'Article', value: 'article' },
  ];

  return (
    <Dropdown
      placeholder = "Select Post Type"
      fluid
      selection
      options = {options}
      onChange = {(e, { value }) => onSelect(value)}
    />
  );
};

export default PostTypeSelector;


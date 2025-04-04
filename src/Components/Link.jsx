import React from 'react';

function Link({ className = '', text = '' }) {
  return (
    <a className={className}>{text}</a>
  );
}

export default Link;

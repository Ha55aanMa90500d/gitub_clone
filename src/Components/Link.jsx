import React from 'react';

function Link({ className = '', text = '' , href='#'}) {
  return (
    <a className={className}>{text}</a>
  );
}

export default Link;

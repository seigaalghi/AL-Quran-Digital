import React from 'react';

const Tafsir = ({ text }) => {
  const newText = text.split('\n').map((str) => <p>{str}</p>);
  return <div>{newText}</div>;
};

export default Tafsir;

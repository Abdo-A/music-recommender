import React from 'react';

const truncate = (str, length = 100) => {
  const ending = '...';

  if (str.length > length) {
    return <span title={str}>{str.substring(0, length - ending.length) + ending}</span>;
  }
    return <span>{str}</span>;
};

export default truncate;

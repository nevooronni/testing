import React from 'react';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

//functional component
export default () => {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
};
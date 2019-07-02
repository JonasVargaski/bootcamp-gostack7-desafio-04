import React from 'react';

import Comment from './Comment';

function CommentList  ({ comments }) {
  return (
    <div className="commentlist">
      {comments.map(comment => <Comment key={comment.id} {...comment} />)}
    </div>
  );
}

export default CommentList;

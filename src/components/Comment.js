import React  from 'react';

function Comment({ author, content }) {
  return (
    <div className="comment">
      <img src={author.avatar} alt={author.name} />
      <div>
        <p><strong>{author.name}</strong> {content}</p>
      </div>
    </div>
  );
}

export default Comment;

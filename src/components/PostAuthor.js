import React from 'react';

 function PostAuthor ({ avatar, name, date }) {
  return (
    <div className="post-author">
      <img src={avatar} alt={name} />
      <div>
        <span>{name}</span>
        <span>{date}</span>
      </div>
      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default PostAuthor;

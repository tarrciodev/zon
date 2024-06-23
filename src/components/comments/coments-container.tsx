import { commentsData } from '@/utils/comment-data';
import React from 'react'
import { UserComment } from './user-comment';

export  function CommentsContainer() {
  return (
      <div className='grid grid-cols-2 gap-4'>
          {commentsData.map((comment, i) => (
              <UserComment key={i} comment={comment} />
          ))}
      </div>
  );
}

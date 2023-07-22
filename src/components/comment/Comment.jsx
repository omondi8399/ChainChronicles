import React from 'react';
import { useSession } from 'next-auth/react';
import { format } from 'timeago.js';
import person from '../../../public/person.jpg';
import { BsTrash } from 'react-icons/bs';

const Comment = ({ comment, setComments }) => {
  const { data: session } = useSession();
  const token = session?.user?.accessToken;

  const handleDeleteComment = async () => {
    try {
      await fetch(`https://chain-chroniclez.vercel.app/api/comment/${comment?._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'DELETE',
      });

      setComments((prev) => {
        return [...prev].filter((c) => c?._id !== comment?._id);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex items-center space-x-4">
        <img src={person.src} width="45" height="45" alt="" className="rounded-full" />
        <div>
          <h4 className="text-lg font-semibold">{comment?.authorId?.username}</h4>
          <span className="text-gray-500 text-sm">{format(comment?.createdAt)}</span>
        </div>
      </div>
      <p className="mt-2">{comment?.text}</p>
      {session?.user?._id === comment?.authorId?._id && (
        <button
          onClick={handleDeleteComment}
          className="text-red-500 text-sm hover:underline focus:outline-none"
        >
          <BsTrash className="inline-block" /> Delete
        </button>
      )}
    </div>
  );
};

export default Comment;

'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineFileImage } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSession } from 'next-auth/react';

const CreateBlog = () => {
  const CLOUD_NAME = 'dpmn2lu9r';
  const UPLOAD_PRESET = 'chain-chronicles';

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('Nature');
  const [photo, setPhoto] = useState('');

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    return <p className="text-red-500">Access Denied</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!photo || !title || !category || !desc) {
      toast.error('All fields are required');
      return;
    }

    try {
      const imageUrl = await uploadImage();

      const res = await fetch(`https://chain-chroniclez.vercel.app/api/blog`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        method: 'POST',
        body: JSON.stringify({ title, desc, category, imageUrl, authorId: session?.user?._id }),
      });

      if (!res.ok) {
        throw new Error('Error occurred');
      }

      const blog = await res.json();

      router.push(`/blog/${blog?._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async () => {
    if (!photo) return;

    const formData = new FormData();

    formData.append('file', photo);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
      const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      const imageUrl = data['secure_url'];

      return imageUrl;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Create Post</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title..."
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Description..."
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setDesc(e.target.value)}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Nature">Nature</option>
              <option value="Mountain">Mountain</option>
              <option value="Ocean">Ocean</option>
              <option value="Wildlife">Wildlife</option>
              <option value="Forest">Forest</option>
            </select>
            <label htmlFor="image" className="block mb-4 cursor-pointer">
              Upload Image <AiOutlineFileImage className="inline-block" />
            </label>
            <input
              id="image"
              type="file"
              style={{ display: 'none' }}
              onChange={(e) => setPhoto(e.target.files[0])}
            />
            <button
              className="px-6 py-3 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Create
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default CreateBlog;

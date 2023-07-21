'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import classes from './blogCard.module.css'
import { useSession } from 'next-auth/react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'

const BlogCard = ({ blog: { title, desc, imageUrl, likes, authorId, _id } }) => {
  const { data: session } = useSession()
  const [isLiked, setIsLiked] = useState(false)
  const [blogLikes, setBlogLikes] = useState(0)


  useEffect(() => {
    session && likes && setIsLiked(likes.includes(session?.user?._id))
    session && likes && setBlogLikes(likes.length)
  }, [likes, session])

  const handleLike = async () => {
    try {
      const res = await fetch(`https://chain-chroniclez.vercel.app/api/blog/${_id}/like`, {
        headers: {
          'Authorization': `Bearer ${session?.user?.accessToken}`
        },
        method: 'PUT'
      })

      console.log(res)
      if (res.ok) {
        if (isLiked) {
          setIsLiked(prev => !prev)
          setBlogLikes(prev => prev - 1)
        } else {
          setIsLiked(prev => !prev)
          setBlogLikes(prev => prev + 1)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="relative w-64 h-64 mx-auto">
        <Link href={`/blog/${_id}`}>
          <Image src={imageUrl} layout="fill" className="object-cover rounded-lg" />
        </Link>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2">{desc}</p>
        <span className="text-gray-500 mt-2 block">Created By: <span className="font-semibold">1st of January</span></span>
      </div>
      <div className="flex items-center justify-between mt-4">
        <span className="text-gray-500">{blogLikes} Likes</span>
        {isLiked ? (
          <AiFillLike className="text-blue-500 cursor-pointer" size={20} onClick={handleLike} />
        ) : (
          <AiOutlineLike className="text-blue-500 cursor-pointer" size={20} onClick={handleLike} />
        )}
      </div>
    </div>
  );
};

export default BlogCard
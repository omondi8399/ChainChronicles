"use client";
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
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
    <div className="relative flex w-full h-[500px] mx-auto mt-10">
      <div className="rounded-xl w-full bg-gradient-to-r p-[5px] from-green-400 to-blue-500">
        <div className="flex flex-col justify-between h-full bg-black rounded-lg p-4">
          <div className="flex flex-col justify-center text-white">
            <div className="relative w-64 h-52 mx-auto">
              <Link href={`/blog/${_id}`}>
                <Image src={imageUrl} layout="fill" alt="image" className="object-cover rounded-lg" />
              </Link>
            </div>
            <h1 className="text-3xl font-extrabold mb-4">
              {title}
            </h1>
            <p className="text-lg md:text-lg font-medium mb-6">
              {desc}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
        <span className="text-gray-500">{blogLikes} Likes</span>
        {isLiked ? (
          <AiFillLike className="text-blue-500 cursor-pointer" size={20} onClick={handleLike} />
        ) : (
          <AiOutlineLike className="text-blue-500 cursor-pointer" size={20} onClick={handleLike} />
        )}
      </div>
          <div className="flex w-full justify-between mb-4">
            <p className="text-lg mr-5 font-semibold text-white flex items-center justify-center">
              1st of January
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

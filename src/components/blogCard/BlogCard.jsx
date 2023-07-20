'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import classes from './blogCard.module.css'
import { useSession } from 'next-auth/react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import person from "../../../public/person.jpg"


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
    


    <div className={classes.blog_card}>
      <Link href={`/blog/${_id}`}>
         <div className={classes['blog_card-img']}>
          <Image src={imageUrl} fill />
         </div>
          </Link>
      
          <div className={classes['blog_card-content']}>
            <h3 className={classes['blog_card-title']}>{title}</h3>
            <p className={classes['blog_card-describtion']}>{desc}</p>
          </div>
          <div className={classes['blog_card-content-author']}>
            <div className={classes['blog-card-content-author-avatar']}>
           <Image src={person}
           alt="author's image"
           width="40"
           height="40" style={{borderRadius: '50%'}}/>
            </div>
            <span className={classes['blog_card-author-name']}>Mickael</span>
            | <span className={classes['blog_card-author-date']}>1<sup>st</sup>  Jan 2023</span>
            <span className={classes['blog_card-likes']} style={{marginRight: '0.25rem', cursor: 'pointer'}}>
                {blogLikes} {" "} {isLiked
                ? (<AiFillLike onClick={handleLike} size={20} />)
                 : (<AiOutlineLike onClick={handleLike} size={20} />)}
            </span>

          </div>
          
    </div> 
  )
}

export default BlogCard







// before
// <div className={classes.container}>
// <div className={classes.wrapper}>
//   <Link className={classes.imgContainer} href={`/blog/${_id}`}>
//     <Image src={imageUrl} width="350" height="350" />
//   </Link>
//   <div className={classes.blogData}>
//     <div className={classes.left}>
//       <h3>{title}</h3>
//       <p>{desc}</p>
//       <span>Created By: <span>1th of January</span></span>
//     </div>
//     <div className={classes.right}>
//       {blogLikes} {" "} {isLiked
//         ? (<AiFillLike onClick={handleLike} size={20} />)
//         : (<AiOutlineLike onClick={handleLike} size={20} />)}
//     </div>
//   </div>
// </div>
// </div>
"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import classes from './blog.module.css'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillDelete, AiFillLike, AiOutlineLike } from 'react-icons/ai'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { format } from 'timeago.js'
import { useRouter } from 'next/navigation'
import Comment from '@/components/comment/Comment'
import person from '../../../../public/person.jpg'

const BlogDetails = (ctx) => {
    const [blogDetails, setBlogDetails] = useState("")
    const [isLiked, setIsLiked] = useState(false)
    const [blogLikes, setBlogLikes] = useState(0)

    const [commentText, setCommentText] = useState("")
    const [comments, setComments] = useState([])

    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
    async function fetchComments(){
        const res = await fetch(`https://chain-chroniclez.vercel.app/api/comment/${ctx.params.id}`, {cache: 'no-store'})
        const comments = await res.json()

        setComments(comments)
    }
    fetchComments()
    }, [])


    useEffect(() => {
        async function fetchBlog() {
            const res = await fetch(`https://chain-chroniclez.vercel.app/api/blog/${ctx.params.id}`, { cache: 'no-store' })
            const blog = await res.json()

            setBlogDetails(blog)
            setIsLiked(blog?.likes?.includes(session?.user?._id))
            setBlogLikes(blog?.likes?.length || 0)
        }
        session && fetchBlog()
    }, [session])

    const handleDelete = async () => {
        try {
            const confirmModal = confirm("Are you sure you want to delete your blog?")

            if (confirmModal) {
                const res = await fetch(`https://chain-chroniclez.vercel.app/api/blog/${ctx.params.id}`, {
                    headers: {
                        'Authorization': `Bearer ${session?.user?.accessToken}`
                    },
                    method: "DELETE"
                })

                if (res.ok) {
                    router.push('/')
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleLike = async () => {
        try {
            const res = await fetch(`https://chain-chroniclez.vercel.app/api/blog/${ctx.params.id}/like`, {
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

    const handleComment = async () => {
        if(commentText?.length < 2){
            toast.error("Comment must be at least 2 characters long")
            return
        }

        try {
            const body = {
                blogId: ctx.params.id,
                authorId: session?.user?._id,
                text: commentText
            }

            const res = await fetch(`https://chain-chroniclez.vercel.app/api/comment`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${session?.user?.accessToken}`
                },
                method: "POST",
                body: JSON.stringify(body)
            })

            const newComment = await res.json()

            setComments((prev) => {
                return [newComment, ...prev]
            })
            
            setCommentText("")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="bg-gray-100 min-h-screen py-8">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
              <Image src={blogDetails?.imageUrl} width="750" height="650" />
              <div className="flex justify-between items-center mt-4 md:mt-8">
                <h3 className="text-2xl font-bold">{blogDetails?.title}</h3>
                {blogDetails?.authorId?._id.toString() === session?.user?._id.toString() ? (
                  <div className="flex space-x-2">
                    <Link href={`/blog/edit/${ctx.params.id}`}>
                      <h3 className="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-600">
                        Edit <BsFillPencilFill />
                      </h3>
                    </Link>
                    <button
                      onClick={handleDelete}
                      className="bg-red-500 px-4 py-2 text-white rounded-md hover:bg-red-600"
                    >
                      Delete <AiFillDelete />
                    </button>
                  </div>
                ) : (
                  <div className="text-gray-500">Author: {blogDetails?.authorId?.username}</div>
                )}
              </div>
              <div className="flex justify-between items-center mt-4 md:mt-8">
                <div className="text-gray-500">Category: {blogDetails?.category}</div>
                <div className="flex items-center">
                  {blogLikes}{' '}
                  {isLiked ? (
                    <AiFillLike className="cursor-pointer text-blue-500 ml-2" size={20} onClick={handleLike} />
                  ) : (
                    <AiOutlineLike className="cursor-pointer text-blue-500 ml-2" size={20} onClick={handleLike} />
                  )}
                </div>
              </div>
              <div className="mt-4 md:mt-8">
                <p>{blogDetails?.desc}</p>
                <span className="text-gray-500">Posted: {format(blogDetails?.createdAt)}</span>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-8">
                <div className="flex items-center mb-4">
                  <Image src={person} width="45" height="45" alt="" />
                  <input
                    value={commentText}
                    type="text"
                    placeholder="Type message..."
                    className="flex-1 ml-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <button
                    onClick={handleComment}
                    className="px-6 py-3 ml-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Post
                  </button>
                </div>
                <div className="space-y-4">
                  {comments?.length > 0 ? (
                    comments.map((comment) => <Comment key={comment._id} comment={comment} setComments={setComments} />)
                  ) : (
                    <h4 className="text-gray-500">No comments. Be the first one to leave a comment!</h4>
                  )}
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      );
}

export default BlogDetails
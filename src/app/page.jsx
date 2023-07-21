import BlogCard from "@/components/blogCard/BlogCard";
import { blogs } from "@/lib/data";
import Image from "next/image";
import classes from "./page.module.css";

export async function fetchBlogs() {
  const res = await fetch("https://chain-chroniclez.vercel.app/api/blog", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const blogs = await fetchBlogs();

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4 lg:px-8">
        {blogs?.length > 0 && <h2 className="text-3xl font-bold mb-8">ChainChronicles&apos;s Blog Website</h2>}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogs?.length > 0 ? (
            blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
          ) : (
            <h3 className="text-2xl font-semibold text-center">No blogs are currently available</h3>
          )}
        </div>
      </div>
    </div>
  );
}

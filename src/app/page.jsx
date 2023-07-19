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
    <div className={classes.container}>
      {blogs?.length > 0 && <h2>ChainChronicles&apos;s Blog Website</h2>}
      <div className={classes.wrapper}>
        <div className={classes.blog_Card}>
          {blogs?.length > 0 ? (
            blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} className="card" />
            ))
          ) : (
            <h3 className={classes.noBlogs}>No blogs are currently in the</h3>
          )}
        </div>
      </div>
    </div>
  );
}

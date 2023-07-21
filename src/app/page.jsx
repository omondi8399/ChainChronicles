import BlogCard from "@/components/blogCard/BlogCard";
import { blogs } from "@/lib/data";
import Image from "next/image";
import classes from "./page.module.css";
import HeroSection from "@/components/hero/HeroSection";
import Loader from "@/components/loader/Loader";

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
      <HeroSection />
      {blogs?.length > 0 && <h2>ChainChronicles&apos;s Blog Website</h2>}
      <div className={classes.wrapper}>
        {blogs?.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        ) : (
          <div className={classes.loader}>
            <h3 className={classes.noBlogs}>No blogs are currently in the</h3>
            <div className={classes.circle}>
              <Loader />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

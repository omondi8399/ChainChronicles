import BlogCard from "@/components/blogCard/BlogCard";
import { blogs } from "@/lib/data";
import Image from "next/image";
import HeroSection from "@/components/hero/HeroSection";
import Loader from "@/components/loader/Loader";
import TrendingSection from "@/components/trendingSection/TrendingSection";

export async function fetchBlogs() {
  const res = await fetch("https://chain-chroniclez.vercel.app/api/blog", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const blogs = await fetchBlogs();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto">
        <HeroSection />
        <TrendingSection />
        {blogs?.length > 0 && (
          <h2 className="text-center text-gray-800 text-4xl mt-6">
            ChainChronicles&apos;s Blog Website
          </h2>
        )}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogs?.length > 0 ? (
            blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} className="col-span-1" />
            ))
          ) : (
            <div className="loader flex flex-col items-center">
              <h3 className="text-gray-600 text-lg">No blogs are currently available.</h3>
              <div className="circle mt-4">
                <Loader />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

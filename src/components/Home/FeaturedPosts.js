import React from "react";
import { sortBlogs } from "@/src/utils";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";
import BlogLayoutThree from "../Blog/BlogLayoutThree";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);
  return (
    <section className='w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center'>
      <h2 className='w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light'>
        Featured Posts
      </h2>

      <div className='grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16'>
        <article className=' col-span-1  sxl:col-span-1 row-span-2 relative'>
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <article className=' col-span-1 sm:col-span-1 row-span-1 relative'>
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article className='col-span-1 sm:col-span-1 row-span-1 relative'>
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;

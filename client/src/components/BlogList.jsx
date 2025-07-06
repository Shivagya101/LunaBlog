import React from "react";
import { blog_data, blogCategories } from "../assets/assets";
import { useState } from "react";
import { motion } from "motion/react";
import BlogCard from "./BlogCard";
import { useAppContext } from "../context/AppContext";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const { blogs, input } = useAppContext();

  const filteredBlogs = () => {
    if (input === "") {
      return blogs;
    }
    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase())
    );
  };
  return (
    <div>
      {/* --- Category Bar: 3-per-row grid on phones, flex ribbon ≥ sm --- */}
<div
  className="
    grid grid-cols-3           /* 3 items per row on phones  */
    gap-4                      /* spacing in grid            */
    justify-items-center       /* center each cell           */
    sm:flex sm:flex-wrap       /* ≥sm: switch back to flex   */
    sm:justify-center
    sm:gap-8
    my-10 px-4 sm:px-0
  "
>
  {blogCategories.map(item => (
    <button
      key={item}
      onClick={() => setMenu(item)}
      className={`
        relative w-full          /* full-width inside grid cell */
        px-5 py-2 rounded-full
        border border-white/20 backdrop-blur-md
        font-orbitron text-sm tracking-wide text-center
        transition-all hover:scale-105 hover:border-primary
        ${
          menu === item
            ? "bg-primary text-silver"
            : "bg-white/5 text-white"
        }
      `}
    >
      {item}

      {menu === item && (
        <motion.div
          layoutId="underline"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="absolute inset-0 -z-10 bg-primary rounded-full"
        />
      )}
    </button>
  ))}
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {filteredBlogs()
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default BlogList;

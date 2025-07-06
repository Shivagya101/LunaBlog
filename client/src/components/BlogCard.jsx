import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="
        w-full rounded-xl overflow-hidden cursor-pointer
        border border-white/10 bg-white/5 backdrop-blur-sm
        shadow-sm hover:shadow-[0_2px_12px_rgba(201,171,117,0.35)]
        hover:scale-[1.03] transition-transform duration-300
      "
    >
      {/* ---------- Cover image (16:9 without plugin) ---------- */}
      <div className="relative w-full overflow-hidden">
        {/* Spacer to create 16 : 9 box   9 / 16 = 56.25 %  */}
        <div className="pt-[56.25%]" />
        <img
          src={image}
          alt={title}
          className="
            absolute inset-0 h-full w-full
            object-cover object-center
          "
        />
      </div>

      {/* ---------- Category pill ---------- */}
      <span
        className="
          inline-block ml-5 mt-4 px-3 py-1 rounded-full
          bg-primary/20 text-primary text-xs tracking-wide font-orbitron
        "
      >
        {category}
      </span>

      {/* ---------- Body ---------- */}
      <div className="p-5">
        <h3 className="mb-2 font-orbitron text-white text-lg leading-snug">
          {title}
        </h3>

        <p
          className="text-xs text-slate-300 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: description.slice(0, 80) + "…",
          }}
        />
      </div>
    </div>
  );
};

export default BlogCard;

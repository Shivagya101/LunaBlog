import React from 'react'
import { useNavigate } from 'react-router-dom';
const BlogCard = ({blog}) => {
    const { title, description, category, image, _id } = blog;
    const navigate = useNavigate();
  return (
    <div
  onClick={() => navigate(`/blog/${_id}`)}
  className="
    w-full rounded-lg overflow-hidden
    border border-white/10 bg-white/5 backdrop-blur-sm
    shadow-sm hover:shadow-[0_2px_12px_rgba(201,171,117,0.35)]
    hover:scale-[1.02] transition-transform duration-300
    cursor-pointer
  "
>
  {/* Cover image */}
  <img src={image} alt="" className="aspect-video object-cover" />

  {/* Category pill */}
  <span className="
    ml-5 mt-4 px-3 py-1 inline-block
    bg-primary/15 text-primary text-xs rounded-full
  ">
    {category}
  </span>

  {/* Body */}
  <div className="p-5">
    <h5 className="mb-2 font-semibold text-white">{title}</h5>

    <p
      className="mb-3 text-xs text-gray-300"
      dangerouslySetInnerHTML={{ __html: description.slice(0, 80) }}
    ></p>
  </div>
</div>

  )
}

export default BlogCard
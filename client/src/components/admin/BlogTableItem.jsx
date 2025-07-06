import React from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);
  const { axios } = useAppContext();
  const deleteBlog = async () => {
        const confirm = window.confirm("Are you sure you want to delete this blog?");
        if (!confirm) return;
        try {
            const { data } = await axios.post('/api/blog/delete', { id: blog._id });
            if (data.success) {
                toast.success(data.message);
                await fetchBlogs();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const togglePublish = async () => {
        try {
            const { data } = await axios.post('/api/blog/toggle-publish', { id: blog._id });
            if (data.success) {
                toast.success(data.message);
                await fetchBlogs();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);

        }
    }
  return (
    <tr className="border-y border-white/10 hover:bg-white/5 transition-all">
      <th className="px-4 py-4 text-slate-300 font-mono text-sm whitespace-nowrap align-middle">
        {index}
      </th>

      <td className="px-4 py-4 text-slate-200 whitespace-normal align-middle">
        {title}
      </td>

      <td className="px-4 py-4 max-sm:hidden text-slate-400 font-mono text-xs whitespace-nowrap align-middle">
        {BlogDate.toDateString()}
      </td>

      <td className="px-4 py-4 max-sm:hidden align-middle">
        <p
          className={`font-mono text-xs tracking-wider uppercase ${
            blog.isPublished ? "text-green-400" : "text-yellow-300"
          }`}
        >
          {blog.isPublished ? "Published" : "Unpublished"}
        </p>
      </td>

      <td className="px-4 py-4 flex gap-3 items-center whitespace-nowrap">
        <button onClick={togglePublish} className="border border-yellow-300/40 text-yellow-200/80 hover:bg-yellow-300/10 px-3 py-1 rounded-md uppercase font-mono text-xs transition-all">
          {blog.isPublished ? "Unpublish" : "Publish"}
        </button>
        
        <img
          src={assets.cross_icon} onClick={deleteBlog} 
          alt="delete"
          className="w-5 h-5 opacity-80 hover:scale-110 transition-all cursor-pointer"
        />
      </td>
    </tr>
  );
};

export default BlogTableItem;

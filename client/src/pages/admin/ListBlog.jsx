import React, { useEffect, useState } from "react";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const { axios } = useAppContext();
  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/admin/blogs");
      if (data.success) {
        setBlogs(data.blogs);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex-1 pt-5 px-4 sm:px-10 sm:pt-12 text-slate-200">
      <div className="max-w-screen-xl mx-auto w-full">
        <h1 className="text-xl font-orbitron tracking-wide text-yellow-300 mb-6">
          All Blogs
        </h1>

        <div className="w-full overflow-x-auto rounded-lg bg-white/5 backdrop-blur border border-white/10 shadow-inner scrollbar-hide">
          <table className="w-full min-w-[900px] table-auto text-sm text-left font-mono text-slate-300">
            <thead className="text-xs text-yellow-300 uppercase border-b border-white/10">
              <tr>
                <th className="px-4 py-4 whitespace-nowrap">#</th>
                <th className="px-4 py-4 whitespace-nowrap">Blog Title</th>
                <th className="px-4 py-4 max-sm:hidden whitespace-nowrap">
                  Date
                </th>
                <th className="px-4 py-4 max-sm:hidden whitespace-nowrap">
                  Status
                </th>
                <th className="px-4 py-4 whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListBlog;

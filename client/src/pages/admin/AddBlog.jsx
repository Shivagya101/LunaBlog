import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import { parse } from "marked";
const AddBlog = () => {
  const { axios, fetchBlogs } = useAppContext();
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsAdding(true);

      const blog = {
        title,
        subTitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished,
      };

      const formData = new FormData();
      formData.append("blog", JSON.stringify(blog));
      formData.append("image", image);

      const { data } = await axios.post("/api/blog/add", formData);
      if (data.success) {
        toast.success(data.message);
        setImage(false);
        setTitle("");
        setSubTitle("");
        quillRef.current.root.innerHTML = "";
        setCategory("Startup");
        setIsPublished(false);
        // Refresh the blogs list in context so homepage shows new data
        fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsAdding(false);
    }
  };

  const generateContent = async () => {
    if (!title) return toast.error("Please enter a title first");
    try {
      setLoading(true);
      const { data } = await axios.post("/api/blog/generate", {
        prompt: title,
      });
      if (data.success) {
        quillRef.current.root.innerHTML = parse(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });
    }
  }, []);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-gradient-to-br from-[#1f1c2c] to-[#3e3b5c] text-slate-200 h-full overflow-y-auto px-4 py-6"
    >
      <div className="bg-white/5 backdrop-blur border border-white/10 w-full max-w-3xl mx-auto p-6 md:p-10 rounded-xl shadow-lg">
        <p className="text-sm font-mono tracking-wider text-yellow-300">
          Upload Thumbnail
        </p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=""
            className="mt-3 h-20 rounded-lg cursor-pointer border border-dashed border-white/20"
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            id="image"
            hidden
            required
          />
        </label>

        <p className="mt-6 font-mono text-sm text-yellow-200">Blog Title</p>
        <input
          type="text"
          placeholder="Enter title..."
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mt-2 p-2 text-sm bg-transparent border border-white/20 rounded outline-none focus:border-yellow-300 text-white placeholder-slate-400"
        />

        <p className="mt-6 font-mono text-sm text-yellow-200">Subtitle</p>
        <input
          type="text"
          placeholder="Enter subtitle..."
          required
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
          className="w-full mt-2 p-2 text-sm bg-transparent border border-white/20 rounded outline-none focus:border-yellow-300 text-white placeholder-slate-400"
        />

        <p className="mt-6 font-mono text-sm text-yellow-200">
          Blog Description
        </p>
        <div className="relative mt-2 max-w-full h-[300px] bg-white rounded overflow-hidden">
          <div ref={editorRef} className="h-full" />
          {loading && (
            <div className='absolute right-0 top-0 bottom-0 left-0 flex items-center justify-center bg-black/10 mt-2'>
              <div className='w-8 h-8 rounded-full border-2 border-t-white animate-spin'></div>
            </div>
          )}
          <button
            type="button"
            disabled={loading}
            onClick={generateContent}
            className="absolute bottom-2 right-2 text-[10px] font-mono tracking-wide bg-black/70 text-yellow-200 px-3 py-1 rounded hover:underline"
          >
            Generate with AI
          </button>
        </div>

        <p className="mt-6 font-mono text-sm text-yellow-200">Blog Category</p>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="mt-2 px-3 py-2 bg-transparent border border-white/20 rounded text-slate-300 font-mono text-sm"
        >
          <option value="">Select category</option>
          {blogCategories.map((item, index) => (
            <option key={index} value={item} className="text-black">
              {item}
            </option>
          ))}
        </select>

        <div className="flex gap-2 items-center mt-6">
          <label
            htmlFor="publishToggle"
            className="text-sm font-mono text-yellow-200"
          >
            Publish Now
          </label>
          <input
            type="checkbox"
            id="publishToggle"
            checked={isPublished}
            onChange={(e) => setIsPublished(e.target.checked)}
            className="scale-125 cursor-pointer accent-yellow-300"
          />
        </div>

        <button
          disabled={isAdding}
          type="submit"
          className="mt-8 w-40 py-2 rounded bg-yellow-300 text-black font-mono tracking-wide uppercase hover:brightness-110 transition"
        >
          {isAdding ? "Adding..." : "Add Blog"}
        </button>
      </div>
    </form>
  );
};

export default AddBlog;

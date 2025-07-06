import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { blog_data, assets, comments_data } from "../assets/assets";
import Navbar from "../components/Navbar";
import Moment from "moment";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
const Blog = () => {
  const { id } = useParams();
  const { axios } = useAppContext();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`);
      data.success ? setData(data.blog) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const fetchComments = async () => {
     try {
            const { data } = await axios.post('/api/blog/comments', { blogId: id });
            if (data.success) {
                setComments(data.comments);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
  };
  const addComment = async (e) => {
    e.preventDefault();
    try {
            const { data } = await axios.post('/api/blog/add-comment', { blog: id, name, content });
            if (data.success) {
                toast.success(data.message);
                setName('');
                setContent('');
                // Refresh comments to show the new comment if it's approved
                fetchComments();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
  };
  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);
  return data ? (
    <div className="relative min-h-screen px-6 md:px-24 pt-24 pb-16 text-white font-light">
      {/* Ambient Background */}
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute inset-0 -z-10 opacity-40 pointer-events-none"
      />

      <Navbar />

      <div className="text-center mt-24 text-slate-300 font-light">
        <p className="text-xs uppercase tracking-widest text-yellow-300 font-mono mb-2">
          📡 Published on {Moment(data.createdAt).format("MMMM Do YYYY")}
        </p>

        <h1 className="text-3xl sm:text-5xl font-orbitron tracking-wide text-slate-100 drop-shadow max-w-2xl mx-auto">
          {data.title}
        </h1>

        <h2 className="text-base sm:text-xl italic text-slate-400 mt-4 max-w-xl mx-auto">
          {data.subTitle}
        </h2>

        <p className="inline-block mt-6 py-1.5 px-6 rounded-full border border-yellow-300/30 bg-yellow-300/5 text-yellow-200/90 text-xs uppercase tracking-wide font-semibold shadow-md backdrop-blur-sm">
          ✦ John Done – Capsule Author ID 07-A ✦
        </p>
      </div>
      <div className="mx-5 max-w-5xl md:mx-auto my-10 mt-6">
        <img src={data.image} alt="" className="rounded-3xl mb-5" />
        <div
          className="rich-text max-w-3xl mx-auto"
          dangerouslySetInnerHTML={{ __html: data.description }}
        ></div>
        {/* 🚀 Share Buttons */}
        <div className="my-24 max-w-3xl mx-auto text-slate-300">
          <p className="text-sm text-yellow-300 tracking-widest font-mono uppercase mb-6">
            📡 Broadcast This Article
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 bg-white/5 backdrop-blur border border-yellow-300/20 text-yellow-200 text-xs uppercase tracking-wider rounded-md hover:bg-yellow-300/10 transition font-mono shadow hover:shadow-yellow-200/20">
              Transmit to OrbitNet
            </button>

            <button className="px-6 py-2 bg-white/5 backdrop-blur border border-sky-400/20 text-sky-300 text-xs uppercase tracking-wider rounded-md hover:bg-sky-400/10 transition font-mono shadow hover:shadow-sky-300/20">
              Share via StellarWave
            </button>

            <button className="px-6 py-2 bg-white/5 backdrop-blur border border-purple-300/20 text-purple-200 text-xs uppercase tracking-wider rounded-md hover:bg-purple-400/10 transition font-mono shadow hover:shadow-purple-300/20">
              Beam to DeepSpaceNet
            </button>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-20 text-slate-300 font-light">
          <p className="text-sm text-yellow-300 tracking-widest uppercase font-mono mb-6">
            ✦ Beam Your Thoughts Below
          </p>

          <form
            onSubmit={addComment}
            className="flex flex-col items-start gap-5 max-w-xl bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-md"
          >
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Enter your capsule name"
              required
              className="w-full bg-transparent border border-yellow-300/20 text-white placeholder-slate-400 px-4 py-2 rounded-md outline-none focus:ring-1 focus:ring-yellow-300 transition"
            />

            <textarea
              onChange={(e) => setContent(e.target.value)}
              value={content}
              placeholder="Type your transmission..."
              required
              className="w-full bg-transparent border border-yellow-300/20 text-white placeholder-slate-400 px-4 py-3 rounded-md outline-none h-40 resize-none focus:ring-1 focus:ring-yellow-300 transition"
            ></textarea>

            <button
              type="submit"
              className="bg-yellow-300/80 hover:bg-yellow-300 text-black font-semibold px-8 py-2 rounded-md transition-all uppercase tracking-wider shadow hover:shadow-yellow-400/30"
            >
              Transmit 🛰️
            </button>
          </form>
        </div>
        <div className="mt-20 mb-16 max-w-3xl mx-auto text-slate-300 font-light">
          <p className="text-sm text-yellow-300 mb-6 tracking-widest font-mono uppercase">
            Logs ({comments.length})
          </p>

          <div className="flex flex-col gap-6">
            {comments.map((item, index) => (
              <div
                key={index}
                className="relative bg-white/5 border border-white/10 backdrop-blur-md p-5 rounded-xl shadow-md hover:shadow-yellow-200/10 transition text-slate-300"
              >
                {/* Name & Avatar */}
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={assets.user_icon}
                    alt=""
                    className="w-7 h-7 rounded-full border border-yellow-300/20"
                  />
                  <p className="font-semibold text-white tracking-wide font-space">
                    {item.name}
                  </p>
                </div>

                {/* Comment content */}
                <p className="text-sm text-slate-400 ml-10 leading-relaxed">
                  {item.content}
                </p>

                {/* Timestamp */}
                <div className="absolute right-4 bottom-3 text-xs font-mono text-slate-500 tracking-widest">
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
    <div className="text-center text-slate-400 py-20">
      <Loader />
    </div>
  );
};

export default Blog;

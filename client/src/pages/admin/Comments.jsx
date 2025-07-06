import React, { useEffect, useState } from "react";
import { comments_data } from "../../assets/assets";
import CommentTableItem from "../../components/admin/CommentTableItem";
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");
  const { axios } = useAppContext()
  const fetchComments = async () => {
    try {
      const { data } = await axios.get('/api/admin/comments')
      data.success ? setComments(data.comments) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex-1 pt-5 px-4 sm:px-10 sm:pt-12 text-slate-200">
      <div className="max-w-screen-xl mx-auto w-full">
        {/* Header and Filter Buttons */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-orbitron text-yellow-300 tracking-wide">
            Comments
          </h1>
          <div className="flex gap-4">
            {["Approved", "Not Approved"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`shadow-custom-sm border border-white/20 rounded-full px-4 py-1 text-xs cursor-pointer transition font-mono ${
                  filter === type ? "text-yellow-300" : "text-slate-400"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Comments Table */}
        <div className="w-full overflow-x-auto rounded-lg bg-white/5 backdrop-blur border border-white/10 shadow-inner scrollbar-hide mt-6">
          <table className="w-full min-w-[900px] table-auto text-sm text-left font-mono text-slate-300">
            <thead className="text-xs text-yellow-300 uppercase border-b border-white/10">
              <tr>
                <th className="px-4 py-4 whitespace-nowrap">
                  Blog Title & Comment
                </th>
                <th className="px-4 py-4 max-sm:hidden whitespace-nowrap">
                  Date
                </th>
                <th className="px-4 py-4 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {comments
                .filter((comment) =>
                  filter === "Approved"
                    ? comment.isApproved
                    : !comment.isApproved
                )
                .map((comment, index) => (
                  <CommentTableItem
                    key={comment._id}
                    comment={comment}
                    index={index + 1}
                    fetchComments={fetchComments}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Comments;

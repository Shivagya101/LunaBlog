import React from 'react';
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const CommentTableItem = ({ comment, fetchComments }) => {
  const { blog, createdAt, _id } = comment;
  const BlogDate = new Date(createdAt);
  const { axios } = useAppContext();
  const approveComment = async () => {
        try {
            const { data } = await axios.post('/api/admin/approve-comment', { id: _id });
            if (data.success) {
                toast.success(data.message);
                fetchComments();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const deleteComment = async () => {
        try {
            const confirm = window.confirm('Are you sure you want to delete this comment?');
            if (!confirm) return;

            const { data } = await axios.post('/api/admin/delete-comment', { id: _id });
            if (data.success) {
                toast.success(data.message);
                fetchComments();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
  return (
    <tr className="border-y border-white hover:bg-white/5 transition-all">
      <td className="px-4 py-4 text-slate-300 text-sm leading-relaxed">
        <p>
          <span className="font-semibold text-yellow-300">Blog:</span> {blog.title}
        </p>
        <p className="mt-2">
          <span className="font-semibold text-yellow-300">Name:</span> {comment.name}
        </p>
        <p>
          <span className="font-semibold text-yellow-300">Comment:</span> {comment.content}
        </p>
      </td>

      <td className="px-4 py-4 max-sm:hidden text-slate-400 font-mono">
        {BlogDate.toDateString()}
      </td>

      <td className="px-4 py-4">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <img
              src={assets.tick_icon} onClick={approveComment}
              alt="approve"
              className="w-5 hover:scale-110 transition-all cursor-pointer"
            />
          ) : (
            <span className="text-xs border border-green-500 text-green-400 rounded-full px-3 py-1 font-mono">
              Approved
            </span>
          )}
          <img
            src={assets.bin_icon} onClick={deleteComment}
            alt="delete"
            className="w-5 opacity-80 hover:scale-110 transition-all cursor-pointer"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentTableItem;

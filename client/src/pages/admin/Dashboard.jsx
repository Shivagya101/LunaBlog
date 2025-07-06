import React, { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/assets";
import BlogTableItem from "../../components/admin/BlogTableItem";
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });
   const {axios} = useAppContext()
  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get('/api/admin/dashboard');
      data.success ? setDashboardData(data.dashboardData) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="flex-1 p-4 md:p-10 from-[#1f1c2c] to-[#3e3b5c] text-slate-300">
      <div className="max-w-screen-xl mx-auto w-full">
        {/* Stat Cards */}
        <div className="flex flex-wrap gap-6">
          {[
            {
              icon: assets.dashboard_icon_1,
              label: "Blogs",
              value: dashboardData.blogs,
            },
            {
              icon: assets.dashboard_icon_2,
              label: "Transmissions",
              value: dashboardData.comments,
            },
            {
              icon: assets.dashboard_icon_3,
              label: "Draft Capsules",
              value: dashboardData.drafts,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-5 min-w-[220px] rounded-xl shadow hover:shadow-yellow-200/20 transition-transform hover:scale-105"
            >
              <img src={item.icon} alt="" className="w-8 h-8" />
              <div>
                <p className="text-2xl font-orbitron text-yellow-300">
                  {item.value}
                </p>
                <p className="text-slate-400 text-xs tracking-widest uppercase font-mono">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Latest Blogs Table */}
        <div className="mt-14">
          <div className="flex items-center gap-3 mb-4 text-yellow-300 tracking-widest font-mono">
            <img src={assets.dashboard_icon_4} alt="" className="w-6" />
            <p>Latest Logs</p>
          </div>

          <div className="w-full overflow-x-auto rounded-lg bg-white/5 backdrop-blur border border-white/10 shadow-inner scrollbar-hide">
            <table className="w-full min-w-[800px] text-sm text-left font-mono text-slate-300">
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
                {dashboardData.recentBlogs.map((blog, index) => (
                  <BlogTableItem
                    key={blog._id}
                    blog={blog}
                    fetchBlogs={fetchDashboard}
                    index={index + 1}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

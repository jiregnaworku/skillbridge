import React, { useState, useEffect } from "react";
import {
  Search, Grid, List, Heart, MapPin,
  Briefcase, Star, User
} from "./Icons"; // keep your icons as-is

const NGODashboard = () => {
  const [users, setUsers] = useState(mockUsers);
  const [filteredUsers, setFilteredUsers] = useState(mockUsers);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");

  useEffect(() => {
    const q = searchQuery.toLowerCase();
    setFilteredUsers(
      users.filter(
        u =>
          u.fullName.toLowerCase().includes(q) ||
          u.skills.some(s => s.toLowerCase().includes(q))
      )
    );
  }, [searchQuery, users]);

  const shortlistedCount = users.filter(u => u.shortlisted).length;
  const avgRating =
    (users.reduce((a, b) => a + b.rating, 0) / users.length).toFixed(1);

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-[#1F2933]">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0F4C81] text-white p-6 hidden lg:block">
        <h2 className="text-2xl font-bold mb-10">SkillBridge</h2>
        
        {/* Test Credentials */}
        <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm font-medium text-green-800 mb-2">NGO Dashboard Access:</p>
          <div className="text-xs text-green-700 space-y-1">
            <p><strong>Email:</strong> ngo@example.com</p>
            <p><strong>Password:</strong> password</p>
          </div>
        </div>
        
        <nav className="space-y-4 text-sm">
          <p className="font-semibold text-[#F4A261]">Dashboard</p>
          <p className="opacity-80 hover:opacity-100 cursor-pointer">Candidates</p>
          <p className="opacity-80 hover:opacity-100 cursor-pointer">Shortlisted</p>
          <p className="opacity-80 hover:opacity-100 cursor-pointer">Messages</p>
          <p className="opacity-80 hover:opacity-100 cursor-pointer">Settings</p>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="flex-1">

        {/* TOP BAR */}
        <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
          <div className="relative w-96">
            <Search className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
            <input
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2FA4A9]"
              placeholder="Search nurses, skills..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="font-medium text-sm text-gray-600">
            NGO Account
          </div>
        </div>

        {/* KPI CARDS */}
        <div className="grid md:grid-cols-4 gap-6 px-6 py-6">
          {[
            ["Candidates", users.length],
            ["Shortlisted", shortlistedCount],
            ["Avg Rating", avgRating],
            ["Active Now", users.filter(u => u.availability === "full-time").length]
          ].map(([label, value]) => (
            <div key={label} className="bg-white rounded-xl p-5 shadow-sm">
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-2xl font-bold text-[#0F4C81]">{value}</p>
            </div>
          ))}
        </div>

        {/* VIEW TOGGLE */}
        <div className="flex justify-end px-6">
          <button
            onClick={() => setViewMode("grid")}
            className={`p-2 ${viewMode === "grid" && "bg-[#2FA4A9] text-white"} rounded-lg`}
          >
            <Grid className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 ml-2 ${viewMode === "list" && "bg-[#2FA4A9] text-white"} rounded-lg`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>

        {/* CANDIDATES */}
        <div className={`px-6 py-6 grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
            : ""
        }`}>
          {filteredUsers.map(user => (
            <div key={user.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold text-lg">{user.fullName}</h3>
                  <p className="text-sm text-gray-500">{user.fieldOfStudy}</p>
                </div>
                <button
                  onClick={() =>
                    setUsers(prev =>
                      prev.map(u =>
                        u.id === user.id ? { ...u, shortlisted: !u.shortlisted } : u
                      )
                    )
                  }
                >
                  <Heart
                    className={`w-5 h-5 ${
                      user.shortlisted ? "text-red-500" : "text-gray-400"
                    }`}
                    filled={user.shortlisted}
                  />
                </button>
              </div>

              <div className="mt-4 text-sm space-y-1 text-gray-600">
                <p className="flex items-center"><Briefcase className="w-4 h-4 mr-2" /> {user.educationLevel}</p>
                <p className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> {user.location}</p>
                <p className="flex items-center"><Star className="w-4 h-4 mr-2 text-yellow-400" /> {user.rating}</p>
              </div>

              <div className="flex flex-wrap gap-1 mt-4">
                {user.skills.slice(0, 3).map(s => (
                  <span key={s} className="bg-[#E6F4F5] text-[#2FA4A9] text-xs px-2 py-1 rounded">
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-5">
                <button className="flex-1 bg-[#0F4C81] text-white py-2 rounded-lg text-sm">
                  View Profile
                </button>
                <button className="flex-1 border py-2 rounded-lg text-sm">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default NGODashboard;

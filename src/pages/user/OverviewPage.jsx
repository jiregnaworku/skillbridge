import React, { useState, useEffect } from 'react';
import {
  Search, Grid, List, MapPin, Briefcase,
  Star, Calendar, Heart, Clock
} from '../Icons';

// Mock job opportunities data
const mockJobs = [
  {
    id: 1,
    title: "Emergency Response Coordinator",
    organization: "Red Cross International",
    location: "Addis Ababa, Ethiopia",
    type: "Full-time",
    salary: "$45,000 - $60,000",
    posted: "2 days ago",
    deadline: "Dec 15, 2024",
    category: "Emergency Response",
    saved: false,
    applied: false,
    description: "Lead emergency response operations and coordinate relief efforts in crisis situations.",
    requirements: ["5+ years experience", "Emergency management certification", "Fluent in English"],
    logo: null
  },
  {
    id: 2,
    title: "Public Health Program Manager",
    organization: "World Health Organization",
    location: "Nairobi, Kenya",
    type: "Full-time",
    salary: "$55,000 - $75,000",
    posted: "1 week ago",
    deadline: "Dec 20, 2024",
    category: "Public Health",
    saved: true,
    applied: false,
    description: "Manage public health programs and coordinate with local health authorities.",
    requirements: ["Master's in Public Health", "3+ years experience", "Program management skills"],
    logo: null
  },
  {
    id: 3,
    title: "Field Nurse - Emergency Relief",
    organization: "Doctors Without Borders",
    location: "Dakar, Senegal",
    type: "Contract",
    salary: "$40,000 - $55,000",
    posted: "3 days ago",
    deadline: "Dec 18, 2024",
    category: "Healthcare",
    saved: false,
    applied: true,
    description: "Provide medical care in emergency relief settings and field hospitals.",
    requirements: ["RN certification", "2+ years experience", "Emergency medicine background"],
    logo: null
  },
  {
    id: 4,
    title: "Nutrition Program Specialist",
    organization: "UNICEF",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "$42,000 - $58,000",
    posted: "5 days ago",
    deadline: "Dec 22, 2024",
    category: "Nutrition",
    saved: true,
    applied: false,
    description: "Design and implement nutrition programs for vulnerable communities.",
    requirements: ["Nutrition degree", "Field experience", "Monitoring & evaluation skills"],
    logo: null
  },
  {
    id: 5,
    title: "Water Sanitation Engineer",
    organization: "WaterAid",
    location: "Kampala, Uganda",
    type: "Contract",
    salary: "$48,000 - $65,000",
    posted: "1 day ago",
    deadline: "Dec 25, 2024",
    category: "Engineering",
    saved: false,
    applied: false,
    description: "Design and implement water sanitation systems in rural communities.",
    requirements: ["Engineering degree", "WASH experience", "Project management"],
    logo: null
  },
  {
    id: 6,
    title: "Education Program Coordinator",
    organization: "Save the Children",
    location: "Cape Town, South Africa",
    type: "Full-time",
    salary: "$38,000 - $52,000",
    posted: "4 days ago",
    deadline: "Dec 28, 2024",
    category: "Education",
    saved: false,
    applied: true,
    description: "Coordinate educational programs and teacher training initiatives.",
    requirements: ["Education degree", "Teaching experience", "Program coordination"],
    logo: null
  }
];

const OverviewPage = () => {
  const [jobs, setJobs] = useState(mockJobs);
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'public-health', label: 'Public Health' },
    { value: 'nutrition', label: 'Nutrition' },
    { value: 'emergency-response', label: 'Emergency Response' }
  ];

  useEffect(() => {
    const q = searchQuery.toLowerCase();
    const filtered = jobs.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(q) || 
                           job.organization.toLowerCase().includes(q) ||
                           job.description.toLowerCase().includes(q);
      const matchesCategory = selectedCategory === 'all' || 
                           job.category.toLowerCase().replace(' ', '-') === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredJobs(filtered);
  }, [searchQuery, jobs, selectedCategory]);

  const stats = {
    totalJobs: jobs.length,
    appliedJobs: jobs.filter(job => job.applied).length,
    savedJobs: jobs.filter(job => job.saved).length,
    interviews: 3 // Mock data
  };

  const toggleSave = (jobId) => {
    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, saved: !job.saved } : job
    ));
  };

  const toggleApply = (jobId) => {
    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, applied: !job.applied } : job
    ));
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC] text-[#1F2933]">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0F4C81] text-white p-6 hidden lg:block">
        <h2 className="text-2xl font-bold mb-10">SkillBridge</h2>
        
        {/* Test Credentials */}
        <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm font-medium text-green-800 mb-2">Professional Dashboard Access:</p>
          <div className="text-xs text-green-700 space-y-1">
            <p><strong>Email:</strong> nurse@example.com</p>
            <p><strong>Password:</strong> password</p>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="mb-8 space-y-4">
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-sm text-white/80">Applications Sent</p>
            <p className="text-2xl font-bold text-white">{stats.appliedJobs}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <p className="text-sm text-white/80">Saved Jobs</p>
            <p className="text-2xl font-bold text-white">{stats.savedJobs}</p>
          </div>
        </div>
        
        <nav className="space-y-4 text-sm">
          <p className="font-semibold text-[#F4A261]">Job Finder</p>
          <p className="opacity-80 hover:opacity-100 cursor-pointer">Browse Jobs</p>
          <p className="opacity-80 hover:opacity-100 cursor-pointer">My Applications</p>
          <p className="opacity-80 hover:opacity-100 cursor-pointer">Saved Jobs</p>
          <p className="opacity-80 hover:opacity-100 cursor-pointer">Interviews</p>
          <p className="opacity-80 hover:opacity-100 cursor-pointer">Profile Settings</p>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="flex-1">

        {/* TOP BAR */}
        <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
          <div className="flex-1 max-w-2xl mr-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
              <input
                className="w-full pl-10 pr-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#2FA4A9]"
                placeholder="Search jobs, organizations, skills..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2FA4A9]"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
            <div className="font-medium text-sm text-gray-600">
              Professional Account
            </div>
          </div>
        </div>

        {/* KPI CARDS */}
        <div className="grid md:grid-cols-4 gap-6 px-6 py-6">
          {[
            ["Available Jobs", stats.totalJobs, "bg-blue-50 text-blue-600"],
            ["Applications", stats.appliedJobs, "bg-green-50 text-green-600"],
            ["Saved Jobs", stats.savedJobs, "bg-purple-50 text-purple-600"],
            ["Interviews", stats.interviews, "bg-yellow-50 text-yellow-600"]
          ].map(([label, value, colorClass]) => (
            <div key={label} className="bg-white rounded-xl p-5 shadow-sm">
              <p className="text-sm text-gray-500">{label}</p>
              <p className={`text-2xl font-bold ${colorClass}`}>{value}</p>
            </div>
          ))}
        </div>

        {/* VIEW TOGGLE */}
        <div className="flex justify-between items-center px-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Opportunities</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 ${viewMode === "grid" ? "bg-[#2FA4A9] text-white" : "bg-gray-100 text-gray-600"} rounded-lg`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 ${viewMode === "list" ? "bg-[#2FA4A9] text-white" : "bg-gray-100 text-gray-600"} rounded-lg`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* JOBS */}
        <div className={`px-6 py-6 grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
            : ""
        }`}>
          {filteredJobs.map(job => (
            <div key={job.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">{job.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{job.organization}</p>
                  <div className="flex items-center text-sm text-gray-500 space-x-3">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => toggleSave(job.id)}
                  className="ml-2"
                >
                  <Heart
                    className={`w-5 h-5 ${job.saved ? "text-red-500 fill-current" : "text-gray-400"}`}
                  />
                </button>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-600 line-clamp-2">{job.description}</p>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {job.requirements.slice(0, 2).map((req, index) => (
                  <span key={index} className="bg-[#E6F4F5] text-[#2FA4A9] text-xs px-2 py-1 rounded">
                    {req}
                  </span>
                ))}
                {job.requirements.length > 2 && (
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                    +{job.requirements.length - 2} more
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span className="font-medium text-gray-900">{job.salary}</span>
                <span>Deadline: {job.deadline}</span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => toggleApply(job.id)}
                  className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                    job.applied 
                      ? "bg-green-100 text-green-700 hover:bg-green-200" 
                      : "bg-[#0F4C81] text-white hover:bg-[#1A5F8F]"
                  }`}
                >
                  {job.applied ? 'Applied ✓' : 'Apply Now'}
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default OverviewPage;

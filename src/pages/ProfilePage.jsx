import React, { useState } from "react";
import {
  User, Mail, Phone, MapPin, Briefcase,
  Clock, CheckCircle, Star, Calendar
} from "./Icons";

const ProfilePage = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const availabilityColor = "bg-emerald-100 text-emerald-700";

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1F2933]">

      {/* STICKY ACTION HEADER */}
      <div className="sticky top-0 z-30 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <span className="font-bold text-[#0F4C81] text-lg">SkillBridge</span>
          <div className="space-x-3">
            <button className="px-4 py-2 border rounded-lg text-sm">
              Save
            </button>
            <button
              onClick={() => setShowContactModal(true)}
              className="px-5 py-2 bg-[#0F4C81] text-white rounded-lg text-sm"
            >
              Contact / Hire
            </button>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-3 gap-8">

        {/* LEFT / MAIN */}
        <div className="lg:col-span-2 space-y-6">

          {/* PROFILE HERO */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="h-28 bg-gradient-to-r from-[#0F4C81] to-[#2FA4A9]" />
            <div className="p-6 -mt-16 flex gap-6 items-end">
              <div className="w-32 h-32 rounded-full bg-gray-200 border-4 border-white flex items-center justify-center shadow">
                <User className="w-14 h-14 text-gray-400" />
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-bold">{mockUserData.fullName}</h1>
                <p className="text-gray-600">
                  {mockUserData.fieldOfStudy} • {mockUserData.educationLevel}
                </p>
                <div className="flex items-center gap-4 mt-2 text-sm">
                  <span className={`px-3 py-1 rounded-full ${availabilityColor}`}>
                    Full-time Available
                  </span>
                  <span className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    {mockUserData.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* STATS STRIP */}
          <div className="grid grid-cols-3 bg-white rounded-xl shadow-sm divide-x">
            {[
              ["Rating", mockUserData.rating],
              ["Completed Jobs", mockUserData.completedJobs],
              ["Response Rate", `${mockUserData.responseRate}%`]
            ].map(([label, value]) => (
              <div key={label} className="p-5 text-center">
                <p className="text-sm text-gray-500">{label}</p>
                <p className="text-xl font-bold text-[#0F4C81]">{value}</p>
              </div>
            ))}
          </div>

          {/* ABOUT */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-3">Professional Summary</h2>
            <p className="text-gray-600 leading-relaxed">
              {mockUserData.experience}
            </p>
          </div>

          {/* SKILLS */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {mockUserData.skills.map(skill => (
                <span
                  key={skill}
                  className="bg-[#E6F4F5] text-[#2FA4A9] px-3 py-1 rounded-lg text-sm flex items-center"
                >
                  <CheckCircle className="w-4 h-4 mr-1" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* CERTIFICATIONS */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Certifications</h2>
            <ul className="space-y-3">
              {mockUserData.certifications.map(cert => (
                <li key={cert} className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mr-3" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* CONTACT */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-gray-600">
              <p className="flex items-center"><Mail className="w-4 h-4 mr-2" /> {mockUserData.email}</p>
              <p className="flex items-center"><Phone className="w-4 h-4 mr-2" /> {mockUserData.phone}</p>
              <p className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> Joined {new Date(mockUserData.joinDate).toDateString()}</p>
            </div>
          </div>

          {/* AVAILABILITY */}
          <div className="bg-gradient-to-br from-[#E6F4F5] to-white border border-[#2FA4A9] rounded-xl p-6">
            <h3 className="font-semibold mb-2">Availability</h3>
            <p className="text-gray-600 mb-4">
              Open for full-time & NGO missions
            </p>
            <div className="bg-white rounded-lg p-4 text-sm">
              <p className="flex items-center font-medium">
                <Clock className="w-4 h-4 mr-2 text-[#0F4C81]" />
                Responds within 2–4 hours
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* CONTACT MODAL (keep your existing one) */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">
              Contact {mockUserData.fullName}
            </h2>
            <p className="text-sm text-gray-600">
              This will open your existing contact form logic.
            </p>
            <button
              onClick={() => setShowContactModal(false)}
              className="mt-4 px-4 py-2 border rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;

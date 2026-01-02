import React, { useState } from 'react';

const SavedJobsPage = () => {
  const [savedJobs, setSavedJobs] = useState([
    {
      id: 1,
      company: 'World Health Organization',
      position: 'Public Health Coordinator',
      location: 'Geneva, Switzerland',
      type: 'Full-time',
      salary: '$80,000 - $95,000',
      postedDate: '2024-01-12',
      deadline: '2024-02-15',
      description: 'Join our global health initiative to improve access in underserved communities.',
      requirements: ['Relevant degree', '3+ years experience', 'Public health knowledge'],
      savedDate: '2024-01-14'
    },
    {
      id: 2,
      company: 'Save the Children',
      position: 'Program Coordinator',
      location: 'Nairobi, Kenya',
      type: 'Contract',
      salary: '$70,000 - $85,000',
      postedDate: '2024-01-10',
      deadline: '2024-02-01',
      description: 'Provide essential services to children in need across rural communities.',
      requirements: ['Program experience', 'Bilingual preferred', 'Travel flexibility'],
      savedDate: '2024-01-11'
    },
    {
      id: 3,
      company: 'International Rescue Committee',
      position: 'Emergency Response Specialist',
      location: 'Multiple Locations',
      type: 'Contract',
      salary: '$85,000 - $100,000',
      postedDate: '2024-01-08',
      deadline: '2024-01-30',
      description: 'Rapid deployment to crisis zones providing critical support and assistance.',
      requirements: ['Emergency experience', 'Disaster response training', 'Physical fitness'],
      savedDate: '2024-01-09'
    }
  ]);

  const handleRemoveSaved = (jobId) => {
    setSavedJobs(prev => prev.filter(job => job.id !== jobId));
  };

  const handleApply = (jobId) => {
    // In real app, this would navigate to application form
    alert('Application process would start here');
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Saved Opportunities</h1>
        <p className="text-gray-600">Manage your saved opportunities</p>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm border mb-6">
        <div className="flex flex-wrap gap-4">
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Types</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </select>
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>All Locations</option>
            <option>United States</option>
            <option>International</option>
            <option>Remote</option>
          </select>
          <input
            type="text"
            placeholder="Search saved opportunities..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Saved Jobs List */}
      <div className="space-y-6">
        {savedJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  {/* Company Logo */}
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  
                  {/* Job Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.position}</h3>
                    <p className="text-gray-600 mb-2">{job.company}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                        {job.salary}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleRemoveSaved(job.id)}
                    className="p-2 text-gray-400 hover:text-red-500 transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Job Description */}
              <p className="text-gray-600 mb-4">{job.description}</p>

              {/* Requirements */}
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Requirements:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.requirements.map((req, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-800">
                      {req}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Info */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="text-sm text-gray-500">
                  <p>Posted: {new Date(job.postedDate).toLocaleDateString()}</p>
                  <p>Deadline: {new Date(job.deadline).toLocaleDateString()}</p>
                  <p>Saved: {new Date(job.savedDate).toLocaleDateString()}</p>
                </div>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition">
                    View Details
                  </button>
                  <button
                    onClick={() => handleApply(job.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {savedJobs.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No saved opportunities yet</h3>
          <p className="text-gray-600 mb-4">Start browsing and save opportunities that interest you</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Browse Opportunities
          </button>
        </div>
      )}
    </div>
  );
};

export default SavedJobsPage;

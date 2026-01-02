import React, { useState } from 'react';
import { Search, Filter, MapPin, Briefcase, Star, Heart, Clock, ChevronRight } from './Icons';

const BrowseProfessionalsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const professionals = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      title: "Senior Healthcare Consultant",
      category: "healthcare",
      location: "Addis Ababa, Ethiopia",
      experience: "10+ years",
      rating: 4.9,
      reviews: 127,
      availability: "Available",
      skills: ["Public Health", "Program Management", "Research"],
      hourlyRate: "$45-60",
      verified: true,
      image: null
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Operations Director",
      category: "operations",
      location: "Nairobi, Kenya",
      experience: "8+ years",
      rating: 4.8,
      reviews: 89,
      availability: "Available",
      skills: ["Logistics", "Supply Chain", "Team Management"],
      hourlyRate: "$55-70",
      verified: true,
      image: null
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      title: "Education Program Specialist",
      category: "education",
      location: "Dakar, Senegal",
      experience: "6+ years",
      rating: 4.7,
      reviews: 64,
      availability: "Busy",
      skills: ["Curriculum Development", "Training", "Assessment"],
      hourlyRate: "$35-50",
      verified: true,
      image: null
    },
    {
      id: 4,
      name: "James Wilson",
      title: "Environmental Engineer",
      category: "engineering",
      location: "Cape Town, South Africa",
      experience: "12+ years",
      rating: 4.9,
      reviews: 156,
      availability: "Available",
      skills: ["Water Systems", "Sustainability", "Project Management"],
      hourlyRate: "$60-80",
      verified: true,
      image: null
    },
    {
      id: 5,
      name: "Amina Hassan",
      title: "Financial Analyst",
      category: "finance",
      location: "Lagos, Nigeria",
      experience: "7+ years",
      rating: 4.6,
      reviews: 43,
      availability: "Available",
      skills: ["Budget Management", "Financial Planning", "Risk Assessment"],
      hourlyRate: "$40-55",
      verified: true,
      image: null
    },
    {
      id: 6,
      name: "Robert Taylor",
      title: "IT Infrastructure Manager",
      category: "technology",
      location: "Kigali, Rwanda",
      experience: "9+ years",
      rating: 4.8,
      reviews: 92,
      availability: "Available",
      skills: ["Network Administration", "Cloud Computing", "Security"],
      hourlyRate: "$50-65",
      verified: true,
      image: null
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'finance', label: 'Finance' },
    { value: 'operations', label: 'Operations' },
    { value: 'technology', label: 'Technology' }
  ];

  const locations = [
    { value: 'all', label: 'All Locations' },
    { value: 'ethiopia', label: 'Ethiopia' },
    { value: 'kenya', label: 'Kenya' },
    { value: 'nigeria', label: 'Nigeria' },
    { value: 'south-africa', label: 'South Africa' },
    { value: 'senegal', label: 'Senegal' },
    { value: 'rwanda', label: 'Rwanda' }
  ];

  const filteredProfessionals = professionals.filter(prof => {
    const matchesSearch = prof.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prof.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prof.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || prof.category === selectedCategory;
    const matchesLocation = selectedLocation === 'all' || 
                           (selectedLocation === 'ethiopia' && prof.location.includes('Ethiopia')) ||
                           (selectedLocation === 'kenya' && prof.location.includes('Kenya')) ||
                           (selectedLocation === 'nigeria' && prof.location.includes('Nigeria')) ||
                           (selectedLocation === 'south-africa' && prof.location.includes('South Africa')) ||
                           (selectedLocation === 'senegal' && prof.location.includes('Senegal')) ||
                           (selectedLocation === 'rwanda' && prof.location.includes('Rwanda'));
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Search and Filters */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Browse Professionals</h1>
              <p className="text-gray-600 mt-1">Connect with skilled professionals worldwide</p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, title, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>

            {/* Location Filter */}
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {locations.map(loc => (
                <option key={loc.value} value={loc.value}>{loc.label}</option>
              ))}
            </select>
          </div>

          {/* Advanced Filters (Expandable) */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Any Experience</option>
                    <option>Entry Level (0-2 years)</option>
                    <option>Mid Level (3-5 years)</option>
                    <option>Senior Level (6-10 years)</option>
                    <option>Expert Level (10+ years)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Any Availability</option>
                    <option>Available Now</option>
                    <option>Available Within 2 Weeks</option>
                    <option>Busy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Hourly Rate Range</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Any Rate</option>
                    <option>$0-30/hr</option>
                    <option>$30-50/hr</option>
                    <option>$50-70/hr</option>
                    <option>$70+/hr</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <p className="text-gray-600">
          Showing <span className="font-semibold">{filteredProfessionals.length}</span> professionals
        </p>
      </div>

      {/* Professionals Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProfessionals.map(prof => (
            <div key={prof.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow">
              {/* Profile Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-500 font-semibold">
                        {prof.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{prof.name}</h3>
                      <p className="text-sm text-gray-600">{prof.title}</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 transition">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                {/* Location and Experience */}
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="mr-4">{prof.location}</span>
                  <Briefcase className="w-4 h-4 mr-1" />
                  <span>{prof.experience}</span>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {prof.skills.slice(0, 3).map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                    {prof.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{prof.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(prof.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-1 text-sm font-medium text-gray-900">{prof.rating}</span>
                  </div>
                  <span className="text-sm text-gray-600">({prof.reviews} reviews)</span>
                </div>

                {/* Availability and Rate */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-gray-400" />
                    <span className={`text-sm ${prof.availability === 'Available' ? 'text-green-600' : 'text-orange-600'}`}>
                      {prof.availability}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{prof.hourlyRate}/hr</span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition font-medium">
                    View Profile
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition font-medium">
                    Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredProfessionals.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition font-medium inline-flex items-center">
              Load More Professionals
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredProfessionals.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No professionals found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLocation('all');
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseProfessionalsPage;

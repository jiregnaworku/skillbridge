import React from 'react';
import { Link } from 'react-router-dom';
import {
  User, Briefcase, Heart, Star, MapPin,
  Mail, Phone, CheckCircle
} from './Icons';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="w-full">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Skill<span className="text-blue-600">Bridge</span></h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition">Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-600 hover:text-gray-900 transition">Sign In</Link>
              <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 w-full">
        <div className="w-full">
          <div className="text-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Connecting
              <span className="text-blue-600"> Professionals</span> with Global Opportunities
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              SkillBridge bridges the gap between skilled professionals and organizations worldwide. 
              Find your next career opportunity or connect with qualified talent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/register" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </Link>
              <Link 
                to="/browse" 
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition"
              >
                Browse Professionals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="features" className="py-20 w-full">
        <div className="w-full">
          <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for professionals and organizations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 w-full px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <User className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Professionals</h3>
              <p className="text-gray-600 mb-4">Create your professional profile, browse opportunities, and connect with organizations globally.</p>
              <Link to="/register" className="text-blue-600 font-medium hover:text-blue-700">Learn More →</Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Organizations</h3>
              <p className="text-gray-600 mb-4">Post opportunities, browse qualified candidates, and manage your workforce efficiently.</p>
              <Link to="/register" className="text-blue-600 font-medium hover:text-blue-700">Learn More →</Link>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Impact</h3>
              <p className="text-gray-600 mb-4">Join a network making a difference in service delivery across communities worldwide.</p>
              <Link to="/about" className="text-blue-600 font-medium hover:text-blue-700">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 w-full bg-gray-50">
        <div className="w-full">
          <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get started</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 w-full px-4 sm:px-6 lg:px-8">
            {[
              { step: "1", title: "Sign Up", desc: "Create your account as a professional or organization" },
              { step: "2", title: "Create Profile", desc: "Build your professional profile or post opportunities" },
              { step: "3", title: "Connect", desc: "Browse and connect with matching opportunities or candidates" },
              { step: "4", title: "Collaborate", desc: "Work together to make a difference in communities" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 w-full">
        <div className="w-full">
          <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Trusted by Leading Organizations</h3>
            <p className="text-gray-600">Partnering with organizations worldwide</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center w-full px-4 sm:px-6 lg:px-8">
            {['Red Cross', 'UNICEF', 'WHO', 'Doctors Without Borders', 'Save the Children', 'International Rescue'].map((org, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 text-center text-gray-600 font-medium">
                {org}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 w-full bg-gray-50">
        <div className="w-full">
          <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our community</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 w-full px-4 sm:px-6 lg:px-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Program Coordinator",
                content: "SkillBridge helped me find my dream position with an international organization. The process was smooth and the opportunities were amazing.",
                rating: 5
              },
              {
                name: "Dr. Michael Chen",
                role: "Operations Director",
                content: "We've hired several qualified professionals through SkillBridge. The platform makes recruitment efficient and reliable.",
                rating: 5
              },
              {
                name: "Maria Rodriguez",
                role: "Field Specialist",
                content: "The platform connected me with opportunities I never thought possible. Truly life-changing experience.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 w-full bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="w-full text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals and organizations making an impact globally.
          </p>
          <Link 
            to="/register" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition shadow-lg"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16 w-full">
        <div className="w-full">
          <div className="grid md:grid-cols-4 gap-8 mb-12 w-full px-4 sm:px-6 lg:px-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Skill<span className="text-blue-400">Bridge</span></h3>
              <p className="text-gray-400 mb-4">Connecting professionals with opportunities worldwide.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">f</div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">t</div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">in</div>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">For Professionals</a></li>
                <li><a href="#" className="hover:text-white transition">For Organizations</a></li>
                <li><a href="#" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition">Success Stories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Press</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>contact@skillbridge.et</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+251 911 234 567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Bole, Addis Ababa, Ethiopia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SkillBridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

/* ---------- Icons ---------- */
const UserIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const LockIcon = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

/* ---------- Component ---------- */
const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'user',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await login(formData);
      if (!res.success) throw new Error(res.error);

      navigate(formData.role === 'ngo'
        ? '/ngo/dashboard'
        : '/profile/create');
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8">

        {/* Brand */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight">
            Fev<span className="text-indigo-600">Nurse</span>
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Connecting professionals with NGOs worldwide
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-lg bg-red-50 border border-red-200 text-red-700 px-4 py-3 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Role */}
          <div className="grid grid-cols-2 gap-4">
            {['user', 'ngo'].map(r => (
              <label key={r} className="cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value={r}
                  checked={formData.role === r}
                  onChange={handleChange}
                  className="sr-only peer"
                />
                <div className="p-4 rounded-xl border text-center transition
                  peer-checked:border-blue-500
                  peer-checked:bg-blue-50
                  peer-checked:ring-2 peer-checked:ring-blue-300
                  hover:bg-slate-50">
                  <UserIcon className="h-6 w-6 mx-auto mb-2 text-slate-600" />
                  <p className="font-medium text-slate-800 capitalize">{r}</p>
                </div>
              </label>
            ))}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email address
            </label>
            <input
              name="email"
              type="email"
              required
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <div className="relative">
              <LockIcon className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
              <input
                name="password"
                type="password"
                required
                onChange={handleChange}
                className="w-full pl-10 rounded-lg border border-slate-300 px-4 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold text-white
              bg-gradient-to-r from-blue-600 to-indigo-600
              hover:from-blue-700 hover:to-indigo-700
              shadow-lg transition disabled:opacity-50">
            {loading ? 'Signing in…' : 'Sign in'}
          </button>

          {/* Footer */}
          <p className="text-sm text-slate-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 font-medium hover:text-blue-700">
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

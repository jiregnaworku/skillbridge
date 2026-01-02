import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

/* ================= ICONS ================= */

const Icon = ({ children, className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth={2}
  >
    {children}
  </svg>
);

const UserIcon = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </Icon>
);

const MailIcon = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </Icon>
);

const LockIcon = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 21h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4" />
  </Icon>
);

const EyeIcon = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </Icon>
);

const EyeOffIcon = (props) => (
  <Icon {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.58 10.58A3 3 0 0012 15a3 3 0 002.42-4.42" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c1.25 0 2.45.243 3.55.684" />
  </Icon>
);

/* ================= INPUT ================= */

const InputField = ({
  label,
  name,
  type,
  value,
  onChange,
  error,
  icon,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full pl-9 pr-3 py-2.5 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
    </div>
    {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
  </div>
);

/* ================= PAGE ================= */

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'user',
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
    setErrors((p) => ({ ...p, [name]: '' }));
  };

  const validate = () => {
    const e = {};
    if (form.fullName.trim().length < 2) e.fullName = 'Full name required';
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (form.password.length < 8) e.password = 'Minimum 8 characters';
    if (form.password !== form.confirmPassword) e.confirmPassword = 'Passwords do not match';
    if (!form.agree) e.agree = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    const res = await register(form);
    setLoading(false);

    if (res?.success) {
      navigate(form.role === 'ngo' ? '/ngo/dashboard' : '/user/dashboard');
    } else {
      setErrors({ general: 'Registration failed. Try again.' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">

        {/* Header */}
        <div className="p-6 pb-0">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Skill<span className="text-blue-600">Bridge</span></h1>
            <p className="text-sm text-gray-600 mt-1">Connect with opportunities</p>
          </div>
          
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Create account
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Join professionals and organizations worldwide
          </p>
        </div>

        {/* Form */}
        <div className="px-6 pb-6">
          {errors.general && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">
              {errors.general}
            </div>
          )}

          <form onSubmit={submit} className="space-y-4">

            {/* ROLE */}
            <div className="grid grid-cols-2 gap-2">
              {['user', 'ngo'].map((r) => (
                <label key={r} className="cursor-pointer">
                  <input
                    type="radio"
                    name="role"
                    value={r}
                    checked={form.role === r}
                    onChange={onChange}
                    className="peer hidden"
                  />
                  <div className="p-3 rounded-lg border text-center text-sm peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 transition-all">
                    {r === 'user' ? 'Professional' : 'Organization'}
                  </div>
                </label>
              ))}
            </div>

            <InputField
              label="Full Name"
              name="fullName"
              value={form.fullName}
              onChange={onChange}
              error={errors.fullName}
              icon={<UserIcon className="h-4 w-4" />}
            />

            <InputField
              label="Email"
              name="email"
              value={form.email}
              onChange={onChange}
              error={errors.email}
              icon={<MailIcon className="h-4 w-4" />}
            />

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <LockIcon className="h-4 w-4" />
                </span>
                <input
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={onChange}
                  className={`w-full pl-9 pr-9 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPass ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                </button>
              </div>
              {errors.password && <p className="text-xs text-red-600 mt-1">{errors.password}</p>}
            </div>

            {/* CONFIRM */}
            <div>
              <label className="text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <LockIcon className="h-4 w-4" />
                </span>
                <input
                  type={showConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={onChange}
                  className={`w-full pl-9 pr-9 py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirm ? <EyeOffIcon className="h-4 w-4" /> : <EyeIcon className="h-4 w-4" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-xs text-red-600 mt-1">{errors.confirmPassword}</p>}
            </div>

            {/* TERMS */}
            <label className="flex gap-2 text-xs text-gray-600 items-start">
              <input 
                type="checkbox" 
                name="agree" 
                checked={form.agree} 
                onChange={onChange}
                className="mt-0.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="leading-relaxed">
                I agree to the Terms of Service and Privacy Policy
              </span>
            </label>
            {errors.agree && <p className="text-xs text-red-600">{errors.agree}</p>}

            <button
              disabled={loading}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-sm hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 font-medium hover:text-blue-700">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

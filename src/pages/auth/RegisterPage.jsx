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
        className={`w-full pl-10 pr-3 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
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
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl grid md:grid-cols-2 overflow-hidden">

        {/* LEFT */}
        <div className="hidden md:flex flex-col justify-between p-10 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
          <div>
            <h1 className="text-4xl font-bold">SkillBridge</h1>
            <p className="mt-3 text-blue-100">
              Where professionals and NGOs connect for real impact.
            </p>
          </div>
          <ul className="space-y-3 text-sm text-blue-100">
            <li>✔ Verified profiles</li>
            <li>✔ Skill-based matching</li>
            <li>✔ Trusted organizations</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Create account
          </h2>
          <p className="text-gray-500 mb-6">
            Join SkillBridge and unlock opportunities
          </p>

          {errors.general && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded-lg">
              {errors.general}
            </div>
          )}

          <form onSubmit={submit} className="space-y-5">

            {/* ROLE */}
            <div className="grid grid-cols-2 gap-3">
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
                  <div className="p-4 rounded-xl border text-center peer-checked:border-blue-600 peer-checked:bg-blue-50">
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
              icon={<UserIcon className="h-5 w-5" />}
            />

            <InputField
              label="Email"
              name="email"
              value={form.email}
              onChange={onChange}
              error={errors.email}
              icon={<MailIcon className="h-5 w-5" />}
            />

            {/* PASSWORD */}
            <div>
              <label className="text-sm font-medium text-gray-700">Password</label>
              <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <LockIcon className="h-5 w-5" />
                </span>
                <input
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  value={form.password}
                  onChange={onChange}
                  className="w-full pl-10 pr-10 py-3 border rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPass ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* CONFIRM */}
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirm ? 'text' : 'password'}
              value={form.confirmPassword}
              onChange={onChange}
              error={errors.confirmPassword}
              icon={<LockIcon className="h-5 w-5" />}
            />

            {/* TERMS */}
            <label className="flex gap-2 text-sm text-gray-600">
              <input type="checkbox" name="agree" checked={form.agree} onChange={onChange} />
              I agree to Terms & Privacy Policy
            </label>

            <button
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>

            <p className="text-center text-gray-600 mt-4">
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

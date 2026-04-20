import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { registerUser } from '../utils/api';
import AuthLayout from '../components/AuthLayout';
import InputField from '../components/InputField';
import Button from '../components/Button';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (form.password.length < 6) return setError('Password must be at least 6 characters');
    setLoading(true);
    try {
      const { data } = await registerUser(form);
      login(data.user, data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Create Account" subtitle="Join us today — it's completely free">
      <form onSubmit={handleSubmit}>
        <InputField label="Full Name" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required />
        <InputField label="Email Address" type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required />
        <InputField label="Password" type="password" name="password" value={form.password} onChange={handleChange} placeholder="Min. 6 characters" required />

        {error && (
          <div style={{ background: 'rgba(255,107,107,0.1)', border: '1px solid rgba(255,107,107,0.3)', borderRadius: '10px', padding: '12px 14px', marginBottom: '16px', color: 'var(--error)', fontSize: '13px' }}>
            ⚠️ {error}
          </div>
        )}

        <Button loading={loading} type="submit">Create Account</Button>

        <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: 'var(--text-muted)' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>Sign in</Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;

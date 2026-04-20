import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const initials = user?.name?.split(' ').map(n => n[0]).join('').toUpperCase() || '?';

  return (
    <div style={{
      minHeight: '100vh', padding: '24px',
      background: 'radial-gradient(ellipse at 30% 30%, rgba(108,99,255,0.06) 0%, transparent 60%), var(--bg)'
    }}>
      {/* Navbar */}
      <nav style={{
        maxWidth: '900px', margin: '0 auto 48px', display: 'flex',
        alignItems: 'center', justifyContent: 'space-between',
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: '16px', padding: '14px 24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '22px' }}>⚡</span>
          <span style={{ fontWeight: '700', fontSize: '16px', letterSpacing: '-0.3px' }}>MERN Auth</span>
        </div>
        <button onClick={handleLogout} style={{
          background: 'rgba(255,107,107,0.1)', border: '1px solid rgba(255,107,107,0.2)',
          borderRadius: '10px', padding: '8px 18px', color: 'var(--error)',
          cursor: 'pointer', fontSize: '14px', fontWeight: '500', fontFamily: 'var(--font)',
          transition: 'all 0.2s'
        }}>
          Sign Out
        </button>
      </nav>

      {/* Main content */}
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Welcome Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(108,99,255,0.15), rgba(0,212,170,0.08))',
          border: '1px solid rgba(108,99,255,0.2)', borderRadius: '24px',
          padding: '40px', marginBottom: '24px', position: 'relative', overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px',
            background: 'radial-gradient(circle, rgba(108,99,255,0.15), transparent)',
            borderRadius: '50%'
          }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '22px', fontWeight: '700', color: '#fff', flexShrink: 0
            }}>
              {initials}
            </div>
            <div>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '4px' }}>Welcome back 👋</p>
              <h2 style={{ fontSize: '24px', fontWeight: '700', letterSpacing: '-0.5px' }}>{user?.name}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '2px' }}>{user?.email}</p>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          {[
            { icon: '🔐', title: 'JWT Auth', desc: 'Secured with JSON Web Tokens, stored safely in localStorage' },
            { icon: '🍃', title: 'MongoDB', desc: 'User data persisted in MongoDB with Mongoose ODM' },
            { icon: '⚛️', title: 'React Context', desc: 'Global auth state managed via React Context API' },
            { icon: '🛡️', title: 'Bcrypt', desc: 'Passwords hashed with bcryptjs — never stored in plain text' }
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: '16px', padding: '24px'
            }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{icon}</div>
              <h3 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '6px' }}>{title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: '1.5' }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Token display */}
        <div style={{
          background: 'var(--surface)', border: '1px solid var(--border)',
          borderRadius: '16px', padding: '24px', marginTop: '16px'
        }}>
          <p style={{ fontSize: '13px', fontWeight: '500', color: 'var(--text-muted)', marginBottom: '10px' }}>🔑 Your JWT Token</p>
          <div style={{
            background: 'var(--surface2)', borderRadius: '10px', padding: '12px 16px',
            fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--accent)',
            wordBreak: 'break-all', lineHeight: '1.6'
          }}>
            {localStorage.getItem('token')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

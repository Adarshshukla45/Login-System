import React from 'react';

const AuthLayout = ({ children, title, subtitle }) => (
  <div style={{
    minHeight: '100vh', display: 'flex', alignItems: 'center',
    justifyContent: 'center', padding: '24px',
    background: 'radial-gradient(ellipse at 20% 50%, rgba(108,99,255,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0,212,170,0.06) 0%, transparent 50%), var(--bg)'
  }}>
    <div style={{ width: '100%', maxWidth: '420px' }}>
      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: '56px', height: '56px', borderRadius: '16px',
          background: 'linear-gradient(135deg, var(--primary), var(--accent))',
          marginBottom: '20px', fontSize: '24px', boxShadow: '0 8px 32px var(--primary-glow)'
        }}>⚡</div>
        <h1 style={{ fontSize: '26px', fontWeight: '700', letterSpacing: '-0.5px', marginBottom: '6px' }}>{title}</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{subtitle}</p>
      </div>

      {/* Card */}
      <div style={{
        background: 'var(--surface)', border: '1px solid var(--border)',
        borderRadius: '24px', padding: '36px', backdropFilter: 'blur(20px)',
        boxShadow: '0 24px 64px rgba(0,0,0,0.4)'
      }}>
        {children}
      </div>
    </div>
  </div>
);

export default AuthLayout;

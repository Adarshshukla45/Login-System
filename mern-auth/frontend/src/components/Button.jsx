import React from 'react';

const Button = ({ children, loading, variant = 'primary', ...props }) => (
  <button
    disabled={loading}
    {...props}
    style={{
      width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
      cursor: loading ? 'not-allowed' : 'pointer', fontSize: '15px', fontWeight: '600',
      transition: 'all 0.2s', letterSpacing: '0.2px',
      ...(variant === 'primary' ? {
        background: loading ? 'rgba(108,99,255,0.5)' : 'linear-gradient(135deg, var(--primary), #8b5cf6)',
        color: '#fff',
        boxShadow: loading ? 'none' : '0 4px 20px var(--primary-glow)'
      } : {
        background: 'transparent', color: 'var(--error)',
        border: '1px solid var(--error)', opacity: loading ? 0.6 : 1
      }),
      ...props.style
    }}
  >
    {loading ? '⏳ Please wait...' : children}
  </button>
);

export default Button;

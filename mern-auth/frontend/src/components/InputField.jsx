import React, { useState } from 'react';

const InputField = ({ label, type = 'text', name, value, onChange, placeholder, required }) => {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';

  return (
    <div style={{ marginBottom: '18px' }}>
      <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '0.3px' }}>
        {label}
      </label>
      <div style={{ position: 'relative' }}>
        <input
          type={isPassword && show ? 'text' : type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%', padding: '13px 16px', paddingRight: isPassword ? '48px' : '16px',
            background: 'var(--surface2)', border: `1px solid ${focused ? 'var(--primary)' : 'var(--border)'}`,
            borderRadius: '12px', color: 'var(--text)', fontSize: '15px',
            outline: 'none', transition: 'all 0.2s',
            boxShadow: focused ? '0 0 0 3px var(--primary-glow)' : 'none'
          }}
        />
        {isPassword && (
          <button type="button" onClick={() => setShow(!show)} style={{
            position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)',
            background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)',
            fontSize: '16px', padding: '0', display: 'flex', alignItems: 'center'
          }}>
            {show ? '🙈' : '👁️'}
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;

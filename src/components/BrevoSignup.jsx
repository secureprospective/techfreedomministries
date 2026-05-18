import React, { useState } from 'react';

const API_KEY = import.meta.env.PUBLIC_BREVO_API_KEY;
const LIST_ID = Number(import.meta.env.PUBLIC_BREVO_LIST_ID);

export default function BrevoSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://api.brevo.com/v3/contacts', {
        method: 'POST',
        headers: { 'api-key': API_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, listIds: [LIST_ID], updateEnabled: true }),
      });
      setStatus(res.ok || res.status === 204 ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <p style={{ fontFamily: 'var(--tfm-serif)', fontStyle: 'italic', fontSize: 14, color: 'var(--tfm-warm-brown)', margin: 0 }}>
        You're on the list. We'll see you at the next event.
      </p>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <label htmlFor="brevo-email" style={{ fontFamily: 'var(--tfm-sans)', fontSize: 11, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--tfm-gold-muted)' }}>
        Get event announcements
      </label>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <input
          id="brevo-email"
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={status === 'submitting'}
          style={{ fontFamily: 'var(--tfm-sans)', fontSize: 13, color: 'var(--tfm-near-black)', background: 'var(--tfm-parchment)', border: '1px solid var(--tfm-parchment-edge)', borderRight: 'none', borderRadius: 0, padding: '9px 12px', width: 220, outline: 'none' }}
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          style={{ fontFamily: 'var(--tfm-sans)', fontSize: 11, fontWeight: 500, letterSpacing: '0.10em', background: 'var(--tfm-near-black)', color: 'var(--tfm-parchment)', border: '1px solid var(--tfm-near-black)', borderRadius: 0, padding: '9px 14px', cursor: 'pointer', whiteSpace: 'nowrap' }}
        >
          {status === 'submitting' ? 'Sending…' : 'Notify me'}
        </button>
      </form>
      {status === 'error' && (
        <p style={{ fontFamily: 'var(--tfm-sans)', fontSize: 12, color: '#8B1A1A', margin: 0 }}>
          Something went wrong. Try again.
        </p>
      )}
    </div>
  );
}

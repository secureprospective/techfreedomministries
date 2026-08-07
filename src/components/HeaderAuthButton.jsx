import { useState, useEffect } from 'react';
import './HeaderAuthButton.css';
import AuthModal from './AuthModal.jsx';

export default function HeaderAuthButton() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('checking'); // checking | anon | authed
  const [email, setEmail] = useState(null);
  const [busy, setBusy] = useState(false);

  function checkSession() {
    fetch('/api/auth/me')
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        setEmail(data.user.email);
        setStatus('authed');
      })
      .catch(() => {
        setEmail(null);
        setStatus('anon');
      });
  }

  useEffect(() => {
    checkSession();
  }, []);

  async function handleLogout() {
    setBusy(true);
    await fetch('/api/auth/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{}',
    });
    window.location.reload();
  }

  if (status === 'checking') {
    return <span className="header-auth-cta header-auth-cta--placeholder" aria-hidden="true" />;
  }

  if (status === 'authed') {
    return (
      <button
        type="button"
        className="header-auth-cta"
        onClick={handleLogout}
        disabled={busy}
        title={email}
      >
        {busy ? 'Signing out…' : 'Sign out'}
      </button>
    );
  }

  return (
    <>
      <button type="button" className="header-auth-cta" onClick={() => setOpen(true)}>
        Login
      </button>
      <AuthModal open={open} onClose={() => { setOpen(false); checkSession(); }} />
    </>
  );
}

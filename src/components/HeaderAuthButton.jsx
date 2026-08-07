import { useState } from 'react';
import './HeaderAuthButton.css';
import AuthModal from './AuthModal.jsx';

export default function HeaderAuthButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className="header-auth-cta" onClick={() => setOpen(true)}>
        Login
      </button>
      <AuthModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}

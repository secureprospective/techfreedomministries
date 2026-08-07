import React, { useState, useEffect } from 'react';
import './MembersGate.css';
import { LEVELS } from './Atoms.jsx';
import { PersonalRoadmap, CommunityCard, VanguardTeaser } from './MembersArea.jsx';
import AuthModal from './AuthModal.jsx';

/* ─────────────────────────────────────────────────────────────────────────────
   MembersGate — the real session check for /members. The site is otherwise
   fully static (Astro `output: 'static'`, no SSR), so gating happens client-
   side: this component owns the whole page body, checks GET /api/auth/me on
   mount, and only renders the member content once that call confirms a real
   session. Nothing member-specific is in the static HTML.

   Progression (level/vanguard) has no backend yet — only auth does. member.name
   comes from the real session's email; level stays a fixed placeholder until
   a progression system exists, same as before this gate was added.
   ───────────────────────────────────────────────────────────────────────── */

const MOCK_LEVEL = 2;

function displayNameFromEmail(email) {
  const local = email.split('@')[0] || email;
  return local
    .split(/[._-]+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(' ');
}

export default function MembersGate() {
  const [status, setStatus] = useState('checking'); // checking | locked | unlocked
  const [user, setUser] = useState(null);
  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch('/api/auth/me')
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data) => {
        if (cancelled) return;
        setUser(data.user);
        setStatus('unlocked');
      })
      .catch(() => {
        if (cancelled) return;
        setStatus('locked');
      });
    return () => { cancelled = true; };
  }, []);

  if (status === 'checking') {
    return (
      <div className="members-gate-loading" aria-hidden="true">
        <div className="members-gate-loading-bar" />
      </div>
    );
  }

  if (status === 'locked') {
    return (
      <>
        <section className="members-hero">
          <div className="members-hero-inner">
            <div className="eyebrow">Members Area</div>
            <div className="members-hero-rule"></div>
            <h1 className="members-hero-title">Your copy of the Roadmap.</h1>
            <p className="members-hero-body">
              This page is a companion to your physical Roadmap card — your progress,
              your community, in a form you can bring with you. Sign in to see yours.
            </p>
            <div style={{ marginTop: 24 }}>
              <button
                type="button"
                className="header-auth-cta"
                style={{ display: 'inline-flex' }}
                onClick={() => setAuthOpen(true)}
              >
                Sign in
              </button>
            </div>
          </div>
        </section>
        <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
      </>
    );
  }

  const member = {
    name: displayNameFromEmail(user.email),
    level: MOCK_LEVEL,
    vanguard: false,
  };
  const currentLevel = LEVELS.find((L) => L.n === member.level);

  return (
    <>
      <section className="members-hero">
        <div className="members-hero-inner">
          <div className="eyebrow">Members Area</div>
          <div className="members-hero-rule"></div>
          <h1 className="members-hero-title">Your copy of the Roadmap.</h1>
          <p className="members-hero-status">
            You&rsquo;re at Level {currentLevel.n} &mdash; {currentLevel.name}.
          </p>
          <p className="members-hero-body">
            Welcome, <strong>{member.name}</strong>. This page is a companion to your physical
            Roadmap card — a mirror you can reach from your own machine. It is not a replacement.
            The card you carry was issued to you by hand, and checking a box on paper is a promise
            your hand keeps differently than a screen ever will. This view is simply your progress
            in a form you can bring with you: what you have earned, the step ahead of you, and the
            people on the path with you.
          </p>
        </div>
      </section>

      <div className="members-container">
        <section className="members-section">
          <PersonalRoadmap member={member} />
        </section>

        <section className="members-section">
          <CommunityCard member={member} />
        </section>

        {member.level >= 3 && (
          <section className="members-section">
            <VanguardTeaser member={member} />
          </section>
        )}
      </div>
    </>
  );
}

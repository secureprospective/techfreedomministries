import React, { useState } from 'react';

/* ---------- Eyebrow ---------- */
export function Eyebrow({ children, color, style, ...rest }) {
  return (
    <div
      {...rest}
      style={{
        fontFamily: "var(--tfm-sans)",
        fontSize: 11,
        fontWeight: 400,
        letterSpacing: "0.20em",
        textTransform: "uppercase",
        color: color || "var(--tfm-gold-muted)",
        lineHeight: 1,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Rule ---------- */
export function Rule({ width = 40, color, style }) {
  return (
    <div
      style={{
        width: width === "full" ? "100%" : width,
        height: 1,
        background: color || "var(--tfm-gold-bright)",
        ...style,
      }}
    />
  );
}

/* ---------- Diamond ◆ ---------- */
export function Diamond({ size = 10, color, style }) {
  return (
    <span
      style={{
        color: color || "var(--tfm-gold-bright)",
        fontSize: size,
        lineHeight: 1,
        display: "inline-block",
        ...style,
      }}
    >
      ◆
    </span>
  );
}

/* ---------- Proclamation headline ----------
   Usage: <Proclamation strong="Break from the Digital Grid." italic="Own Your Machine." size={48} />
*/
export function Proclamation({ strong, italic, size = 44, as = "h2", style, className }) {
  const Tag = as;
  return (
    <Tag
      className={className}
      style={{
        fontFamily: "var(--tfm-serif)",
        fontWeight: 700,
        color: "var(--tfm-near-black)",
        fontSize: size,
        lineHeight: 1.1,
        letterSpacing: "-0.005em",
        margin: 0,
        textWrap: "pretty",
        ...style,
      }}
    >
      {strong}{" "}
      <em
        style={{
          fontStyle: "italic",
          fontWeight: 400,
          color: "var(--tfm-gold-deep)",
        }}
      >
        {italic}
      </em>
    </Tag>
  );
}

/* ---------- Buttons ---------- */
const btnBase = {
  fontFamily: "var(--tfm-sans)",
  fontSize: 13,
  fontWeight: 500,
  padding: "12px 22px",
  borderRadius: 2,
  cursor: "pointer",
  border: "1px solid transparent",
  letterSpacing: "0.01em",
  transition: "all 220ms cubic-bezier(.2,0,.2,1)",
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  whiteSpace: "nowrap",
};

export function Button({ children, onClick, disabled, type = "button", style }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        ...btnBase,
        background: disabled ? "#1C1209" : (hover ? "#2C2014" : "#1C1209"),
        color: "var(--tfm-parchment)",
        opacity: disabled ? 0.45 : 1,
        transform: press ? "scale(0.99)" : "scale(1)",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export function GhostButton({ children, onClick, disabled, style }) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
        ...btnBase,
        background: "transparent",
        color: "var(--tfm-near-black)",
        borderColor: hover ? "var(--tfm-gold-deep)" : "var(--tfm-parchment-edge)",
        opacity: disabled ? 0.45 : 1,
        transform: press ? "scale(0.99)" : "scale(1)",
        cursor: disabled ? "not-allowed" : "pointer",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

export function LinkButton({ children, onClick, style }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "var(--tfm-sans)",
        fontSize: 13,
        fontWeight: 500,
        background: "transparent",
        border: 0,
        padding: "0 0 2px",
        borderBottom: `1px solid ${hover ? "var(--tfm-near-black)" : "rgba(139,105,20,.35)"}`,
        color: hover ? "var(--tfm-near-black)" : "var(--tfm-gold-deep)",
        cursor: "pointer",
        letterSpacing: "0.01em",
        transition: "all 220ms cubic-bezier(.2,0,.2,1)",
        ...style,
      }}
    >
      {children}
    </button>
  );
}

/* ---------- Level badge ---------- */
export const LEVELS = [
  { n: 1, name: "The Exodus",           bg: "#1D4D2A", fg: "#A8D4B2" },
  { n: 2, name: "The Catechism",        bg: "#5C4500", fg: "#F0C85A" },
  { n: 3, name: "The Homestead",        bg: "#5C1A1A", fg: "#F0A8A8" },
  { n: 4, name: "The Great Commission", bg: "#2C2C1A", fg: "#C8C890" },
];

export function LevelBadge({ level, vanguard, style }) {
  if (vanguard) {
    return (
      <span style={{
        fontFamily: "var(--tfm-sans)", fontSize: 10, letterSpacing: "0.20em",
        textTransform: "uppercase", padding: "6px 14px", borderRadius: 999,
        border: "1px solid var(--tfm-gold-deep)", color: "var(--tfm-gold-deep)",
        background: "transparent", ...style,
      }}>Vanguard</span>
    );
  }
  const L = LEVELS[level - 1];
  return (
    <span style={{
      fontFamily: "var(--tfm-sans)", fontSize: 10, letterSpacing: "0.20em",
      textTransform: "uppercase", padding: "6px 14px", borderRadius: 999,
      background: L.bg, color: L.fg, whiteSpace: "nowrap", ...style,
    }}>
      Level 0{L.n} · {L.name.replace(/^The /, "")}
    </span>
  );
}

/* ---------- Brackets — for credential-adjacent surfaces ---------- */
export function Brackets({ children, padding = 28, style }) {
  const armSize = 18;
  const corner = (top, left) => ({
    position: "absolute",
    width: armSize, height: armSize,
    [top ? "top" : "bottom"]: 10,
    [left ? "left" : "right"]: 10,
    borderTop:    top  ? "1px solid var(--tfm-gold-bright)" : 0,
    borderBottom: !top ? "1px solid var(--tfm-gold-bright)" : 0,
    borderLeft:   left ? "1px solid var(--tfm-gold-bright)" : 0,
    borderRight:  !left ? "1px solid var(--tfm-gold-bright)" : 0,
  });
  return (
    <div style={{ position: "relative", padding, ...style }}>
      <span style={corner(true, true)} />
      <span style={corner(true, false)} />
      <span style={corner(false, true)} />
      <span style={corner(false, false)} />
      {children}
    </div>
  );
}

/* ---------- Icon (Lucide-style inline stroke) ---------- */
export function Icon({ name, size = 16, color = "currentColor", style }) {
  const stroke = {
    fill: "none", stroke: color, strokeWidth: 1.6,
    strokeLinecap: "round", strokeLinejoin: "round",
  };
  const paths = {
    pin: <g><path d="M12 21s-7-7.6-7-12a7 7 0 0 1 14 0c0 4.4-7 12-7 12Z" /><circle cx="12" cy="9" r="2.5" /></g>,
    calendar: <g><rect x="3.5" y="5" width="17" height="15" rx="1.5" /><path d="M3.5 9.5h17M8 3v4M16 3v4" /></g>,
    clock: <g><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></g>,
    arrow: <g><path d="M5 12h14M13 6l6 6-6 6" /></g>,
    x: <g><path d="M6 6l12 12M18 6l-12 12" /></g>,
    menu: <g><path d="M4 7h16M4 12h16M4 17h16" /></g>,
    download: <g><path d="M12 4v12M7 11l5 5 5-5M4 20h16" /></g>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style} {...stroke}>
      {paths[name] || paths.arrow}
    </svg>
  );
}

/* ---------- Card ---------- */
export function Card({ children, hover: hoverable = true, style }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="tfm-gilt-edge"
      onMouseEnter={() => hoverable && setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        background: "var(--tfm-parchment-card)",
        border: `1px solid ${hover ? "var(--tfm-gold-deep)" : "var(--tfm-parchment-edge)"}`,
        boxShadow: "0 1px 0 rgba(28,18,9,.04), 0 1px 2px rgba(28,18,9,.06)",
        padding: "22px 24px",
        transition: "border-color 220ms cubic-bezier(.2,0,.2,1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

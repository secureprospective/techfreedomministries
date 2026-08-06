# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**The entry point person:** someone who has never thought about who owns their data. Shows up because a friend mentioned a free event and a possible laptop. Leaves three hours later with a working machine they own outright, and the first crack in a worldview they didn't know they had.

**The church community:** a congregation anywhere can host TFM. The venue, trust, and community infrastructure already exist; TFM supplies hardware and the model. Lets a rural church that could never afford a tech ministry run one anyway.

**The person who is almost there:** already uses Linux at home, knows the terminal, has been doing this quietly. TFM gives them a name for what they already believe and a way to share it.

**The Vanguard:** the graduate who came back. Has the skills, earns the credential, runs their own events. The mission multiplies through them, not through central staff.

## Product Purpose

Tech Freedom Ministries (TFM) is a faith-backed digital-freedom nonprofit. It teaches people to escape Big Tech surveillance through free, in-person Install Parties and a four-level member Roadmap (Exodus → Catechism → Homestead → Great Commission) that turns today's student into tomorrow's teacher (a Vanguard). Success is a self-replicating system: donated hardware funds an event, the student who leaves owning a machine eventually becomes the Vanguard who runs the next one, with no central org required to scale.

## Positioning

TFM does not sell privacy tools or run an anti-tech grievance campaign. It gives people a physical object (a laptop they actually own) and a taught skill (Linux literacy) in a single free, in-person event, then hands the same means back to the graduate so they can give it away in turn. A neighboring product could copy the privacy message or the free-hardware hook separately; it could not truthfully copy the closed loop where former students are the delivery mechanism, faith is the stated backbone, and the growth model has no subscription, no ongoing sale, and no dependency on any platform TFM teaches people to leave.

## Operating Context

- **Install Party**: the entry event. Three hours, in person, real room, real people. Attendee brings a laptop (or is loaned one from the donated hardware pool), installs Linux, replaces one cloud account, leaves owning a working machine.
- **The Roadmap**: four self-paced levels after the Install Party — Exodus (the event itself), Catechism (terminal/sudo/why), Homestead (self-hosting, home server), Great Commission (teach and run your own Exodus as a Vanguard). Physical Roadmap card tracks milestones; nothing is checked off on a screen.
- **The Vanguard Oath**: taken in person at Level 4, printed on a physical credential card (hard stock, gold accent). Not sold, not automated — issued.
- **Hardware donation loop**: primary ask is donated hardware (laptops → workstation PCs → mini PCs → old gaming desktops → tablets/SBCs), not cash. Cash funds materials, USB drives, room rental, and shipping — it does not replace hardware.
- **Three-layer voice by audience**: Layer 1 (church/faith context) leads with scripture and stewardship. Layer 2 (secular/privacy context) leads with the surveillance facts, no scripture or ministry framing. Layer 3 (TFM member/Vanguard culture) uses the full internal language (Exodus, Catechism, Homestead, Vanguard, Oath). Same mission, different door.
- **501(c)(3) status**: filing in progress, EIN pending. Donate page has TODO markers for this and for the Stripe/PayPal integration; neither is live yet.

## Capabilities and Constraints

- Astro + @astrojs/react islands, CSS custom properties only (no Tailwind, no component libraries), self-hosted EB Garamond + Cinzel fonts, Cloudflare Pages auto-deploy from main.
- Email capture via Brevo (footer, every page); RSVP via Formspree; hardware/Vanguard applications via mailto links (no backend form yet for those).
- Real Install Party date/venue/city not yet confirmed — `EventsList.jsx` currently ships one placeholder event with `TBD` fields.
- Donate flow's cash-tier buttons are placeholders (`#give-placeholder`) pending Stripe/PayPal + 501(c)(3) confirmation. Do not treat as functional or imply tax-deductibility until the EIN disclosure is live.
- Vanguard roster (`Vanguard.jsx`'s `ROSTER` array) is intentionally empty until real Vanguards exist; the Network section only renders once it has entries.

## Brand Commitments

**Name and mission are fixed**: Tech Freedom Ministries, "giving freedom with a fishing pole" (teach, don't just give), scriptural anchor Galatians 5:1. Tagline and mission statement are locked, not open to redraft.

**Sanctuary voice (confirmed 2026-08-06, governs all copy).** Name the real encroachment plainly and specifically — surveillance, planned obsolescence, corporate dependency — then resolve every passage to agency, ownership, or community. Never leave the reader sitting in the threat. The antagonist is always Big Tech; never the visitor. Scripture is thesis, not decoration, and sits at the resolution point of a passage, not the threat point. This is the actual, already-implemented pattern across the live site (confirmed by direct read of Hero.jsx, Roadmap.jsx's four expanded detail panels, Donate.jsx, Oath.jsx, Vanguard.jsx, About.jsx) — not an aspirational rewrite. Example of the pattern in the site's own words: *"You just kicked a massive corporate tenant out of your property... Saturday was the eviction notice. Now you manage the building"* resolves to *"Level 1 complete. You own the machine now. Nobody has root but you."* Donate/logistics copy carries almost no stakes language at all — practical, warm, generous ("Give what you have. Give once."). This reconciles two documents that looked contradictory in isolation: `docs/TFM_12_CREATIVE_BRIEF.md`'s "lead with stakes, never bury the mission in positive framing" rule and Christopher's 2026-06-20 rejection of standalone dread taglines ("the machine watches you," "yoke of surveillance" with no resolution attached). Both were describing the same thing from different angles — stakes are real and stated, but the site's identity and destination is always the sanctuary, never the threat itself.

**Three brand layers** (see Operating Context) are a deliberate, standing strategy, not inconsistency — do not flatten them into one voice.

**Voice mechanics**: short, declarative sentences. The copy assumes the reader can handle direct language. Never soften the ask (hardware donation is a conditional promise, not a guarantee). Never guilt-trip the visitor personally.

**TFM mythology vocabulary is load-bearing, not flavor text**: Exodus, Catechism, Homestead, Great Commission, Vanguard, the Oath, Katecheo. These map to real product mechanics (the four Roadmap levels, the graduate-to-teacher loop) — do not treat them as removable decoration.

**Hardware-first framing**: stakes first, specs second. Lead with what's impossible without the donation; close with what becomes possible. Never state the free laptop as a guarantee.

## Evidence on Hand

- Full mission statement, tagline, scriptural anchor, three-layer voice model, roadmap level colors, hardware priority order: `docs/TFM_12_CREATIVE_BRIEF.md` (creative brief, locked, last updated 2026-05-24).
- Visual system source: `docs/TFM_08_DESIGN_SYSTEM.md`, `docs/TFM_11_BIBLE_THEME.md` (Gilded Spine theme).
- Live implementation of the mission/voice: `src/components/Hero.jsx`, `About.jsx`, `Oath.jsx`, `Roadmap.jsx` (including its four expanded Exodus/Catechism/Homestead/Commission detail panels — the richest voice sample on the site), `Vanguard.jsx`, `Donate.jsx`, `EventsList.jsx`.
- No real event data yet (city/venue/date all `TBD` in `EventsList.jsx`). No Vanguard roster yet. No 501(c)(3) EIN yet. Do not fabricate any of these; state them as pending if a critique or new copy touches them.
- No analytics/instrumentation on the site currently — any conversion or funnel claim would be speculative.

## Product Principles

1. **Teach, don't just give.** Every mechanic (the fishing pole, the Roadmap, the Vanguard system) exists to convert a one-time recipient into a future teacher — the site should never read as pure charity/handout.
2. **The loop has no central bottleneck.** Copy and UX should reinforce that a Vanguard in a city *is* TFM in that city — not imply a headquarters model.
3. **Sanctuary, not dread.** See Brand Commitments — every page should leave the visitor feeling capable and welcomed, never anxious or judged, even while naming real threats honestly.
4. **Faith is the backbone; the door is open to everyone.** Never require religious framing to participate, but never scrub it from the parts of the site where it belongs (Layer 1/3 contexts).
5. **Earned, never bought.** Every credential, badge, or milestone (Roadmap levels, Vanguard card) must read as something the visitor did, not something they purchased or were handed.

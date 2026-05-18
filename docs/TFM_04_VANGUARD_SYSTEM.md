# TFM_04 — THE VANGUARD SYSTEM
*The growth engine. How TFM reaches new cities without the founder being in every city.*

---

## What a Vanguard Is

A Vanguard is any Level 3 or Level 4 graduate who has committed to staffing at least two TFM events per year. They are not employees. They are not volunteers in the generic sense. They are the next generation of the mission — the living proof that the Roadmap works.

Their role is part IT support, part encouragement. When someone's screen goes black, a Vanguard does not just fix it. They explain why, so the user gains confidence rather than dependence.

---

## What Vanguards Get

- A physical Vanguard credential card (distinct from the Roadmap card — this one is earned, not given). For card specifications, see TFM_08_DESIGN_SYSTEM.md.
- A title that carries weight inside the community
- Credit in the community for every person they help graduate — their name goes on the Roadmap cards they hand out at send-off
- Access to the private Vanguard coordination channel
- First access to new city expansion opportunities

---

## Minimum Commitment

- 2 events per year (Install Party or Workshop Series)
- Willing to troubleshoot remotely for newcomers in their city between events
- Completes the Vanguard Field Manual (see below)

---

## The Vanguard Field Manual — Event Day

### Role on the Floor

Walk. Do not sit. Your job is to find the person who is quietly staring at a black screen and has decided not to ask for help.

When you reach them:
1. Sit beside them, not above them
2. Read the screen before you touch anything
3. Explain what you are about to do before you do it
4. Read terminal commands out loud — "sudo means I am the boss of this machine right now"

---

### The Four Common Fires

**1. The Gatekeeper (BIOS/UEFI Issues)**
- Symptom: USB drive won't appear in boot menu, or "Security Violation" message
- Fix: Enter BIOS (F2, F12, or Del at startup) → Disable Secure Boot → Enable Legacy Boot or CSM if needed

**2. The Invisible Signal (Wi-Fi Drivers)**
- Symptom: No Wi-Fi icon, "No Device Found" after install
- Fix: Plug in Ethernet or USB tether → Open Driver Manager → Select proprietary wireless driver → Apply

**3. The Black Screen (Nvidia Graphics)**
- Symptom: Hangs on black screen after boot menu
- Fix: At GRUB, highlight "Install Linux" → press E → find line starting with `linux` → add `nomodeset` at end → F10 to boot → install Nvidia drivers after

**4. The Ghost in the Machine (Touchpad / Audio)**
- Symptom: No sound or touchpad won't click after install
- Fix: `sudo apt update && sudo apt upgrade` → if still failing, check model-specific kernel version requirements

---

### The Soft Skills

**Validate the frustration first:**
> "Windows broke your computer slowly over years. We're just hitting a speed bump on the road to freedom. We'll get over it."

**Don't just type — teach:**
When fixing something in the terminal, read the command out loud. Explain what it does.

**The Final Blessing:**
Once the install is done, show them one thing that delights them — the Software Store where everything is free, the speed difference, the clean desktop. Seal the deal before they walk out.

---

### The Vanguard Bag (Required)

Every Vanguard arrives with:
- 3–5 USB drives pre-loaded with Mint, Pop!_OS, and Fedora
- 1 USB-to-Ethernet adapter
- 1 smartphone with hotspot ready
- A pack of TFM stickers

---

## The City Expansion Model

When canvassing a new city's churches, the ask is not "will you host an event." The ask is: **"Do you have any members who are already technically inclined?"**

One Vanguard in a new city can host an event with remote founder support within 60 days of identification. The sequence:

```
Week 1:  Identify Vanguard candidate via church contact
Week 2:  Vanguard completes Field Manual remotely
Week 3:  Vanguard scouts venue (their own church is ideal)
Week 4:  Founder supports event remotely (video call open during event)
Week 6:  Vanguard hosts first solo event
Month 3: Vanguard identifies next Vanguard candidate from their own graduates
```

This is how TFM reaches 10 cities without the founder traveling to 10 cities.

---

## Vanguard Recruitment Page (Website Copy Direction)

The Vanguard page on the website has one job: make technically-skilled people feel like this is the thing they have been looking for without knowing it.

Lead with identity, not task list:
> *"You already know how to fix this stuff. Most people don't. TFM is what happens when you decide that knowledge is too important to keep to yourself."*

Then: what is expected (2 events/year minimum), what they get (credential, community, expansion opportunity), and a simple application form.

This page is also a credibility signal to grant reviewers. "We have 40 trained Vanguards in 8 cities" is a sentence that unlocks funding.

---

## The Vanguard's Final Blessing (Event Closer — Read Aloud)

> *"May your dependencies be satisfied, your kernel be stable, and your uptime be long. Go in peace to serve your machine, so it may serve you."*

It is said with a straight face. It lands every time.

---

*Last updated: 2026-05-18*
*Built by: Christopher Campbell + Claude (Anthropic)*

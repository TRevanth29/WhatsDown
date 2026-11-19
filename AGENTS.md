# AGENTS.md — WhatsDown

## What this is
A parody of WhatsApp for a college final submission. Two pages:
- index.html: landing page introducing WhatsDown (parody tone).
- chat.html: the chat page. Opens in a NEW TAB from the landing page's main button.
No login, no accounts. One room code starts a chat. Messages are encrypted
in the browser and never stored.

## Hard rules
- Stack: plain HTML, CSS and JavaScript only. No frameworks, no npm packages,
  no build tools, no CDNs. Only exception: PeerJS in the final connection stage,
  and only after I approve. (I will learn React later; not now.)
- I must explain every line to a jury. Prefer simple and readable over clever.
- Comment every block in plain English for a beginner. In JS, use numbered
  section headers like // ===== 3. ENCRYPTION =====
- Work in small stages. After each stage: stop, list the files changed,
  explain every function in simple words, then wait for me to say "next".
- Make minimal edits. Never rewrite a file I have edited without asking.
- Do not add features I did not ask for.

## Design
- Read DESIGN.md before touching any UI. Turn its tokens into CSS custom
  properties in css/base.css. No hardcoded colours or fonts elsewhere.
- It must NOT look AI-generated. Forbidden: glassmorphism, backdrop-filter,
  blur panels, liquid glass, purple/blue gradient blobs, glowing orbs, emoji
  used as icons, identical three-card feature grids, everything centered,
  stock-photo look, lorem ipsum.
- Write specific, funny parody copy, not generic marketing text.
- Animation: CSS only (transitions, keyframes, IntersectionObserver for scroll
  reveals). Animate transform and opacity only. Respect prefers-reduced-motion.
  Every animation needs a reason.
- Responsive: must work on phone and laptop.

## Assets
- All images live in /assets. Read assets/README.md for the list and style.
- Landing-page illustrations are generated with the built-in $imagegen skill,
  then copied into assets/illustrations/. The hero section is exempt.
- Every image gets descriptive alt text. No text inside images.

## Chat page behaviour
- Room code: random, generated with crypto.getRandomValues, shown as K7P-92X.
- Key: derived from the room code with PBKDF2 -> AES-GCM (Web Crypto API).
- Transport, in order: BroadcastChannel (two tabs) -> WebRTC (two devices).
- Messages exist only in memory. Closing the tab erases everything.
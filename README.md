# The Pink Card Co.

A launch-page experience for the Pink Card Co.—a women-first credit and lending platform that blends premium aesthetics with a fast, waitlist-driven onboarding flow. The site highlights the product story, animates an interactive card mockup, and captures interest through a lightweight form backed by client-side validation.

## Highlights

- Immersive hero with animated gradients, call-to-action badge, and Lucide icons that signal launch-readiness.
- Feature grid that explains the instant approvals, smart rewards, and exclusive experiences behind the product vision.
- Waitlist form powered by a reusable `useWaitlist` hook with basic validation and optimistic, animated feedback.
- 3D-inspired card mockup that reinforces the brand palette and showcases the premium card experience.

## Tech Stack

- **React 18 + Vite** for fast DX, HMR, and minimal bundling overhead.
- **Tailwind CSS** for utility-first styling, gradients, and responsive layout.
- **Lucide React** for lightweight, customizable iconography.

## Getting Started

1. **Install**  
   ```bash
   npm install
   ```
2. **Develop**  
   ```bash
   npm run dev
   ```  
   Visit the printed URL (defaults to `http://localhost:5173`) to see live changes.
3. **Build for production**  
   ```bash
   npm run build
   ```
4. **Preview the build**  
   ```bash
   npm run preview
   ```

## Project Structure

```
src/
├─ components/     # Hero, Navbar, feature cards, waitlist form, footer, card mockup
├─ hooks/          # Custom hooks (e.g., useWaitlist)
├─ utils/          # Email validation and other helpers
├─ styles/         # Reusable Tailwind helpers
└─ App.jsx         # Page composition and background effects
```

## Customization Tips

- Update copy, stats, or gradients in `src/components/Hero.jsx` and `Features.jsx` to align with new campaigns.
- Replace the mock card details inside `CardMockup.jsx` with real brand assets when available.
- Extend `useWaitlist` with real submission logic (REST, Firebase, Airtable, etc.) by swapping the simulated `setTimeout`.

## License

Proprietary — All rights reserved by The Pink Card Co. Reach out before reusing any portion of this project.

# Sasi — Portfolio

Single-page portfolio built with Vite + React and Tailwind CSS. Blueprint/technical-drawing
aesthetic: subtle grid background, crosshair corner marks, mono-uppercase section labels.

## Development

```bash
npm install
npm run dev
```

Open the printed local URL (defaults to http://localhost:5173).

## Adding a project

Open [src/data/projects.js](src/data/projects.js) and add one object to the `PROJECTS`
array — nothing else needs to change, the Projects section maps over this list automatically.

```js
{
  n: "05",                          // figure number shown in the "FIG." label
  title: "Project Name",
  subtitle: "One-line description",
  link: "https://example.com",      // leave "" to show a status label instead of a link
  linkLabel: "example.com",         // or "In development" / "Coming soon" when link is ""
  desc: "Longer paragraph describing what the project is and what you did on it.",
  stack: ["React", "Node.js"],      // tech tags shown under the description
}
```

## Editing skills or profile info

- [src/data/skills.js](src/data/skills.js) — array of `{ label, items: [] }`, one object per
  skills column (Frontend, Backend, Mobile, etc).
- [src/data/profile.js](src/data/profile.js) — name, email, GitHub, and LinkedIn shown in the
  nav and Contact section.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, "Add New Project" → import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output
   directory `dist` (both auto-filled).
4. Deploy. Every push to the connected branch redeploys automatically.

Or from the CLI:

```bash
npm install -g vercel
vercel        # first deploy, follow the prompts
vercel --prod # subsequent production deploys
```

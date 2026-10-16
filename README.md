# Dhananjay Gupta · Data Engineer Portfolio

Personal portfolio for Dhananjay Gupta, a Data Engineer in Manchester, UK working on Azure Databricks and Google Cloud.

Live: [dhananjaygupta-de.vercel.app](https://dhananjaygupta-de.vercel.app/)

## Updating content

Everything on the page (experience, projects, skills, certifications, metrics, links) comes from
[`src/data/profile.js`](src/data/profile.js). Edit that file; no component changes needed.

The résumé download serves `public/Dhananjay_Gupta_Resume.pdf`. Replace that file to update it.

## Stack

React 19, Vite 6, Tailwind CSS 4, Motion, React Router, React Icons. Single page with light and dark themes
(follows the system setting until toggled). Old URLs (`/experience`, `/education`, `/project`) scroll to the
matching section.

```
src/
├── data/profile.js     all content
├── components/         Navbar, PipelineDiagram, Section, Chip, FlowStrip, ThemeToggle
└── sections/           Hero, Metrics, About, Experience, Projects, Skills, Credentials, Contact, Footer
```

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # outputs dist/
```

## Deployment

Deployed on Vercel as a Vite project; `vercel.json` rewrites all paths to the SPA. When moving to a custom
domain, update the `canonical`, `og:url` and `og:image` URLs in `index.html`.

# Dhananjay Gupta - Data Engineer Portfolio

<p align="center">
  <img src="./public/demo.webp" alt="Data Engineer Portfolio Banner" />
</p>

A modern, responsive portfolio website built with React and Vite, showcasing my professional journey as a Data Engineer. Features a neobrutalism design with smooth animations and a distinctive color scheme.

## Live Demo

Visit the live portfolio: [https://dhananjaygupta-de.vercel.app](https://dhananjaygupta-de.vercel.app/)

## About Me

Google Cloud Certified Data Engineer with 4+ years of experience building cloud-native data architectures on Azure. Currently at Footasylum, building automated ELT pipelines and cloud-native data solutions.

**Specializations:**
- ETL/ELT Pipeline Design
- Cloud-Native Data Architecture (Azure, GCP)
- Python, SQL, PySpark
- Azure Data Factory, Databricks
- Real-time Analytics & Business Intelligence

## Features

### Design & UX
- Neobrutalism Design with bold visual style
- Responsive Layout for desktop, tablet, and mobile
- Dark/Light Mode toggle with persistent preference
- Smooth Animations using Framer Motion

### Portfolio Sections
- **About**: Personal introduction with animated floating tech icons
- **Skills**: Technical competencies organized by category
- **Projects**: Showcase of Data Engineering projects
- **Contact**: Direct contact and meeting scheduling

## Tech Stack

### Frontend
- React 19.1.0
- Vite 6.3.5
- React Router 7.6.0
- Framer Motion 12.11.0

### Styling
- Tailwind CSS 4.1.6
- tw-animate-css 1.2.9

### UI Components
- Radix UI (Navigation Menu, Slot)
- React Icons 5.5.0
- class-variance-authority
- tailwind-merge

### State Management
- Redux Toolkit 2.8.2
- React Redux 9.2.0
- Supabase (backend integration)

### Animation & Interaction
- Motion (Framer Motion)
- Lenis (smooth scrolling)
- React Tooltip

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Fury0508/data-engineer-portfolio.git
   cd data-engineer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

## Environment Variables

Create a `.env` file in the root directory:

```env
# Supabase
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# EmailJS (for contact form)
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## Author

**Dhananjay Gupta** - Data Engineer
- LinkedIn: [https://www.linkedin.com/in/dhananjay-g/](https://www.linkedin.com/in/dhananjay-g/)
- GitHub: [https://github.com/Fury0508](https://github.com/Fury0508)
- Schedule a Meeting: [Calendly](https://calendly.com/daan0508/30min)

## License

This project is licensed under the MIT License.

---

**Star this repository if you found it helpful!**

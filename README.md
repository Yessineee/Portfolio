# Yessine Helal — Portfolio

> Personal portfolio website showcasing my projects, skills, and experience as a Software Engineering graduate focused on cybersecurity.

🔗 **Live site:** [yessine-helal.vercel.app](https://yessine-helal.vercel.app)

---

## Features

- **Bilingual (EN/FR)** — full language toggle across every section, including dynamic date formatting
- **Responsive design** — mobile-first layout with a custom mobile navigation menu
- **Live GitHub activity heatmap** — pulls real contribution data via the GitHub API
- **Interactive project gallery** — horizontal scroll with a lightbox for full-size screenshots
- **Working contact form** — powered by EmailJS, no backend required
- **Scroll-reveal animations** — sections animate in as you scroll, via IntersectionObserver
- **Active section highlighting** — navbar tracks the current section in view

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React + Vite |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React + React Icons |
| Contact form | EmailJS |
| Fonts | Fraunces, Inter, JetBrains Mono |
| Deployment | Vercel |

---

## Project Structure

```
src/
├── components/     # Navbar, Hero, About, Skills, Projects, Experience,
│                    Certifications, Contact, Footer, GitHubActivity, ProjectGallery
├── context/         # Language context (EN/FR state)
├── hooks/           # useScrollReveal, useLanguage
├── data/            # content.js (profile data), translations.js (EN/FR strings)
```

---

## Running Locally

### Prerequisites

- Node.js 18 or higher

### Setup

```bash
# Clone the repository
git clone https://github.com/Yessineee/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Add EmailJS environment variables
echo "VITE_EMAILJS_SERVICE_ID=your_service_id" >> .env
echo "VITE_EMAILJS_TEMPLATE_ID=your_template_id" >> .env
echo "VITE_EMAILJS_PUBLIC_KEY=your_public_key" >> .env

# Start dev server
npm run dev
```

### Build for production

```bash
npm run build
```

---

## License

MIT © [Yessine Helal](https://github.com/Yessineee)

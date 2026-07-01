#  FloraVision — Plant Product Listing Page

A pixel-perfect, fully responsive plant e-commerce product listing page built from the provided Figma design.

**Live Demo:** [Add your Vercel URL here after deployment]

---

## 🛠️ Tech Stack

| Tool | Usage |
|------|-------|
| **React.js v19** | Component-based UI |
| **Vite v8** | Fast dev server & build tool |
| **Tailwind CSS v4** | Utility-first styling |
| **Lucide React** | Icon library |

---

##  Setup & Run Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or above
- npm (comes with Node.js)

### 1. Clone the Repository

```bash
https://github.com/maurya0607/Flora-vision.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add Images

Place the following images inside the `public/images/` folder:

| File | Used In |
|------|---------|
| `hero-bg.jpg` | Background topiary (Hero section) |
| `Aglaonema.png` | Hero card + O2 Plants + TopSelling |
| `Desks1.png` | Trending Plants card 1 |
| `Desks2.png` | Trending Plants card 2 |
| `Plantain.png` | Top Selling grid |
| `Cactus.png` | Top Selling grid |
| `Swiss.png` | Top Selling grid |
| `Sansevieriya.png` | Top Selling grid |
| `Agave.png` | Top Selling grid |
| `Roslin.png` | Hero review avatar |
| `Shelly.png` | Customer review avatar |
| `Lula.jpg` | Customer review avatar |
| `carol.png` | Customer review avatar |
| `Floravision.png` | Navbar + Footer logo |

### 4. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 5. Production Build

```bash
npm run build
npm run preview
```

---

##  Project Structure

```
my-figma/
├── public/
│   └── images/                  # All plant & avatar images
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Fixed nav with dropdown & mobile drawer
│   │   ├── Hero.jsx              # Hero section with plant card & review badge
│   │   ├── TrendingPlants.jsx    # Trending plant cards (alternating layout)
│   │   ├── TopSellingPlants.jsx  # 6-card product grid
│   │   ├── PlantCard.jsx         # Reusable plant product card
│   │   ├── Reviews.jsx           # Customer reviews section
│   │   ├── TestimonialCard.jsx   # Individual review card
│   │   ├── O2Plants.jsx          # Featured O2 plants section
│   │   ├── Avatar.jsx            # User avatar component
│   │   ├── Button.jsx            # Reusable button (solid/outline/outlineWhite)
│   │   ├── SectionTitle.jsx      # Bracketed section heading [ Title ]
│   │   └── Footer.jsx            # Footer with links & newsletter
│   ├── App.jsx                   # Root page layout
│   ├── App.css                   # App-level styles
│   ├── index.css                 # Global styles, design tokens, glassmorphism
│   └── main.jsx                  # React entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

##  Design System (Color Tokens)

Defined in `src/index.css` using Tailwind CSS v4 `@theme`:

| Token | Value | Usage |
|-------|-------|-------|
| `flora-bg` | `#09100B` | Page background |
| `flora-accent` | `#C5A854` | Gold — prices, CTA buttons, borders |
| `flora-accentLight` | `#D5B864` | Hover accent |
| `flora-textLight` | `#F3F4F3` | Primary headings & text |
| `flora-textMuted` | `#9BA39D` | Descriptions & secondary text |
| `flora-card` | `rgba(15,27,21,0.65)` | Glassmorphism card base |

---

##  Responsive Breakpoints

| Screen | Breakpoint |
|--------|-----------|
| Mobile | 320px+ |
| Tablet | 768px (md) |
| Desktop | 1024px (lg) |
| Wide | 1280px (xl) |

---

##  Sections Implemented

- [x] **Navbar** — Logo, nav links with dropdown, search, cart, hamburger mobile menu
- [x] **Hero** — Main heading, description, CTA buttons, plant card, floating review badge
- [x] **Trending Plants** — 2 cards with alternating image-left/right layout
- [x] **Top Selling Plants** — Responsive 3×2 product grid with hover effects
- [x] **Customer Reviews** — 3 testimonial cards with avatar, rating stars
- [x] **O₂ Plants** — Featured section with large plant image, text, and navigation
- [x] **Footer** — Brand info, quick links, newsletter subscription, social links

---

##  Deployment on Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your GitHub repository
4. Framework Preset: **Vite**
5. Build Command: `npm run dev`
6. Output Directory: `dist`
7. Click **Deploy**

---

##  Submission Info

**Submitted by:** Vishal Maurya
**Email:** vm9328293@gmail.com
**GitHub:**  https://github.com/maurya0607

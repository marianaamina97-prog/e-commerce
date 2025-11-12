# Luxora

## Live Demo
[https://luxora-aesthetic-haven.netlify.app/](https://luxora-aesthetic-haven.netlify.app/)

---

## Project Overview
Luxora is a modern lighting brand website that showcases elegant lighting products designed to enhance contemporary living spaces. The site blends clean design aesthetics with user-centric navigation, emphasizing premium quality and timeless elegance. It’s built to provide a smooth browsing and shopping experience for users interested in stylish home lighting solutions.

---

## Brand Identity

### Color System
- **Primary:** `#0056FF` — Represents trust, modernity, and professionalism. Used for CTAs and highlights to draw user attention.  
- **Secondary:** `#F5F6F8` — Soft neutral background that enhances readability and provides visual balance.  
- **Accent:** `#FFC107` — Warm golden hue that conveys luxury and illumination, aligning with the brand’s lighting theme.  
- **Text:** `#111827` — Deep neutral tone for strong readability and modern contrast.  
- **White:** `#FFFFFF` — Provides clarity and helps create an elegant, minimal aesthetic.  

### Typography
- **Headings:** *Poppins* — Clean, geometric sans-serif font that conveys sophistication and modernity.  
- **Body:** *Inter* — Simple and highly legible font optimized for web readability and long-form content.  

---

## Design Decisions

### Layout Adherence
- Spacing follows an 8px grid system for consistent alignment and proportional design.  
- Visual hierarchy maintained through typographic scale and consistent padding/margin.  
- Components measured and aligned using **Figma’s pixel grid** and **Tailwind CSS utility classes** for precision.  

### Creative Departures
- **Content Strategy:** Focused on visual storytelling — hero imagery and product galleries communicate quality and lifestyle appeal.  
- **Brand Positioning:** Luxora positions itself as an aspirational yet approachable lighting brand emphasizing craftsmanship and innovation.  
- **MD Breakpoint Design Decisions:** Medium breakpoint (768px) adapts grids and layouts for readability across all screens.  

---

## Component Architecture
The website follows a **modular React component structure** for scalability and maintainability:
- **Header / Navigation:** Responsive navbar with anchor links.  
- **Hero Section:** Reusable hero banner with dynamic call-to-action.  
- **Stats Section:** Modular metrics counter highlighting company achievements.  
- **Product Card:** Generic, reusable product display component used in featured and all-products sections.  
- **Testimonial Section:** Dynamic carousel-ready feedback display.  
- **Footer:** Configurable component with link groups and social icons.  

---

## Performance Optimizations
- Lazy loading for product images to reduce initial load time.  
- Image compression using WebP for faster loading.  
- Code-splitting with React dynamic imports for optimized rendering.  
- Tailwind JIT mode to remove unused CSS automatically.  
- Minified JS and pre-cached assets to improve Lighthouse performance scores.  

---

## Image Credits
All images are sourced from **[Unsplash](https://unsplash.com)** and **[Pexels](https://pexels.com)**, under their respective free-use licenses.  

---

## Installation & Setup
To run this project locally:

```bash
git clone https://github.com/marianaamina97-prog/luxora.git
cd luxora
npm install
npm run dev

# Wasif Sadiq Portfolio - Specification Document

## 1. Project Overview

- **Project Name**: Wasif Sadiq Portfolio
- **Type**: Developer Portfolio Website
- **Core Functionality**: A premium, modern portfolio showcasing a Flutter specialist and AI researcher with professional polish suitable for top-tier developers
- **Target Users**: Recruiters, hiring managers, potential clients, and fellow developers

## 2. UI/UX Specification

### Layout Structure

- **Navigation**: Sticky navbar with smooth scroll to sections
- **Page Sections**: Hero, About, Skills, Projects, Experience, Research & Education, Contact
- **Responsive Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

### Visual Design

#### Color Palette
- **Background Primary**: `#0a0a0f` (deep dark)
- **Background Secondary**: `#12121a` (slightly lighter dark)
- **Background Tertiary**: `#1a1a24` (card backgrounds)
- **Accent Primary**: `#6366f1` (indigo)
- **Accent Secondary**: `#8b5cf6` (purple)
- **Accent Gradient**: `linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)`
- **Text Primary**: `#f8fafc` (white-ish)
- **Text Secondary**: `#94a3b8` (muted gray)
- **Text Muted**: `#64748b` (darker gray)
- **Border Color**: `#2e2e3a` (subtle borders)
- **Glass Effect**: `rgba(255, 255, 255, 0.03)` with backdrop blur

#### Typography
- **Font Family**: `Inter` (via Next.js font optimization)
- **Hero Title**: 4rem (64px) bold
- **Section Titles**: 2.5rem (40px) bold
- **Subheadings**: 1.25rem (20px) semibold
- **Body Text**: 1rem (16px) regular
- **Small Text**: 0.875rem (14px)

#### Spacing System
- **Section Padding**: 6rem vertical, 1.5rem horizontal
- **Container Max Width**: 1280px
- **Card Padding**: 1.5rem
- **Element Gap**: 1rem standard

#### Visual Effects
- **Glassmorphism**: Subtle backdrop blur on cards and navbar
- **Gradient Glow**: Purple/indigo glow behind hero section
- **Hover Effects**: Scale(1.02) with box-shadow on cards
- **Border Gradient**: Subtle gradient borders on featured elements

### Components

1. **Navbar**: Fixed top, glassmorphic, smooth scroll links
2. **Hero**: Full viewport height, animated gradient background, name/title/tagline, CTA buttons, badges
3. **About**: Premium paragraph with accent styling
4. **Skills**: Grid of category cards with icons, hover effects
5. **Projects**: Featured (large) and regular cards with tech badges
6. **Experience**: Timeline UI with connecting line
7. **Education**: Card-based list with institution details
8. **Contact**: Form UI + social links
9. **Footer**: Minimal with copyright

### Animations (Framer Motion)

- **Section Reveal**: Fade up + slight scale on scroll
- **Card Hover**: Scale + shadow lift
- **Button Hover**: Background gradient shift
- **Stagger Children**: 0.1s delay between items
- **Hero**: Initial entrance animation with gradient pulse

## 3. Functionality Specification

### Core Features
- Smooth scroll navigation
- Dark/Light mode toggle (default dark)
- Responsive design across all breakpoints
- SEO meta tags
- Framer Motion scroll animations

### User Interactions
- Click nav links → smooth scroll to section
- Hover cards → lift effect
- Click theme toggle → switch dark/light
- Hover buttons → gradient shift

### Data Handling
- Static content (no API calls)
- Project and skill data in structured arrays

## 4. Acceptance Criteria

- [ ] All 7 sections render correctly
- [ ] Dark mode is default, light mode toggle works
- [ ] Smooth scroll navigation functional
- [ ] Framer Motion animations trigger on scroll
- [ ] Responsive on mobile, tablet, desktop
- [ ] No console errors
- [ ] npm install && npm run dev works
- [ ] Ready for Vercel deployment

## 5. Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Next.js font optimization)
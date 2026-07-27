# 📚 Ailaysa Frontend Assessment

![Ailaysa Cover](https://github.com/PRABAKAR05/Ailaysa_Frontend-Task/blob/main/public/books/cover1.jpg?raw=true)

A premium, pixel-perfect frontend clone of the Ailaysa digital library interface. Built with a focus on modern web aesthetics, smooth micro-interactions, and a flawless user experience.

---

## ✨ Key Features

- **Pixel-Perfect UI:** Meticulously crafted layouts matching modern design standards.
- **Fluid Page Transitions:** Integrated `framer-motion` for seamless, native-feeling navigation between the Browse, Book Detail, and Author pages.
- **Premium Micro-interactions:** Tactile button states (`active:scale-95`), hover shadows, and smooth image scaling effects.
- **Fully Responsive:** Adapts beautifully from mobile devices to ultra-wide desktop monitors using a fluid Grid & Flexbox system.
- **Graceful Error Handling:** Custom Empty States and skeleton loading screens for a polished, uninterrupted user journey.
- **Optimized for Export:** Prepared for Next.js static exports (`output: export`) with `generateStaticParams()` configured.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Library:** React 18
- **Styling:** Tailwind CSS (Utility-first, highly customized)
- **Animations:** Framer Motion
- **Icons:** Custom SVGs
- **Typography:** Custom Google Fonts (Poppins & Noto Sans)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18+) and npm installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PRABAKAR05/Ailaysa_Frontend-Task.git
   cd Ailaysa_Frontend-Task
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Explore the App:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.
   
   *Key routes to test:*
   * `/browse` - The main discovery hub.
   * `/book/11` - Book detail view.
   * `/author/48` - Author profile view.

---

## 🏗️ Architecture & Decisions

- **Mock Data Layer:** To keep the frontend self-contained for the assessment, a robust mock data layer (`src/lib/browse-data.ts`) was created. It powers the dynamic routing and content generation.
- **Component Driven:** Reusable UI components (like `SidebarNav`, `HorizontalBookCard`, `EmptyState`) were extracted to maintain a clean and scalable codebase.
- **Client & Server Separation:** Leveraged Next.js Server Components for initial page routing and data fetching (`page.tsx`), and Client Components (`*Client.tsx`) for interactive elements and animations, avoiding SWC compiler edge-cases.

---

## 🔮 Future Enhancements (With more time)

1. **API Integration:** Swap out the mock data layer for a real backend using SWR or React Query.
2. **State Management:** Implement Zustand for managing global user preferences (like Dark Mode or Saved Books).
3. **Automated Testing:** Add comprehensive testing suites using Cypress (E2E) and React Testing Library (Unit).
4. **Accessibility (a11y):** Deep audit for ARIA labels and full keyboard navigation compliance.

---

*Crafted with precision for the Ailaysa Frontend Task.*
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SidebarNav } from "@/components/browse/BrowseComponents";
import { newArrivals } from "@/lib/browse-data";

// Inline compact book card that respects its container width
function AuthorBookCard({ title, author, coverImage, id }: { title: string; author: string; coverImage: string; id: number }) {
  return (
    <div className="flex flex-col bg-[#F6F5F2] rounded-[12px] p-2.5 group cursor-pointer hover:shadow-md transition-shadow">
      <div className="relative w-full h-[180px] rounded-lg overflow-hidden mb-2 shadow-sm">
        <Image src={coverImage} alt={title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="200px" />
        <button className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors z-10" onClick={(e) => e.preventDefault()}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
      <p className="text-[11px] font-medium text-[#1E1E1E] truncate mb-0.5 px-0.5">{title}</p>
      <p className="text-[11px] text-[#717171] truncate mb-2 px-0.5">by {author}</p>
      <Link href={`/book/${id}`}>
        <button className="w-full bg-[#1A1A1A] hover:bg-[#333] text-white text-[11px] font-medium py-1.5 rounded-lg transition-colors">
          Read & Chat
        </button>
      </Link>
    </div>
  );
}

// Inline horizontal card
function HorizontalBookCard({ title, coverImage, idx }: { title: string; coverImage: string; idx: number }) {
  return (
    <div className="flex border border-gray-100 rounded-xl bg-white hover:shadow-sm transition-shadow p-3 gap-3">
      <div className="w-[70px] h-[95px] shrink-0 rounded-lg overflow-hidden relative">
        <Image src={coverImage} alt={title} fill className="object-cover" sizes="70px" />
      </div>
      <div className="flex flex-col flex-1 min-w-0">
        <h3 className="text-[12px] font-semibold text-[#1E1E1E] mb-1 leading-snug">Death before Breakfast</h3>
        <p className="text-[11px] text-[#717171] leading-relaxed line-clamp-3 mb-2">
          A clash of armies, a battle of gods, and the rage of a hero fuel this epic tale of war. When a leader's pride ignites a conflict.
        </p>
        <div className="mt-auto">
          <button className="w-full bg-[#1A1A1A] hover:bg-[#333] text-white text-[11px] font-medium py-1.5 rounded-lg transition-colors">
            Read & Chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AuthorClient({ authorId }: { authorId: string }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("browse");
  const books5 = newArrivals.slice(0, 5);

  return (
    <div className="min-h-screen bg-white text-[#1A1A1A]" style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}>
      <div className="flex w-full min-h-screen">

        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black/30 z-50 md:hidden" onClick={() => setSidebarOpen(false)}>
            <aside className="w-[240px] bg-[#FDF9EE] h-full overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <SidebarNav activeCategory={activeCategory} onCategoryChange={(cat) => { setActiveCategory(cat); setSidebarOpen(false); }} />
            </aside>
          </div>
        )}

        {/* Desktop Sidebar — always visible at md+ */}
        <aside className="hidden md:flex md:flex-col w-[240px] shrink-0 self-start">
          <SidebarNav
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </aside>

        {/* Main Area */}
        <div className="flex-1 flex flex-col min-w-0">

          {/* Header */}
          <header className="flex items-center justify-between px-6 lg:px-10 h-[58px] border-b border-gray-100 bg-white shrink-0">
            <div className="flex items-center gap-3">
              <button className="md:hidden p-1.5 rounded-lg hover:bg-gray-100" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              <nav className="hidden md:flex items-center gap-1 text-[13px]">
                <span className="text-gray-400 hover:text-gray-600 cursor-pointer">Browse</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                <span className="text-gray-400 hover:text-gray-600 cursor-pointer">Authors</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                <span className="text-[#1A1A1A] font-medium">J.K Rowling</span>
              </nav>
            </div>
            <div className="flex items-center gap-5">
              <button className="text-gray-400 hover:text-gray-700 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </button>
              <button className="text-gray-400 hover:text-gray-700 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
              </button>
              <button className="px-5 py-1.5 rounded-full border border-gray-300 text-[13px] font-medium hover:bg-gray-50 transition-colors">Login</button>
            </div>
          </header>

          {/* Page body */}
          <main className="flex-1">

            {/* Author Profile */}
            <div className="bg-[#FDF9EE] px-6 lg:px-10 py-7">
              <div className="flex flex-row gap-6 items-start">
                <div className="w-[120px] h-[140px] shrink-0 rounded-xl overflow-hidden relative shadow-sm">
                  <Image src="/books/author-jk.png" alt="J.K Rowling" fill className="object-cover object-top" />
                </div>
                <div className="flex-1 pt-1 min-w-0">
                  <h1 className="text-[22px] font-semibold text-[#1A1A1A] mb-1.5">J.K Rowling</h1>
                  <p className="text-[12px] text-[#717171] leading-relaxed mb-3 max-w-[480px]">
                    British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Classic', 'Books to read', 'Historical Fiction', 'Historical Fiction', 'Historical Fiction'].map((tab, idx) => (
                      <button key={idx} className="px-3 py-1 rounded-full bg-[#E0EFFF] text-[11px] font-medium text-[#1142BE] hover:bg-[#cce4ff] transition-colors">{tab}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Our New Releases — 2 rows of 5, contained grid */}
            <div className="px-6 lg:px-10 mt-8 mb-10">
              <h2 className="text-[18px] font-bold text-[#1A1A1A] mb-0.5">Our New Releases</h2>
              <p className="text-[12px] text-[#717171] mb-5">Trending books among readers</p>

              {/* Row 1 */}
              <div className="grid grid-cols-5 gap-3 mb-3">
                {books5.map((book) => (
                  <AuthorBookCard key={book.id} id={book.id} title={book.title} author={book.author} coverImage={book.coverImage} />
                ))}
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-5 gap-3">
                {books5.map((book) => (
                  <AuthorBookCard key={`r2-${book.id}`} id={book.id} title={book.title} author={book.author} coverImage={book.coverImage} />
                ))}
              </div>
            </div>

            {/* Our New Releases — Horizontal Cards */}
            <div className="px-6 lg:px-10 mb-16">
              <h2 className="text-[18px] font-bold text-[#1A1A1A] mb-0.5">Our New Releases</h2>
              <p className="text-[12px] text-[#717171] mb-5">Trending books among readers</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {newArrivals.slice(0, 6).map((book, idx) => (
                  <HorizontalBookCard key={idx} title={book.title} coverImage={book.coverImage} idx={idx} />
                ))}
              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}

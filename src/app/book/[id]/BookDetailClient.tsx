"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { newArrivals } from "@/lib/browse-data";
import type { Book } from "@/lib/browse-data";
import { SidebarNav } from "@/components/browse/BrowseComponents";

export default function BookDetailClient({ book }: { book: Book }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("browse");

  return (
    <div
      className="min-h-screen bg-white text-[#1A1A1A]"
      style={{ fontFamily: "var(--font-poppins), Poppins, sans-serif" }}
    >
      <div className="flex w-full min-h-screen">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/30 z-50 md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <aside className="w-[240px] bg-[#FDF9EE] h-full transform transition-transform">
              <SidebarNav
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </aside>
          </div>
        )}

        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-[240px] shrink-0 bg-[#FDF9EE]">
          <SidebarNav
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-w-0 bg-white">
          
          <main className="flex-1 px-6 sm:px-10 lg:px-14 py-10 w-full max-w-[1200px]">
            
            {/* Mobile menu button & Breadcrumbs */}
            <div className="flex items-center gap-4 mb-8">
              <button
                className="md:hidden p-2 -ml-2 rounded-lg text-[#1E1E1E] hover:bg-gray-100"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              
              <div className="flex items-center gap-3 text-[15px] font-medium text-[#666666]">
                <Link href="/browse" className="hover:text-[#1A1A1A] transition-colors">Browse</Link>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
                <span className="text-[#1A1A1A] truncate max-w-[200px] sm:max-w-none">{book.title}</span>
              </div>
            </div>
            
            {/* ── Book Hero ── */}
            <div className="flex flex-col md:flex-row gap-10 lg:gap-16 mb-14">
              {/* Left Column: Cover & Action Buttons */}
              <div className="w-full md:w-[300px] shrink-0">
                <div className="w-full h-[440px] relative rounded-xl overflow-hidden shadow-sm mb-6 bg-gray-100 border border-gray-100">
                  <Image src={book.coverImage} alt={book.title} fill className="object-cover" />
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 rounded-xl py-3.5 bg-white border border-gray-300 text-[#1A1A1A] text-[14px] font-medium transition-colors hover:bg-gray-50 shadow-sm">
                    Read
                  </button>
                  <button className="flex-1 rounded-xl py-3.5 bg-[#1C1F26] text-white text-[14px] font-medium transition-colors hover:bg-black shadow-sm">
                    Chat Now
                  </button>
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="flex-1 pt-2">
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#231A36] leading-tight mb-4">
                  {book.title}
                </h1>
                
                <p className="text-[15px] text-[#666666] mb-8">
                  Written by : <span className="font-semibold text-[#1A1A1A]">{book.author}</span>
                </p>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-3 mb-12">
                  {['Classic', 'Books to read', 'Historical Fiction', 'Historical Fiction'].map((tag, i) => (
                    <span key={i} className="px-5 py-1.5 rounded-full bg-[#E5F6F9] text-[#2C6E87] text-[14px] font-medium border border-[#D0EEF5]">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-[22px] font-bold mb-4 text-[#1A1A1A]">About the Book</h3>
                <p className="text-[15px] text-[#666666] leading-relaxed mb-3">
                  A clash of armies, a battle of gods, and the rage of a hero fuel this epic tale of war. When a leader&apos;s pride ignites a conflict, the greatest warrior withdraws, leaving his comrades to face devastating losses. Explore a world of mighty heroes and bitter rivalries, where courage and honor are tested by fate. Witness the brutal dance of battle, the clash of bronze, and the complex ties that bind even enemies. Can a prophecy alter the course of war, or is destiny set in stone?
                </p>
                <button className="text-[14px] font-medium text-[#2E5B97] flex items-center gap-1.5 mb-14 hover:underline">
                  Read more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <h3 className="text-[22px] font-bold mb-6 text-[#1A1A1A]">Product Details</h3>
                <div className="flex flex-col text-[15px]">
                  <div className="flex gap-4 py-3">
                    <span className="font-semibold text-[#1A1A1A] w-[160px]">Publisher :</span>
                    <span className="text-[#666666]">Ailaysa</span>
                  </div>
                  <div className="flex gap-4 py-3">
                    <span className="font-semibold text-[#1A1A1A] w-[160px]">Publication date :</span>
                    <span className="text-[#666666]">21 December 2025</span>
                  </div>
                  <div className="flex gap-4 py-3">
                    <span className="font-semibold text-[#1A1A1A] w-[160px]">Language :</span>
                    <span className="text-[#666666]">English</span>
                  </div>
                  <div className="flex gap-4 py-3">
                    <span className="font-semibold text-[#1A1A1A] w-[160px]">Print length :</span>
                    <span className="text-[#666666]">160 pages</span>
                  </div>
                </div>

                {/* ── About Author ── */}
                <div className="mt-16 mb-16">
                  <h3 className="text-[22px] font-bold mb-8 text-[#1A1A1A]">About the Author</h3>
                  <div className="flex gap-6 items-start">
                    <div className="w-[100px] h-[100px] relative rounded-2xl overflow-hidden shrink-0 shadow-sm bg-gray-100">
                      <Image src="/books/author-jk.png" alt="J.K Rowling" fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#492B89] mb-2">J.K Rowling</h4>
                      <p className="text-[14px] text-[#666666] leading-relaxed max-w-3xl mb-3">
                        British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world.British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world.
                      </p>
                      <button className="text-[13px] font-medium text-[#2E5B97] flex items-center gap-1.5 hover:underline">
                        Read more
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* ── Reviews ── */}
                <div className="mb-16">
                  <h3 className="text-[22px] font-bold mb-8 text-[#1A1A1A]">Reviews</h3>
                  <div className="flex flex-col gap-8 max-w-3xl">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-[42px] h-[42px] rounded-full overflow-hidden shrink-0 bg-gray-200 shadow-sm">
                           <Image src="/books/author-chetan.png" alt="Reviewer" width={42} height={42} className="object-cover" />
                        </div>
                        <div>
                          <h5 className="font-medium text-[#1A1A1A] mb-1.5 text-[15px]">Vinuja</h5>
                          <p className="text-[14px] text-[#666666] leading-relaxed">
                            British author best known for creating the Harry Potter series, one of the most popular and influential fantasy stories in the world.British author best known for creating the Harry Potter.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── You might also like ── */}
                <div>
                  <h3 className="text-[22px] font-bold mb-6 text-[#1A1A1A]">You might also like</h3>
                  <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                    {newArrivals.map((b) => (
                      <div key={b.id} className="snap-start relative w-[140px] shrink-0 cursor-pointer group">
                        <Link href={`/book/${b.id}`}>
                          <div className="w-full h-[200px] relative rounded-xl overflow-hidden mb-2.5 shadow-sm border border-gray-100 transition-transform group-hover:-translate-y-1">
                            <Image src={b.coverImage} alt={b.title} fill className="object-cover" />
                            <button 
                              className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 z-10"
                              onClick={(e) => e.preventDefault()}
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                              </svg>
                            </button>
                          </div>
                          <p className="text-[13px] font-medium text-[#1A1A1A] truncate mb-0.5">{b.title}</p>
                          <p className="text-[11px] text-[#2E5B97] truncate">{b.author}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </main>
        </div>
      </div>
    </div>
  );
}

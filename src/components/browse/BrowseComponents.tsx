// I am Batman
"use client";

import Image from "next/image";
import { useState } from "react";

import Link from "next/link";

// ─── Skeleton ──────────────────────────────────────────────────────
function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-neutral-200 rounded-xl ${className ?? ""}`} />
  );
}

// ─── Small Book Card (New Arrivals) ───────────────
interface SmallBookCardProps {
  id?: number;
  title: string;
  author: string;
  coverImage: string;
  loading?: boolean;
}

export function SmallBookCard({
  id,
  title,
  author,
  coverImage,
  loading = false,
}: SmallBookCardProps) {
  if (loading) {
    return (
      <div className="flex-shrink-0 w-[140px]">
        <Skeleton className="w-full h-[210px] mb-2" />
        <Skeleton className="h-3 w-3/4 mb-1 rounded" />
        <Skeleton className="h-3 w-1/2 rounded" />
      </div>
    );
  }

  const content = (
    <div className="flex-shrink-0 w-[140px] group cursor-pointer select-none">
      {/* cover */}
      <div className="relative w-full h-[210px] rounded-xl overflow-hidden mb-2 transition-transform duration-200 group-hover:scale-[1.03] group-hover:shadow-lg shadow-sm">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover"
          sizes="140px"
        />
      </div>

      {/* title */}
      <p
        className="text-[#1E1E1E] truncate mt-2"
        style={{
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "13px",
          lineHeight: "1.4em",
        }}
      >
        {title}
      </p>
      {/* author */}
      <p
        className="truncate"
        style={{
          fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif",
          fontWeight: 400,
          fontSize: "11px",
          lineHeight: "1.3em",
          color: "#717171",
        }}
      >
        {author}
      </p>
    </div>
  );

  if (id) {
    return <Link href={`/book/${id}`}>{content}</Link>;
  }
  return content;
}

// ─── Large Book Card (Classics, etc) ────────────────
interface LargeBookCardProps {
  id?: number;
  title: string;
  author: string;
  coverImage: string;
  loading?: boolean;
}

export function LargeBookCard({
  id,
  title,
  author,
  coverImage,
  loading = false,
}: LargeBookCardProps) {
  const [btnHover, setBtnHover] = useState(false);

  if (loading) {
    return (
      <div className="flex-shrink-0 w-[196px] bg-[#F4F4F4] p-3 rounded-xl">
        <Skeleton className="w-full h-[240px] mb-3" />
        <Skeleton className="h-3 w-3/4 mb-2 rounded" />
        <Skeleton className="h-3 w-1/2 mb-3 rounded" />
        <Skeleton className="h-9 w-full rounded-lg" />
      </div>
    );
  }

  const content = (
    <div className="flex-shrink-0 w-[196px] bg-[#F6F5F2] rounded-[14px] p-3 group cursor-pointer select-none transition-shadow hover:shadow-md">
      {/* cover container */}
      <div className="relative w-full h-[240px] rounded-lg overflow-hidden mb-3 shadow-sm">
        <Image
          src={coverImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="172px"
        />
        {/* Heart icon */}
        <button 
          className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors z-10"
          onClick={(e) => e.preventDefault()} // Prevent navigation when clicking heart
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E53935" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>

      {/* metadata */}
      <div className="px-1">
        <p
          className="text-[#1E1E1E] truncate mb-[2px]"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 500,
            fontSize: "12px",
          }}
        >
          {title}
        </p>
        <p
          className="truncate mb-3"
          style={{
            fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif",
            fontWeight: 500,
            fontSize: "11px",
            color: "#1142BE",
          }}
        >
          {author}
        </p>

        {/* Read & Chat CTA */}
        <button
          className="w-full rounded-[6px] py-[8px] text-white text-[12px] font-medium transition-all duration-150 active:scale-95 z-10 relative"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            backgroundColor: btnHover ? "#2C2828" : "#1A1A1A",
          }}
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          onClick={(e) => e.preventDefault()} // Prevent navigation when clicking button if it has its own action later
        >
          Read & Chat
        </button>
      </div>
    </div>
  );

  if (id) {
    return <Link href={`/book/${id}`}>{content}</Link>;
  }
  return content;
}

// ─── Speak with Authors Card ───────────────────────────────────────
interface SpeakCardProps {
  title: string;
  author: string;
  leftImage: string;
  rightImage: string;
  loading?: boolean;
}

export function SpeakCard({
  title,
  author,
  leftImage,
  rightImage,
  loading = false,
}: SpeakCardProps) {
  if (loading) {
    return (
      <div className="flex-shrink-0 w-[276px]">
        <Skeleton className="w-full h-[180px] mb-3" />
        <Skeleton className="h-3 w-3/4 mb-2 rounded" />
        <Skeleton className="h-3 w-1/2 mb-3 rounded" />
        <Skeleton className="h-9 w-full rounded-lg" />
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 w-[276px] group cursor-pointer select-none">
      <div className="flex w-full h-[180px] rounded-xl overflow-hidden mb-3 transition-transform duration-200 group-hover:scale-[1.02] shadow-sm">
        <div className="relative w-1/2 h-full">
          <Image src={leftImage} alt={title} fill className="object-cover" sizes="138px" />
        </div>
        <div className="relative w-1/2 h-full">
          <Image src={rightImage} alt={title} fill className="object-cover" sizes="138px" />
        </div>
      </div>
      <p
        className="text-[#1E1E1E] truncate mb-[3px]"
        style={{
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 500,
          fontSize: "13px",
        }}
      >
        {title}
      </p>
      <p
        className="truncate mb-3"
        style={{
          fontFamily: "var(--font-noto-sans), 'Noto Sans', sans-serif",
          fontWeight: 400,
          fontSize: "12px",
          color: "#717171",
        }}
      >
        {author}
      </p>
      <button
        className="w-full rounded-[6px] py-2 text-white text-[12px] font-medium transition-all bg-[#1A1A1A] hover:bg-[#2C2828] active:scale-95"
      >
        Chat with Me
      </button>
    </div>
  );
}

// ─── Famous Author Card ────────────────────────────────────────────
interface AuthorCardProps {
  id: number;
  name: string;
  photo: string;
  loading?: boolean;
}

export function FamousAuthorCard({ id, name, photo, loading = false }: AuthorCardProps) {
  if (loading) {
    return <Skeleton className="flex-shrink-0 w-[140px] h-[140px]" />;
  }

  return (
    <Link href={`/author/${id}`} className="block">
      <div className="flex-shrink-0 relative w-[130px] h-[130px] rounded-[14px] overflow-hidden group cursor-pointer shadow-sm">
        <Image src={photo} alt={name} fill className="object-cover transition-transform duration-300 group-hover:scale-110" sizes="130px" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <p
          className="absolute bottom-3 left-0 right-0 text-center text-white"
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 500,
            fontSize: "12px",
          }}
        >
          {name}
        </p>
      </div>
    </Link>
  );
}

// ─── Section Header ────────────────────────────────────────────────
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  loading?: boolean;
}

export function SectionHeader({ title, subtitle, loading = false }: SectionHeaderProps) {
  if (loading) {
    return (
      <div className="mb-4">
        <Skeleton className="h-8 w-48 mb-2 rounded" />
        {subtitle && <Skeleton className="h-5 w-64 rounded" />}
      </div>
    );
  }
  return (
    <div className="mb-5 flex justify-between items-center">
      <div>
        <h2
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "24px",
            color: "#1A1A1A",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="mt-1"
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              color: "#717171",
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {/* Navigation Arrows (used instead of "See all" per the new design) */}
      <div className="hidden md:flex gap-2">
        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ─── Horizontal Book Shelf ─────────────────────────────────────────
interface ShelfBook {
  id: number;
  title: string;
  author: string;
  coverImage: string;
}

interface BookShelfProps {
  books: ShelfBook[];
  variant: "small" | "large";
  loading?: boolean;
}

export function BookShelf({ books, variant, loading = false }: BookShelfProps) {
  // Array of 6 for skeleton loaders
  const loadingItems = Array.from({ length: 6 }).map((_, i) => ({
    id: `skeleton-${i}`,
    title: "",
    author: "",
    coverImage: "",
  }));

  const displayBooks = loading ? loadingItems : books;

  return (
    <div className="flex gap-5 md:gap-8 lg:gap-10 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
      {displayBooks.map((book, i) => (
        <div key={book.id || i} className="snap-start shrink-0">
          {variant === "small" ? (
            <SmallBookCard
              id={(book as any).id}
              title={book.title}
              author={book.author}
              coverImage={book.coverImage}
              loading={loading}
            />
          ) : (
            <LargeBookCard
              id={(book as any).id}
              title={book.title}
              author={book.author}
              coverImage={book.coverImage}
              loading={loading}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Recommended Banner Card ───────────────────────────────────────
// Keeping the previous implementation for the recommended cards just in case,
// but updating the style to match the new cleaner aesthetic.
interface RecBook { id: number; coverImage: string }

interface RecommendedCardProps {
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  dotColor: string;
  books: RecBook[];
}

export function RecommendedCard({
  title,
  description,
  bgColor,
  borderColor,
  dotColor,
  books,
}: RecommendedCardProps) {
  return (
    <div
      className="flex-shrink-0 relative rounded-2xl overflow-hidden snap-start transition-shadow hover:shadow-md p-7 flex flex-col justify-between"
      style={{
        width: "min(560px, 88vw)",
        height: "350px",
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      {/* Background decorative shape */}
      <div
        className="absolute -right-10 -top-10 w-48 h-48 rounded-full pointer-events-none opacity-60"
        style={{ backgroundColor: dotColor || "rgba(255,255,255,0.4)" }}
      />

      <div className="relative z-10 max-w-[450px]">
        <h3 className="mb-1.5 text-[20px] font-semibold text-[#1E1E1E]" style={{ fontFamily: "var(--font-poppins)" }}>
          {title}
        </h3>
        <p className="text-[13px] text-[#666666] leading-relaxed" style={{ fontFamily: "var(--font-poppins)" }}>
          {description}
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-4 gap-3.5 w-full mt-4">
        {books.map((book) => (
          <div key={book.id} className="relative rounded-lg overflow-hidden h-[165px] shadow-sm group/rec cursor-pointer transition-transform duration-200 hover:scale-[1.03]">
            <Image src={book.coverImage} alt="Book" fill className="object-cover" sizes="140px" />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Sidebar Navigation ────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "browse", label: "Browse", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
  { id: "newarrivals", label: "New Arrivals", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
  { id: "bestsellers", label: "Best Sellers", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
  { id: "selfhelp", label: "Self help", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
  { id: "business", label: "Business", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { id: "tech", label: "Tech", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { id: "kids", label: "Kids", icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { id: "classics", label: "Classics", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { id: "masalapacket", label: "Masala Packet", icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" },
  { id: "settings", label: "Settings", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
];

interface SidebarNavProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

export function SidebarNav({ activeCategory, onCategoryChange }: SidebarNavProps) {
  return (
    <div className="w-full bg-[#FDF9EE] flex flex-col py-8 px-6 rounded-br-[32px] shadow-sm pb-10">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-12 pl-2">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
        <span className="font-semibold text-xl bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] bg-clip-text text-transparent" style={{ fontFamily: "var(--font-poppins)" }}>Chai Reader</span>
      </div>

      <nav className="flex flex-col gap-1 px-4 flex-1">
        {NAV_ITEMS.map((item) => {
          const isActive = item.id === activeCategory;
          return (
            <button
              key={item.id}
              onClick={() => onCategoryChange(item.id)}
              className="flex items-center gap-4 px-4 py-[10px] rounded-lg text-left transition-all duration-150 w-full"
              style={{
                backgroundColor: isActive ? "#FFFFFF" : "transparent",
                boxShadow: isActive ? "0 1px 3px rgba(0,0,0,0.05)" : "none",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={isActive ? "#1A1A1A" : "#717171"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {item.id === "settings" && <circle cx="12" cy="12" r="3"></circle>}
                <path d={item.icon} />
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: isActive ? 500 : 400,
                  fontSize: "14px",
                  color: isActive ? "#1A1A1A" : "#717171",
                }}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

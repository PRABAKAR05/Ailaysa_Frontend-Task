  "use client";

  import { useState, useEffect, useCallback } from "react";
  import Image from "next/image";
  import {
    heroBook,
    genrePills,
    newArrivals,
    recommendedBanners,
    bestSellers,
    speakWithAuthors,
    crimeFiction,
    nonFiction,
    famousAuthors,
    academics,
    business,
    techBooks,
    classics,
  } from "@/lib/browse-data";
  import {
    SidebarNav,
    SectionHeader,
    BookShelf,
    RecommendedCard,
    SpeakCard,
    FamousAuthorCard,
  } from "@/components/browse/BrowseComponents";

  export default function BrowsePage() {
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("browse");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Simulate loading state
    useEffect(() => {
      const t = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(t);
    }, []);

    const handleCategoryChange = useCallback((id: string) => {
      setActiveCategory(id);
      setSidebarOpen(false);
      
      if (id === 'browse') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, []);

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
              <aside className="w-[240px] bg-[#FDF9EE] h-full transform transition-transform overflow-y-auto scrollbar-hide">
                <SidebarNav
                  activeCategory={activeCategory}
                  onCategoryChange={handleCategoryChange}
                />
              </aside>
            </div>
          )}

          {/* Desktop Sidebar (Floating) */}
          <aside className="hidden md:block w-[240px] shrink-0 self-start">
            <SidebarNav
              activeCategory={activeCategory}
              onCategoryChange={handleCategoryChange}
            />
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col min-w-0">
            
            {/* ── TOP SECTION (CREAM BACKGROUND) ── */}
            <div className="w-full bg-[#FDF9EE]">
              {/* Top header bar */}
              <header className="flex items-center justify-between px-6 lg:px-10 h-[80px]">
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 -ml-2 rounded-lg text-[#1E1E1E] hover:bg-gray-100"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Search bar */}
              <div className="hidden md:flex flex-1 max-w-[600px]">
                <div className="flex items-center gap-3 w-full px-5 py-2.5 rounded-full border border-gray-200 bg-white transition-shadow focus-within:shadow-sm focus-within:border-gray-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input
                    type="text"
                    placeholder="Search book title or author..."
                    className="flex-1 bg-transparent text-[14px] text-[#1E1E1E] placeholder-gray-400 outline-none"
                  />
                </div>
              </div>

              {/* Right icons */}
              <div className="flex items-center gap-6 ml-auto md:ml-6">
                <button className="text-gray-500 hover:text-gray-900 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
                <button className="text-gray-500 hover:text-gray-900 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button>
                <button className="px-6 py-2 rounded-full border border-gray-300 text-[14px] font-medium hover:bg-gray-50 transition-colors">
                  Login
                </button>
              </div>
            </header>

            <main className="flex-1 flex flex-col">
              <div className="px-6 lg:px-10 pt-4 pb-6 overflow-hidden">
              
              {/* ── Hero Banner ── */}
              <section className="mb-14">
                <div className="relative w-full h-[280px] rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-between px-12" style={{ backgroundColor: "#FFFFFF", boxShadow: "0 4px 24px rgba(0,0,0,0.02)" }}>
                  {/* Background decorative circles */}
                  <div className="absolute right-[20%] top-[20%] w-24 h-24 rounded-full border-[2px] border-gray-100 opacity-50" />
                  <div className="absolute right-[10%] bottom-[10%] w-64 h-64 rounded-full border-[2px] border-gray-100 opacity-50" />
                  
                  <div className="relative z-10 max-w-lg">
                    <h1 className="text-[32px] font-medium mb-4 text-gray-700">
                      The Echo of our <span className="font-semibold text-[#1A1A2E]">Silent Pages</span>
                    </h1>
                    <p className="text-[15px] text-gray-500 mb-8 leading-relaxed max-w-[400px]">
                      A global publishing technology pavilion designed to run alongside major international book fairs
                    </p>
                    <button className="flex items-center gap-3 text-[#1A1A1A] font-medium text-[15px] group">
                      Explore More 
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="transition-transform group-hover:translate-x-1">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>

                  <div className="relative z-10 h-full w-[300px] flex items-center justify-center -mr-8">
                    {/* Tilted book */}
                    <div className="relative w-[180px] h-[260px] rounded-r-md rounded-l-sm shadow-[0_20px_40px_rgba(0,0,0,0.15)] transform rotate-[12deg] bg-white border border-gray-200">
                      <Image src="/books/book-cover-3.png" alt="Life of The Wild" fill className="object-cover rounded-r-md rounded-l-sm" />
                    </div>
                  </div>
                </div>
              </section>

              {/* ── Dive into Different Genres ── */}
              <section className="mb-14">
                <SectionHeader title="Dive into Different Genres" loading={loading} />
                <div className="flex gap-5 md:gap-8 lg:gap-10 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
                  {['People', 'History', 'Politics', 'Kids', 'Education'].map((genre, i) => (
                    <div
                      key={genre}
                      className="flex-shrink-0 snap-start flex items-center justify-center w-[160px] h-[64px] rounded-full cursor-pointer transition-transform duration-200 hover:scale-105 relative overflow-hidden group shadow-sm"
                    >
                      <Image src={`/books/rec-book-${(i % 4) + 1}.png`} alt={genre} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                      <span className="relative z-10 font-medium text-white text-[15px]">{genre}</span>
                    </div>
                  ))}
                </div>
              </section>
              </div>
            </main>
          </div>

          {/* ── BOTTOM SECTION (WHITE BACKGROUND) ── */}
        <div className="w-full bg-white flex-1 flex flex-col">
          <div className="px-6 lg:px-10 py-12 overflow-hidden flex-1">
              
              {/* ── New Arrivals ── */}
              <section id="newarrivals" className="mb-14">
                <SectionHeader
                  title="New Arrivals"
                  subtitle="Trending books among readers"
                  loading={loading}
                />
                <BookShelf books={newArrivals} variant="small" loading={loading} />
              </section>

              {/* ── Recommended For You ── */}
              <section className="mb-16">
                <div className="flex gap-6 md:gap-8 lg:gap-10 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
                  {recommendedBanners.map((banner) => (
                    <RecommendedCard
                      key={banner.id}
                      title={banner.title}
                      description={banner.description}
                      bgColor={banner.bgColor}
                      borderColor={banner.borderColor}
                      dotColor={banner.dotColor}
                      books={banner.books}
                    />
                  ))}
                </div>
              </section>

              {/* ── Our Best Sellers ── */}
              <section id="bestsellers" className="mb-16">
                <SectionHeader
                  title="Our Best Sellers"
                  subtitle="Trending books among readers"
                  loading={loading}
                />
                <BookShelf books={bestSellers} variant="large" loading={loading} />
              </section>

              {/* ── Speak with Authors ── */}
              <section className="mb-14">
                <SectionHeader title="Speak with Authors" loading={loading} />
                <div className="flex gap-5 md:gap-8 lg:gap-10 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory">
                  {speakWithAuthors.map((card) => (
                    <div key={card.id} className="snap-start shrink-0">
                      <SpeakCard
                        title={card.title}
                        author={card.author}
                        leftImage={card.leftImage}
                        rightImage={card.rightImage}
                        loading={loading}
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Crime Fiction ── */}
              <section className="mb-16">
                <SectionHeader
                  title="Crime Fiction"
                  subtitle="Trending books among readers"
                  loading={loading}
                />
                <BookShelf books={crimeFiction} variant="large" loading={loading} />
              </section>

              {/* ── Non Fiction Books ── */}
              <section className="mb-16">
                <SectionHeader
                  title="Non Fiction Books"
                  subtitle="Trending books among readers"
                  loading={loading}
                />
                <BookShelf books={nonFiction} variant="large" loading={loading} />
              </section>

              {/* ── Famous Authors ── */}
              <section className="mb-14">
                <SectionHeader title="Famous Authors" loading={loading} />
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                  {famousAuthors.map((author) => (
                    <div key={author.id} className="snap-start">
                      <FamousAuthorCard
                        id={author.id}
                        name={author.name}
                        photo={author.photo}
                        loading={loading}
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* ── Academics ── */}
              <section className="mb-16">
                <SectionHeader
                  title="Academics"
                  subtitle="Trending books among readers"
                  loading={loading}
                />
                <BookShelf books={academics} variant="large" loading={loading} />
              </section>

              {/* ── Business ── */}
              <section id="business" className="mb-16">
                <SectionHeader
                  title="Business"
                  subtitle="Trending books among readers"
                  loading={loading}
                />
                <BookShelf books={business} variant="large" loading={loading} />
              </section>

              {/* ── Tech Books ── */}
              <section id="tech" className="mb-16">
                <SectionHeader
                  title="Tech Books"
                  subtitle="Trending books among readers"
                  loading={loading}
                />
                <BookShelf books={techBooks} variant="large" loading={loading} />
              </section>

              {/* ── Classics ── */}
              <section id="classics" className="mb-16">
                <SectionHeader
                  title="Classics"
                  subtitle="Trending books among readers"
                  loading={loading}
                />
                <BookShelf books={classics} variant="large" loading={loading} />
              </section>
            </div>

          {/* ── Footer ── */}
            <footer className="bg-[#F8FAFC] py-16 px-10 border-t border-gray-100 relative overflow-hidden">
              {/* ── Background Waves ── */}
              <svg className="absolute bottom-0 left-0 w-full h-[120px] object-cover pointer-events-none z-0 opacity-60" preserveAspectRatio="none" viewBox="0 0 1440 320">
                <defs>
                  <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0052D4" />
                    <stop offset="50%" stopColor="#4364F7" />
                    <stop offset="100%" stopColor="#6FB1FC" />
                  </linearGradient>
                </defs>
                <path fill="url(#footerGradient)" fillOpacity="0.15" d="M0,256L48,229.3C96,203,192,149,288,149.3C384,149,480,203,576,218.7C672,235,768,213,864,197.3C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                <path fill="url(#footerGradient)" fillOpacity="0.25" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
              </svg>

              <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-20 justify-between relative z-10">
                
                <div className="max-w-[480px]">
                  <div className="flex items-center gap-3 mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span className="font-semibold text-xl bg-gradient-to-r from-[#0052D4] via-[#4364F7] to-[#6FB1FC] bg-clip-text text-transparent">Chai Reader</span>
                  </div>
                  <p className="text-[15px] text-gray-500 leading-relaxed">
                    Chai Reader is an AI-powered book commerce platform designed to transform how people discover and experience books—through reading, chatting with books, and more. It is owned and operated by Ailaysa Technologies Pvt Ltd.
                  </p>
                </div>

                <div className="flex flex-wrap gap-16 md:gap-24 lg:gap-32">
                  <div className="min-w-[160px]">
                    <h4 className="font-semibold mb-8 text-[#1A1A1A] text-[16px]">Quick Links</h4>
                    <ul className="flex flex-col gap-6 text-[15px] text-gray-500">
                      <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                      <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
                      <li><a href="#" className="hover:text-gray-900 transition-colors">Home</a></li>
                      <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
                      <li><a href="#" className="hover:text-gray-900 transition-colors">Support / Help Center</a></li>
                    </ul>
                  </div>

                  <div className="min-w-[160px]">
                    <h4 className="font-semibold mb-8 text-[#1A1A1A] text-[16px]">For Partners</h4>
                    <ul className="flex flex-col gap-6 text-[15px] text-gray-500">
                      <li><a href="#" className="hover:text-gray-900 transition-colors">For Authors</a></li>
                      <li><a href="#" className="hover:text-gray-900 transition-colors">For Publishers</a></li>
                      <li><a href="#" className="hover:text-gray-900 transition-colors">Become a Partner</a></li>
                    </ul>
                  </div>

                  <div className="min-w-[160px]">
                    <h4 className="font-semibold mb-8 text-[#1A1A1A] text-[16px]">Legal</h4>
                    <ul className="flex flex-col gap-6 text-[15px] text-gray-500">
                      <li><a href="#" className="hover:text-gray-900 transition-colors">Terms & Conditions</a></li>
                      <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                      <li><a href="#" className="hover:text-gray-900 transition-colors">Cookie Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pagination Floating Element */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center bg-[#565656] text-white rounded-md overflow-hidden text-[13px] shadow-lg z-10">
                <button className="px-3 py-1.5 hover:bg-[#404040] transition-colors border-r border-gray-600">&lt;</button>
                <div className="px-4 py-1.5 font-medium">1 / 3</div>
                <button className="px-3 py-1.5 hover:bg-[#404040] transition-colors border-l border-gray-600">&gt;</button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

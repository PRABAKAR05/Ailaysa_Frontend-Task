// I am Batman
// Browse screen — full data sourced from Figma node 295:2429

export type Book = {
  id: number;
  title: string;
  author: string;
  coverImage: string;
};

export type AuthorCard = {
  id: number;
  name: string;
  photo: string;
};

export type SpeakCard = {
  id: number;
  title: string;
  author: string;
  leftImage: string;
  rightImage: string;
};

export type RecommendedBanner = {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
  dotColor: string;
  books: { id: number; coverImage: string }[];
};

export type GenrePill = {
  id: number;
  label: string;
  emoji: string;
  bg: string;
};

export const heroBook = {
  title: "The Case of the Silent Pages",
  subtitle: "A gripping mystery that will keep you up all night.",
  author: "J.K. Rowling",
  genre: "Fiction",
  coverImage: "/books/speak-book-1a.png",
};

export const genrePills: GenrePill[] = [
  { id: 1, label: "All Books", emoji: "📚", bg: "#FFF6EF" },
  { id: 2, label: "Science Fiction", emoji: "🚀", bg: "#E7FAFB" },
  { id: 3, label: "Romance", emoji: "💕", bg: "#FFF8D7" },
  { id: 4, label: "Mystery", emoji: "🔍", bg: "#F0F0F1" },
  { id: 5, label: "History", emoji: "🏛️", bg: "#FFFBE7" },
  { id: 6, label: "Biography", emoji: "👤", bg: "#E0F4FF" },
  { id: 7, label: "Kids", emoji: "🧒", bg: "#FFF6EF" },
  { id: 8, label: "Politics", emoji: "🗳️", bg: "#F3F2ED" },
  { id: 9, label: "Education", emoji: "🎓", bg: "#E7FAFB" },
  { id: 10, label: "People", emoji: "👥", bg: "#FFFBE7" },
];

export const newArrivals: Book[] = [
  { id: 11, title: "Night Fiction", author: "by James Patterson", coverImage: "/books/book-cover-1.png" },
  { id: 12, title: "The Midnight Library", author: "by Matt Haig", coverImage: "/books/book-cover-2.png" },
  { id: 13, title: "Atomic Habits", author: "by James Clear", coverImage: "/books/book-cover-3.png" },
  { id: 14, title: "The Alchemist", author: "by Paulo Coelho", coverImage: "/books/book-cover-4.png" },
  { id: 15, title: "Think & Grow Rich", author: "by Napoleon Hill", coverImage: "/books/book-cover-5.png" },
  { id: 16, title: "The Psychology of Money", author: "by Morgan Housel", coverImage: "/books/book-cover-6.png" },
  { id: 111, title: "Deep Work", author: "by Cal Newport", coverImage: "/books/book-cover-1.png" },
  { id: 112, title: "Sapiens", author: "by Yuval Noah Harari", coverImage: "/books/book-cover-2.png" },
  { id: 113, title: "Educated", author: "by Tara Westover", coverImage: "/books/book-cover-3.png" },
  { id: 114, title: "Dune", author: "by Frank Herbert", coverImage: "/books/book-cover-4.png" },
];

export const recommendedBanners: RecommendedBanner[] = [
  {
    id: 17,
    title: "Recommended For You",
    description: "A global publishing technology pavilion designed to run alongside major international book fairs.",
    bgColor: "#FFF6EF",
    borderColor: "#FFE4CF",
    dotColor: "#FFEAD9",
    books: [
      { id: 18, coverImage: "/books/rec-book-1.png" },
      { id: 19, coverImage: "/books/rec-book-2.png" },
      { id: 20, coverImage: "/books/rec-book-3.png" },
      { id: 21, coverImage: "/books/rec-book-4.png" },
    ],
  },
  {
    id: 22,
    title: "Recommended For You",
    description: "A global publishing technology pavilion designed to run alongside major international book fairs.",
    bgColor: "#E7FAFB",
    borderColor: "#C9E2F4",
    dotColor: "rgba(164,239,254,0.5)",
    books: [
      { id: 23, coverImage: "/books/rec-book-4.png" },
      { id: 24, coverImage: "/books/rec-book-3.png" },
      { id: 25, coverImage: "/books/rec-book-2.png" },
      { id: 26, coverImage: "/books/rec-book-1.png" },
    ],
  },
];

export const bestSellers: Book[] = [
  { id: 27, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/book-cover-6.png" },
  { id: 28, title: "The Richest Man in Babylon", author: "George S. Clason", coverImage: "/books/book-cover-7.png" },
  { id: 29, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", coverImage: "/books/book-cover-8.png" },
  { id: 30, title: "Night Fiction", author: "James Patterson", coverImage: "/books/book-cover-9.png" },
  { id: 31, title: "Atomic Habits", author: "James Clear", coverImage: "/books/book-cover-3.png" },
  { id: 32, title: "The Midnight Library", author: "Matt Haig", coverImage: "/books/book-cover-2.png" },
];

export const speakWithAuthors: SpeakCard[] = [
  { id: 33, title: "The Psychology of Money", author: "by Morgan Housel", leftImage: "/books/speak-book-1a.png", rightImage: "/books/speak-book-1b.png" },
  { id: 34, title: "The Psychology of Money", author: "by Morgan Housel", leftImage: "/books/speak-book-2a.png", rightImage: "/books/speak-book-2b.png" },
  { id: 35, title: "The Psychology of Money", author: "by Morgan Housel", leftImage: "/books/speak-book-3a.png", rightImage: "/books/speak-book-3b.png" },
];

export const crimeFiction: Book[] = [
  { id: 36, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/crime-1.png" },
  { id: 37, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/crime-2.png" },
  { id: 38, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/crime-3.png" },
  { id: 39, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/crime-4.png" },
  { id: 40, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/crime-5.png" },
  { id: 41, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/crime-6.png" },
];

export const nonFiction: Book[] = [
  { id: 42, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/nonfic-1.png" },
  { id: 43, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/nonfic-2.png" },
  { id: 44, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/nonfic-3.png" },
  { id: 45, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/nonfic-4.png" },
  { id: 46, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/nonfic-5.png" },
  { id: 47, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/nonfic-6.png" },
];

export const famousAuthors: AuthorCard[] = [
  { id: 48, name: "J.K. Rowling", photo: "/books/author-jk.png" },
  { id: 49, name: "Chetan Bhagat", photo: "/books/author-chetan.png" },
  { id: 50, name: "J.K. Rowling", photo: "/books/author-jk.png" },
  { id: 51, name: "Arundhati Roy", photo: "/books/author-arundhati.png" },
  { id: 52, name: "Ashwin", photo: "/books/author-ashwin.png" },
  { id: 53, name: "J.K. Rowling", photo: "/books/author-jk.png" },
  { id: 54, name: "Chetan Bhagat", photo: "/books/author-chetan.png" },
];

export const academics: Book[] = [
  { id: 55, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/academics-1.png" },
  { id: 56, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/academics-2.png" },
  { id: 57, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/academics-3.png" },
  { id: 58, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/academics-4.png" },
  { id: 59, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/academics-5.png" },
  { id: 60, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/academics-6.png" },
];

export const business: Book[] = [
  { id: 61, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/business-1.png" },
  { id: 62, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/business-2.png" },
  { id: 63, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/business-3.png" },
  { id: 64, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/business-4.png" },
  { id: 65, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/business-5.png" },
  { id: 66, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/business-6.png" },
];

export const techBooks: Book[] = [
  { id: 67, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/tech-1.png" },
  { id: 68, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/tech-2.png" },
  { id: 69, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/tech-3.png" },
  { id: 70, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/tech-4.png" },
  { id: 71, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/tech-5.png" },
  { id: 72, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/tech-6.png" },
  { id: 441, title: "Clean Code", author: "Robert C. Martin", coverImage: "/books/tech-1.png" },
  { id: 442, title: "Pragmatic Programmer", author: "David Thomas", coverImage: "/books/tech-2.png" },
  { id: 443, title: "Design Patterns", author: "Erich Gamma", coverImage: "/books/tech-3.png" },
  { id: 444, title: "Refactoring", author: "Martin Fowler", coverImage: "/books/tech-4.png" },
];

export const classics: Book[] = [
  { id: 73, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/classics-1.png" },
  { id: 74, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/classics-2.png" },
  { id: 75, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/classics-3.png" },
  { id: 76, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/classics-4.png" },
  { id: 77, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/classics-5.png" },
  { id: 78, title: "The Psychology of Money", author: "Morgan Housel", coverImage: "/books/classics-6.png" },
];

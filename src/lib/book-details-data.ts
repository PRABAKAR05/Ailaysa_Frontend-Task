// I am Batman
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
} from "./browse-data";

export function getBookById(id: string) {
  // We'll search through all book arrays to find the matching ID.
  const allBooks = [
    ...newArrivals,
    ...bestSellers,
    ...crimeFiction,
    ...nonFiction,
    ...academics,
    ...business,
    ...techBooks,
    ...classics,
  ];

  const book = allBooks.find((b) => b.id.toString() === id);

  if (book) {
    return book;
  }

  // Fallback to a default book if not found
  return {
    id: 999,
    title: "Death before Breakfast",
    author: "Morgan Housel", // In Figma screenshot the recommended section says Morgan Housel
    coverImage: "/books/crime-1.png",
  };
}

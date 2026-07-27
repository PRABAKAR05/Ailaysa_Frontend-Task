// I am Batman
import { getBookById } from "@/lib/book-details-data";
import BookDetailClient from "./BookDetailClient";
import {
  newArrivals,
  recommendedBanners,
  bestSellers,
  crimeFiction,
  nonFiction,
  academics,
  business,
  techBooks,
  classics,
  speakWithAuthors,
  famousAuthors
} from "@/lib/browse-data";

export function generateStaticParams() {
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

  // Map each book ID to a static path
  return allBooks.map((book) => ({
    id: book.id.toString(),
  }));
}

import { EmptyState } from "@/components/ui/EmptyState";

export default function BookDetailsPage({ params }: { params: { id: string } }) {
  const book = getBookById(params.id);
  
  if (!book) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <EmptyState 
          title="Book not found" 
          description="We couldn't find the book you are looking for. It may have been removed or doesn't exist."
        />
      </div>
    );
  }

  return <BookDetailClient book={book} />;
}

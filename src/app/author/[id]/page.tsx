// I am Batman
import AuthorClient from "./AuthorClient";
import { famousAuthors } from "@/lib/browse-data";

export function generateStaticParams() {
  // Generate static params for at least the famous authors so the static export works
  return famousAuthors.map((author) => ({
    id: author.id.toString(),
  }));
}

export default function AuthorPage({ params }: { params: { id: string } }) {
  // Pass the ID or some mock author data to the client component
  return <AuthorClient authorId={params.id} />;
}

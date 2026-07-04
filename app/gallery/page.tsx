import { GalleryGrid } from "@/components/gallery-grid";

export default async function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-12 text-center text-4xl font-extrabold tracking-tight">
        Gallery
      </h1>
      <GalleryGrid />
    </div>
  );
}

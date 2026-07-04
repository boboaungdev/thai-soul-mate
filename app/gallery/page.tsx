import { GalleryGrid } from "@/components/gallery-grid";
import { Cta } from "@/components/cta";

export default async function GalleryPage() {
  return (
    <>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-center text-4xl font-extrabold tracking-tight">
          Gallery
        </h1>
        <p className="mb-12 text-center text-lg text-muted-foreground">
          Explore the profiles of our vibrant community. Your next connection could be just a click away.
        </p>
        <GalleryGrid />
      </div>
      <Cta />
    </>
  );
}

import { UserGallery } from "@/components/user-gallery"

export default function GalleryPage() {
  return (
    <main>
      <section className="py-12 md:py-24">
        <div className="mx-auto w-full max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
              User Gallery
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Browse profiles of our members and see who you might connect with.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { UserGallery } from "@/components/user-gallery"

export default function HomePage() {
  return (
    <main>
      <section className="flex h-[80vh] min-h-[500px] flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center bg-white p-6 md:h-auto md:w-1/3 md:p-10">
          <div className="relative h-[260px] w-full max-w-[320px]">
            <Image
              src="/logo-with-name.png"
              alt="Logo with name"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </div>
          <div className="mt-6 flex w-full max-w-[320px] flex-col gap-3 text-center">
            <Button className="w-full" size="lg">
              Register Interest
            </Button>
            <Button variant="outline" className="w-full" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative md:w-2/3">
          <Image
            src="/home-landing.png"
            fill
            unoptimized
            className="object-cover"
            alt="Landing photo"
            sizes="(min-width: 768px) 67vw, 100vw"
            quality={100}
          />
        </div>
      </section>

      <section id="gallery" className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mx-auto mb-8 inline-flex rounded-sm bg-primary px-6 py-3 text-center text-3xl font-bold text-primary-foreground">
            Featured Members
          </h2>
          <UserGallery />
        </div>
      </section>
    </main>
  )
}

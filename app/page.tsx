"use client"

import Image from "next/image"
import { UserGallery } from "@/components/user-gallery"
import { Faq } from "@/components/faq"

export default function HomePage() {
  return (
    <main>
      <section className="flex h-[80vh] min-h-[500px] flex-col md:flex-row">
        <div className="relative flex h-56 items-center justify-center bg-white p-6 md:h-auto md:w-1/3 md:p-10">
          <div className="relative h-full w-full max-w-[320px]">
            <Image
              src="/logo-with-name.png"
              alt="Logo with name"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
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
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Featured Members
          </h2>
          <UserGallery />
        </div>
      </section>

      <section id="faq" className="bg-muted/30 py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <Faq />
        </div>
      </section>
    </main>
  )
}

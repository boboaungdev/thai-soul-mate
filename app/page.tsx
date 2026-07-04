"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { UserGallery } from "@/components/user-gallery"

export default function HomePage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [birthday, setBirthday] = useState("")
  const [phone, setPhone] = useState("")
  const [location, setLocation] = useState("")
  const [citizen, setCitizen] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    setName("")
    setEmail("")
    setBirthday("")
    setPhone("")
    setLocation("")
    setCitizen("")
    setMessage("")
  }

  return (
    <main>
      <section className="flex h-[85vh] min-h-[540px] flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center bg-white p-6 md:h-auto md:w-2/5 md:p-12">
          <div className="relative h-[340px] w-full max-w-[380px]">
            <Image
              src="/logo-with-name.png"
              alt="Logo with name"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="mt-8 flex w-full max-w-[380px] flex-col gap-4 text-center">
            <Button asChild className="h-14 w-full text-lg" size="lg">
              <Link href="#register-interest">Register Interest</Link>
            </Button>
            <Button variant="outline" className="h-14 w-full text-lg" size="lg">
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

      <section id="register-interest" className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold tracking-[0.3em] text-[#a47b3b] uppercase">
              Register Your Interest
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-slate-100">
              Be the first to hear about new matches
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base dark:text-slate-300">
              Submit your details below and our team will reach out when we have
              a suitable match tailored to you.
            </p>
          </div>

          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2 text-left">
                <span className="text-sm font-semibold text-[#a47b3b]">
                  Name
                </span>
                <Input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="John Doe"
                  required
                />
              </label>
              <label className="space-y-2 text-left">
                <span className="text-sm font-semibold text-[#a47b3b]">
                  Email
                </span>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="john@example.com"
                  required
                />
              </label>
              <label className="space-y-2 text-left">
                <span className="text-sm font-semibold text-[#a47b3b]">
                  Birthday
                </span>
                <Input
                  type="text"
                  value={birthday}
                  onChange={(event) => setBirthday(event.target.value)}
                  placeholder="01/01/1990"
                  required
                />
              </label>
              <label className="space-y-2 text-left">
                <span className="text-sm font-semibold text-[#a47b3b]">
                  Phone
                </span>
                <Input
                  type="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="+66 123 456 789"
                  required
                />
              </label>
              <label className="space-y-2 text-left">
                <span className="text-sm font-semibold text-[#a47b3b]">
                  Current location
                </span>
                <Input
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="Bangkok, Thailand"
                  required
                />
              </label>
              <label className="space-y-2 text-left">
                <span className="text-sm font-semibold text-[#a47b3b]">
                  Citizen of
                </span>
                <Input
                  value={citizen}
                  onChange={(event) => setCitizen(event.target.value)}
                  placeholder="Thai"
                  required
                />
              </label>
            </div>
            <label className="space-y-2 text-left">
              <span className="text-sm font-semibold text-[#a47b3b]">
                Tell us about yourself
              </span>
              <Textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="I am a 50-year-old professional looking for a serious relationship..."
                rows={4}
                className="min-h-[160px] resize-none"
              />
            </label>
            <Button type="submit" size="lg" className="w-full">
              Submit Interest
            </Button>
            {submitted && (
              <p className="rounded-2xl border border-[#a47b3b] bg-[#fff4dc] px-4 py-3 text-sm text-[#5b3b1f]">
                Thank you! Your request has been recorded and we&apos;ll be in
                touch soon.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}

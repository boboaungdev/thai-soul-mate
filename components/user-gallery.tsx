"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface RandomUser {
  login: {
    uuid: string
  }
  name: {
    first: string
    last: string
  }
  dob: {
    age: number
  }
  location: {
    city: string
    country: string
  }
  picture: {
    large: string
  }
}

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export function UserGallery() {
  const [users, setUsers] = useState<RandomUser[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?results=20&gender=female&nat=us,gb,au,ca,nz,ie"
        )
        if (!response.ok) {
          throw new Error("Failed to fetch users")
        }
        const data = await response.json()
        setUsers(data.results)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (viewportRef.current) {
      const scrollAmount =
        direction === "left"
          ? -viewportRef.current.clientWidth
          : viewportRef.current.clientWidth
      viewportRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const getUserId = (uuid: string) => {
    let hash = 0
    for (const char of uuid) {
      if (char === "-") continue
      hash = (hash * 31 + char.charCodeAt(0)) % 9000
    }
    return String(hash + 1000).padStart(4, "0")
  }

  return (
    <div className="relative">
      <div className="absolute inset-y-0 -left-4 z-10 hidden items-center md:flex">
        {!isLoading && users.length > 0 && (
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-md"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="size-4" />
          </Button>
        )}
      </div>
      <ScrollArea className="w-full pb-4" viewportRef={viewportRef}>
        <div ref={scrollContainerRef} className="flex w-full gap-6">
          {isLoading
            ? Array.from({ length: 5 }).map((_, index) => (
                <Card
                  key={index}
                  className="relative h-[380px] w-[280px] shrink-0 overflow-hidden border-2 border-[#a47b3b] border-b-[#a67a34] border-r-[#a67a34]"
                >
                  <Skeleton className="size-full" />
                </Card>
              ))
            : users.map((user) => (
                <Link
                  href="/auth?mode=signup"
                  key={user.login.uuid}
                  className="block"
                >
                  <Card className="group relative h-[380px] w-[280px] shrink-0 overflow-hidden border-2 border-[#a47b3b] border-b-[#a67a34] border-r-[#a67a34]">
                    <Image
                      src={user.picture.large}
                      alt={`${user.name.first} ${user.name.last}`}
                      fill
                      sizes="280px"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                      <p className="text-lg font-semibold">
                        <span className="text-[#a47b3b]">ID {getUserId(user.login.uuid)}</span>
                        <span className="text-white">, </span>
                        <span className="text-[#d96088]">{user.dob.age}</span>
                      </p>
                      <p className="text-sm">
                        {user.location.city}, {user.location.country}
                      </p>
                    </div>
                  </Card>
                </Link>
              ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="absolute inset-y-0 right-0 z-10 hidden items-center md:flex">
        {!isLoading && users.length > 0 && (
          <Button
            variant="outline"
            size="icon"
            className="rounded-full shadow-md"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="size-4" />
          </Button>
        )}
      </div>
    </div>
  )
}

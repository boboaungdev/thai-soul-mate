"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react"
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

function isRandomUser(user: unknown): user is RandomUser {
  if (typeof user !== "object" || user === null) {
    return false
  }

  const potentialUser = user as Partial<RandomUser>

  return (
    typeof potentialUser.login?.uuid === "string" &&
    typeof potentialUser.picture?.large === "string" &&
    typeof potentialUser.name?.first === "string" &&
    typeof potentialUser.name?.last === "string" &&
    typeof potentialUser.dob?.age === "number" &&
    typeof potentialUser.location?.city === "string" &&
    typeof potentialUser.location?.country === "string"
  )
}

export function GalleryGrid() {
  const [users, setUsers] = useState<RandomUser[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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
        if (data.results && Array.isArray(data.results)) {
          const validUsers = data.results.filter(isRandomUser)
          setUsers(validUsers)
        } else {
          throw new Error("Invalid data format from API")
        }
      } catch (error: unknown) {
        console.error(error)
        if (error instanceof Error) {
          setError(error.message)
        } else {
          setError("An unknown error occurred")
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const getUserId = (uuid: string) => {
    let hash = 0
    for (const char of uuid) {
      if (char === "-") continue
      hash = (hash * 31 + char.charCodeAt(0)) % 9000
    }
    return String(hash + 1000).padStart(4, "0")
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {isLoading
        ? Array.from({ length: 12 }).map((_, index) => (
            <Card
              key={index}
              className="relative h-[380px] w-full overflow-hidden border-2 border-[#a47b3b] border-r-[#a67a34] border-b-[#a67a34]"
            >
              <Skeleton className="size-full" />
            </Card>
          ))
        : users.map((user) => (
            <Card
              key={user.login.uuid}
              className="group relative h-[380px] w-full overflow-hidden border-2 border-[#a47b3b] border-r-[#a67a34] border-b-[#a67a34]"
            >
              <Image
                src={user.picture.large}
                alt={`${user.name.first} ${user.name.last}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <p className="text-lg font-semibold">
                  <span className="text-[#a47b3b]">
                    ID {getUserId(user.login.uuid)}
                  </span>
                  <span className="text-white">, </span>
                  <span className="text-[#d96088]">{user.dob.age}</span>
                </p>
                <p className="text-sm">
                  {user.location.city}, {user.location.country}
                </p>
              </div>
            </Card>
          ))}
    </div>
  )
}

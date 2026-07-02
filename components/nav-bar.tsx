"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Menu, ArrowUpRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

import { APP_NAME, APP_TAGLINE } from "@/constants"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { cn } from "@/lib/utils"

const SITE_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "#" },
  { label: "Gallery", href: "#gallery" },
] as const

export function NavBar() {
  const pathname = usePathname()
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center gap-2 px-4 py-3 sm:px-6 md:min-h-18 md:gap-3 md:py-0 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <Image
            src="/logo.png"
            alt={`${APP_NAME} logo`}
            width={72}
            height={72}
            className="size-10 shrink-0 rounded-2xl bg-background object-cover shadow-sm sm:size-11"
            priority
          />
          <div className="flex min-w-0 flex-col items-start">
            <Image
              src="/logo-name.png"
              alt="Logo name"
              width={180}
              height={40}
              className="h-auto w-auto"
              priority
            />
            <div className="pl-1">
              <p className="truncate text-xs text-[#a47b3b]">{APP_TAGLINE}</p>
              <p className="truncate text-[11px] text-[#d96088]">
                Dating in Thailand
              </p>
            </div>
          </div>
        </Link>

        <nav className="ml-2 hidden flex-1 items-center justify-center gap-1 lg:flex">
          {SITE_NAV_LINKS.map((item) => {
            const active = pathname === item.href

            return (
              <Button
                key={item.href}
                asChild
                variant="ghost"
                size="sm"
                className={cn(
                  "rounded-md border px-2.5",
                  active
                    ? "border-[#ac3554] bg-[#d0a250] text-slate-950"
                    : "border-[#ac3554] bg-background text-foreground"
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </Button>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild className="rounded-md">
              <Link href="/auth?mode=signup">Login</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon-sm"
                  className="rounded-full"
                >
                  <Menu className="size-4" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="flex w-3/4 flex-col sm:max-w-sm"
              >
                <SheetHeader className="p-4 pb-2">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-2 px-4">
                  {SITE_NAV_LINKS.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <div
                        onClick={() => router.push(item.href)}
                        className="flex cursor-pointer items-center justify-between px-3 py-2.5"
                      >
                        <span>{item.label}</span>
                        <ArrowUpRight className="size-4 text-muted-foreground" />
                      </div>
                    </SheetClose>
                  ))}
                  <SheetClose asChild>
                    <div
                      onClick={() => router.push("/auth?mode=signup")}
                      className="flex cursor-pointer items-center justify-between rounded-md bg-primary px-3 py-2.5 text-primary-foreground"
                    >
                      <span>Login</span>
                      <ArrowUpRight className="size-4" />
                    </div>
                  </SheetClose>
                </div>
                <SheetClose asChild>
                  <Button variant="ghost" className="mt-auto p-4" size="sm">
                    Close Menu
                  </Button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

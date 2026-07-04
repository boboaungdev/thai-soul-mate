import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { APP_NAME } from "@/constants"
import { StyledAppName } from "./styled-app-name"

type PolicyContent = {
  heading: string
  text: string
}

type PolicyPageProps = {
  title: string
  content: PolicyContent[]
}

function AppNameReplacer({ text }: { text: string }) {
  if (!text.includes(APP_NAME)) {
    return text
  }

  const parts = text.split(APP_NAME)
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part.replace(/'/g, "&apos;")}
          {i < parts.length - 1 && <StyledAppName />}
        </span>
      ))}
    </>
  )
}

export function PolicyPage({ title, content }: PolicyPageProps) {
  return (
    <main className="min-h-svh bg-gradient-to-b from-muted/20 to-background">
      <section className="border-b border-border/70">
        <div className="mx-auto w-full max-w-4xl px-4 pt-8 pb-16 sm:px-6 sm:pt-12 sm:pb-20 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full px-1 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <ArrowLeft className="size-4" />
            <span>Back to</span> <StyledAppName />
          </Link>

          <header className="mt-8 sm:mt-12">
            <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </header>

          <div className="mt-12 lg:mt-16">
            <article className="min-w-0 rounded-2xl bg-card/78 px-5 py-2 shadow-sm backdrop-blur-sm sm:px-8 lg:px-10">
              <div className="py-8 sm:py-10">
                {content.map((section, index) => (
                  <section key={index} className="py-6">
                    <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {section.heading}
                    </h2>
                    <div className="mt-4 whitespace-pre-line text-muted-foreground">
                      <AppNameReplacer text={section.text} />
                    </div>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

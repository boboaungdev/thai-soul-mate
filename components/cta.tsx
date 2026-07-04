import Link from "next/link"
import { Button } from "@/components/ui/button"

type CtaProps = {
  title?: string
  description?: string
}

export function Cta({ title, description }: CtaProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto w-full max-w-4xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">
          {title || "Ready to Find Your Match?"}
        </h2>
        <p className="text-muted-foreground md:text-lg">
          {description ||
            "Join our community today and start your journey towards finding a meaningful connection."}
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/#register-interest">Register Interest</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="">Login</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

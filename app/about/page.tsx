import { APP_NAME } from "@/constants"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Target, Eye, Handshake } from "lucide-react"
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa"
import { Faq } from "@/components/faq"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="mb-12 space-y-12">
      <section className="bg-animated-gradient flex min-h-[300px] items-center justify-center py-12 md:py-24">
        <div className="mx-auto w-full max-w-7xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            About Us
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Welcome to {APP_NAME} – where connections are made and stories
            begin. We are dedicated to bringing people together in meaningful
            ways.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-4xl space-y-4 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Our Story</h2>
          <p className="text-muted-foreground md:text-lg">
            Founded in 2024, {APP_NAME} was born from a simple yet profound
            idea: to create a space where technology serves to deepen human
            connection, not replace it. In a world of fleeting interactions, we
            saw the need for a platform that prioritizes genuine compatibility
            and meaningful relationships. Our journey began with a small team of
            passionate developers and relationship experts dedicated to building
            a smarter, more heartfelt way to meet people. Today, we are proud to
            have helped countless individuals write the first chapter of their
            new story.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Target className="mb-2 h-6 w-6 text-blue-500" />
                <CardTitle className="text-center">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>
                      Create a vibrant and secure platform that fosters genuine
                      connections, empowering individuals to find companionship,
                      friendship, and love.
                    </li>
                    <li>
                      Provide an inclusive environment where everyone feels
                      valued and respected.
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-col items-center">
                <Eye className="mb-2 h-6 w-6 text-purple-500" />
                <CardTitle className="text-center">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>
                      We envision a world where technology enhances human
                      relationships, making it easier for people to connect
                      deeply and build lasting bonds.
                    </li>
                    <li>
                      We aim to be the leading platform for meaningful
                      interactions globally.
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-col items-center">
                <Handshake className="mb-2 h-6 w-6 text-green-500" />
                <CardTitle className="text-center">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>
                      Integrity: Upholding honesty and transparency in all our
                      interactions.
                    </li>
                    <li>
                      Empathy: Understanding and sharing the feelings of others.
                    </li>
                    <li>
                      Innovation: Continuously improving and adapting to user
                      needs.
                    </li>
                    <li>
                      Community: Building a supportive and engaging environment.
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-5xl space-y-12 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Meet the Team</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="group relative flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:scale-105">
              <Avatar className="h-24 w-24">
                <AvatarImage src="https://github.com/shadcn.png" alt="Sham" />
                <AvatarFallback>S</AvatarFallback>
              </Avatar>
              <CardHeader className="px-0">
                <CardTitle className="text-xl font-semibold">Sham</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Co-Founder & CEO
                </CardDescription>
              </CardHeader>
              <div className="absolute inset-0 flex items-center justify-center space-x-4 rounded-xl bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Link href="#">
                  <FaLinkedin className="h-6 w-6 text-white" />
                </Link>
                <Link href="#">
                  <FaTwitter className="h-6 w-6 text-white" />
                </Link>
                <Link href="#">
                  <FaGlobe className="h-6 w-6 text-white" />
                </Link>
              </div>
            </Card>
            <Card className="group relative flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:scale-105">
              <Avatar className="h-24 w-24">
                <AvatarImage
                  src="https://github.com/vercel.png"
                  alt="Jane Smith"
                />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <CardHeader className="px-0">
                <CardTitle className="text-xl font-semibold">
                  Jane Smith
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Head of Matchmaking
                </CardDescription>
              </CardHeader>
              <div className="absolute inset-0 flex items-center justify-center space-x-4 rounded-xl bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Link href="#">
                  <FaLinkedin className="h-6 w-6 text-white" />
                </Link>
                <Link href="#">
                  <FaTwitter className="h-6 w-6 text-white" />
                </Link>
              </div>
            </Card>
            <Card className="group relative flex flex-col items-center text-center shadow-lg transition-transform duration-300 hover:scale-105">
              <Avatar className="h-24 w-24">
                <AvatarImage src="https://github.com/next.png" alt="Bo Bo" />
                <AvatarFallback>Bo Bo</AvatarFallback>
              </Avatar>
              <CardHeader className="px-0">
                <CardTitle className="text-xl font-semibold">Bo Bo</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Lead Developer
                </CardDescription>
              </CardHeader>
              <div className="absolute inset-0 flex items-center justify-center space-x-4 rounded-xl bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Link href="#">
                  <FaLinkedin className="h-6 w-6 text-white" />
                </Link>
                <Link href="#">
                  <FaTwitter className="h-6 w-6 text-white" />
                </Link>
                <Link href="#">
                  <FaGlobe className="h-6 w-6 text-white" />
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="max_w-4xl mx-auto w-full space-y-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <Faq />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto w-full max-w-4xl space-y-6 px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to Find Your Match?
          </h2>
          <p className="text-muted-foreground md:text-lg">
            Join our community today and start your journey towards finding a
            meaningful connection. Signing up is easy and free.
          </p>
          <Button asChild size="lg">
            <Link href="/auth">Sign Up Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

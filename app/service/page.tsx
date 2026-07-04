import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicePage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Our Services</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Siam Soulmates takes a personalised approach to matchmaking. Carefully learning about your preferences, values and relationship goals. Every introduction is thoughtfully selected to ensure genuine compatibility and meaningful connection.
              </p>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Real People. Real Relationships. Personally Matched in Thailand.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">THE PROCESS</h2>
            <p className="mx-auto max_w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The member initially registers their interest in our service.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>The Process</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-left text-gray-700 dark:text-gray-300 space-y-2">
                  <li>The member initially registers their interest in our service.</li>
                  <li>The member can start / complete the application profile online or via a call with the matchmaker.</li>
                  <li>The matchmaker will call you to discuss your aims and goals, and to explain the service.</li>
                  <li>The matchmaker during this call will understand what kind of lady will fit your profile by completing your application form/profile.</li>
                  <li>After the meeting, the matchmaker will then review which ladies will the most suitable.</li>
                  <li>Profiles will be sent the member first for approval and then the members profile will be forwarded to the ladies.</li>
                  <li>The matchmaker will then follow up with both parties to discuss in more detail the potential compatibility.</li>
                  <li>When both parties agree, a video call is arranged, where the matchmaker will be present to provide any assistance when necessary.</li>
                  <li>After the video call, the matchmaker will then speak to both parties to understand if there was a connection.</li>
                  <li>If both parties agreed to move matters to the next stage, another video call can take place or WhatsApp numbers can be exchanged. If one party fails to connect, the matchmaker will source an alternative match.</li>
                  <li>The matchmaker will continue to watch and support the connection, assisting either party where necessary.</li>
                  <li>Follow ups will be done to check on the progress of the connection.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Thai Matchmaking structured fee service and payment terms for male and female members varies. Our friendly team can discuss with you in more detail once you have registered your interest.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  Beyond Dating Apps — Professional One-to-One Matchmaking
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300 font-semibold">
                  Ready to Find Your Match?
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Join our community today and start your journey towards finding a meaningful connection.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Connecting Hearts Across Thailand and Beyond.</h3>
          </div>
        </div>
      </section>
    </main>
  )
}

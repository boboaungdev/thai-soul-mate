import { Cta } from "@/components/cta"
import { StyledAppName } from "@/components/styled-app-name"

export default function ServicePage() {
  return (
    <main className="space-y-12 pb-12">
      <section className="pt-12 md:pt-24">
        <div className="mx-auto w-full max-w-[700px] space-y-4 px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-center text-4xl font-bold tracking-tighter md:text-5xl">
            Our Services
          </h1>
          <p className="mb-4 text-center text-muted-foreground md:text-xl">
            <StyledAppName /> takes a personalised approach to matchmaking.
            Carefully learning about your preferences, values and relationship
            goals. Every introduction is thoughtfully selected to ensure genuine
            compatibility and meaningful connection.
          </p>

          <p className="text-gold my-6 text-center font-bold md:text-xl">
            Real People. Real Relationships. Personally Matched in Thailand.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="mb-4 text-3xl font-semibold">THE PROCESS</h2>
            <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground md:text-lg">
              <li>
                The member initially registers they interest in our service.
              </li>
              <li>
                The member can start / complete the application profile online
                or via a call with the matchmaker.
              </li>
              <li>
                The matchmaker will call you to discuss your aims and goals, and
                to explain the service.
              </li>
              <li>
                The matchmaker during this call will understand what kind of
                lady will fit your profile by completing your application
                form/profile.
              </li>
              <li>
                After the meeting, the matchmaker will then review which ladies
                will the most suitable.
              </li>
              <li>
                Profiles will be sent the member first for approval and then the
                members profile will be forwarded to the ladies.
              </li>
              <li>
                The matchmaker will then follow up with both parties to discuss
                in more detail the potential compatibility.
              </li>
              <li>
                When both parties agree, a video call is arranged, where the
                matchmaker will be present to provide any assistance when
                necessary
              </li>
              <li>
                After the video call, the matchmaker will then speak to both
                parties to understand if there was a connection.
              </li>
              <li>
                If both parties agreed to move matters to the next stage,
                another video call can be taken place or WhatsApp numbers can be
                exchanged. If one party fails to connect, a new match will be
                sourced.
              </li>
              <li>
                The matchmaker will continue to watch and support the
                connection, assisting either party where necessary.
              </li>
              <li>
                Follow ups will be done to check on the progress of the
                connection.
              </li>
            </ul>
            <p className="text-gold mb-4 text-center font-semibold md:text-lg">
              Connecting Hearts Across Thailand and Beyond.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-3xl font-semibold">FEES</h2>
            <p className="mb-4 text-muted-foreground md:text-lg">
              <StyledAppName /> structured fee service and payment terms for
              male and female members varies. Our friendly team can discuss with
              you in more detail once you have registered your interest.
            </p>
            <h3 className="text-gold mb-4 text-center text-2xl font-semibold">
              Beyond Dating Apps — Professional One-to-One Matchmaking
            </h3>
          </div>
        </div>
      </section>

      <Cta />
    </main>
  )
}

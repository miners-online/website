import HeroSection from "@/components/hero-section"
import ServerStatus from "@/components/server-status"
import ModpackSection from "@/components/modpack-section"
import { ServerScheduleCard } from "@/components/server-schedule-card"

const serverSchedule = [
  { day: "Monday", active: true, startTime: "9:00 AM", endTime: "8:30 PM" },
  { day: "Tuesday", active: true, startTime: "9:00 AM", endTime: "8:30 PM" },
  { day: "Wednesday", active: true, startTime: "9:00 AM", endTime: "8:30 PM" },
  { day: "Thursday", active: true, startTime: "9:00 AM", endTime: "8:30 PM" },
  { day: "Friday", active: true, startTime: "9:00 AM", endTime: "8:30 PM" },
  { day: "Saturday", active: true, startTime: "12:00 PM", endTime: "8:30 PM" },
  { day: "Sunday", active: true, startTime: "12:00 PM", endTime: "8:30 PM" },
]


export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <ServerStatus />
        <ModpackSection
          modrinthUrl="https://modrinth.com/modpack/miners-online-cs3-pack/version/1.0.1"
          mrpackUrl="https://cdn.modrinth.com/data/5HDNFYqy/versions/LpK5jGN3/Miners%20Online%20%28Creative%20S3%29%201.0.1.mrpack"
        />
      </div>
      <ServerScheduleCard
        serverName="Miners Online Schedule"
        description="Weekly operating hours"
        schedule={serverSchedule}
        timezone="the UK"
        className="mt-12"
      />
    </main>
  )
}


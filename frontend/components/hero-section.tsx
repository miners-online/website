// import { Button } from "@/components/ui/button"

import { globals } from "@/lib/globals";

export default function HeroSection() {
  return (
    <section className="py-12 md:py-24 text-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to {globals.siteName}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {globals.siteDescription}
            </p>
          </div>
          {/* <div className="w-full max-w-sm space-y-2">
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Button className="bg-green-600 hover:bg-green-700">Join Server</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link";

export const runtime = 'edge';

export default function NotFound() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Page not found.</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            The page you are looking for does not exist or has been moved.
          </p>
          <p className="text-muted-foreground">
            Please check the URL or return to the <Link href="/">home page</Link>.
          </p>
        </CardContent>
      </Card>
    </main>
  )
}


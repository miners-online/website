import React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type CardData = {
  id: string | number
  title: string
  content: React.ReactNode
  footer?: React.ReactNode
}

type CardGridProps = {
  cards: CardData[]
  columns?: number
  gap?: number
}

export default function CardGrid({ cards, columns = 3, gap = 4 }: CardGridProps) {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns} gap-${gap}`}
    >
      {cards.map((card) => (
        <Card key={card.id} className="flex flex-col">
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">{card.content}</CardContent>
          {card.footer && <CardFooter>{card.footer}</CardFooter>}
        </Card>
      ))}
    </div>
  )
}
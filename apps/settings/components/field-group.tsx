import type React from "react"
interface FieldGroupProps {
  title: string
  children: React.ReactNode
}

export function FieldGroup({ title, children }: FieldGroupProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <div className="border border-gray-200 rounded-lg overflow-hidden">{children}</div>
    </div>
  )
}

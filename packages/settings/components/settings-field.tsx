"use client"

import type React from "react"

import { Button } from "@/components/ui/button"

interface SettingsFieldProps {
  label: React.ReactNode // Changed to React.ReactNode to allow for icons/complex labels
  value: React.ReactNode
  actionLabel: string
  onAction?: () => void
  isLast?: boolean
}

export function SettingsField({ label, value, actionLabel, onAction, isLast = false }: SettingsFieldProps) {
  return (
    <div
      className={`grid grid-cols-[90px_1fr_auto] items-center gap-x-24 p-4 bg-white ${!isLast ? "border-b border-gray-200" : ""}`}
    >
      {/* Label Column - Fixed width for consistent alignment */}
      {label}

      {/* Value Column (largest) */}
      <div className="flex items-center space-x-2">{value}</div>

      {/* Action Column */}
      <Button variant="link" className="text-blue-600 hover:text-blue-700 p-0" onClick={onAction}>
        {actionLabel}
      </Button>
    </div>
  )
}

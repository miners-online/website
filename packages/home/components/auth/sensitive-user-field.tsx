"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updateSensitiveField, getBasicInfo } from "@/lib/accountApi"
import { useHasValidVerification, useLatestVerificationId } from "./verification-context"
import { useToken } from "./token-context"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { VerificationUnlock } from "./verification-unlock"

export function SensitiveUserField({
  label,
  field,
  description = "",
}: {
  label: string
  field: "primaryEmail" | "primaryPhone"
  description?: string
}) {
  const { token } = useToken()
  if (!token) {
    return null; // Ensure token is available
  }

  const [value, setValue] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>("")
  const [saving, setSaving] = useState(false)

  // Get verification hooks
  const hasValidVerification = useHasValidVerification()
  const getLatestVerificationId = useLatestVerificationId()

  // Check if there's a valid verification available
  const isVerified = hasValidVerification()

  // Get the current verification ID to use for updates
  const currentVerificationId = getLatestVerificationId()

  useEffect(() => {
    let mounted = true

    async function fetchData() {
      if (!token) {
        setError("No valid token found. Please log in again.")
        return
      }
      try {
        const fetchedValue = await getBasicInfo(field, token)
        if (mounted) {
          setValue(fetchedValue.data || "")
          setLoading(false)
        }
      } catch (err) {
        if (mounted) {
          console.error("Failed to fetch basic info:", err)
          setError("Failed to load data")
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      mounted = false
    }
  }, [field, token])

  // Save the new value after verification
  async function handleSave() {
    if (!token) {
      setError("No valid token found. Please log in again.")
      return
    }
    try {
      setSaving(true)
      setError("")

      if (!currentVerificationId) {
        setError("No valid verification found. Please verify your account first.")
        return
      }

      const endpoint = field === "primaryEmail" ? "/api/my-account/email" : "/api/my-account/phone"
      await updateSensitiveField(endpoint, value, currentVerificationId, token)
    } catch (err) {
      console.error("Failed to update sensitive field:", err)
      setError("Failed to update")
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return <div className="text-sm text-muted-foreground">Loading...</div>
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700 my-4">
      <CardHeader>
        <Label htmlFor={field} className="text-white text-lg font-medium">
          {label}
        </Label>
        <p className="text-slate-300 text-sm">{description}</p>
      </CardHeader>
      <CardContent>
        <Input
          id={field}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={`Enter ${label.toLowerCase()}`}
          className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 focus:border-gray-600 focus:ring-gray-600"
          disabled={!isVerified}
        />
      </CardContent>
      <CardFooter>
        <p className="text-sm">{error}</p>
        <Button variant="secondary" className="bg-gray-700 hover:bg-gray-600 text-white border-gray-600 mr-4" onClick={handleSave} disabled={saving || !isVerified}>
          {saving ? "Saving..." : "Save"}
        </Button>
        <VerificationUnlock/>
      </CardFooter>
    </Card>
  )
}

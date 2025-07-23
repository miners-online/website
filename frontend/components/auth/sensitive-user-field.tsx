"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { updateSensitiveField, getBasicInfo } from "@/lib/accountApi"
import { useHasValidVerification, useLatestVerificationId } from "./verification-context"

export function SensitiveUserField({
  label,
  field,
  token,
}: {
  label: string
  field: "primaryEmail" | "primaryPhone"
  token: string
}) {
  const [value, setValue] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
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
    try {
      setSaving(true)
      setError("")

      if (!currentVerificationId) {
        setError("No valid verification found. Please verify your account first.")
        return
      }

      const endpoint = field === "primaryEmail" ? "/api/my-account/email" : "/api/my-account/phone"
      await updateSensitiveField(endpoint, value, currentVerificationId, token)
      setEditing(false)
    } catch (err) {
      console.error("Failed to update sensitive field:", err)
      setError("Failed to update")
    } finally {
      setSaving(false)
    }
  }

  function handleCancel() {
    setEditing(false)
    setError("")
  }

  if (loading) {
    return <div className="text-sm text-muted-foreground">Loading...</div>
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={field}>{label}</Label>

      {!editing ? (
        <div className="flex items-center gap-2">
          <span className="text-sm">{value || <span className="text-muted-foreground">(not set)</span>}</span>
          <Button variant="outline" size="sm" onClick={() => setEditing(true)} disabled={!isVerified}>
            Edit
          </Button>
        </div>
      ) : (
        <div className="space-y-3">
          <Input
            id={field}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={`Enter ${label.toLowerCase()}`}
          />

          <div className="flex gap-2">
            <Button size="sm" onClick={handleSave} disabled={saving}>
              {saving ? "Saving..." : "Save"}
            </Button>
            <Button variant="outline" size="sm" onClick={handleCancel} disabled={saving}>
              Cancel
            </Button>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>
      )}
    </div>
  )
}

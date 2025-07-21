"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { getBasicInfo, updateBasicInfo } from "@/lib/accountApi"

export function BasicUserField({
  label,
  field,
  token,
}: {
  label: string
  field: string
  token: string
}) {
  const [value, setValue] = useState<string>("")
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)
  const [error, setError] = useState<string>("")
  const [saving, setSaving] = useState(false)

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

  async function handleSave() {
    try {
      setSaving(true)
      setError("")
      await updateBasicInfo(field, value, token)
      setEditing(false)
    } catch {
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
          <Button variant="outline" size="sm" onClick={() => setEditing(true)}>
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

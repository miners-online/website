"use client"

import { useEffect, useState } from "react"
import { Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { requestVerificationCode, verifyCode, updateSensitiveField, getBasicInfo } from "@/lib/accountApi"

export function SensitiveUserField({
  label,
  field,
  token,
}: {
  label: string
  field: "primaryEmail" | "primaryPhone"
  token: string
}) {
  const [originalValue, setOriginalValue] = useState("")
  const [newValue, setNewValue] = useState("")
  const [loading, setLoading] = useState(true)
  const [isVerified, setIsVerified] = useState(false)
  const [error, setError] = useState("")
  const [showVerificationDialog, setShowVerificationDialog] = useState(false)
  const [verificationCode, setVerificationCode] = useState("")
  const [verificationRecordId, setVerificationRecordId] = useState("")
  const [verifying, setVerifying] = useState(false)
  const [saving, setSaving] = useState(false)

  // Start verification process when user wants to edit
  async function startVerification() {
    try {
      setError("")
      const res = await requestVerificationCode(field, originalValue, token)
      setVerificationRecordId(res.data.verificationRecordId)
      setShowVerificationDialog(true)
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Failed to request verification code")
    }
  }

  // Handle verification code submission
  async function handleVerification() {
    if (!verificationCode.trim()) {
      setError("Please enter the verification code")
      return
    }

    try {
      setVerifying(true)
      setError("")

      const {data, status} = await verifyCode(field, originalValue, verificationRecordId, verificationCode, token)

      if (status != 200) throw new Error("Code verification failed")

      // Verification successful - now user can edit
      setIsVerified(true)
      setNewValue(originalValue) // Initialize with current value
      setShowVerificationDialog(false)
      setVerificationCode("")
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Verification failed")
    } finally {
      setVerifying(false)
    }
  }

  // Save the new value after verification
  async function handleSave() {
    try {
      setSaving(true)
      setError("")

      const endpoint = field === "primaryEmail" ? "/api/my-account/email" : "/api/my-account/phone"
      await updateSensitiveField(endpoint, newValue, verificationRecordId, token)

      setOriginalValue(newValue)
      setIsVerified(false)
      setError("")
    } catch (err: any) {
      console.error(err)
      setError(err.message || "Failed to update")
    } finally {
      setSaving(false)
    }
  }

  function cancelEdit() {
    setIsVerified(false)
    setNewValue("")
    setError("")
  }

  function cancelVerification() {
    setShowVerificationDialog(false)
    setVerificationCode("")
    setError("")
  }

  useEffect(() => {
    let mounted = true

    async function fetchData() {
      try {
        const fetchedValue = await getBasicInfo(field, token)
        if (mounted) {
          setOriginalValue(fetchedValue.data || "")
          setLoading(false)
        }
      } catch (err) {
        if (mounted) {
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

  if (loading) {
    return <div className="text-sm text-muted-foreground">Loading...</div>
  }

  return (
    <div className="space-y-2">
      <Label htmlFor={field}>{label}</Label>

      {!isVerified ? (
        // View mode - show current value and verify button
        <div className="flex items-center gap-2">
          <span className="text-sm">{originalValue || <span className="text-muted-foreground">(not set)</span>}</span>
          <Button variant="outline" size="sm" onClick={startVerification}>
            <Lock className="h-4 w-4 mr-1" />
            Edit
          </Button>
        </div>
      ) : (
        // Edit mode - only accessible after verification
        <div className="space-y-3">
          <Input
            id={field}
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
            placeholder={field === "primaryEmail" ? "Enter email address" : "Enter phone number"}
          />

          <div className="flex gap-2">
            <Button size="sm" onClick={handleSave} disabled={saving || !newValue.trim()}>
              {saving ? "Saving..." : "Save"}
            </Button>
            <Button variant="outline" size="sm" onClick={cancelEdit} disabled={saving}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      {error && !showVerificationDialog && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Dialog open={showVerificationDialog} onOpenChange={setShowVerificationDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Verify Current {label}</DialogTitle>
            <DialogDescription>
              To edit this sensitive field, please verify your identity by entering the code sent to your current{" "}
              {field === "primaryEmail" ? "email" : "phone number"}: {originalValue}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="verification-code">Verification Code</Label>
              <Input
                id="verification-code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter verification code"
                autoFocus
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={cancelVerification} disabled={verifying}>
              Cancel
            </Button>
            <Button onClick={handleVerification} disabled={!verificationCode.trim() || verifying}>
              {verifying ? "Verifying..." : "Verify"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

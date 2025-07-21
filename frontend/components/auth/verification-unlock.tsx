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
import { getBasicInfo } from "@/lib/accountApi"
import { useRequestVerification, useVerifyCode, useHasValidVerification } from "./verification-context"

export function VerificationUnlock({
  token,
}: {
  token: string
}) {
  const [error, setError] = useState("")
  const [showVerificationDialog, setShowVerificationDialog] = useState(false)
  const [verificationCode, setVerificationCode] = useState("")
  const [verificationRecordId, setVerificationRecordId] = useState("")
  const [verifying, setVerifying] = useState(false)

  // Get verification hooks
  const requestVerification = useRequestVerification()
  const verifyVerification = useVerifyCode()
  const hasValidVerification = useHasValidVerification()

  // Check if there's a valid verification available
  const isVerified = hasValidVerification()

  // Start verification process when user wants to edit
  async function startVerification() {
    try {
      setError("")
      const fetchedValue = await getBasicInfo("primaryEmail", token)
      const verificationId = await requestVerification(fetchedValue.data || "", token)
      setVerificationRecordId(verificationId)
      setShowVerificationDialog(true)
    } catch (err) {
      console.error(err)
      setError(err as string)
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

      await verifyVerification(verificationRecordId, verificationCode, token)

      // Verification successful - now user can edit
      setShowVerificationDialog(false)
      setVerificationCode("")
    } catch (err) {
      console.error(err)
      setError(err as string)
    } finally {
      setVerifying(false)
    }
  }

  function cancelVerification() {
    setShowVerificationDialog(false)
    setVerificationCode("")
    setError("")
  }

  return (
    <div className="space-y-2">
      <Button variant="outline" size="sm" onClick={startVerification} disabled={isVerified}>
        <Lock className="h-4 w-4 mr-1" />
        Unlock
      </Button>

      {error && !showVerificationDialog && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Dialog open={showVerificationDialog} onOpenChange={setShowVerificationDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Access Verification</DialogTitle>
            <DialogDescription>
              To edit this sensitive field, please verify your identity by entering the code sent to your current email
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

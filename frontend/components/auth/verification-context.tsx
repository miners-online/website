"use client"

import { createContext, useContext, useCallback, useState, ReactNode } from "react"
import { requestVerificationCode, emailVerify } from "@/lib/accountApi"

// Types for verification state
export interface VerificationRecord {
  id: string
  value: string
  isVerified: boolean
  createdAt: Date
  expiresAt: Date
}

export interface VerificationContextValue {
  // Active verification records
  verifications: Map<string, VerificationRecord>
  
  // Request a new verification code
  requestVerification: (
    value: string,
    token: string
  ) => Promise<string> // returns verification record ID
  
  // Verify a code and mark verification as complete
  verifyVerification: (
    verificationId: string,
    code: string,
    token: string
  ) => Promise<boolean>
  
  // Get verification record by ID
  getVerification: (verificationId: string) => VerificationRecord | undefined
  
  // Check if there's any valid verification (can be used for any field)
  hasValidVerification: () => boolean
  
  // Get the most recent valid verification ID
  getLatestVerificationId: () => string | undefined
  
  // Clear expired or completed verifications
  clearVerification: (verificationId: string) => void
  
  // Clear all verifications
  clearAllVerifications: () => void
}

const VerificationContext = createContext<VerificationContextValue | undefined>(undefined)

export function VerificationProvider({ children }: { children: ReactNode }) {
  const [verifications, setVerifications] = useState<Map<string, VerificationRecord>>(new Map())

  const requestVerification = useCallback(async (
    value: string,
    token: string
  ): Promise<string> => {
    try {
      const res = await requestVerificationCode(value, token)
     
      if (res.status !== 201) {
        throw new Error("Failed to request verification code")
      }
      
      const verificationId = res.data.verificationRecordId
      const now = new Date()
      const expiresAt = new Date(now.getTime() + 10 * 60 * 1000) // 10 minutes from now
      
      const record: VerificationRecord = {
        id: verificationId,
        value,
        isVerified: false,
        createdAt: now,
        expiresAt
      }
      
      setVerifications(prev => new Map(prev).set(verificationId, record))
      
      return verificationId
    } catch (error) {
      console.error("Failed to request verification:", error)
      throw error
    }
  }, [])

  const verifyVerification = useCallback(async (
    verificationId: string,
    code: string,
    token: string
  ): Promise<boolean> => {
    const record = verifications.get(verificationId)
    if (!record) {
      throw new Error("Verification record not found")
    }

    // Check if verification has expired
    if (new Date() > record.expiresAt) {
      throw new Error("Verification code has expired")
    }

    try {
      const res = await emailVerify(record.value, verificationId, code, token)
     
      if (res.status !== 200) {
        throw new Error("Code verification failed")
      }
      
      // Mark verification as completed
      const updatedRecord: VerificationRecord = {
        ...record,
        isVerified: true
      }
      
      setVerifications(prev => new Map(prev).set(verificationId, updatedRecord))
      
      return true
    } catch (error) {
      console.error("Failed to verify code:", error)
      throw error
    }
  }, [verifications])

  const getVerification = useCallback((verificationId: string): VerificationRecord | undefined => {
    return verifications.get(verificationId)
  }, [verifications])

  const hasValidVerification = useCallback((): boolean => {
    const now = new Date()
    
    for (const record of verifications.values()) {
      if (record.isVerified && now <= record.expiresAt) {
        return true
      }
    }
    
    return false
  }, [verifications])

  const getLatestVerificationId = useCallback((): string | undefined => {
    const now = new Date()
    let latestRecord: VerificationRecord | undefined
    
    for (const record of verifications.values()) {
      if (record.isVerified && now <= record.expiresAt) {
        if (!latestRecord || record.createdAt > latestRecord.createdAt) {
          latestRecord = record
        }
      }
    }
    
    return latestRecord?.id
  }, [verifications])

  const clearVerification = useCallback((verificationId: string) => {
    setVerifications(prev => {
      const newMap = new Map(prev)
      newMap.delete(verificationId)
      return newMap
    })
  }, [])

  const clearAllVerifications = useCallback(() => {
    setVerifications(new Map())
  }, [])

  // Clean up expired verifications periodically
  const cleanupExpiredVerifications = useCallback(() => {
    const now = new Date()
    setVerifications(prev => {
      const newMap = new Map()
      for (const [id, record] of prev) {
        if (now <= record.expiresAt) {
          newMap.set(id, record)
        }
      }
      return newMap
    })
  }, [])

  // Run cleanup every minute
  useState(() => {
    const interval = setInterval(cleanupExpiredVerifications, 60000)
    return () => clearInterval(interval)
  })

  const value: VerificationContextValue = {
    verifications,
    requestVerification,
    verifyVerification,
    getVerification,
    hasValidVerification,
    getLatestVerificationId,
    clearVerification,
    clearAllVerifications
  }

  return (
    <VerificationContext.Provider value={value}>
      {children}
    </VerificationContext.Provider>
  )
}

// Hook to use the verification context
export function useVerification() {
  const context = useContext(VerificationContext)
  if (context === undefined) {
    throw new Error("useVerification must be used within a VerificationProvider")
  }
  return context
}

// Hook for requesting verification (convenience hook)
export function useRequestVerification() {
  const { requestVerification } = useVerification()
  return requestVerification
}

// Hook for verifying codes (convenience hook)
export function useVerifyCode() {
  const { verifyVerification } = useVerification()
  return verifyVerification
}

// Hook for checking if there's any valid verification (convenience hook)
export function useHasValidVerification() {
  const { hasValidVerification } = useVerification()
  return hasValidVerification
}

// Hook for getting the latest verification ID (convenience hook)
export function useLatestVerificationId() {
  const { getLatestVerificationId } = useVerification()
  return getLatestVerificationId
}

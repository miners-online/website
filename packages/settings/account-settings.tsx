"use client"

import { IdTokenClaims } from "@logto/next";

import { Mail, Phone } from "lucide-react"
import { SettingsSection } from "@/components/settings-section"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FieldGroup } from "@/components/field-group"
import { SettingsField } from "@/components/settings-field"
import { FieldEditProvider, useFieldEdit } from "./components/field-edit-dialog";

interface SettingsProps {
  claims: IdTokenClaims 
}

function AccountSettingsContent({ claims }: SettingsProps) {
  const { openDialog } = useFieldEdit();

  return (
    <FieldEditProvider>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-gray-900">Account settings</h1>
            <p className="text-gray-600">
              Change your account settings and manage your personal information here to ensure your account security.
            </p>
          </div>

          {/* Profile Settings */}
          <SettingsSection title="PROFILE SETTINGS">
            <FieldGroup title="Profile information">
              <SettingsField
                label={<span className="text-sm font-medium text-gray-700">Avatar</span>}
                value={
                  (claims.picture && claims.picture !== "") ?
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={claims.picture} alt="Profile avatar" />
                    <AvatarFallback className="bg-blue-500 text-white text-sm">?</AvatarFallback>
                  </Avatar>
                  :
                  <span className="text-sm text-gray-500">Not set</span>
                }
                actionLabel="Change"
                onAction={() => openDialog("avatar")}
              />

              <SettingsField
                label={<span className="text-sm font-medium text-gray-700">Name</span>}
                value={
                  (claims.name && claims.name !== "") ?
                  <span className="text-sm text-gray-900">
                    {claims.name}
                  </span>
                  :
                  <span className="text-sm text-gray-500">Not set</span>
                }
                actionLabel="Change"
                onAction={() => openDialog("name")}
              />

              <SettingsField
                label={<span className="text-sm font-medium text-gray-700">Username</span>}
                value={
                  (claims.username && claims.username !== "") ?
                  <span className="text-sm text-gray-900">
                    {claims.username}
                  </span>
                  :
                  <span className="text-sm text-gray-500">Not set</span>
                }
                actionLabel="Change"
                onAction={() => openDialog("username")}
                isLast
              />
            </FieldGroup>
          </SettingsSection>

          {/* Link Account */}
          <SettingsSection title="LINK ACCOUNT">
            <FieldGroup title="Email sign-in">
              <SettingsField
                label={<span className="text-sm font-medium text-gray-700">Email</span>}
                value={
                  (claims.email && claims.email !== "") ?
                  <>
                    <Mail className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-900">
                      {claims.email}
                    </span>
                    <span className={`text-sm ${claims.email_verified ? "text-green-600" : "text-orange-500"} text-gray-900`}>
                      {claims.email_verified ? "Verified" : "Not verified"}
                    </span>
                  </>
                  :
                  <span className="text-sm text-gray-500">Not set</span>
                }
                actionLabel="Change"
                onAction={() => openDialog("primaryEmail")}
                isLast
              />
            </FieldGroup>

            <FieldGroup title="Phone sign-in">
              <SettingsField
                label={<span className="text-sm font-medium text-gray-700">Phone</span>}
                value={
                  (claims.phone_number && claims.phone_number !== "") ?
                  <>
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-900">
                      {claims.phone_number}
                    </span>
                    <span className={`text-sm ${claims.phone_number_verified ? "text-green-600" : "text-orange-500"} text-gray-900`}>
                      {claims.phone_number_verified ? "Verified" : "Not verified"}
                    </span>
                  </>
                  :
                  <span className="text-sm text-gray-500">Not set</span>
                }
                actionLabel="Change"
                onAction={() => openDialog("primaryPhone")}
                isLast
              />
            </FieldGroup>

            <FieldGroup title="Social sign-in">
              <SettingsField
                label={
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-8 h-8" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-900">Google</span>
                  </div>
                }
                value={<span className="text-sm text-gray-500">Not set</span>}
                actionLabel="Link"
                onAction={() => console.log("Link Google")}
                isLast
              />
            </FieldGroup>
          </SettingsSection>

          {/* Password & Security */}
          <SettingsSection title="PASSWORD & SECURITY">
            <FieldGroup title="Password setting">
              <SettingsField
                label={<span className="text-sm font-medium text-gray-700">Password</span>}
                value={<span className="text-sm text-gray-900">********</span>}
                actionLabel="Change"
                onAction={() => console.log("Change password")}
                isLast
              />
            </FieldGroup>
          </SettingsSection>
        </div>
      </div>
    </FieldEditProvider>
  )
}

export default function Component({ claims }: SettingsProps) {
  return (
    <FieldEditProvider>
      <AccountSettingsContent claims={claims} />
    </FieldEditProvider>
  );
}
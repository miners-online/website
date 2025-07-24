import { BasicUserField } from "@/components/auth/basic-user-field";
import { SensitiveUserField } from "@/components/auth/sensitive-user-field";
import { TokenProvider } from "@/components/auth/token-context";
import { VerificationUnlock } from "@/components/auth/verification-unlock";
import Navbar from "@/components/navbar";
import { logtoConfig } from "@/lib/logto";
import { getAccessTokenRSC } from "@logto/next/server-actions";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const token = await getAccessTokenRSC(logtoConfig);

  if (!token) {
    return redirect("/api/logto/sign-in")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900">
      <Navbar/>
      <section id="community" className="py-6">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Settings</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <TokenProvider initialToken={token}>
              <BasicUserField
                label="Name"
                field="name"
                description="Please enter your full name, or a display name."
              />
              <SensitiveUserField
                label="Email"
                field="primaryEmail"
                description="Please enter your primary email address. This will be used for account notifications and recovery."
              />
              <SensitiveUserField
                label="Phone"
                field="primaryPhone"
                description="Please enter your primary phone number. This will be used for account notifications and recovery."
              />
            </TokenProvider>
          </div>
        </div>
      </section>
    </div>
  );
}
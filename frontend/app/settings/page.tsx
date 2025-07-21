import { BasicUserField } from "@/components/auth/basic-user-field";
import { SensitiveUserField } from "@/components/auth/sensitive-user-field";
import { VerificationUnlock } from "@/components/auth/verification-unlock";
import { logtoConfig } from "@/lib/logto";
import { getAccessTokenRSC } from "@logto/next/server-actions";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const token = await getAccessTokenRSC(logtoConfig);

  if (!token) {
    return redirect("/api/logto/sign-in")
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <section className="my-12 bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm">
        <div className="container max-w-3xl px-6">
          <h1>Settings</h1>
          <VerificationUnlock token={token} />
          <BasicUserField
            label="Name"
            field="name"
            token={token}
          />
          <SensitiveUserField
            label="Email"
            field="primaryEmail"
            token={token}
          />
          <SensitiveUserField
            label="Phone"
            field="primaryPhone"
            token={token}
          />
        </div>
      </section>
    </main>
  );
}
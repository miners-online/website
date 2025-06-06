import { BasicUserField } from "@/components/auth/basic-user-field";
import { SensitiveUserField } from "@/components/auth/sensitive-user-field";
import { logtoConfig } from "@/lib/logto";
import { getAccessTokenRSC } from "@logto/next/server-actions";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const token = await getAccessTokenRSC(logtoConfig);

  console.log("Access Token:", token);

  if (!token) {
    return redirect("/api/logto/sign-in")
  }

  return (
    <div>
      <h1>Settings</h1>
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
  );
}
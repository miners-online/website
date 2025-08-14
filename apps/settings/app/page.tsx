import { getLogtoContext } from '@logto/next/server-actions';
import { logtoConfig } from '@/lib/logto';
import { redirect } from 'next/navigation';

import Navbar from "@/components/navbar"
import AccountSettings from "../account-settings"

export default async function Page() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  if (!isAuthenticated || !claims) {
    redirect('/api/auth/sign-in');
  }

  return (
    <div>
      <Navbar/>
      <AccountSettings claims={claims} />
    </div>
  );
}

import { getLogtoContext } from '@logto/next/server-actions';
import { logtoConfig } from '@/lib/logto';
import { redirect } from 'next/navigation';

import Navbar from "@/components/navbar"
import AccountSettings from "../../account-settings"
import { HOME_URL } from '@/lib/config';

export default async function Page() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  if (!isAuthenticated || !claims) {
    redirect(`${HOME_URL}/api/logto/sign-in?next=${encodeURIComponent('/settings')}`);
  }

  return (
    <div>
      <Navbar/>
      <AccountSettings claims={claims} />
    </div>
  );
}

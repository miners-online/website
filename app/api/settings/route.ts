import { getLogtoContext } from '@logto/next/server-actions';
import { logtoConfig, logtoM2MConfig } from '@/lib/logto';
import { createManagementApi } from '@logto/api/management';
import { redirect } from 'next/navigation';

export async function GET() {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  if (!isAuthenticated || !claims) {
    redirect('/api/auth/sign-in');
  }

  const { apiClient, clientCredentials } = createManagementApi(process.env.LOGTO_M2M_TENANT_ID || "", logtoM2MConfig);

  // Use apiClient to make requests to the Management API
  const response = await apiClient.GET('/api/users');
  console.log(response.data);

  return new Response(JSON.stringify({ isAuthenticated, claims }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

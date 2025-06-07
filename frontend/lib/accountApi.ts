const LOGTO_ENDPOINT = process.env.NEXT_PUBLIC_LOGTO_ENDPOINT;

export async function fetchWithToken(url: string, options: RequestInit, token: string) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
}

// Basic user info update (non-sensitive fields)

export async function getBasicInfo(field: string, token: string) {
  const res = await fetchWithToken(`${LOGTO_ENDPOINT}/api/my-account`, {
    method: 'GET',
  }, token);
  const data = await res.json();
  return {
    data: data[field],
    status: res.status
  };

  // console.log(data)

  // return "";
}

export async function updateBasicInfo(field: string, value: string, token: string) {
  const body = { [field]: value };
  const res = await fetchWithToken(`${LOGTO_ENDPOINT}/api/my-account`, {
    method: 'PATCH',
    body: JSON.stringify(body),
  }, token);
  return {
    data: await res.json(),
    status: res.status
  };
}

// Verification flows for sensitive fields

export async function requestVerificationCode(type: 'primaryEmail' | 'primaryPhone', value: string, token: string) {
  const realType = type === 'primaryEmail' ? 'email' : 'phone';

  console.log(`Requesting verification code for ${realType}: ${value}`);

  const res = await fetchWithToken(`${LOGTO_ENDPOINT}/api/verifications/verification-code`, {
    method: 'POST',
    body: JSON.stringify({ identifier: { type: realType, value } }),
  }, token);
  return {
    data: await res.json(),
    status: res.status
  };
}

export async function verifyCode(type: 'primaryEmail' | 'primaryPhone', value: string, verificationId: string, code: string, token: string) {
  const realType = type === 'primaryEmail' ? 'email' : 'phone';

  const res = await fetchWithToken(`${LOGTO_ENDPOINT}/api/verifications/verification-code/verify`, {
    method: 'POST',
    body: JSON.stringify({
      identifier: { type: realType, value },
      verificationId,
      code,
    }),
  }, token);
  return {
    data: await res.json(),
    status: res.status
  };
}

export async function updateSensitiveField(
  endpoint: string,
  value: string,
  verificationRecordId: string,
  token: string
) {
  const res = await fetchWithToken(`${LOGTO_ENDPOINT}${endpoint}`, {
    method: 'PATCH',
    headers: { 'logto-verification-id': verificationRecordId },
    body: JSON.stringify({ [endpoint.includes('email') ? 'email' : 'phone']: value, newIdentifierVerificationRecordId: verificationRecordId }),
  }, token);
  return {
    data: await res.json(),
    status: res.status
  };
}

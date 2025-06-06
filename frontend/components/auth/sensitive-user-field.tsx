'use client';

import { useEffect, useState } from 'react';
import {
  requestVerificationCode,
  verifyCode,
  updateSensitiveField,
  getBasicInfo,
} from '@/lib/accountApi';

export function SensitiveUserField({
  label,
  field,
  token,
}: {
  label: string;
  field: 'primaryEmail' | 'primaryPhone';
  token: string;
}) {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState('');

  async function requestVerification() {
    try {
      const res = await requestVerificationCode(field, value, token);

      const code = prompt(`Enter the verification code sent to ${value}:`);
      if (!code) throw new Error('No code entered');

      const verificationRes = await verifyCode(field, value, res.verificationRecordId, code, token);
      if (!verificationRes) throw new Error('Code verification failed');

      const endpoint = field === 'primaryEmail' ? '/api/my-account/email' : '/api/my-account/phone';
      await updateSensitiveField(endpoint, value, res.verificationRecordId, token);

      setEditing(false);
      setError('');
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Verification or update failed');
    }
  }

  useEffect(() => {
    let mounted = true;

    async function fetchData() {
      try {
        const fetchedValue = await getBasicInfo(field, token);
        if (mounted) {
          setValue(fetchedValue || '');
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError('Failed to load data');
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      mounted = false;
    };
  }, [field, token]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <label>{label}</label>
      {!editing ? (
        <>
          <span>{value || '(not set)'}</span>
          <button onClick={() => setEditing(true)}>Edit</button>
        </>
      ) : (
        <>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={requestVerification}>Request & Verify</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      )}
    </div>
  );
}

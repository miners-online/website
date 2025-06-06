'use client';

import { useState, useEffect } from 'react';
import { getBasicInfo, updateBasicInfo } from '@/lib/accountApi';

export function BasicUserField({
  label,
  field,
  token,
}: {
  label: string;
  field: string;
  token: string;
}) {
  const [value, setValue] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState<string>('');

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

  async function handleSave() {
    try {
      await updateBasicInfo(field, value, token);
      setEditing(false);
      setError('');
    } catch {
      setError('Failed to update');
    }
  }

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
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      )}
    </div>
  );
}

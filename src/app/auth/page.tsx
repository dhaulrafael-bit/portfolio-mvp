'use client';

import { useState } from 'react';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="max-w-md space-y-3">
      <h1 className="text-xl font-semibold">Auth test</h1>
      <input
        className="w-full border p-2"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full border p-2"
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <p className="text-sm text-gray-600">
        If this page renders, the build is fixed. We’ll wire Supabase next.
      </p>
    </div>
  );
}

import React from 'react';

export function SuccessAlert({ children }: { children: React.ReactNode }) {
  return (
    <div role="status" className="mb-4 rounded-md bg-green-50 p-3 text-sm text-green-800">
      {children}
    </div>
  );
}

export function ErrorAlert({ children }: { children: React.ReactNode }) {
  return (
    <div role="alert" className="mb-4 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
      {children}
    </div>
  );
}

import React from 'react';

export function LoadingSpinner({ className = '', size = 36 }: { className?: string; size?: number }) {
  const style = { width: size, height: size } as React.CSSProperties;
  return (
    <div role="status" aria-live="polite" className={`inline-flex items-center justify-center ${className}`}>
      <svg style={style} className="animate-spin" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
    </div>
  );
}

export function EmptyState({ title, description }: { title: string; description?: string }) {
  return (
    <div role="status" className="text-center py-12">
      <div className="mb-4 text-4xl">—</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
    </div>
  );
}

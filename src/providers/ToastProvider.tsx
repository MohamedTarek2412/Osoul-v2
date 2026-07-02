import { useCallback, useState, type ReactNode } from 'react';
import { ToastContext } from './toast-context';

type ToastVariant = 'default' | 'success' | 'error';

interface Toast {
  id: string;
  message: string;
  variant: ToastVariant;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message: string, variant: ToastVariant = 'default') => {
      const id = crypto.randomUUID();
      setToasts((prev) => [...prev, { id, message, variant }]);
      setTimeout(() => dismissToast(id), 4000);
    },
    [dismissToast],
  );

  return (
    <ToastContext.Provider value={{ toasts, showToast, dismissToast }}>
      {children}
      <div
        className="fixed bottom-4 left-4 z-50 flex flex-col gap-2"
        aria-live="polite"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`rounded-lg px-4 py-3 text-sm shadow-lg transition-all ${
              toast.variant === 'success'
                ? 'bg-primary text-primary-foreground'
                : toast.variant === 'error'
                  ? 'bg-destructive text-destructive-foreground'
                  : 'bg-foreground text-background'
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}


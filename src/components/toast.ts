// utils/toast.ts
import { toast, type ExternalToast } from "sonner";

type ToastOptions = ExternalToast;

export const showToast = {
  success: (message: string, options?: ToastOptions) => {
    toast.success(message, {
      duration: 3000,
      ...options,
    });
  },

  error: (message: string, options?: ToastOptions) => {
    toast.error(message, {
      duration: 4000,
      ...options,
    });
  },

  info: (message: string, options?: ToastOptions) => {
    toast.info(message, {
      duration: 3000,
      ...options,
    });
  },

  warning: (message: string, options?: ToastOptions) => {
    toast.warning(message, {
      duration: 3000,
      ...options,
    });
  },

  loading: (message: string, options?: ToastOptions) => {
    return toast.loading(message, {
      ...options,
    });
  },

  promise: <T>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string | ((data: T) => string);
      error: string | ((error: unknown) => string);
    },
    options?: ToastOptions
  ) => {
    return toast.promise(promise, {
      ...messages,
      ...options,
    });
  },

  dismiss: (id?: string | number) => {
    toast.dismiss(id);
  },
};
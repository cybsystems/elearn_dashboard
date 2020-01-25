import { toast } from 'react-toastify';

export const showToast = (msg, options) => {
  toast(msg, { ...options });
};

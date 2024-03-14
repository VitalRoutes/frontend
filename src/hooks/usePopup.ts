import { ReactNode } from 'react';
import { popupStore } from '@/store/popupStore';

function usePopup() {
  const { setPopup } = popupStore();

  const openPopup = (popup: ReactNode) => {
    setPopup(popup);
  };

  const closePopup = () => {
    setPopup(null);
  };

  return { openPopup, closePopup };
}

export default usePopup;

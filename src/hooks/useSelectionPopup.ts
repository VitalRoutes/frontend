import { ReactNode } from 'react';
import { useSelectionPopupStore } from '@/store/selectionPopupStore';

function useSelectionPopup() {
  const { setSelectionPopup, setPosition } = useSelectionPopupStore();

  const openSelectionPopup = ({
    selectionPopup,
    x,
    y,
  }: {
    selectionPopup: ReactNode;
    x: number;
    y: number;
  }) => {
    setSelectionPopup(selectionPopup);
    setPosition({ x, y });
  };

  const closeSelectionPopup = () => {
    setSelectionPopup(null);
    setPosition({ x: 0, y: 0 });
  };

  return { openSelectionPopup, closeSelectionPopup };
}

export default useSelectionPopup;

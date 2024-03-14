import { ReactNode } from 'react';
import { create } from 'zustand';

interface PopupState {
  popup: ReactNode | null;
  setPopup: (popup: ReactNode) => void;
}

export const popupStore = create<PopupState>((set) => ({
  popup: null,
  setPopup: (popup) => set({ popup }),
}));

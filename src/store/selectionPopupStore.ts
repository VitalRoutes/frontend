import { ReactNode } from 'react';
import { create } from 'zustand';

type Position = { x: number; y: number };

interface SelectionPopupState {
  selectionPopup: ReactNode | null;
  position: Position;
  setSelectionPopup: (selectionPopup: ReactNode) => void;
  setPosition: (position: Position) => void;
}

export const useSelectionPopupStore = create<SelectionPopupState>((set) => ({
  selectionPopup: null,
  position: { x: 0, y: 0 },
  setSelectionPopup: (selectionPopup) => set({ selectionPopup }),
  setPosition: (position) => set({ position }),
}));

import { create } from 'zustand';

type Mode = 'modify' | 'view';

interface CommentModeStore {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const useCommentModeStore = create<CommentModeStore>((set) => ({
  mode: 'view',
  setMode: (mode) => set({ mode }),
}));

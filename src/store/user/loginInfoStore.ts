import { create } from 'zustand';
import { LoginResponse } from '@/types/user';

interface LoginState extends LoginResponse {
  isLogin: boolean;
  setLoginInfo: (data: LoginResponse) => void;
  setIsLogin: (isLogin: boolean) => void;
  setExpiredTime: (expiredTime: string) => void;
}

export const useLoginStore = create<LoginState>((set) => ({
  isLogin: false,

  memberId: null,
  profile: null,
  socialId: null,
  name: null,
  nickname: null,
  email: null,
  socialType: null,
  accessToken: null,
  refreshToken: null,
  expiredTime: null,

  setLoginInfo: (data: LoginResponse) => set({ ...data }),
  setIsLogin: (isLogin: boolean) => set({ isLogin }),
  setExpiredTime: (expiredTime: string) => set({ expiredTime }),
}));

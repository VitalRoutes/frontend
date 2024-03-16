import { create } from 'zustand';
import { SocialSignUp } from '@/types/user';

interface SocialLoginState extends SocialSignUp {
  setSocialLoginInfo: (data: Partial<SocialSignUp>) => void;
}

export const socialLoginTempStore = create<SocialLoginState>((set) => ({
  name: '',
  nickname: '',
  socialId: '',
  socialType: '',
  isChecked: false,

  setSocialLoginInfo: (data: Partial<SocialSignUp>) => set(data),
}));

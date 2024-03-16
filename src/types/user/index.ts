export interface ProfileUpdateForm {
  profileImage: File;
  name: string;
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface SignUpForm {
  name: string;
  nickname: string;
  email: string;
  password: string;
  username: string;
  isChecked: boolean;
}

export interface SocialSignUp {
  name: string;
  nickname: string;
  socialId: string;
  socialType: string;
  isChecked: boolean;
}

export interface SocialSignUpNickname {
  nickname: string;
}


export interface LoginResponse {
  memberId: number | null;
  profile: string | null;
  socialId: string | null;
  name: string | null;
  nickname: string | null;
  email: string | null;
  socialType: string | null;
  accessToken: string | null;
  refreshToken: string | null;
  expiredTime: string | null,
}

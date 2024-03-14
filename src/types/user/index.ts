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

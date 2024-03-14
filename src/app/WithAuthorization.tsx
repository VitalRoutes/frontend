import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useLoginStore } from '@/store/user/loginInfoStore';

interface Props {
  children: ReactNode;
}

function WithAuthorization({ children }: Props) {
  const { isLogin } = useLoginStore();

  if (!isLogin) return <Navigate to="/login" />;

  return children;
}

export default WithAuthorization;

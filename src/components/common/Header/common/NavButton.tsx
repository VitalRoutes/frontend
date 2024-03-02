import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  href: string;
  children: ReactNode;
}

function NavButton({ href, children }: Props) {
  return (
    <Link
      className="text-xl font-bold text-white hover:text-green-1 hover:underline"
      to={href}
    >
      {children}
    </Link>
  );
}

export default NavButton;

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

function NavButton({ className, href, children }: Props) {
  return (
    <Link
      className={twMerge(
        'text-xl font-bold text-white hover:text-green-1 xl:hover:underline',
        className,
      )}
      to={href}
    >
      {children}
    </Link>
  );
}

export default NavButton;

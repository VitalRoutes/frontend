import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariants =
  | 'primary'
  | 'secondary-a'
  | 'secondary-b'
  | 'third-a'
  | 'third-b'
  | 'third-c'
  | 'third-d';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  children: ReactNode;
}

const CLASSES = {
  primary:
    'w-full rounded-xl bg-gray-1 py-6 text-gray-50 hover:bg-green-1 hover:text-black disabled:bg-gray-2 disabled:text-gray-4',
  'secondary-a':
    'w-full rounded-full bg-gray-1 py-7 text-gray-50 hover:bg-green-1 hover:text-black disabled:bg-gray-2 disabled:text-gray-4',
  'secondary-b':
    'w-full rounded-full border  border-gray-5 bg-gray-11 py-7 text-gray-1 hover:bg-gray-1 hover:text-gray-11 disabled:bg-gray-2 disabled:text-gray-4 ',
  'third-a':
    'rounded-full bg-gray-6 px-9 py-5 text-gray-1 hover:bg-green-1 disabled:bg-gray-6 disabled:text-gray-3',
  'third-b':
    'rounded-full bg-gray-6 px-9 py-5 text-gray-1 hover:bg-gray-1 hover:text-green-1 disabled:bg-gray-6 disabled:text-gray-3',
  'third-c':
    'rounded-full bg-gray-1 text-gray-11 px-[1.6rem] py-5 hover:bg-green-1 hover:text-gray-1 disabled:bg-gray-2 disabled:text-gray-4',
  'third-d':
    'rounded-full bg-gray-5 text-gray-1 px-[1.6rem] py-5 hover:bg-green-1 disabled:bg-gray-5 disabled:text-gray-3',
};

function Button({
  variant = 'primary',
  children,
  type,
  className,
  disabled,
  onClick,
}: Props) {
  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className={`${CLASSES[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

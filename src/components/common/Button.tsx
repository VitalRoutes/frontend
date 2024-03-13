import { twMerge } from 'tailwind-merge';
import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariants =
  | 'primary'
  | 'secondary-a'
  | 'secondary-b'
  | 'third-a'
  | 'third-b'
  | 'third-c'
  | 'third-d'
  | 'third-e'
  | 'tab-a'
  | 'tag-a'
  | 'tag-b';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants;
  children: ReactNode;
}

export const BUTTONS_CLASSES = {
  primary:
    'w-full rounded-xl text-xl font-bold bg-gray-1 py-3 text-gray-11 hover:bg-green-1 hover:text-black disabled:bg-gray-2 disabled:text-gray-4',
  'secondary-a':
    'w-full rounded-full bg-gray-1 py-7 text-gray-11 hover:bg-green-1 hover:text-black disabled:bg-gray-2 disabled:text-gray-4',
  'secondary-b':
    'w-full rounded-full border  border-gray-5 bg-gray-11 py-7 text-gray-1 hover:bg-gray-1 hover:text-gray-11 disabled:bg-gray-2 disabled:text-gray-4 ',
  'third-a':
    'rounded-full shrink-0 font-bold bg-gray-6 px-4 py-2 xl:text-base text-sm xl:px-6 xl:py-4 text-gray-1 hover:bg-green-1 disabled:bg-gray-6 disabled:text-gray-3',
  'third-b':
    'rounded-full shrink-0 bg-gray-6 px-4 py-2 xl:text-base text-sm xl:px-6 xl:py-4 text-gray-1 hover:bg-gray-1 hover:text-green-1 disabled:bg-gray-6 disabled:text-gray-3',
  'third-c':
    'rounded-full shrink-0 font-bold bg-gray-1 px-4 py-2 xl:text-base text-sm text-gray-11  xl:px-6 xl:py-4 hover:bg-green-1 hover:text-gray-1 disabled:bg-gray-2 disabled:text-gray-4',
  'third-d':
    'rounded-full shrink-0 font-bold bg-gray-5 px-4 py-2 xl:text-base text-sm text-gray-1 xl:px-6 xl:py-4 hover:bg-green-1 disabled:bg-gray-5 disabled:text-gray-3',
  'third-e':
    'rounded-full shrink-0 font-bold bg-gray-1/30 px-4 py-2 xl:text-base text-sm text-gray-11  xl:px-6 xl:py-4 hover:bg-gray-1 disabled:bg-gray-2 disabled:text-gray-4',
  'tab-a':
    'rounded-full shrink-0 font-bold inline-flex py-[12px] px-[20px] justify-center items-center bg-gray-6 hover:bg-gray-1 hover:text-gray-5 disabled:bg-gray-5 disabled:text-gray-3 text-[14px] xl:text-[20px] xl:px-[24px] xl:py-[14px]',
  'tag-a':
    'rounded-full font-bold px-[12px] py-[12] inline-flex h-[40px] justify-center items-center shrink-0 bg-gray-6 hover:bg-green-1 disabled:bg-gray-5 disabled:text-gray-3 text-[14px]',
  'tag-b':
    'rounded-full font-bold px-[12px] py-[8px] inline-flex h-[40px] justify-center items-center shrink-0 bg-gray-6 hover:bg-gray-1 hover:text-green-1 disabled:bg-gray-5 disabled:text-gray-3 text-[14px]',
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
      className={twMerge(BUTTONS_CLASSES[variant], className)}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

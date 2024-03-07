import { NAVIGATION } from '@/constants/navigation';
import NavButton from './common/NavButton';

function HambergerNavigation() {
  return (
    <div className="fixed left-0 top-0 z-header flex h-screen w-screen items-center justify-center bg-gray-1 xl:hidden">
      <nav className="flex flex-col items-center gap-[16px]">
        {NAVIGATION.map(({ href, title }) => (
          <NavButton
            key={title}
            className="text-[32px] leading-[120%]"
            href={href}
          >
            {title}
          </NavButton>
        ))}
        <NavButton className="mt-[46px] text-base" href="/">
          LOGIN
        </NavButton>
      </nav>
    </div>
  );
}

export default HambergerNavigation;

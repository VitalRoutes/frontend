import useWindowSize from '@/hooks/useWindowSize';
import Button from '../Button';
import NavButton from './common/NavButton';

function Header() {
  const { width } = useWindowSize();
  const isDesktop = width ? width > 700 : false;

  return (
    <header className="fixed left-1/2 top-[30px] z-header flex h-[58px] w-[95%] -translate-x-1/2 items-center justify-between rounded-[12px] bg-gray-1/30 px-5 backdrop-blur sm:h-[106px] sm:rounded-[20px]">
      <img
        width={isDesktop ? 'auto' : 141}
        src="src/assets/images/main_logo_white.png"
        alt="logo"
      />
      {isDesktop ? (
        <>
          <nav className="flex gap-5">
            <NavButton href="/">CHALLENGE</NavButton>
            <NavButton href="/">REGISTER ROUTE</NavButton>
            <NavButton href="/">WELLNESS</NavButton>
            <NavButton href="/">PROFILE</NavButton>
          </nav>
          <Button variant="third-a">Login</Button>
        </>
      ) : (
        <Button variant="third-a">Menu</Button>
      )}
    </header>
  );
}

export default Header;

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useWindowSize from '@/hooks/useWindowSize';
import { MOBILE_BOUND_WIDTH } from '@/constants/responsive';
import { NAVIGATION } from '@/constants/navigation';
import Button from '../Button';
import HambergerNavigation from './HambergerNavigation';
import NavButton from './common/NavButton';

function Header() {
  const { width } = useWindowSize();
  const [hambergerNavigationVisible, setHambergerNavigationVisible] =
    useState(false);
  const isDesktop = width ? width > MOBILE_BOUND_WIDTH : false;

  const location = useLocation();
  useEffect(() => {
    setHambergerNavigationVisible(false);
  }, [location]);

  return (
    <>
      {hambergerNavigationVisible && <HambergerNavigation />}
      <header className="fixed left-1/2 top-[30px] z-header flex h-[58px] w-[95%] -translate-x-1/2 items-center justify-between rounded-[12px] bg-gray-1/30 px-5 backdrop-blur xl:h-[106px] xl:rounded-[20px]">
        <Link to="/">
          <img
            width={isDesktop ? 'auto' : 141}
            src="src/assets/images/main_logo_white.png"
            alt="logo"
          />
        </Link>
        {isDesktop ? (
          <>
            <nav className="flex gap-5">
              {NAVIGATION.map(({ href, title }) => (
                <NavButton href={href}>{title}</NavButton>
              ))}
            </nav>
            <Button variant="third-a">Login</Button>
          </>
        ) : (
          <Button
            variant="third-a"
            onClick={() => setHambergerNavigationVisible((cur) => !cur)}
          >
            Menu
          </Button>
        )}
      </header>
    </>
  );
}

export default Header;

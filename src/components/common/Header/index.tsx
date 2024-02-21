import Button from '../Button';
import NavButton from './common/NavButton';

function Header() {
  return (
    <header className="fixed left-1/2 top-[30px] z-header flex h-[106px] w-[95%] -translate-x-1/2 items-center justify-between rounded-[20px] bg-gray-1/30 px-5 backdrop-blur">
      <img src="src/assets/images/main_logo_white.png" alt="logo" />
      <nav className="flex gap-5">
        <NavButton href="/">CHALLENGE</NavButton>
        <NavButton href="/">REGISTER ROUTE</NavButton>
        <NavButton href="/">WELLNESS</NavButton>
        <NavButton href="/">PROFILE</NavButton>
      </nav>
      <Button variant="third-a"> Login</Button>
    </header>
  );
}

export default Header;

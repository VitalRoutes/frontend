import { UpArrow, VrLine } from '@/components/icons';
import Button from '../Button';

function Footer() {
  const SPAN_CLASS = 'text-gray-1 text-sm hover:cursor-pointer hover:underline';
  return (
    <footer className="bg-gray-6 px-[360px] pb-16 pt-8">
      <div>
        <div className="mx-auto mb-5 flex items-center justify-between gap-[40.5px]">
          <img src="src/assets/images/main_logo_black.png" alt="logo" />
          <div className="flex items-center gap-4">
            <span className={SPAN_CLASS}>서비스 이용약관</span>
            <VrLine className="fill-gray-1" />
            <span className={SPAN_CLASS}>개인정보 처리방침</span>
            <VrLine className="fill-gray-1" />
            <span className={SPAN_CLASS}>위치기반 서비스</span>
          </div>
          <Button
            variant="third-e"
            className="flex h-10 w-10 items-center justify-center p-0"
          >
            <UpArrow />
          </Button>
        </div>
        <div className="text-sm text-gray-1">
          Copyright © 2024 VitalRouts Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;

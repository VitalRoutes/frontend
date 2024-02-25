import { useNavigate } from 'react-router-dom';
import Button from '@/components/common/Button';
import { RightArrowIcon } from '@/components/icons';

interface Props {
  title: string;
  subTitle: string;
  href: string;
  className?: string;
}

function SectionTitle({ title, subTitle, href, className }: Props) {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <h3 className="text-center text-sm font-bold uppercase leading-[150%] text-gray-4 sm:text-lg">
        {subTitle}
      </h3>
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-center text-xl font-bold leading-[140%] sm:text-[42px]">
          {title}
        </h1>
        <Button
          variant="third-d"
          className="flex h-[48px] w-[48px] items-center justify-center p-0"
          onClick={() => navigate(href)}
        >
          <RightArrowIcon />
        </Button>
      </div>
    </div>
  );
}

export default SectionTitle;

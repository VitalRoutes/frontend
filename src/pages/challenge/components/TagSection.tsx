import { twMerge } from 'tailwind-merge';
import Button from '@/components/common/Button';

interface Props {
  className?: string;
}

function TagSection({ className }: Props) {
  return (
    <div className={twMerge('mx-[21px] flex gap-[8px]', className)}>
      <Button variant="tag-a">신규</Button>
      <Button variant="tag-a">인기순</Button>
      <Button variant="tag-a">추천순</Button>
      <Button variant="tag-a">도보</Button>
      <Button variant="tag-a">자전거</Button>
    </div>
  );
}

export default TagSection;

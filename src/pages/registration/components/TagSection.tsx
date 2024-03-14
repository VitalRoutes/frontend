import Button from '@/components/common/Button';

function TagSection() {
  // const ACTIVE_COLOR = 'bg-green-1';
  const TAGS = ['평화로운', '활기찬'];

  return (
    <div>
      <div className="leadin-[150%] mb-[32px] font-bold">
        이동 방법을 선택해주세요.
      </div>
      <div className="flex gap-0">
        <div className="flex gap-1">
          {TAGS.map((tag) => (
            <Button key={tag} variant="tag-a">
              {tag}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TagSection;

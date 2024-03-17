import Button from '@/components/common/Button';

function TagSection() {
  const TMP_DATA = [
    '평화로운',
    '활기찬',
    '식물 관찰',
    '가족 친화적',
    '촬영하기 좋은',
    '임시 태그 데이터입니다.',
  ];
  return (
    <section className="flex w-full flex-col gap-[32px]">
      <h1 className="text-2xl font-semibold leading-[150%]">산책길 태그</h1>
      <div className="flex flex-wrap gap-2">
        {TMP_DATA.map((tag) => (
          <Button key={tag} variant="tag-a">
            {tag}
          </Button>
        ))}
      </div>
    </section>
  );
}

export default TagSection;

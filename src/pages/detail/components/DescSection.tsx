import useChallengeDetail from '@/hooks/challenge/useChallengeDetail';

function DescSection() {
  const { data } = useChallengeDetail();

  return (
    <section className="w-full">
      <div>{data?.challengeContents}</div>
    </section>
  );
}

export default DescSection;

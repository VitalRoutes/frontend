import { useParams } from 'react-router-dom';
import useChallengeDetail from '@/hooks/challenge/useChallengeDetail';

function DescSection() {
  const { id } = useParams<{ id: string }>();
  const { data } = useChallengeDetail(id || '0');

  return (
    <section className="w-full">
      <div>{data?.challengeContents}</div>
    </section>
  );
}

export default DescSection;

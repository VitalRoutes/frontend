import { twMerge } from 'tailwind-merge';
import { useParams } from 'react-router-dom';
import Comment from './Commet';
import SpotSlide from './SpotSlide';
import MoreButton from '@/components/units/MoreButton';
import useComment from '@/hooks/challenge/useComment';

interface Props {
  className?: string;
}

function CommentSection({ className }: Props) {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useComment(id || '0');

  if (isLoading || !data) return <>loading</>;
  console.log(data);

  return (
    <section
      className={twMerge(
        'flex w-full flex-col items-center gap-[62px]',
        className,
      )}
    >
      {data.comments.map(
        ({
          memberProfile,
          nickname,
          content,
          participationImages,
          timeString,
        }) => {
          const images = participationImages.map(({ fileName }) => fileName);
          return (
            <div
              key={`${nickname}${timeString}`}
              className="flex w-full flex-col gap-[42px]"
            >
              <Comment
                profileImgSrc={memberProfile}
                nickname={nickname}
                content={content}
                date={timeString}
              />
              <SpotSlide images={images} />
            </div>
          );
        },
      )}
      <MoreButton />
    </section>
  );
}

export default CommentSection;

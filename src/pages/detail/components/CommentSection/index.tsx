import { twMerge } from 'tailwind-merge';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Comment from './Comment';
import SpotSlide from './SpotSlide';
import useComment from '@/hooks/challenge/useComment';
import { Comment as CommentType } from '@/types/challenge';
import MoreButton from '@/components/units/MoreButton';

interface Props {
  className?: string;
}

function CommentSection({ className }: Props) {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, fetchNextPage, hasNextPage } = useComment(id || '0');
  const { ref, inView } = useInView();

  useEffect(() => {
    if (hasNextPage && inView) fetchNextPage();
  }, [inView, hasNextPage]);

  if (isLoading || !data) return <>loading</>;

  const allPages = data.pages.flat();
  const allComments = allPages.map((page) => page?.data.comments).flat();
  const filterdComments = allComments.filter(
    (comment): comment is CommentType['comments'][0] => comment !== undefined,
  );

  return (
    <section
      className={twMerge(
        'flex w-full flex-col items-center gap-[62px]',
        className,
      )}
    >
      {filterdComments.map(
        ({
          participationId,
          memberProfile,
          nickname,
          participationImages,
          content,
          timeString,
        }) => {
          const images = participationImages.map(({ fileName }) => fileName);
          return (
            <div
              key={participationId}
              className="flex w-full flex-col gap-[42px]"
            >
              <Comment
                id={participationId}
                profileImgSrc={memberProfile}
                nickname={nickname}
                content={content}
                date={timeString}
              />
              <SpotSlide images={images} />
              <MoreButton title="대댓글 보기" />
            </div>
          );
        },
      )}

      {hasNextPage && (
        <div ref={ref} className="flex w-full flex-col gap-[42px]">
          <Comment.Skeleton />
          <SpotSlide.Skeleton />
          <Comment.Skeleton />
          <SpotSlide.Skeleton />
        </div>
      )}
    </section>
  );
}

export default CommentSection;

import { useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { BUTTONS_CLASSES } from '@/components/common/Button';
import { ChallengeRegisterationForm } from '@/types/posts';

function TagSection() {
  const ACTIVE_COLOR = 'bg-green-1';
  const TAGS = [
    '평화로운',
    '활기찬',
    '독특한',
    '야생동물 관찰',
    '식물 관찰',
    '가족 친화적',
    '피트니스',
    '명상적인',
    '액티비티',
    '도시적인',
    '자연 속으로',
    '해변가',
    '역사적인',
    '테마 경로',
    '촬영하기 좋은',
  ];
  const { register, watch } = useFormContext<ChallengeRegisterationForm>();

  return (
    <div>
      <div className="leadin-[150%] mb-[32px] font-bold">
        방문하신 곳의 분위기와 경험은 어떠셨나요? (다중선택 가능)
      </div>
      <div className="flex gap-0">
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag, idx) => {
            const watchedTag = watch('tags');

            const selectedTag = watchedTag && watchedTag[idx];

            return (
              <label
                key={tag}
                htmlFor={tag}
                className={twMerge(
                  BUTTONS_CLASSES['tag-a'],
                  'cursor-pointer',
                  selectedTag === tag && ACTIVE_COLOR,
                )}
              >
                {tag}
                <input
                  id={tag}
                  {...register(`tags.${idx}`)}
                  value={tag}
                  type="checkbox"
                  hidden
                />
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TagSection;

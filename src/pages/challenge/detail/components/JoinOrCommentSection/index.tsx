import CommentEditor from './CommentEditor';
import JoinButton from './JoinButton';

function JoinOrCommentSection() {
  const isLogin = true; // 임시 값

  return (
    <section className="flex w-full flex-col gap-[56px] ">
      <button className="self-end text-gray-3 hover:underline " type="button">
        게시글 신고하기
      </button>
      {isLogin ? <CommentEditor /> : <JoinButton />}
    </section>
  );
}

export default JoinOrCommentSection;

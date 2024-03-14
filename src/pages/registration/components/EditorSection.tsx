import Input from '@/components/common/Input';
import Textarea from '@/components/common/Textarea';

function EditorSection() {
  return (
    <>
      <Input
        label="제목을 입력해주세요."
        placeholder="제목은 24자 이내로 작성해주세요."
      />
      <Textarea
        label="게시글에 등록할 글을 적어주세요."
        placeholder="게시글 내용을 2000자 이내로 작성해주세요."
      />
    </>
  );
}

export default EditorSection;

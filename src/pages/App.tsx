import Input from '@/components/common/Input';

function App() {
  return (
    <div>
      Vital Routes
      <Input
        errorMessage="error!"
        placeholder="제목은 24자 이내로 작성해주세요."
        label="제목을 입력해주세요."
        disabled
      />
      <Input
        errorMessage="error!"
        placeholder="제목은 24자 이내로 작성해주세요."
        label="제목을 입력해주세요."
        onResetClick={() => console.log('x 버튼 클릭되었습니다.')}
      />
      <Input
        placeholder="제목은 24자 이내로 작성해주세요."
        label="제목을 입력해주세요."
      />
    </div>
  );
}

export default App;

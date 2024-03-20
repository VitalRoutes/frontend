const REGEXP = {
  password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/,
  nickname: /[0-9|a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\-|_|]*/,
};

export default REGEXP;

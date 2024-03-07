export interface CommentWriteRequest {
  boardId: string;
  content: string;
  files: File[];
}

export interface ChallengeRegistrationResponse {
  boardId: number;
  memberId: number;
  content: string;
  files: File[];
}

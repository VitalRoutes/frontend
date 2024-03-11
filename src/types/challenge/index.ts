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

export interface ChallengeRegistrationRequest {
  challengeWriter: string;
  challengeTitle: string;
  challengeContents: string;
  challengeTransportation: 0 | 1;
  titleImage: File | null;
  startingPositionImage: File | null;
  destinationImage: File | null;
  stopOverImage1: File | null;
  stopOverImage2: File | null;
  stopOverImage3: File | null;
}

export interface ChallengeDetail {
  challengeContents: string;
  challengeTitle: string;
  challengeTransportation: string;
  challengeWriter: string;
  destinationImage: string;
  startingPositionImage: string;
  stopOverImage1: string;
  stopOverImage2: string;
  stopOverImage3: string;
  titleImage: string;
}

export interface Comment {
  comments: [
    {
      participationId: number;
      memberProfile: string;
      nickname: string;
      content: string;
      timeString: string;
      totalImages: number;
      participationImages: { sequence: number; fileName: string }[];
      totalComments: number;
    },
  ];
  remainFlag: boolean;
  totalCount: number;
}

export interface Challenge {
  boardParty: number;
  challengeTitle: string;
  storedTitleImageName: string;
}

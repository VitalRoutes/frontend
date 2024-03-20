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
  challengeTitle: string;
  challengeContents: string;
  challengeTransportation: '0' | '1';
  titleImage: File;
  startingPositionImage: File;
  destinationImage: File;
  stopOverImage1: File | null;
  stopOverImage2: File | null;
  stopOverImage3: File | null;
  tags: string[];
}

export interface ChallengeDetail {
  challengeContents: string;
  challengeTitle: string;
  challengeTransportation: string;
  challengeWriter: string;
  storedDestinationImageName: string;
  storedStartingPositionImageName: string;
  storedStopOverImage1Name: string;
  storedStopOverImage2Name: string;
  storedStopOverImage3Name: string;
  storedTitleImageName: string;
  titleImage: string;
  boardHits: number;
  existingMode: number;
  totalComments: number;
  startingPosLat: number;
  startingPosLon: number;
  destinationLat: number;
  destinationLon: number;
  stopOver1Lat: number;
  stopOver1Lon: number;
  stopOver2Lat: number;
  stopOver2Lon: number;
  stopOver3Lat: number;
  stopOver3Lon: number;
  tags: string[];
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
  boardId: number;
  boardParty: number;
  challengeTitle: string;
  storedTitleImageName: string;
}

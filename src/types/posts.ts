export type SpotKey = 'spot1' | 'spot2' | 'spot3' | 'spot4' | 'spot5';
export interface CommentForm {
  spot1: FileList;
  spot2: FileList;
  spot3: FileList;
  spot4: FileList;
  spot5: FileList;
  comment: string;
}

interface Spot {
  files: FileList | undefined;
  lat: number;
  lng: number;
}

export interface ChallengeRegisterationForm {
  title: string;
  writer: string;
  contents: string;
  transportation: '0' | '1';
  titleImage: FileList;
  spots: Array<Spot | undefined>;
  tag: boolean[];
}

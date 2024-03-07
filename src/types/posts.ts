export type SpotKey = 'spot1' | 'spot2' | 'spot3' | 'spot4' | 'spot5';
export interface CommentForm {
  spot1: FileList;
  spot2: FileList;
  spot3: FileList;
  spot4: FileList;
  spot5: FileList;
  comment: string;
}

export interface INote {
  id: string;
  title: string;
  comments: IComment[];
}

export interface IComment {
  id: string;
  title: string;
}

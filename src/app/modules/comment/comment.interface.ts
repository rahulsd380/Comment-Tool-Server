export type TMessage = {
  userName: string;
  text: string;
  createdAt: Date;
};

export type TComment = {
  projectId: string;
  pageUrl: string;
  selector?: string;
  position: {
    x: number;
    y: number;
  };
  messages: TMessage[];
  status: "open" | "resolved";
  createdAt?: Date;
  updatedAt?: Date;
};
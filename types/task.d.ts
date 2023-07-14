export interface IInitial {}

export interface ITask {
  id?: string;
  title: string;
  comment: string;
  createAt?: string;
  completeAt?: string;
}

export interface IIsDone {
  id: number;
  taskId: string;
}

export interface IInit {
  singleTask: ITask | null;
  tasks: ITask[];
  theme: string;
  isDone: IIsDone[];
}

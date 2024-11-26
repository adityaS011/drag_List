export type STATUS = 'Not Started' | 'In Progress' | 'Completed';

export type ListType = {
  id: string;
  title: string;
  status: STATUS;
  description: string;
};

export const mockListData: ListType[] = [];

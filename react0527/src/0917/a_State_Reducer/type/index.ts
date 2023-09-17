// 별도의 타입 모듈을 지정

export type Contact = {
  id: number;
  name: string;
  email: string;
}

export type Action = |
  { type: 'changed_selection'; contactId: number } |
  { type: 'edited_message'; message: string } |
  { type: 'sent_message'};

export type DispatchType = React.Dispatch<Action>;
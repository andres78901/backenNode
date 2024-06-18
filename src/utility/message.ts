import { MessageRess } from "../interface/messageRess";
const getMessage = (ok: boolean, status: number, message: any): MessageRess => {
  return {
    ok,
    status,
    message,
  };
};

export { getMessage };

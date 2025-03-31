import { Status } from "./api";

export interface SendMessageRequest {
  message: string;
}

export interface SendMessageResponse {
  status: Status;
  data: {
    message: string;
  };
}

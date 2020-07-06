export interface APIResponse<T = any> {
  status: number;
  success: boolean;
  error: string,
  data: T
}

export interface SocketIOResponse<T = any> extends APIResponse<T> {
  ok: boolean;
}

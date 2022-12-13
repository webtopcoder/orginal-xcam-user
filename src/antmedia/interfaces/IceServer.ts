export interface IceServer {
  urls: string;
  username: string;
  credential: string;
}

export type IceConnectionState =
  | 'disconnected'
  | 'connected'
  | 'checking'
  | 'failed';

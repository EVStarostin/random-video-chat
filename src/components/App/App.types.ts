export enum EWebRTCTypes {
  NEW_ICE_CANDIDATE = '[webrtc]: new_ice_candidate',
  VIDEO_OFFER = '[webrtc]: video_offer',
  VIDEO_ANSWER = '[webrtc]: video_answer',
}

export enum EClientTypes {
  READY = '[client]: ready',
  NOT_READY = '[client]: not_ready',
  CONNECTED = '[client]: connected',
  NOT_CONNECTED = '[client]: not_connected',
}

export enum EServerTypes {
  INFO = '[server]: info',
  CALL = '[server]: call',
  HANG_UP = '[server]: hang_up',
}

export interface ISendData<T = any> {
  type: EWebRTCTypes | EClientTypes | EServerTypes;
  payload?: T;
}

export interface ISocketHandlers {
  onMessage: (event: MessageEvent) => void;
  onOpen: (event: Event) => void;
}

export interface IPeerConnectionHandlers {
  onnegotiationneeded: () => void;
  onicecandidate: (event: RTCPeerConnectionIceEvent) => void;
  ontrack: (event: RTCTrackEvent) => void;
}
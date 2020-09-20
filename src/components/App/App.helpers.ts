import { ICE_SERVERS } from "./App.const";
import { EWebRTCTypes, IPeerConnectionHandlers, ISendData } from "./App.types";

export async function turnCameraOn(videoElement: HTMLVideoElement) {
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
    videoElement.srcObject = stream;
    return Promise.resolve();
  } catch(error) {
    return Promise.reject(error);
  }
}

export async function initRTC(
  videoElement: HTMLVideoElement,
  peerConnectionHandlers: IPeerConnectionHandlers,
) {
  const { srcObject } = videoElement;
  const peerConnection = createPeerConnection(peerConnectionHandlers);

  if (!isMediaStream(srcObject)) return;

  try {
    await srcObject.getTracks().forEach(track => peerConnection.addTrack(track, srcObject));
    return Promise.resolve(peerConnection);
  } catch (error) {
    return Promise.reject(error);
  }
}

export function handleNewICECandidateMsg(candidateInit: RTCIceCandidateInit, peerConnection: RTCPeerConnection) {
  try {
    peerConnection.addIceCandidate(new RTCIceCandidate(candidateInit));
  } catch (error) {
    console.error(error);
  }
}

export async function handleVideoOfferMsg(
  videoElement: HTMLVideoElement,
  socket: WebSocket,
  sdp: RTCSessionDescriptionInit,
  peerConnectionHandlers: IPeerConnectionHandlers,
) {
  const { srcObject } = videoElement;
  if (!isMediaStream(srcObject)) return;
  
  try {
    const peerConnection = createPeerConnection(peerConnectionHandlers);
    const desc = new RTCSessionDescription(sdp);
    await peerConnection.setRemoteDescription(desc);
    srcObject.getTracks().forEach(track => peerConnection.addTrack(track, srcObject));
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    socket.send(JSON.stringify({ type: EWebRTCTypes.VIDEO_ANSWER, payload: peerConnection.localDescription }));
    return Promise.resolve(peerConnection);
  } catch (error) {
    return Promise.reject(error);
  }
}

export function handleVideoAnswerMsg(peerConnection: RTCPeerConnection, sdp: RTCSessionDescriptionInit) {
  const desc = new RTCSessionDescription(sdp);

  peerConnection.setRemoteDescription(desc);
}

export function isMediaStream(srcObject: MediaStream | MediaSource | Blob | null): srcObject is MediaStream {
  return (srcObject as MediaStream).getTracks !== undefined;
}

export function sendToWSS(socket: WebSocket | null, json: ISendData) {
  socket?.send(JSON.stringify(json));
}

function createPeerConnection(peerConnectionHandlers: IPeerConnectionHandlers) {
  const peerConnection = new RTCPeerConnection({ iceServers: ICE_SERVERS });

  Object.assign(peerConnection, peerConnectionHandlers);
  return peerConnection;
}
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  handleNewICECandidateMsg,
  handleVideoAnswerMsg,
  handleVideoOfferMsg,
  initRTC,
  turnCameraOn,
  sendToWSS,
} from './App.helpers';
import { useSocket } from './App.hooks';
import { EClientTypes, EServerTypes, EWebRTCTypes, ISendData } from './App.types';
import './App.scss';

function App() {
  const [isJoinedToWSS, setIsJoinedToWSS] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [info, setInfo] = useState('Подключение к серверу ...');
  const videoRef = useRef<HTMLVideoElement>(null);
  const receivedVideoRef = useRef<HTMLVideoElement>(null);
  const socketRef = useRef<WebSocket | null>(null);
  const peerConnectionRef = useRef<RTCPeerConnection | null>(null);

  useEffect(() => {
    turnCameraOn(videoRef.current!)
      .then(() => { setIsCameraOn(true) })
      .catch(() => { setIsCameraOn(false) })
  }, []);

  const closePeerConnection = useCallback(() => {
    peerConnectionRef.current?.close();
    peerConnectionRef.current = null;
    receivedVideoRef.current!.srcObject = null;
  }, []);

  const onnegotiationneeded = useCallback(() => {
    peerConnectionRef.current?.createOffer()
      .then(offer => peerConnectionRef.current?.setLocalDescription(offer))
      .then(() => {
        sendToWSS(socketRef.current, {
          type: EWebRTCTypes.VIDEO_OFFER,
          payload: peerConnectionRef.current?.localDescription,
        });
      })
  }, []);

  const onicecandidate = useCallback((event: RTCPeerConnectionIceEvent) => {
    if (event.candidate) {
      sendToWSS(socketRef.current, {
        type: EWebRTCTypes.NEW_ICE_CANDIDATE,
        payload: event.candidate
      });
    }
  }, []);

  const ontrack = useCallback((event: RTCTrackEvent) => {
    receivedVideoRef.current!.srcObject = event.streams[0];
    sendToWSS(socketRef.current, { type: EClientTypes.CONNECTED });
    setIsConnected(true);
  }, []);

  const peerConnectionHandlers = useMemo(() => (
    { onnegotiationneeded, onicecandidate, ontrack }
  ), [onicecandidate, onnegotiationneeded, ontrack]);

  const onMessage = useCallback((event: MessageEvent) => {
    const parsedData: ISendData = JSON.parse(event.data);
    console.log(parsedData);

    switch (parsedData.type) {
      case EServerTypes.INFO:
        setInfo(`Пользователей: ${parsedData.payload.users} (в ожидании: ${parsedData.payload.readyUsers}, на связи: ${parsedData.payload.connectedUsers})`);
        break;

      case EServerTypes.CALL:
        initRTC(videoRef.current!, peerConnectionHandlers)
          .then(pc => peerConnectionRef.current = pc ? pc : null);
        break;

      case EServerTypes.HANG_UP:
        closePeerConnection();
        setIsConnected(false);
        break;

      case EWebRTCTypes.VIDEO_OFFER:
        handleVideoOfferMsg(videoRef.current!, socketRef.current!, parsedData.payload, peerConnectionHandlers)
          .then(pc => peerConnectionRef.current = pc ? pc : null);
        break;

      case EWebRTCTypes.VIDEO_ANSWER:
        handleVideoAnswerMsg(peerConnectionRef.current!, parsedData.payload);
        break;

      case EWebRTCTypes.NEW_ICE_CANDIDATE:
        handleNewICECandidateMsg(parsedData.payload, peerConnectionRef.current!);
        break;
    }
  }, [closePeerConnection, peerConnectionHandlers]);

  const onOpen = useCallback((event: Event) => {
    setIsJoinedToWSS(true);
  }, []);

  const socketHandlers = useMemo(() => ({ onMessage, onOpen }), [onMessage, onOpen]);
  socketRef.current = useSocket(socketHandlers)[0];

  const handleReadyClick = useCallback(() => {
    if (isReady) {
      sendToWSS(socketRef.current, { type: EClientTypes.NOT_READY });
      setIsReady(false);
    } else {
      sendToWSS(socketRef.current, { type: EClientTypes.READY });
      setIsReady(true);
    }
  }, [isReady]);

  const handleNextClick = useCallback(() => {
    closePeerConnection();
    sendToWSS(socketRef.current, { type: EClientTypes.NOT_CONNECTED });
    setIsConnected(false);
  }, [closePeerConnection]);

  return (
    <div className="app">
      <div className="app__column">
        <div className="video">
          <div className="video__info">{info}</div>

          <video className="video__player" muted autoPlay playsInline ref={videoRef}>
            Видео не поддерживается браузером
          </video>
        </div>
      </div>

      <div className="app__column">
        <div className="video">
          <video className="video__player" autoPlay playsInline ref={receivedVideoRef}>
            Видео не поддерживается браузером
          </video>

          {!isReady && isJoinedToWSS && (
            <button className="video__ready" onClick={handleReadyClick}>
              <div className="video__ready-text">Начать</div>
            </button>
          )}

          {isConnected && (
            <button className="video__next" onClick={handleNextClick}>Следующий</button>
          )}

          {isReady && !isConnected && (
            <span className="video__spinner"></span>
          )}
        </div>
      </div>

      {!isCameraOn && (
        <h1 className="app__warning">Необходимо дать доступ к камере чтобы участвовать</h1>
      )}
    </div>
  )
}

export default App;

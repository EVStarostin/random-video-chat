export const ICE_SERVERS = [
  {
    urls: 'stun:evstar.ru:3478',
    username: '_',
    credential: '_',
  },
  {
    urls: 'turn:evstar.ru:3478',
    username: '_',
    credential: '_',
  },
]

export const WEB_SOCKET_SERVER = process.env.NODE_ENV === 'development' ? 'ws://localhost:7000' : 'wss://evstar.ru:7000';

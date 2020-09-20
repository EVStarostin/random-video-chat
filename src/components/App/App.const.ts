export const ICE_SERVERS = [
  {
    urls: 'stun:evstar.ru:3478',
    username: 'evstarostin',
    credential: 'jck30011989',
  },
  {
    urls: 'turn:evstar.ru:3478',
    username: 'evstarostin',
    credential: 'jck30011989',
  },
]

export const WEB_SOCKET_SERVER = process.env.NODE_ENV === 'development' ? 'ws://localhost:7000' : 'wss://evstar.ru:7000';
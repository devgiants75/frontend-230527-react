interface Connection {
  connect: () => void;
  disconnect: () => void;
}

export function CreateConnection(): Connection {
  // 실제 서버에 연결하기 위한 가상 함수
  return {
    connect() {
      console.log('⭕ Connecting');
    },
    disconnect() {
      console.log('❌ Disconnected');
    }
  };
}
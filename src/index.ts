import Peer, { DataConnection } from 'peerjs'

function CreatePeer(id: string){
  const peer = new Peer()

  peer.on('connection', (connection: DataConnection) => {
    connection.on('data', data => {
      console.log(data)
    })
  })

  const connector = peer.connect(id)
  connector.on('open', () => {
    console.log(open)
  })
}

export default CreatePeer

// todo list
// 数据传递
// 多媒体输出
// 断开连接
// 获取错误重试机制
// 心跳机制

// config = {
//   peerid,
//   retry,
//   retryTime,
//   Media,
//   data,
//   steam,
//   long
// }

// Peer.on(key, eventKey, callback)
// Peer.mediaOn() {
//   callObject
// }
// Peer.off
// Peer.call(key, stream) {
//   return peerObject
// }
// Peer.connect()
// Peer.disConnect()
// Peer.ping(id/ip)

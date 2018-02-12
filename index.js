import Express from 'express'
import Http from 'http'
import SocketIO from 'socket.io'

const app = Express()
const server = Http.Server(app)
const io = SocketIO(server)

io.on('connection', socket => socket.on('LOG', msg => console.log(msg)))

server.listen(1000, err => err? console.log(err):console.log('Logging Server is ready at PORT 1000'))
import DotENV from 'dotenv'
import Express from 'express'
import Http from 'http'
import IP from 'ip'
import SocketIO from 'socket.io'

DotENV.config()

const app = Express()
const server = Http.Server(app)
const io = SocketIO(server)
const IPAddress = IP.address()
const PORT = process.env.LOGGING_PORT

io.on('connection', socket => socket.on('log', msg => console.log(msg)))

server.listen(PORT, err => err? console.log(err):console.log(`Logging Server is ready at ${IPAddress}:${PORT}`))

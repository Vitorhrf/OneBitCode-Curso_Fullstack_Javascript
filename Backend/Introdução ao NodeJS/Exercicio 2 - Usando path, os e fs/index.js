const os = require("node:os")
const path = require("node:path")
const fs = require("node:fs")

const dir = path.resolve(__dirname, "./log")
const logFile = path.resolve(dir, "log.txt")
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)
}
let logList = ""

function watchSys() {
    setInterval(() => { 
        let log = `Sistema operacional: ${os.version()}
Arquitetura do sistema: ${os.arch()}
Modelo do processador: ${os.cpus()[0].model}
Tempo de atividade do sistema: ${(os.uptime()/60 / 60).toFixed(1)} horas
Uso de memória: ${((1 - os.freemem() / os.totalmem()) * 100).toFixed(1)}%
`
        logList += log + "\n"
        console.clear()
        console.log(log)
        fs.writeFileSync(logFile, logList)
    }, 1000)
}

watchSys()


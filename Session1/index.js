const { time } = require("console");
const http = require("http")


const PORT = 8082;

const server = http.createServer((request, response) => {
    console.log("Server is Created");
    const date =  new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()
    const serverinfo = {
        name : "Mohammed Faizan Ghani",
        version : 5.0,
        date,
        time
    }
    response.writeHead(200,{"Content-type" : "application/json"})
    response.write(JSON.stringify(serverinfo))
    response.end()
})

server.listen(PORT,()=>{
    console.log("Server is now listening on", PORT);
    
})
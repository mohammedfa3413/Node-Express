const { time } = require("console");
const currencies = require("./Currencies.json")
const http = require("http")


const PORT = 8082;

const server = http.createServer((request, response) => {

    const {url} = request;
    const splitUrl = url.split("/");
    // console.log(splitUrl);
    if(request.url === "/"){
        response.writeHead(200,{"content-type" : "text/html"});
        response.write("<h1>Currency Database<h1>")
    }else if(splitUrl[1] === "currencies"){
        if(splitUrl[2]){
            const symbol = splitUrl[2];
            const symbolData = currencies.data.find(c => c.id === symbol.toUpperCase());
            if(symbolData){
                response.writeHead(200,{"content-type" : "application/json"});
                response.write(JSON.stringify(symbolData));
            }else{
                response.writeHead(404);
            }
        }else{
            response.writeHead(200,{"content-type" : "application/json"});
            response.write(JSON.stringify(currencies))
        }
    }else{
        response.writeHead(404)
    }

     response.end();
})

server.listen(PORT,()=>{
    console.log("Server is now listening on", PORT);
    
})
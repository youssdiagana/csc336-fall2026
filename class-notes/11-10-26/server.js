import http from "http";
import fs from "fs";

function requestReceived(req, res) {
    console.log("Request Received");

    if (req.url == "/") {
        // load index.html from public
        // send the data as a response
        let fileData = fs.readFileSync("./public/index.html");
        let responseConfig = {
        "Content-Type": "text/html"
        }
        res.writeHead(200, responseConfig);
        res.end(fileData);
    }


    let responseConfig = {
        "Content-Type": "text/plain"
    }
    res.writeHead(200, responseConfig);
    res.end("This is a message from the server");
}


let server = http.createServer(requestReceived);

server.listen(3000);
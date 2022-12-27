const http = require("http");
const fs = require("fs");

const currDir = __dirname;
http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == "/Employees")
        res.write("List of employees with us....");
    else if (req.url == "/Client") {
        fs.createReadStream(`${currDir}/Client.html`).pipe(res);
        return;//exit the loop
    } else
        res.write("Hello from web server....!");
    res.end();
}).listen(1111);

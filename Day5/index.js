//require("./math");
//const { add, multiply } = require("./math");
import chalk from "chalk";

//const math = require("./math");
//const { add, multiply } = math;

let name = "Ahmed";
console.log(chalk.red("Hello, " + name + "! Welcome to Day 5 of Node.js"));
//console.log("Addition of 5 and 3:", add(56151, 455));
//console.log("Multiplication of 5 and 3:", typeof(multiply(5, 1515153)));
import os from "os";
import fs from "fs";    

/*console.log("Operating System Info:", os.platform(), os.release());
console.log("CPU Cores:", os.cpus().length);
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());*/

/*fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log("File content:", data);
});*/


/*try {
  const data = fs.readFileSync('hello.txt', 'utf8');
  console.log(chalk.green("File content:", data));
} catch (err) {
  console.error(chalk.blue("Error reading file:", err));
}*/


import http from "http";
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
  console.log(chalk.green("Request received"));
})
server.listen(3000, () => {
  console.log(chalk.yellow('Server running at http://localhost:3000/'));
});
server.on('error', (err) => {
  console.error(chalk.blue("Server error:", err));
});


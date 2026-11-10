// console.log("hello from Node!!")
// for (let i = 0; i < 100; i++) {
//     console.log(i**2)
// }

import fs from "fs";

let fileData = fs.readFileSync("./data/testData.txt", "utf8");

console.log(fileData);




const { writeFileSync, write } = require("fs");
for (let index = 0; index < 1000; index++) {
  writeFileSync("./content/big.txt", `Hello World ${index}\n`, { flag: "a" });
}

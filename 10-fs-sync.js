const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const firstContent = readFileSync("./content/first.txt", "utf-8");
const secondContent = readFileSync("./content/second.txt", "utf-8");

console.log(firstContent, secondContent);
writeFileSync(
  "./content/result-sync.txt",
  `Interesting flow: ${firstContent}, ${secondContent}`,
  { movie: "legend of the seeker" }
);
console.log("Done with this task");
console.log("Starting the next one");

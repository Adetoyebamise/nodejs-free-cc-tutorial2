const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
    const firstContent = result;

    readFile("./content/second.txt", "utf-8", (error, result) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result);
      }
      const secondContent = result;
      writeFile(
        "./content/result-async.txt",
        `Interesting flow: ${firstContent}, ${secondContent}`,
        (error, result) => {
          if (error) {
            console.log(error);
          } else {
            console.log(result);
            console.log("Done with this task");
          }
        }
      );
    });
  }
});
console.log("Starting next tasks");

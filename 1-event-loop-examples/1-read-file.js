const { readFIle } = require("fs");
console.log("started a first task");

//check file path
readFIle("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    //return;
  } else {
    console.log(result);
    console.log("completed the first task");
  }
});
console.log("starting next task");

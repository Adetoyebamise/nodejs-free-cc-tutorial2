const amount = 9;
if (amount < 10) {
  console.log("small number");
} else {
  console.log("large number");
}

console.log(`Hey, it mhi understanding node here!!!`);
console.log(__dirname);
console.log(__filename);
console.log(process);
setTimeout(() => {
  console.log(`tick`);
  console.log(`tack`);
  console.log("====");
}, 1000);

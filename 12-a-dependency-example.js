const dependencyLodash = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = dependencyLodash.flattenDeep(items);
console.log(newItems);

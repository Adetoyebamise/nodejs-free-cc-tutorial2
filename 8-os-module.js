const os = require("os");
const cpuInfo = os.cpus();
console.log(cpuInfo);
const userInfo = os.userInfo();
console.log(userInfo);
const systemUptime = os.uptime();
console.log(systemUptime);
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);

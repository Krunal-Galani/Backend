// / OS
const os = require("os");
console.log(os.type());
console.log(os.release());
console.log(os.version());
console.log(os.arch());
console.log(os.platform());
// 1024 bytes = 1 KB
// 1024 KB = 1 MB
// 1024 MB = 1 GB
console.log(os.freemem()/(1024*1024*1024));
console.log(os.totalmem()/(1024*1024*1024)); //kb to mb to gb

console.log(os.uptime()/(3600));
console.log(os.cpus());
console.log(os.networkInterfaces());
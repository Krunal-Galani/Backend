// ) Write a program that uses child_process.spawn() to run the command to print files and 
// folders of current directory. (B) 
const cp = require('child_process');
const child = cp.spawn("cmd.exe",["/c","dir","/s","c:\\"]);
child.stderr.on('data',(data)=>{
    console.log(`STDER ${data}`);
})
child.stdout.on('data',(data)=>{
    console.log(`STDOUT ${data}`);
})

child.on('close',(data)=>{
    console.log(`CLOSE:${data}`);
})

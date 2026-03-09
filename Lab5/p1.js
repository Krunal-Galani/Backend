// 1) Write a Node.js program using child_process.exec() to run the shell command to check the 
// current version of node. (A) 
const cp = require('child_process');
const { error } = require('console');
const{stderr,stdout} = require('process');
const exec = cp.exec;
exec('node --version',(error,stderr,stdout)=>{
    if(error){
        console.log(`ERROR : ${error}`);
    }
    if(stderr){
        console.log(`STDOUT : ${stderr}`)
    }
    console.log(`STDOUT ${stdout}`);
})
exec('python p.py',(error,stdout,stderr)=>{
    if(error){
        console.log(`ERROR : ${error}`);
    }
    if(stderr){
        console.log(`STDERR ${stderr}`);
    }
    console.log(`STDOUT ${stdout}`);
})
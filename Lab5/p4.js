// ) Write a program that parses the given URL, Print protocol, hostname, pathname, and query 
// parameters separately. (A) 
const url = require("url");
const myurl = 'https://nodejs.org/api/url.html#urlobjectprotocol';
const myur2 = 'https://nodejs.org/api/?ncencckjen=krunal';
const URLobj2 = new URL(myur2)
const URLobj = new URL(myurl);
console.log(`Protocol : ${URLobj.protocol}`);
console.log(`HostName : ${URLobj.hostname}`);
console.log(`Pathname : ${URLobj.pathname}`);
console.log(`Searchparams : ${URLobj2.searchParams}`);

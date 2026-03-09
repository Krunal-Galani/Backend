//  Create an EventEmitter instance, Register an event "greet" and print a message when 
// triggered. Fire that event manually using .emit().(B) 
const EventEmitter = require('events');
const event = new EventEmitter();
event.on('greet',(name)=>{
    console.log(name)
})
setInterval(()=>{
    event.emit("greet","krunal")
},5000)
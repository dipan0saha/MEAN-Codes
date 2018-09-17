// Programming with Mosh :: https://www.youtube.com/watch?v=TlB_eWDSMt4

function print(str){
    console.log(str)
}

var today = new Date();
console.log(today);
console.log(today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear());

// Invoke log module which resides in the same directory as this
const log = require('./logger.js')
log('abc');

//==========================================
// Built in modules
//==========================================
// Accessing OS components
//==========================================
const os = require('os');

// Total memory of the current machine
console.log('Total available memory : ' + os.totalmem());

// Free memory available
console.log(`Total free memory : ${os.freemem()}`);

//==========================================
// Event handling
//==========================================
const EventEmiiter = require('events');
const emitter = new EventEmiiter();

// Register an event listener
emitter.on ('messageLogged', function(arg){
    console.log('Listener called', arg);
})
        //The above function could have been written as -

        // emitter.on ('messageLogged', (arg) => {
        //     console.log('Listener called', arg);
        // })

// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http:\\'})




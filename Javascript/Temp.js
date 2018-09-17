function asynchFn(callback){
    console.log(callback)
    setTimeout(function(){
        callback("success from asynch")
    }, 2000)
}


asynchFn(function(result){
    console.log(result)
})

console.log("Hi..I am here already")
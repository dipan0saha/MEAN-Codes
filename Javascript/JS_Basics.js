function print(str){
    console.log(str)
}
var a = true
print(typeof(a))

var add = function (x,y){
    return x+y;
}

print(typeof(add))
print(add(4,5)) 

function test(fn){
    fn();
}

test(function (){print(3)})


function outer(){
    print('outer')
    var a = function inner(){
        print('inner')
    }
    return a;
}

outer()();

var obj = {}
obj.x = 2
obj.y = 3

obj.sum=function(){
    return this.x+this.y
}

print(obj)
print(obj.sum())

var pet = {legs: 4}
var cat = {tail: 1}

cat.__proto__=pet
print(cat.legs)
print(cat.tail)



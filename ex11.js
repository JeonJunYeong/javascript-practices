
var o = {
	name : '마이콜',
	age : 20
	
}


console.log(o.hasOwnProperty("name"));
console.log(o.hasOwnProperty("age"));
console.log(o.hasOwnProperty("email"));


console.log("=================with()===============");

with(o){
console.log(name+":"+age);
}
console.log("=================for ~ in===============");

var data = "";
for(var property in o){
if(typeof(o[property]))
console.log(property);
}
console.log(data);

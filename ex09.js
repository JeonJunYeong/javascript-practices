
var MyObject = function(name,age){
	this.name=name;
	this.age=age;
}

MyObject.prototype.school = "bit";
MyObject.prototype.course = "douzone";
MyObject.prototype.info=function(){
	console.log(this.name+":"+this.age+":"+this.school+":"+this.course);
}


var o1= new MyObject("둘리",10);
o1.school="multicampus";
console.log(o1.school+":"+o1.course);

var o2 = new MyObject("마이콜",30);
console.log(o2.school+":"+o2.course);

console.log(o1.school +":"+o2.school);



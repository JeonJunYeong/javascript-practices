
//변수의 범위
//1.자바스크립트는{} 블록 범위 없다
//2.블록안에서 var를 사용하게 되면 local 범위가 발생한다.(지역변수가 된다)
//3.let(es6), const(es6)는 Block Scope를 만든다. 
var i = 10;
var f= function(){
	i=20;
	j=100;
	console.log(i);
	i=j-1;
}

f();
console.log(i);
console.log(j);
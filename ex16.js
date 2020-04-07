//URL 다루기

//1. escape (x) : URL을 전부 encoding, - deprecated
var url = 'http://localhost:8080/mysite3?n=안대혁';
var url2=escape(url);

console.log(url2);

//2. encodeURI (o) : parameter 부분만 encdoing
var url3 = 'http://localhost:8080/mysite3?n=안대혁';
var url4=encodeURI(url3);
console.log(url4);

//3. encodeURIComponent
url4=encodeURIComponent(url3);
console.log(url4);



//4.encodeURIComponent 사용 예

var url = "http://localhost:8080/mystite3";

var o = {
    no: 10, 
    name: '안대혁',
    mail: 'abcd@gmail.com'
}

var toQueryString = function(o){
    var qs=[];
    for(property in o ){
        qs.push(property+"="+encodeURIComponent(o[property]));
    }

    return qs.join('&');
}

var url5=url+"?"+toQueryString(o);
console.log(url5);
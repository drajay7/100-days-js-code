//data types

//boolean
var data=false;
if(data)
console.log("data is boolean");
else
  console.log("data is lame");

//null
  var n=null;
  console.log(n+32);
console.log(n*44);
//undefined
var a;
console.log(a+a);
console.log(a+12);
//number
var n1=3.4, n2=4;
console.log(n1+n2);
//string
var name="ajay";
console.log("my name is "+ name);
//symbol
var s1=Symbol("kiet");
var s2=Symbol("kiet");
console.log(String(s1)==String(s2));
//object
var mycar= new Object();
mycar.make="Maruti";
mycar.model="Ritz";
console.log(mycar.model);

function Addition()
{
var a=document.getElementById("num1").value;
var b=document.getElementById("num2").value;

var c=parseInt(a)+parseInt(b);
document.writeln("<center><h1>Welcome To JavaScript Page</h1></center>");
document.writeln("<br><br><hr>");
document.writeln("Addition Of Two Numbers First Digit: "+a+" And Second Digit: "+b);
document.writeln("<center><h3>Total: "+c+"</center></h3>");

}
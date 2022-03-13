function display(val){
document.getElementById("screen").innerText+=val;
}
function clearall()
{
    document.getElementById("screen").innerText="";
    console.log("data cleared");
}
function deleteDigit()
{
    var x = document.getElementById("screen").innerText;
    console.log(typeof(x));
var del_string=x.substring(0,x.length-1);
console.log(del_string);

document.getElementById("screen").innerText = del_string;


}
function calculate() {
    var p = document.getElementById("screen").innerText;
    console.log(p);
    console.log(eval(p));
   var q = eval(p);
    document.getElementById("screen").innerText = q;
   }
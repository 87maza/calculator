var display = document.getElementById("screen");
var result;
function printToScreen(x){
	display.value += x;
	//+= because you concatenate the strings when x is greater than single digits
}

function add(){
	var num1 = parseFloat(display.value);
	var oper = "+";
	var num2 = parseFloat(display.value);
}

function calculate(){

}

var clear = document.getElementById('clear');
clear.addEventListener('click', function(){
	//clear button temp fix, i tried using the html onclick, but it never worked, hand rolled vanilla js works
	display.value = '';
	console.log("ipressedc");
});	



function decimal(){
	console.log("ipresseddec");
	var dotCheck = display.value
	if (dotCheck.indexOf(".") >= 0) {
		console.log(dotCheck.indexOf("."));
		return;
	}
	else {
		dotCheck += ".";
		// console.log("passed else");
		// console.log(dotCheck.indexOf(".");
	}

}
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

function clear(x){
	// display.value === 0;
	// console.log(display.value);
}

function decimal(){
	var dotCheck = display.value
	if (dotCheck.indexOf(".") >= 0) {
		return;
	}
	else {
		dotCheck + ".";
	}

}
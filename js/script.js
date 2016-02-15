var display = document.getElementById("screen");
var result;
var num1;
var num2;
	var oper = {
		'+': function(a, b) {
	        return a + b;
	    },
	    '*': function(a, b) {
	        return a * b;
	    },
	    '/': function(a, b) {
	        return a / b;
	    },
	    '-': function(a, b) {
	        return a - b;
	    }
	}
function printToScreen(x){
	display.value += x;
	//+= because you concatenate the strings when x is greater than single digits
}

var operator = document.getElementById('oper');
operator.addEventListener('click', function(){
	num1 = parseFloat(display.value);
	sign = operator.value;
	display.value='';
});

var equals = document.getElementById('equals');
equals.addEventListener('click',function(){
	num2 = parseFloat(display.value);
	console.log(num1 + sign + num2);
	result = parseFloat(oper[sign](num1,num2));
	console.log(result);
	display.value = result;
});

//old command to make things work
// var add = document.getElementById('add');
// add.addEventListener('click', function(){
// 	num1 = parseFloat(display.value);
// 	var oper = "+";
// 	display.value = ""
// 	return;
// });
// var equals = document.getElementById('equals');
// equals.addEventListener('click',function(){
// 	num2 = parseFloat(display.value);

// }



var clear = document.getElementById('clear');
clear.addEventListener('click', function(){
	//clear button temp fix, i tried using the html onclick, but it never worked, hand rolled vanilla js works
	display.value = '';
	window.location.reload();
	console.log("ipressedc");
});	



var decimal = document.getElementById('decimal');
decimal.addEventListener('click', function(){
	console.log("ipresseddec");
	var dotCheck = display.value;
	if (dotCheck.indexOf(".") >= 0) {
		console.log(dotCheck.indexOf("."));
		return;
	}
	else {
		dotCheck += ".";
		// console.log("passed else");
		// console.log(dotCheck.indexOf(".");
	}

});
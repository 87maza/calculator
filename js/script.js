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

var add = document.getElementById('add');
add.addEventListener('click', function(){
	num1 = parseFloat(display.value);
	sign = add.value;
	display.value='';
});

var subtract = document.getElementById('subtract');
subtract.addEventListener('click', function(){
	num1 = parseFloat(display.value);
	sign = subtract.value;
	display.value='';
});

var divide = document.getElementById('divide');
divide.addEventListener('click', function(){
	num1 = parseFloat(display.value);
	sign = divide.value;
	display.value='';
});

var multiply = document.getElementById('multiply');
multiply.addEventListener('click', function(){
	num1 = parseFloat(display.value);
	sign = multiply.value;
	display.value='';
});

var equals = document.getElementById('equals');
equals.addEventListener('click',function(){
	num2 = parseFloat(display.value);
	if (num2 === 0 && sign === divide.value){
		display.value = "don't divide by 0";
		return;
	}
	else if (num2 === NaN){
		var arrayNaN = num2.split('')
		var split = arrayNaN.filter(checker);
		num2 = split.join('');
		return split.join('');

			function checker(x){
				return Boolean(x);
			}

	}
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



// var decimal = document.getElementById('decimal');
// decimal.addEventListener('click', function(){
// 	console.log("ipresseddec");
// 	var dotCheck = display.value;
// 	if (dotCheck.indexOf(".") >= 0) {
// 		console.log(dotCheck.indexOf("."));
// 		return;
// 	}
// 	else {
// 		dotCheck += ".";
// 		// console.log("passed else");
// 		// console.log(dotCheck.indexOf(".");
// 	}

// });
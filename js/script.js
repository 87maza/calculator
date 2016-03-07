var display = document.getElementById("screen");  //grabs input screen stores it in a variable
var cons = document.getElementById("screen2");
display.value = "0";
var result;  //establish this variable for the calculate() function
var num1, num2;
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
	//object-oriented for simpler operation commands

function printToScreen(x){
	if (display.value === "0") {
		display.value = '';
	}
	display.value += x;
	cons.value += x;
	//+= because you concatenate the strings when x is greater than single digits
	//function will concatenate the numbers as strings and log onto the screen  tied to onclick() html
}

var add = document.getElementById('add');
add.addEventListener('click', function(){
	//on click, num1 is established and turned in the a decimal friendly number, operator is established by button and screen is cleared
	num1 = parseFloat(display.value);
	sign = add.value;
	display.value='';
	cons.value = num1 + sign;
});

var subtract = document.getElementById('subtract');
subtract.addEventListener('click', function(){
	num1 = parseFloat(display.value);
	sign = subtract.value;
	display.value='';
	cons.value = num1 + sign;
});

var divide = document.getElementById('divide');
divide.addEventListener('click', function(){
	num1 = parseFloat(display.value);
	sign = divide.value;
	display.value='';
	cons.value = num1 + sign;
});

var multiply = document.getElementById('multiply');
multiply.addEventListener('click', function(){
	num1 = parseFloat(display.value);
	sign = multiply.value;
	display.value='';
	cons.value = num1 + sign;
});

var equals = document.getElementById('equals');
equals.addEventListener('click',function(){
	//on click, num2 is established, parameters are set for the NaN and other catch-alls
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

	result = parseFloat(oper[sign](num1,num2));
	//result established decimal friendly and uses the operation objects
	console.log(result);
	display.value = result;
	cons.value = num1 + sign + num2 + "=" + result;
});

var clear = document.getElementById('clear');
clear.addEventListener('click', function(){
	//clear button temp fix, i tried using the html onclick, but it never worked, hand rolled vanilla js works
	display.value = '';
	window.location.reload();
	console.log("ipressedc");
});	

var decimal = document.getElementById('decimal');
decimal.addEventListener('click', function(){
	var dotCheck = display.value
		if(dotCheck.indexOf('.') === -1) {
			display.value = dotCheck += ".";
			console.log(dotCheck);
			if (display.value === NaN) {
				display.value = "0."
			}
		}
		else{
			dotCheck = display.value;
			console.log('no more decimals brah')
		}
});

var negClick = false;
var negative = document.getElementById('negative');
negative.addEventListener('click', function(){
	if (negClick === false) {
		display.value = "-" + display.value;
		negClick = true;
		console.log("neg sign is on");
		return;
	}
	if (negClick === true) {
		negClick=false;
		console.log("negative sign is off");
		return;
	}
});


"use strict";

function add(first, second) {
	return first + second;
}

function subtract(first, second) {
	return first - second;
}

function multiply(first, second){
	return first * second;
}

function divide(first, second) {
	return first / second;
}

function square (num) {
	return num * num;
}

function squareRoot(num) {
	return Math.sqrt(num);
}


$(document).ready(function(){
	var inputEl = $("#inputEl");
	var firstNum = null;
	var secondNum = null;
	var mathType = null;
	var result = null;
	

	function clearInput () {
		inputEl.val("");
		inputEl.focus();
	}

	function getFirstNumber(){
		firstNum = parseFloat(inputEl.val());
	}

	function calculateResult() {
		secondNum = parseFloat(inputEl.val());
		if (mathType === "add"){
			result = add(firstNum, secondNum);
		} else if (mathType === "subtract"){
			result = subtract(firstNum, secondNum);
		} else if (mathType === "multiply"){
			result = multiply(firstNum, secondNum);
		} else if (mathType === "divide"){
			result = divide(firstNum, secondNum);
		} else if (mathType === "square"){
			result = square(firstNum);
		} else if (mathType === "square root"){
			result = squareRoot(firstNum);
		}

		console.log("result: ", result);
		inputEl.val(result);
	}



	//add button event listeners
	$("#addBtn").click(function() {
		getFirstNumber();
		mathType = "add";
		clearInput();
	})
	$("#subtractBtn").click(function() {
		getFirstNumber();
		mathType = "subtract";
		clearInput();
	})
	$("#multiplyBtn").click(function() {
		getFirstNumber();
		mathType = "multiply";
		clearInput();
	})
	$("#divideBtn").click(function() {
		getFirstNumber();
		mathType = "divide";
		clearInput();
	})
	$("#squareBtn").click(function() {
		getFirstNumber();
		mathType = "square";
		calculateResult();
	})
	$("#sqrRtBtn").click(function() {
		getFirstNumber();
		mathType = "square root";
		calculateResult();
	})

	//enter key event listener
	inputEl.keyup(function(key){
		if (event.keyCode === 13){
			calculateResult();
		}
	})






});
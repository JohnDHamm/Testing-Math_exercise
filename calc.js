
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
		inputEl.empty();
	}

	function getFirstNumber(){
		firstNum = inputEl.val();
		console.log("firstNum", firstNum);
	}

	function calculateResult() {
		secondNum = inputEl.val();
		console.log("secondNum", secondNum);
		if (mathType = "add"){
			result = add(firstNum, secondNum);
		} else if (mathType = "subtract"){
			result = subtract(firstNum, secondNum);
		} else if (mathType = "multiply"){
			result = multiply(firstNum, secondNum);
		} else if (mathType = "divide"){
			result = divide(firstNum, secondNum);
		}
		inputEl.val = result;
	}



	//add button event listeners
	$("#addBtn").click(function() {
		getFirstNumber();
		mathType = "add";
		clearInput();
	})
	$("#subtractBtn").click(function() {
		mathType = "subtract";
	})
	$("#multiplyBtn").click(function() {
		mathType = "multiply";
	})
	$("#divideBtn").click(function() {
		mathType = "divide";
	})
	// $("#squareBtn").click(function() {
	// 	mathType = "square";
	// })
	// $("#sqrRtBtn").click(function() {
	// 	mathType = "square root";
	// })

	//enter key event listener
	inputEl.keyup(function(key){
		if (event.keyCode === 13){
			calculateResult();
		}
	})






});
// Unit Tests

// Write unit tests to check for the existence of the following functions:
// add()
// subtract()
// multiply()
// divide()
// square()
// squareRoot()
// Write unit tests that will verify the expected output of each of those functions.
// User Interface

// Create a user interface for a calculator. One text input and 6 buttons.
// The user will enter a number in the text input.
// The user will then press one of the buttons for an operation.
// The input field should be cleared so that a new number can be typed in.
// The user will then type in a new number and press enter.
// The resulting value of the operation should then be in the text input.


describe("The specification for calculator math functions", function() {

  it("should have an add function", function() {
    expect(add).toBeDefined();
  });

  it("should add two integers", function() {
    expect(add(2, 5)).toBe(7);
  });

  it("should have a subtract function", function() {
    expect(subtract).toBeDefined();
  });

  it("should subtract two integers", function() {
    expect(subtract(7, 5)).toBe(2);
  });

  it("should have a multiplication function", function() {
  	expect(multiply).toBeDefined();
  });

  it("should multiply two integers", function() {
  	expect(multiply(4, 9)).toBe(36);
  });

  it("should have a division function", function(){
  	expect(divide).toBeDefined();
  });

  it("should divide two integers", function() {
  	expect(divide(15, 5)).toBe(3);
  });

  it("should have a square function", function(){
  	expect(square).toBeDefined();
  });

  it("should square the entered integer", function() {
  	expect(square(8)).toBe(64);
  });

  it("should have a square root function", function() {
  	expect(squareRoot).toBeDefined();
  });

  it("should get the square root of the entered integer", function() {
  	expect(squareRoot(81)).toBe(9);
  })

});





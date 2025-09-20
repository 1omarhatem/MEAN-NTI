function divideNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Inputs must be numbers");
  }

  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

try {
  console.log("");
  const result1 = divideNumbers(10, 2);
  console.log("Result:", result1);

  console.log("");
  const result2 = divideNumbers(10, 0);
  console.log("Result:", result2);
} catch (error) {
  console.error("Error Name:", error.name);
  console.error("Error Message:", error.message);
}

try {
  console.log("");
  const result3 = divideNumbers("hello", 5);
  console.log("Result:", result3);
} catch (error) {

    console.error("Error Name:", error.name);
  console.error("Error Message:", error.message);
}
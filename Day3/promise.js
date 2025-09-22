
const handleAsyncOperation = (inputNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputNumber <= 0) {
        reject("Error");
      } else {
        resolve("successfully");
      }
    }, 2000);
  });
};

console.log();
handleAsyncOperation(10)
  .then(message => {
    console.log(message); 
  })
  .catch(error => {
    console.error(error);
  });

console.log();
handleAsyncOperation(-5)
  .then(message => {
    console.log(message);
  })
  .catch(error => {
    console.error(error); 
  });
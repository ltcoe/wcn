// Asynchronous function with a callback
function doSomethingAsync(callback) {
    setTimeout(() => {
      console.log("Task completed!");
      callback();
    }, 2000);
  }
  
  console.log("Start task");
  doSomethingAsync(() => {
    console.log("Callback called");
  });
  console.log("End task");
  
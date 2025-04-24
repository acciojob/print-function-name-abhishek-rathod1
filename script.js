function functionName() {
  alert(arguments.callee.name);
}

functionName(); // Will show alert with: "functionName"

//table function
const importModule = require("./Ex-NodeJsExportModule");
const getTable = importModule.table();

//add function 
console.log(` Addition is: ${importModule.addFunc(35, 67)}`);

//employee function

const empClass = importModule.employee;
const obj = new empClass(111, "Shiv", "Pune");
const getEmp = new empClass(121, "Sudarshan", "Hyderabad");
console.log(obj);
console.log(getEmp.display());
console.log(obj.display());
//synchronous version
import { readFileSync } from "fs"; //this is inbuilt module representation of nodeJs
const data = readFileSync("/Users/shivkumar/Desktop/NodeJs/nodeJs_vscode/NodeJs_Lec/Ex04-NodeJsModules.js");
const text = data.toString("utf-8");
console.log(text);


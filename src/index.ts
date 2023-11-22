import { helloWorld, helloWorldAsync } from "./util/helpers.js";

const name = undefined;
console.log(helloWorld(name));
console.log(await helloWorldAsync(name));

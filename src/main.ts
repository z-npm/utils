import { fetchWorker } from "./lib";

const appRef = document.querySelector<HTMLDivElement>("#app")!

console.log(appRef);


const result = await fetchWorker({
  url: "https://jsonplaceholder.typicode.com/users"
})


console.log(result);


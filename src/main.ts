import { Fetcher } from "./lib/fetcher";

const appRef = document.querySelector<HTMLDivElement>("#app")!

console.log(appRef);

const users = new Fetcher({
  url: "https://jsonplaceholder.typicode.com/users",
  onLoadingChange: (l) => {
    console.log("l: ", l);
  },
  onSuccess: (d) => {
    console.log("d: ", d);
  },
  onError: (e) => {
    console.log("e:", e);
  },
  onResult(result) {
    console.log("r:", result);
  },
})

console.log(users);


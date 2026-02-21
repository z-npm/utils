import { fetcher } from "./lib";

const appRef = document.querySelector<HTMLDivElement>("#app")!

console.log(appRef);

try {
  await fetcher({
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
  })
} catch (_error) {

}





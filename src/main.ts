import { Fetcher } from "./lib/fetcher"

const users = new Fetcher({
  url: "https://jsonplaceholder.typicode.com/users",
  onLoadingChange: (l) => {
    console.log("l: ", l)
  },
  onSuccess: (d) => {
    console.log("d: ", d)
  },
  onError: (e) => {
    console.log("e:", e)
  },
  onResult(result) {
    console.log("r:", result)
  },
})

console.log(users)

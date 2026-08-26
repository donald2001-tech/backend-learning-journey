console.log("Start");

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

//Async

const fetchUser = new Promise((resolve, reject) => 
    {
        setTimeout(() => {
            resolve("Donald");
        }, 1000);
});

fetchUser.then((name) => {
    console.log("User fetched:", name);
});

console.log("fetching...");
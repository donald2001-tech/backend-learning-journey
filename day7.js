const fetchUser = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve("Donald");
    }, 1000);
});

async function getUser() {
    console.log("Fetching...");
    const name = await fetchUser;
    console.log("User fetched:", name);
};

getUser();
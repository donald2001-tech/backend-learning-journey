const fetchMovie = new Promise((resolve, reject) => {
    setTimeout (() => {
        resolve("Inception");
    }, 1200);
});

async function getMovie() {
    console.log("Loading movie...");
    const name = await fetchMovie;
    console.log("Movie loaded: ", name);
};
getMovie();
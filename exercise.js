let book = {
    title: "Dune",
    author: "Frank Herbert",
    pagesRead: 203,
    totalPages: 412,
    genres: ["Fiction", "Mystery", "Thriller"]
};

function bookSummary(book) {
    console.log(book.title + " by " + book.author + " - Genres: " + book.genres[0] + ", " + book.genres[1] + ", " + book.genres[2])
};

//function pagesLeft that takes in a book object and returns the number of pages left to read
function pagesLeft(book) {
    return book.totalPages - book.pagesRead
};
let result = pagesLeft(book);

bookSummary(book);
pagesLeft(book);

console.log("pages left to read: " + result);

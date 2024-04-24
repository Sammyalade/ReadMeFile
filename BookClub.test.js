let assignBook = require("./BookClub.js");

test("Assigning book", () => {
    let persons = [{name: "Emily", book: ""},
                                              {name: "Jack", book: ""},
                                              {name: "Sophia",book: ""},
                                              {name: "Daniel", book: ""}];

    let books = ["Tidy First", "Simple Made Easy", "Refactoring", "Clean Code"]

    let result = assignBook(persons, books);

    console.log(result)
})
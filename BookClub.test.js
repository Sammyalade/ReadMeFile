let assignBook = require("./BookClub.js");

test("Assigning book", () => {
    let Emily ={
        name: "Emily",
        book: ""
    }

    let Jack = {
        name: "Jack",
        book: ""
    }

    let Sophia = {
        name: "Sophia",
        book: ""
    }

    let Daniel = {
        name: "Daniel",
        book: ""
    }
    let persons = [Emily, Jack, Sophia, Daniel];

    let books = ["Tidy First", "Simple Made Easy", "Refactoring", "Clean Code"]

    let result = assignBook(persons, books);

    console.log(result)
})
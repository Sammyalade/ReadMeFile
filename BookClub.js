function assignBook(persons, books){
    let i = 0;
    for (let person of persons){
        person.book = books[i];
        i++;
    }
    return persons;
}

module.exports = assignBook;
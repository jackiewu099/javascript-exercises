function getTitle(book) {
    return book.title;
}

const getTheTitles = function(books) {

    const titles = books.map(getTitle);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;

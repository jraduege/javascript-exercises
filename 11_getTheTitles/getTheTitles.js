const getTheTitles = function(books) {
    let titles = books.reduce(function (newArr, book) {
        if (book.title) {
          newArr.push(book.title);
        }
        return newArr;
      }, []);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;



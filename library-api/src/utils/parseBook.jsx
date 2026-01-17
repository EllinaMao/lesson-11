
function parseBook(bookTitle) {
    const title = bookTitle.toLowerCase().replace(/\s+/g, '+');
    return title;
}

export { parseBook };


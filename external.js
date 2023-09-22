const openDialog = document.getElementById('openDialog');
const addbooks = document.getElementById('addbooks');
const form = document.getElementById('addBookForm');


const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary() {
    
    
        const formData = new FormData(form);
    
        const newBook = {
            title: formData.get('title'),
            author: formData.get('author'),
            pages: formData.get('pages'),
            read: formData.get('read')
        };
    
        myLibrary.push(newBook);
        displayBooks();
}

function displayBooks() {
    const booksContainer = document.querySelector('#books');
    booksContainer.innerHTML = '';

    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        const title = document.createElement('h2');
        title.textContent = book.title;
        const author = document.createElement('h3');
        author.textContent = book.author;
        const pages = document.createElement('p');
        pages.textContent = book.pages;
        const read = document.createElement('p');
        read.textContent = book.read;
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);
        booksContainer.appendChild(bookCard);
    });

}

openDialog.addEventListener('click', () => {
    addbooks.showModal();
});


document.getElementById("submit").addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
});
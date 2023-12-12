/* 
   Filename: SophisticatedCode.js
   Description: This code is a complex implementation of a bookstore management system. It includes functionalities for adding, deleting, and modifying books, as well as searching and sorting the books based on various criteria.
*/

// Book class
class Book {
  constructor(title, author, genre, year, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
    this.price = price;
  }

  displayBookInfo() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Year: ${this.year}`);
    console.log(`Price: $${this.price}`);
  }
}

// Bookstore class
class Bookstore {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`${book.title} added to the bookstore.`);
  }

  deleteBook(title) {
    const index = this.books.findIndex((book) => book.title === title);
    if (index !== -1) {
      this.books.splice(index, 1);
      console.log(`${title} deleted from the bookstore.`);
    } else {
      console.log(`${title} not found in the bookstore.`);
    }
  }

  modifyBook(title, newTitle, newAuthor, newGenre, newYear, newPrice) {
    const book = this.books.find((book) => book.title === title);
    if (book) {
      book.title = newTitle;
      book.author = newAuthor;
      book.genre = newGenre;
      book.year = newYear;
      book.price = newPrice;
      console.log(`${title} modified successfully.`);
    } else {
      console.log(`${title} not found in the bookstore.`);
    }
  }

  searchBooks(criteria) {
    const filteredBooks = this.books.filter((book) => {
      return (
        book.title.toLowerCase().includes(criteria.toLowerCase()) ||
        book.author.toLowerCase().includes(criteria.toLowerCase()) ||
        book.genre.toLowerCase().includes(criteria.toLowerCase()) ||
        book.year.toString().includes(criteria) ||
        book.price.toString().includes(criteria)
      );
    });

    if (filteredBooks.length > 0) {
      console.log(`Search results for "${criteria}":`);
      filteredBooks.forEach((book) => book.displayBookInfo());
    } else {
      console.log(`No books found for "${criteria}".`);
    }
  }

  sortBooks(sortBy) {
    let sortedBooks = [];

    switch (sortBy) {
      case "title":
        sortedBooks = [...this.books].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;
      case "author":
        sortedBooks = [...this.books].sort((a, b) =>
          a.author.localeCompare(b.author)
        );
        break;
      case "genre":
        sortedBooks = [...this.books].sort((a, b) =>
          a.genre.localeCompare(b.genre)
        );
        break;
      case "year":
        sortedBooks = [...this.books].sort((a, b) => a.year - b.year);
        break;
      case "price":
        sortedBooks = [...this.books].sort((a, b) => a.price - b.price);
        break;
      default:
        console.log("Invalid sort criteria.");
        return;
    }

    console.log(`Sorted books by ${sortBy}:`);
    sortedBooks.forEach((book) => book.displayBookInfo());
  }
}

// Usage example
const bookstore = new Bookstore();

const book1 = new Book(
  "The Catcher in the Rye",
  "J.D. Salinger",
  "Fiction",
  1951,
  9.99
);
const book2 = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  "Fiction",
  1960,
  12.99
);
const book3 = new Book(
  "1984",
  "George Orwell",
  "Science Fiction",
  1949,
  7.99
);

bookstore.addBook(book1);
bookstore.addBook(book2);
bookstore.addBook(book3);

bookstore.modifyBook("To Kill a Mockingbird", "Mockingbird", "Harper Lee", "Novel", 1960, 15.99);

bookstore.searchBooks("orwell");
bookstore.sortBooks("year");

bookstore.deleteBook("The Great Gatsby");
bookstore.deleteBook("1984");
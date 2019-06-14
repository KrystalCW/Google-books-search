import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/saved");
  },
  // Gets the book with the given id
  searchBook: function(searchTerm) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+ searchTerm);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/saved", bookData);
  }
};

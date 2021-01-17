import axios from "axios";

export default {
    // this gets books from Google search
    searchBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
        // resource for API - https://developers.google.com/books/docs/v1/using#PerformingSearch
    },

    // this gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },

    // this gets specific book with id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // this saves book to db
    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },

    // this deletes specific book with id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
};
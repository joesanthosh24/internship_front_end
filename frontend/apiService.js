import axios from 'axios';

const API_URL = 'http://localhost:4000';

export default class ApiService {
    createBook(book) {
        console.log('Creating Book');
        return axios.post(`${API_URL}/books/addBook`, book);
    };

    updateBook(bookObj) {
        return axios.put(`${API_URL}/books/edit/${bookObj._id}`, bookObj)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
    };

    deleteBook(book) {
        console.log('In api service delete method')
        return axios.delete(`${API_URL}/books/delete/${book._id}`)
        .then(res => res.data)
        .catch(err => {
            console.log(err);
        });
    };

    getBooks() {
        console.log('Finding Books');
        return axios.get(`${API_URL}/books`)
        .then( response => response.data );
    };

    getBookByTitle(id) {
        return axios.get(`${API_URL}/books/${id}`)
        .then( response => response.data )
        .catch(err => {
            console.log(err);
        });
    };
}
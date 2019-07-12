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

    goToLogin(userInfo) {
        console.log('Login in Axios');
        return axios.post(`${API_URL}/users/login`, userInfo)
        .then(response => response.data)
        .catch(err => err);
    };

    goToSignUp(userInfo) {
        console.log('Sign Up in Axios');
        return axios.post(`${API_URL}/users/signUp`, userInfo)
        .then( response => response.data )
        .catch( err => err );
    };

    logOutUser(userInfo) {
        return axios.get(`${API_URL}/users/logOut`, userInfo)
        .then( response => response.data )
        .catch( err => err );
    };

    getComments() {
        console.log('get comments in Axios');
        return axios.get(`${API_URL}/comments`)
        .then( response => response.data )
        .catch( err => err );
    };

    getCommentsByBookId(title) {
        console.log('get comments by book id in Axios');
        return axios.get(`${API_URL}/comments/${title}`)
        .then( response => response.data )
        .catch( err => err );
    };
}
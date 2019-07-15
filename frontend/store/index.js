export const state = () => ({
    books: [],
    count: 0,
    userLoggedIn: false,
    currentUser: {},
    comments: []
});

export const mutations = {
    add(state, book) {
        state.books.push(book);
        state.count++;
    },
    returnBooks(state) {
        return state.books;
    },
    makeHover(state, book) {
        for(let i=0; i<state.books.length; i++) {
            console.log(book._id);
            if(state.books[i]._id == book._id) {
                state.books[i].hover = true;
                book = state.books[i];
                break;
            }
        }
    },
    unHover(state, book) {
        for(let i=0; i<state.books.length; i++) {
            if(state.books[i]._id == book._id) {
                state.books[i].hover = false;
                book = state.books[i];
                break;
            }
        }
    },
    display(state, book) {
        for(let i=0; i<state.books.length; i++) {
            if(state.books[i].title == book.book.title) {
                state.books[i].mainDisplay = book.mode;
                book.book = state.books[i];
                break;
            }
        }
    },
    hide(state, genre) {
        for(let i=0; i<state.books.length; i++) {
            console.log(genre);
            if(state.books[i].genre != genre) {
                state.books[i].show = false;
            }
            else {
                state.books[i].show = true;
            }
        }
    },
    showAll(state) {
        for(let i=0; i<state.books.length; i++) {
            state.books[i].show = true;
            console.log(state.books[i].show);
        }
    },
    edit(state, bookInfo) {
        for(let i=0; i<state.books.length; i++) {
            if(state.books[i].id == bookInfo.book.id) {
                console.log('book');
                let { title, genre, rating, img_src } = bookInfo;

                state.books[i].title = title;
                state.books[i].genre = genre;
                state.books[i].rating = rating;
                state.books[i].img_src = img_src;

                break;
            }
        }
    },
    delete(state, book) {
        let index = state.books.indexOf(book);

        state.books.splice(index, 1);
        state.count--;
    },
    getBookByTitle(state, title) {
        for(let i=0; i<state.books.length; i++) {
            if(state.books[i].title == title) {
                console.log(state.books[i]);
                return state.books[i];
            }
        }
    },
    changeLoggedInStatus(state, log) {
        state.userLoggedIn = log.loggedInValue;
    },
    setCurrentUser(state, user) {
        state.currentUser = user;
    },
    addBookToUser(state, book) {
        if(!state.currentUser.books) {
            state.currentUser.books = [];
        }

        state.currentUser.books.push(book);
    },
    deleteBookFromUser(state, book) {
        for(let i=0; i<state.currentUser.books.length; i++) {
            if(book.title = state.currentUser.books[i].title) {
                state.currentUser.books.splice(i, 1);
                return;
            }
        }
    },
    addComment(state, comment) {
        state.comments.push(comment);
    },
    deleteComments(state) {
        state.comments = [];
    }
}
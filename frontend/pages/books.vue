<template>
    <div v-if="$store.state.currentUser.username">
        <nav>
            <ul>
                <li>
                    <nuxt-link to="/">
                        <button class="main button green">
                            Home
                        </button>
                    </nuxt-link>
                </li>
                <nuxt-link to="/contact">
                    <li>
                        <button class="main button red">
                            Contact
                        </button>
                    </li>
                </nuxt-link>
                <li>Genres</li>
                <li>
                    <button class="book_genre" @click="selectGenre('Mystery')">
                        Mystery
                    </button>
                </li>
                <li>
                    <button class="book_genre" @click="selectGenre('Non Fiction')">
                        Non Fiction
                    </button>
                </li>
                <li>
                    <button class="book_genre" @click="selectGenre('Fiction')">
                        Fiction
                    </button>
                </li>
                <li>
                    <button class="book_genre" @click="selectGenre('')">
                        All
                    </button>
                </li>
            </ul>
        </nav>
        <router-link v-if="$store.state.currentUser._id" to="/addBook">
            <button class="button green" style="margin-bottom: 40px; padding: 20px 30px;">
                Add New Book
            </button>
        </router-link>
        <div class="list_row">
            <book-content v-for="book in filteredBooks" :key="book._id" :book="book"></book-content>
        </div>
    </div>
    <div v-else>
        <h1>Please Login or Sign Up in order to access the books</h1>
        <button class="button blue" @click="$router.push('/auth/login')">Login</button>
        <button class="button green" @click="$router.push('/auth/signUp')">Sign Up</button>
    </div>
</template>

<script>
    import BookContent from '~/components/BookContent'
    import { mapMutations } from 'vuex';
    import ApiService from '../apiService';

    let apiService = new ApiService();

    export default {
        layout: 'book-list',
        data() {
            return {
                filteredBooks: this.$store.state.books,
                selectedGenre: '',
                genres: [
                    {name: 'Mystery', genre: 'Mystery'}, 
                    {name: 'Non Fiction', genre: 'Non Fiction'}, 
                    {name: 'Fiction', genre: 'Fiction'}, 
                    {name: '', genre: 'All'}
                ]
            };
        },
        methods: {
            selectGenre(genre) {
                this.selectedGenre = genre;

                if(this.selectedGenre) {
                    this.$store.commit('hide', genre);
                }
                else {
                    this.$store.commit('showAll');
                }
            },
            async getBooks() {
                let books = await apiService.getBooks();

                books.forEach(book => {
                    this.$store.commit('add', book);
                });

                console.log(this.$store.state.books);
            }
        },
        components: {
            bookContent: BookContent
        },
        computed: {
            books() {
                return this.$store.state.books;
            }
        },
        async created() {
            let books = await apiService.getBooks();

            console.log(this.$store.state.currentUser._id);

            books.forEach(book => {
                this.$store.commit('add', book);
            });

            //console.log(this.$store.state.books);
        },
        async destroyed() {
            let books = await apiService.getBooks();

            books.forEach(book => {
                this.$store.commit('delete', book);
            });
        }
    };
</script>

<style>
    nav {
        background-color: rgb(146, 192, 238);
        border: 1px solid rgb(146, 192, 238);
    }

    h2 {
        font-size: 4px;
    }

    .main {
        margin-left: auto;
        margin-right: 40px;
    }
</style>
<template>
    <div>
        <nav>
            <ul>
                <nuxt-link to="/">
                    <li>
                        <button class="main button green">
                            Home
                        </button>
                    </li>
                </nuxt-link>
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
        <router-link to="/addBook">
            <button class="button green" style="margin-bottom: 40px; padding: 20px 30px;">
                Add New Book
            </button>
        </router-link>
        <div class="list_row">
            <book-content v-for="book in books" :key="book.id" :book="book"></book-content>
        </div>
    </div>
</template>

<script>
    import BookContent from '~/components/BookContent'
    import { mapMutations } from 'vuex';

    export default {
        layout: 'book-list',
        data() {
            return {
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
            }
        },
        components: {
            bookContent: BookContent
        },
        computed: {
            books() {
                return this.$store.state.books
            }
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
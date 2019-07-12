<template>
    <div class="container">
        <form id="form_2">
            <!-- <div> -->
                <!-- <label for="title_2">Title</label>
                <input class="book_input" type="text" id="title_2" :value="book.title">
                <hr>
                <label for="genre_2">Genre</label>
                <input class="book_input" type="text" id="genre_2" :value="book.genre">
                <hr> -->
                <label for="rating_2">Rating</label>
                <input type="text" class="book_input" id="rating_2" :value="book.rating">
                <!-- <hr>
                <label for="image_2">Image Source</label>
                <input type="text" class="book_input" id="image_2" :value="book.img_src"> -->
            <!-- </div> -->
            <div class="book_link">
                <nuxt-link to="/books">
                    <a class="button green" @click="editBook">Update Book</a>
                </nuxt-link>
            </div>
        </form>
    </div>
</template>

<script>
import ApiService from '../../apiService';

const apiService = new ApiService();

export default {
    data() {
        return {
            book: {}
        };
    },
    async created() {
        // let promisedObj = await apiService.getBookByTitle(this.$route.params.id);

        // this.book = promisedObj[0];

        // this.book = this.$store.commit('getBookByTitle', this.$route.params.title);
        let books = await apiService.getBookByTitle(this.$route.params.title);
        this.book = books[0];
        console.log(this.book);

        this.$store.commit('add', this.book);
    },
    destroyed() {
        this.$store.commit('delete', this.book);
    },
    methods: {
        async editBook() {
            // let titleVal = document.getElementById('title_2').value;
            // let genreVal = document.getElementById('genre_2').value;
            // let ratingVal = document.getElementById('rating_2').value;
            // let imgSrcVal = document.getElementById('image_2').value;

            let ratingVal = document.getElementById('rating_2').value;

            console.log(ratingVal);

            console.log(this.book.title);

            this.book = await apiService.updateBook({
                rating: Number.parseFloat(ratingVal),
                _id: this.book._id
            });
        }
    }
}
</script>

<style>
    /* div.container {
        justify-content: center;
        align-items: center;
        text-align: center;
        display: grid;
        border: 1px solid rgb(12, 87, 68);
        margin: 100px 200px;
    } */

    .book_input {
        margin-top: 10px;
        margin-left: 15px;
        height: 29px;
        line-height: 25px;
        border-radius: 3px;
        border: 1px solid black;
    }

    div.book_link {
        margin-top: 35px;
        margin-bottom: 12px;
    }

    label {
        margin-left: 40px;
    }

    hr {
        margin-top: 20px;
        margin-bottom: 20px;
        visibility: hidden;
    }
</style>
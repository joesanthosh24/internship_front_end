<template>
    <div class="container">
        <form id="form">
            <!-- <div> -->
                <label for="title_2">Title</label>
                <input class="book_input" type="text" id="title_2" :value="book.title">
                <hr>
                <label for="genre_2">Genre</label>
                <input class="book_input" type="text" id="genre_2" :value="book.genre">
                <hr>
                <label for="rating_2">Rating</label>
                <input type="text" class="book_input" id="rating_2" :value="book.rating">
                <hr>
                <label for="image_2">Image Source</label>
                <input type="text" class="book_input" id="image_2" :value="book.img_src">
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
export default {
    data() {
        return {
            id: this.$route.params.id,
            book: {}
        };
    },
    created() {
        for(let i=0; i<this.$store.state.books.length; i++) {
            if(this.$store.state.books[i].id == this.id) {
                this.book = this.$store.state.books[i];
                break;
            }
        }
    },
    methods: {
        editBook() {
            let titleVal = document.getElementById('title_2').value;
            let genreVal = document.getElementById('genre_2').value;
            let ratingVal = document.getElementById('rating_2').value;
            let imgSrcVal = document.getElementById('image_2').value;

            this.$store.commit('edit', {
                    book: this.book,
                    title: titleVal,
                    genre: genreVal,
                    rating: ratingVal,
                    img_src: imgSrcVal
                }
            );
        }
    }
}
</script>

<style>
    div.container {
        justify-content: center;
        align-items: center;
        text-align: center;
        display: grid;
        border: 1px solid rgb(12, 87, 68);
        margin: 100px 200px;
    }

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
<template>
    <div class="container">
        <form id="form">
            <!-- <div> -->
                <label for="title">Title</label>
                <input class="book_input" type="text" id="title" v-model="title">
                <hr>
                <label for="genre">Genre</label>
                <input class="book_input" type="text" id="genre" v-model="genre">
                <hr>
                <label for="rating">Rating</label>
                <input type="text" class="book_input" id="rating" v-model="rating">
                <hr>
                <label for="image">Image Source</label>
                <input type="text" class="book_input" id="image" v-model="image_url">
            <!-- </div> -->
            <div class="book_link">
                <nuxt-link to="/books">
                    <a class="button green" @click="addBook">Add</a>
                </nuxt-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    data() {
        return {
            title: '',
            genre: '',
            rating: '',
            image_url: ''
        }
    },
    methods: {
        addBook() {
            if(this.title && this.genre && this.rating && this.image_url) {
                this.$store.commit('add', {
                    id: this.$store.state.count + 1,
                    title: this.title,
                    genre: this.genre,
                    rating: this.rating,
                    hover: false, 
                    mainDisplay: true, 
                    show: true,
                    img_src: this.image_url
                });
            }
        }
    }
}
</script>

<style>
    #form {
        margin-top: 30px;
        margin-bottom: 30px;
        font-size: 22px;
    }

    div.container {
        justify-content: center;
        align-items: center;
        text-align: center;
        display: grid;
        border: 1px solid rgb(12, 87, 68);
        margin: 100px 200px;
    }

    .book_input {
        margin-left: 15px;
        height: 29px;
        line-height: 25px;
        border-radius: 3px;
        border: 1px solid black;
    }

    div.book_link {
        margin-top: 35px;
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

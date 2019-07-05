<template>
    <div v-if="book.show" class="list_column">
        <div v-if="book.mainDisplay" class="book_content" @mouseenter="hovered(book)" @mouseleave="unhover(book)">
            <img :src="book.img_src" alt="">
            <p v-if="book.hover || book.title.length <= 20">{{ book.title }}</p>
            <p v-else>{{ book.title.substring(0, 20) }}..</p>
            <button class="button green" @click="shortDisplay(book)">
                Info
            </button>
            <nuxt-link :to="'/edit/' + book.title">
                <button class="button grey">
                    Change Rating
                </button>
            </nuxt-link>
            <nuxt-link to="/books" exact>
                <a style="margin-top: 15px;" class="button red" @click="deleteContent(book)">
                    Delete
                </a>
            </nuxt-link>
        </div>
        <div v-else class="book_content short">
            <img :src="book.img_src" alt="">
            <h1>{{ book.title }}</h1>
            <p>Genre: {{ book.genre }}</p>
            <p style="font-size: 18px;">Rating: {{ book.rating }}</p>
            <button class="button green" @click="mainDisplay(book)">
                Main Display
            </button>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
import ApiService from '../apiService';

let apiService = new ApiService();

export default {
    props: {
        book: Object
    },
    methods: {
        hovered(book) {
            // book.hover = true;
            this.$store.commit('makeHover', book);
        },
        unhover(book) {
            // book.hover = false;
            this.$store.commit('unHover', book);
        },
        mainDisplay(book) {
            // book.mainDisplay = true;
            this.$store.commit('display', {
                book,
                mode: true
            });
        },
        shortDisplay(book) {
           this.$store.commit('display', {
               book,
               mode: false
           });
        },
        async deleteContent(book) {
            await apiService.deleteBook(book);

            this.$store.commit('delete', book);
        }
    },
}
</script>

<style>
    h1 {
        font-size: 16px;
    }
    p {
        margin-top: 3px;
    }
</style>
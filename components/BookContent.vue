<template>
    <div v-if="book.show" class="list_column">
        <div v-if="book.mainDisplay" class="book_content" @mouseenter="hovered(book)" @mouseleave="unhover(book)">
            <img :src="book.img_src" alt="">
            <p>{{ book.id }}</p>
            <p v-if="book.hover">{{ book.title }}</p>
            <p v-else>{{ book.title.substring(0, 20) }}</p>
            <button class="button green" @click="shortDisplay(book)">
                Info
            </button>
            <nuxt-link :to="'/edit/' + book.id">
                <button class="button grey">
                    Edit
                </button>
            </nuxt-link>
        </div>
        <div v-else class="book_content short">
            <img :src="book.img_src" alt="">
            <h1>{{ book.title }}</h1>
            <p style="font-size: 18px;">Rating: {{ book.rating }}</p>
            <button class="button green" @click="mainDisplay(book)">
                Main Display
            </button>
            <nuxt-link :to="'/edit/' + book.id">
                <button class="button grey">
                    Edit
                </button>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
    props: ['book'],
    methods: {
        hovered(book) {
            this.$store.commit('makeHover', book);
        },
        unhover(book) {
            this.$store.commit('unHover', book);
        },
        mainDisplay(book) {
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
        }
    }
}
</script>

<style>
    h1 {
        font-size: 20px;
    }
</style>
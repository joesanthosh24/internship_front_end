<template>
    <div v-show="book.show" class="list_column">
        <div v-if="book.mainDisplay" class="book_content" @mouseenter="hovered(book)" @mouseleave="hovered(book)">
            <img :src="book.img_src" alt="">
            <p>{{ book.id }}</p>
            <h1 v-if="book.hover">{{ book.title }}</h1>
            <h1 v-else>{{ book.title.substring(0, 20) }}</h1>
            <button class="button green" @click="book.mainDisplay = false">
                Info
            </button>
        </div>
        <div v-else class="book_content short">
            <p>{{ book.id }}</p>
            <h1>{{ book.title }}</h1>
            <p style="font-size: 23px;">Rating: {{ book.rating }}</p>
            <button class="button green" @click="book.mainDisplay = true">
                Main Display
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['book'],
    methods: {
        hovered(book) {
            if(book.hover === true) {
                book.hover = false;
            }
            else {
                book.hover = true;
            }
        }
    }
}
</script>
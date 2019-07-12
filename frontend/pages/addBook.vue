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
                <!-- <nuxt-link to="/books"> -->
                    <button type="submit" class="button green" @click.prevent="addBook">Add</button>
                <!-- </nuxt-link> -->
            </div>
            <div id="message">

            </div>
        </form>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import ApiService from '../apiService';

    const apiService = new ApiService();

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
            async addBook(event) {
                // Adding Book to MongoDB Database
                let books = await apiService.getBooks();
                console.log(books);

                for(let i=0; i<books.length; i++) {
                    console.log(books[i].title);
                    if(books[i].title == this.title) {
                        document.getElementById('message').innerText = "Book Exisits";
                        return;
                    }
                }
                
                await apiService.createBook(
                    { 
                        bookInfo: {
                            title: this.title,
                            genre: this.genre,
                            rating: Number.parseFloat(this.rating),
                            img_src: this.image_url,
                            hover: false,
                            mainDisplay: true,
                            show: true
                        }
                    }
                ).then(res => {
                    this.$router.push("/books");
                }).catch(err => {
                    console.log(err);
                });
            },
            async getBook(title){
                return await apiService.getBookByTitle(title)
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

    /* div.container {
        justify-content: center;
        align-items: center;
        text-align: center;
        display: grid;
        border: 1px solid rgb(12, 87, 68);
        margin: 100px 200px;
    } */

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

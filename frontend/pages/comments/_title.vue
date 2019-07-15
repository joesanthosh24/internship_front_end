<template>
    <div style="display: flex;">
        <h2 style="color: green; font-size: 30px;">{{ bookTitle }}</h2>
        <ul v-if="filteredComments" style="list-style-type: none;">
            <li v-for="comment in filteredComments" :key="comment._id">
                <h3>{{ comment.commentText }}</h3>
                <p>Written by {{ $store.state.currentUser.username }}</p>
            </li>
        </ul>
        <button id="comment_add_button" style=" margin-left: 25px; height: 40px;" v-show="this.displayed"  class="button green" @click="goToAdd">
            Add Comment
        </button>
        <div style="margin-top: 100px; width: 75%;" v-show="displayed == false">
            <input type="text" style="width: 100%;" placeholder="Type Comment here" id="comment_input" v-model="comment">
            <button class="button green" @click="sendComment">Submit</button>
        </div>
        <div>
            <button class="button green" style="margin-left: 25px;" @click="goHome">Home</button>
        </div>
    </div>
</template>

<script>
import ApiService from '../../apiService';

let apiService = new ApiService();

export default {
    data() {
        return {
            filteredComments: this.$store.state.comments,
            bookTitle: this.$route.params.title,
            displayed: true,
            comment: ''
        };
    },
    async created() {
        console.log(this.$store.state.currentUser);
        console.log(this.$route.params.title);
        let comments = await apiService.getCommentsByBookId(this.$route.params.title);
        console.log(this.$route.params.title);

        console.log(comments);

        comments.forEach(comment => {
            this.$store.commit('addComment', comment);
        });
    },
    destroyed() {
        this.$store.commit('deleteComments');
    },
    methods: {
        goToAdd() {
            this.displayed = !this.displayed;
        },
        async sendComment() {

            let comment = this.comment;
            console.log(document.getElementById('comment_input').innerText);
            let data = await apiService.addComment({
                commentInfo: {
                    commentText: comment,
                    user: this.$store.state.currentUser._id,
                    book: this.$route.params.title
                }
            });

            console.log(data);

            this.$store.commit('addComment', data);

            this.displayed = !this.displayed;
        },
        goHome() {
            this.$router.push('/');
        }
    }
}
</script>
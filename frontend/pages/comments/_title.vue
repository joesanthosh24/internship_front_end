<template>
    <div>
        <h2 style="color: green;">{{ bookTitle }}</h2>
        <ul style="list-style-type: none;">
            <li v-for="comment in filteredComments" :key="comment">
                <h3>{{ comment.commentText }}</h3>
                <p></p>
            </li>
        </ul>
    </div>
</template>

<script>
import ApiService from '../../apiService';

let apiService = new ApiService();

export default {
    data() {
        return {
            filteredComments: this.$store.state.comments,
            bookTitle: this.$route.params.title
        };
    },
    async created() {
        let comments = await apiService.getCommentsByBookId(this.$route.params.title);

        console.log(comments);

        comments.forEach(comment => {
            this.$store.commit('addComment', comment);
        });
    }
}
</script>
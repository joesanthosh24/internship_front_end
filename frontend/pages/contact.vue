<template>
    <div>
        <div class="heading">
            <h1>Contact</h1>
        </div>
        <div class="contact_content">
            <p>Email: books@yahoo.com</p>
            <hr>
            <p>Instagram: @books</p>
            <hr>
            <p>Twitter: @books_tweet</p>
            <hr>
            <p>Phone: 111-111-1111</p>
        </div>
        <div>
            <nuxt-link to="/">
                <div class="button green" id="home">
                    Home
                </div>
            </nuxt-link>
            <nuxt-link v-if="this.$store.state.currentUser._id" to="/books">
                <div class="button grey" id="books">
                    Books
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'contact-layout'
}
</script>
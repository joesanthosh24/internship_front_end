<template>
    <div class="links">
        <nuxt-link to="/">
            <a
                href="#"
                class="button green"
            >
                Home
            </a>
        </nuxt-link>
        <nuxt-link v-if="this.$store.state.currentUser._id" to="/books">
            <a
                href="#"
                class="button grey"
            >
                Books
            </a>
        </nuxt-link>
        <nuxt-link to="/contact">
            <a 
                href="#"
                class="button red"
            >
                Contact Page
            </a>
        </nuxt-link>
        <div v-if="$store.state.userLoggedIn == false">
            <nuxt-link to="/auth/login">
                <button class="button green">
                    Log In
                </button>
            </nuxt-link>
            <nuxt-link to="/auth/signUp">
                <button class="button red">
                    Sign Up
                </button>
            </nuxt-link>
        </div>
        <div v-else>
            <p class="button green">Welcome {{ $store.state.currentUser.username }}</p>
            <button class="button green" @click="logOut">
                Log Out
            </button>
        </div>
    </div>
</template>

<script>
    import ApiService from '../apiService';

    let apiService = new ApiService();

    export default {
        methods: {
            async logOut() {
                await apiService.logOutUser();

                this.$store.commit('changeLoggedInStatus', {
                    loggedInValue: false
                });
                
                this.$store.commit('setCurrentUser', {});
            }
        }
    }
</script>
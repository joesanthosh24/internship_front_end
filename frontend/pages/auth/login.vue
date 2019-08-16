<template>
    <div>
        <h1 class="form_h1">Login Form</h1>
        <form>
            <div class="login_div">
                <label for="userNameField">User Name</label>
                <input type="text" name="username" id="userNameField" v-model="userInfo.username">
            </div>
            <div class="login_div">
                <label for="passwordField">Password</label>
                <input type="password" name="password" id="passwordField" v-model="userInfo.password">
            </div>
            <input type="button" value="Log In" class="button green" style="margin-top: 10px;" @click="login">
        </form>
        <div style="padding-left: 0; display: flex; justify-content: space-between;">
            
                <a class="button red" @click="$router.go(-1)">
                    Go Back
                </a>
            <nuxt-link to="/contact">
                <a class="button grey" style="margin-right: 15px;">
                    Contact
                </a>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import ApiService from '../../apiService';

let apiService = new ApiService();

export default {
    data() {
        return {
            userInfo: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        async login() {
            let resp = await apiService.goToLogin({
                username: this.userInfo.username,
                password: this.userInfo.password
            });

            if(resp) {
                if(resp.email) {
                    this.$store.commit('changeLoggedInStatus', {
                        loggedInValue: true
                    });

                    this.$store.commit('setCurrentUser', resp);
                    this.$router.push('/');
                }
                else {
                    this.$router.push('/auth/login');
                    alert('Wrong Username or Password');
                    this.userInfo = {
                        username: '',
                        password: ''
                    }
                }
            }

            console.log(resp);
        },
        goBack() {
            this.$router.go(-1);
        },
        gotToContacts() {
            this.$router.push('/contacts');
        }
    },
    layout: 'loginAndSignUp'
}
</script>
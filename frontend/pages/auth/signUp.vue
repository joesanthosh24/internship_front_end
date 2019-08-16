<template>
    <div>
        <h1 class="form_h1">Sign Up Form</h1>
        <form>
            <div class="signUp_div">
                <label for="email">Email</label>
                <input type="text" id="email" v-model="userInfo.email">
            </div>
            <div class="signUp_div">
                <label for="userNameField_2">User Name</label>
                <input type="text" id="userNameField_2" v-model="userInfo.username">
            </div>
            <div class="signUp_div">
                <label for="passwordField_2">Password</label>
                <input type="password" id="passwordField_2" v-model="userInfo.password">
            </div>
            <input type="button" value="Sign Up" class="button green" style="margin-top: 10px;" @click.prevent="signUp">
        </form>
        <div class="message" v-if="success == false">
            Missing Fields
        </div>
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
                success: true,
                userInfo: {
                    username: '',
                    password: '',
                    email: ''
                }
            }
        },
        methods: {
            async signUp() {
                // Use ApiService to connect to backend if user info fields have values
                console.log(email);

                if(this.userInfo.email && this.userInfo.password && this.userInfo.username) {
                    this.success = true;

                    let resp = await apiService.goToSignUp({
                        email: this.userInfo.email,
                        username: this.userInfo.username,
                        password: this.userInfo.password
                    });

                    this.$store.commit('changeLoggedInStatus', { loggedInValue: true });
                    this.$store.commit('setCurrentUser', resp);

                    this.$router.push('/');

                    console.log(resp);
                }
                else {
                    this.success = false;
                }
            }
        },
        layout: 'loginAndSignUp'
    }
</script>
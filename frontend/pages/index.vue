<template>
  <div class="container_1">
    <div>
      <!-- <logo /> -->
      <h1 class="title">
        Book X
      </h1>
      <h2 class="subtitle">
        Check Out Your Favourite Books
      </h2>
      <main-links></main-links>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import MainLinks from '~/components/MainLinks.vue';

export default {
  components: {
    Logo,
    mainLinks: MainLinks
  },
  created() {
    console.log(this.$store.state.currentUser);
  }
};
</script>

<style>
.container_1 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url("https://media.wired.com/photos/5be4cd03db23f3775e466767/master/pass/books-521812297.jpg")
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #0aa138;
  letter-spacing: 1px;
  /* border: 1px solid purple;
  border-radius: 8px; */
}

.title:hover {
  color: #0aa115;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #0f2f6b;
  word-spacing: 5px;
  letter-spacing: 2px;
  padding-bottom: 15px;
}

.subtitle:hover {
  color: #84af
}

.links {
  padding-top: 15px;
}

#page_footer {
  display: inline-flexbox;
  margin-top: 450px;
  margin-bottom: 0px;
  color: rgb(9, 13, 209);
  border: 1px solid black;
  background-color: black;
}

input[type=submit] {
  background: transparent;
}

input[type=text] {
  border-radius: 5px;
  border: 1px solid rgb(37, 21, 21);
}
</style>
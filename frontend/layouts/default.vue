<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

/* body {
  background-image: url("https://media.wired.com/photos/5be4cd03db23f3775e466767/master/pass/books-521812297.jpg")
} */

.button {
  display: inline-block;
  border-radius: 5px;
  text-decoration: none;
  padding: 10px 30px;
  font-weight: bolder;
}

.button:hover {
  color: #fff;
}

.green {
  border: 1px solid #136d2e;
  color: #258555;
}

.green:hover {
  background-color: #136d2e;
}

.grey {
  border: 1px solid #162a41;
  color: #35495e;
  margin-left: 15px;
}

.grey:hover {
  background-color: #162a41;
}

.red {
  border: 1px solid rgba(190, 8, 8, 0.959);
  color: rgb(177, 63, 63); 
  margin-left: 15px;
}

.red:hover {
  background-color: rgba(190, 8, 8, 0.959);
}

.blue {
  border: 1px solid rgba(22, 36, 49, 0.959);
  color: rgb(30, 86, 170);
  margin-left: 15px;
}

.blue:hover {
  background-color: rgba(22, 36, 49, 0.959);
}
</style>
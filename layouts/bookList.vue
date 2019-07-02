<template>
    <nuxt/>
</template>

<style>
    html {
        background: white;
    }

    nav ul li {
        list-style-type: none;
        display: inline-block;
        padding: 2px;
        margin-bottom: 3px;
        margin-top: 3px;
        margin-right: 20px;
        color: darkblue;
        font-weight: bold;
    }

    .book_genre {
        border: 1px solid rgba(62, 128, 9, 0.795);
        color: #256;
        border-radius: 3px;
        font-weight: lighter;
        padding: 7px 20px;
    }

    .book_genre:hover {
        /* font-style: italic; */
        font-weight: bold;
        color: #fff;
        background-color: rgba(62, 128, 9, 0.795);
    }

    .book_genre_selected {
        font-weight: bold;
        color: #fff;
        background-color: rgba(62, 128, 9, 0.795);
    }

    .list_column {
        float: left;
        width: 25%;
        padding: 0 10px;
        margin-top: 15px;
        height: 700px;
    }

    /* .list_row {margin: 0 -5px;} */

    .list_row:after {
        content: "";
        display: table;
        clear: both;
    }

    .book_content {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
        padding: 16px;
        text-align: center;
        background-color: rgb(214, 166, 233);
        color: red;
        overflow: hidden;
    }

    .short {
        height: 450px;
    }

    .short {
        margin-bottom: 5px;
    }

    .book_content img {
        width: 100%;
        height: 400px;
    }

    @media screen and (max-width: 600px) {
        .list_column {
            width: 100%;
            display: block;
            margin-bottom: 20px;
        }
    }

    button {
        margin-top: 30px;
    }
</style>
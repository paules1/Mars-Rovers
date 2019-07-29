<template>
    <div class="nav">
        <div class="menu">
            <div class="menu-item">{{title}}</div>
            <div class="menu-item" v-on:click="about()">Technology</div>
            <div class="menu-item" v-on:click="about()">About</div>
        </div>
    </div>
</template>
<script>
export default {
    name: "navBar",
    methods: {
        about: function(){
            window.open('https://github.com/paules1/vue', "_blank");
        }
    },
    props: ['title']
}
</script>
<style lang="scss">
    @import "../scss/_app.scss";
    .nav {
        background: url('/images/splash2.jpg') right #000 no-repeat;
        background-position-y: 10px;
        display: block;
        height: auto;
        width:  auto;
        font-size: 16px;
        letter-spacing: 1px;
        @include boxShadow;
        @media screen and (min-width: 768px) {
            background-position-y: 0px;
        }
    }
    .menu {
        display: flex;
        justify-content: center;
        @media screen and (min-width: 500px) {
            justify-content: center;
        }
        .menu-item {
            padding: 25px;
            color: #fff;
            transition: .5s;
        }
        .menu-item:hover {
            color: $clOrange;
            cursor:pointer;
        }
    }
</style>




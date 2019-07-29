<template>
    <div class="wrapper">
        <nav-bar title="MARS ROVERS"></nav-bar>        
        <filter-bar></filter-bar>
        <rover-cards v-bind:photos="photos"></rover-cards>
    </div>
</template>
<script>
    import NavBar from './NavBar.component.vue';
    import FilterBar from './FilterBar.component.vue';
    import RoverCards from './RoverCards.component.vue';
    import axios from 'axios';
    export default {
        name: "app",
        props: {photos:Array},
        components: {
            NavBar, FilterBar, RoverCards
        },
        methods: {
            loadData: function(data){
                let that = this;   
                this.photos = [];
                let rover = data;
                let sol = 100;   
                let page = 1;
                let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&api_key=iAoGwsYIVcN2V5vC8zzn4YjLDtKLCAF0xauYtp72&page=${page}`;
                axios.get(url).then(result => {
                    if (result.status === 200) {
                        that.photos = result['data']['photos'];
                    }}, error => {
                        console.log(error);
                    });                        
            }
        },
        created() {
            this.filter = '';
            this.photos = [];   
            let that = this;   
            this.$on('FilterChanged', data => {
                that.loadData(data);
            });
            this.loadData('curiosity');
      }
    }
</script>
<style lang="scss">
    @import "../scss/_app.scss";
    .wrapper {
        font-family: $uio-typography-font-family;        
        height: 100vh;
        background-color: #fff;
        width: 100%;
    }
</style>



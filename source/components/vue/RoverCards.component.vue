<template>
    <div class="cards">
        <div class="card" v-for="photo in photos">
            <div class="card-image">
                <img 
                    v-bind:src="photo.img_src" alt="">
            </div>
            <div class="card-text"><h4>Rover: {{photo.rover.name}}</h4></div>
            <div class="card-text">Camera: {{photo.camera.full_name}}</div>
            <div class="card-text">Mission Status: {{photo.rover.status}}</div>
            <div class="card-text">Max Sol: {{photo.rover.max_sol}}</div>
            <div class="card-text card-dates">
                <div>Earth Date: {{photo.earth_date}}</div>
                <div>Last Update: {{photo.rover.max_date}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "roverCards",
    props: {photos:Array},
    data() {
        return {}
    }
}
</script>
<style lang="scss">
    @import "../scss/_app.scss";
    .cards{
        padding: 5px;
    }
    @media screen and (min-width: 40em) {
        .cards {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }

        .card {
            flex: 0 1 calc(50% - 1em);
        }
    }
    @media screen and (min-width: 60em) {

        .card {
            flex: 0 1 calc(25% - 1em);
        }
    }   
    .card {
        @include boxShadow();
        margin-bottom: 10px;
    } 
    .card-image {
        display: flex;
        justify-content: center;
        margin-top: 0px;
        img {
            width: 100%;
            height: 30vh;
            object-fit: cover;
        }
    }
    .card-text {
        padding: 2px 10px 2px 10px;
    }
    .card-dates{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 90%;
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>




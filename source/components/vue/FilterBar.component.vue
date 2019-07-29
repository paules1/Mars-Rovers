<template>
    <div class="filter-bar">
        <div class="input-group">
            <i class="material-icons md-36 md-dark">search</i>
            <input type="text" class="filter-search-input"
                   placeholder="Search" autocomplete="on"
                   list="rover-names"
                   v-model="value"
                   v-on:change="filter">
            <datalist id="rover-names">
                <option value="Curiosity">Mission Status: Active</option>
                <option value="Opportunity">Mission Status: Complete</option>
                <option value="Spirit">Mission Status: Complete</option>
            </datalist>            
        </div>
    </div>
</template>
<script>
export default {
    name: "filterBar",
    props: ['value'],
    data() {
        return {}
    },
    methods: {
        filter:function(){
            this.$parent.$emit('FilterChanged', this.value);
        }
    }
}
</script>
<style lang="scss">
    @import "../scss/_app.scss";
    .filter-bar {
        width: 100%;
        display: flex;
        height: 80px;
        .input-group {
            width: 100%;
            display: flex;
            padding: 20px;
            margin: 5px;
            @include boxShadow();
            i {
                @include inputIconLeft();
            }
        }
    }
    .filter-search-input {
        width: 90%;
        height: 30px;
        font-size: 1em;
        display: block;
        padding: 5px 10px 5px 50px;
        @include noBorder(); 
        text-transform: uppercase;
    }
</style>




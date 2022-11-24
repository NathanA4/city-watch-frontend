<template>
    <div v-if="cityData">
        <p>{{ "Population: " + cityData.population }}</p>
        
        <p>{{ "Weather now: " + cityData.weather.temp + " deg C"}}</p>
    </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: "CityHome",
    data: () => ({}),
    computed: mapGetters({
        cityData: "city/cityData"
    }),
    mounted() {
    }
}
</script>

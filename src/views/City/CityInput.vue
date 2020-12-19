<template>
    <div v-if="cityData">
        Input
        {{ cityData.name }}
    </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: "CityInput",
    data: () => ({}),
    computed: mapGetters({
        cityData: "city/cityData"
    }),
    mounted() {
    }
}
</script>

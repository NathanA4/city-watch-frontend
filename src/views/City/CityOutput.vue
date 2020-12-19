<template>
    <div v-if="cityData">
        Output
        {{ cityData.name }}
    </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
    name: "CityOutput",
    data: () => ({}),
    computed: mapGetters({
        cityData: "city/cityData"
    }),
    mounted() {
    }
}
</script>

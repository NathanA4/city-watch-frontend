<template>
    <v-card-text>
        <h1 class="heading mb-4">About {{ cityData.name }}</h1>
        <v-img class="ma-4" :src="cityData.logo.url" max-height="200" max-width="400" contain></v-img>
        <h2 class="subtitle-1">Motto: {{ cityData.motto }}</h2>
        <div class="mb-4">
            <v-img style="float:right;" class="ma-4" :src="cityData.image.url"  max-width="400"></v-img>
            <div class="text" v-html="cityData.summary"></div>
        </div>
        <div v-for="section in cityData.content" :key="section.title">
            <h2 class="mb-2">{{ section.title }}</h2>
            <div class="text ma-4" v-html="section.content"></div>
            <div class="ma-4" v-for="item in section.items" :key="item.title">
                <h4>{{ item.title }}</h4>
                <div class="ma-4" v-html="item.content"></div>
            </div>
        </div>
    </v-card-text>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "CityAbout",
    computed: mapGetters({
        cityData: "city/cityData"
    }),
}
</script>

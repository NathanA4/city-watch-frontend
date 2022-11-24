<template>
    <app-main-wrapper>
        <app-card v-if="!loading && cityData">
            <v-card-title class="text-uppercase" v-if="cityData.officialName">
                {{ cityData.officialName }}
            </v-card-title>
            <v-card-title class="text-uppercase" v-else>
                {{ cityData.name }}
            </v-card-title>
            <v-img :src="cityData.image.url" max-height="200" v-if="cityData.image"></v-img>
            <v-tabs v-model="tab" color="primary" grow>
                <v-tab :to="`/city/${id}/`" exact>Overview</v-tab>
                <v-tab :to="`/city/${id}/input`" exact>Input</v-tab>
                <v-tab :to="`/city/${id}/output`" exact>Output</v-tab>
                <v-tab :to="`/city/${id}/about`" exact>About</v-tab>
            </v-tabs>
            <router-view name="content"></router-view>
        </app-card>
        <app-card v-else>
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </app-card>
    </app-main-wrapper>
</template>

<script>
import AppMainWrapper from "@/components/AppMainWrapper";
import AppCard from "@/components/AppCard";
import {mapGetters} from "vuex";

export default {
    name: "City",
    props: {
        id: String
    },
    components: {AppCard, AppMainWrapper},
    computed: mapGetters({
        loading: "city/loading",
        cityData: "city/cityData"
    }),
    data: () => ({
        tab: null
    }),
    mounted() {
        this.$store.dispatch('city/getCityById', this.id);
    }
}
</script>

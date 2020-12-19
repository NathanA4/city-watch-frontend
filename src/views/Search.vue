<template>
    <app-main-wrapper>
        <app-card>
            <v-card-title>City Search</v-card-title>
            <v-card-text>
                <v-text-field v-model="searchQuery" prepend-inner-icon="mdi-magnify" label="Search for a city" outlined
                              autofocus
                              autocomplete="off"></v-text-field>
                <v-progress-circular v-if="loading" indeterminate color="primary"></v-progress-circular>
                <v-list v-if="!loading && cities.length > 0" class="ma-0 pa-0" elevation="0" tile two-line>
                    <v-list-item v-for="city in cities" :to="'/city/' + city.id" :key="city.id">
                        <v-list-item-content>
                            <v-list-item-title>{{ city.name }}</v-list-item-title>
                            <v-list-item-subtitle>{{ city.lat }}N, {{ city.lon }}W</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-icon>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>
                <div v-else-if="!loading && cities.length === 0">No cities found</div>
            </v-card-text>
        </app-card>
    </app-main-wrapper>
</template>

<script>
import AppMainWrapper from "@/components/AppMainWrapper";
import AppCard from "@/components/AppCard";
import {mapGetters} from "vuex";

export default {
    name: "Search",
    components: {AppCard, AppMainWrapper},
    computed: {
        ...mapGetters({
            allCities: "city/allCities",
            loading: 'city/loading'
        }),
        cities() {
            return this.allCities.filter(city => city.name.trim().toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    },
    data: () => ({
        searchQuery: '',
    }),
    mounted() {
        this.$store.dispatch("city/getAllCities");
    }
}
</script>

<style scoped>

</style>

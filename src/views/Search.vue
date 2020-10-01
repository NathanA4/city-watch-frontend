<template>
    <app-main-wrapper>
        <app-card>
            <v-card-title>City Search</v-card-title>
            <v-card-text>
                <v-text-field prepend-inner-icon="mdi-magnify" label="Search for a city" outlined autofocus
                              autocomplete="off"></v-text-field>
                <v-list class="ma-0 pa-0" elevation="0" tile two-line>
                    <v-list-item to="/city/oshawa">
                        <v-list-item-content>
                            <v-list-item-title>Oshawa</v-list-item-title>
                            <v-list-item-subtitle>Oshawa, Ontario, Canada</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-icon>
                            <v-icon>mdi-chevron-right</v-icon>
                        </v-list-item-icon>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </app-card>
    </app-main-wrapper>
</template>

<script>
import AppMainWrapper from "@/components/AppMainWrapper";
import AppCard from "@/components/AppCard";

export default {
    name: "Search",
    components: {AppCard, AppMainWrapper}
}
</script>

<style scoped>

</style>

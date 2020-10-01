<template>
    <app-main-wrapper>
        <app-card>
            <v-card-title class="text-uppercase">{{ id }}</v-card-title>
            <v-tabs v-model="tab" color="primary" grow>
                <v-tab :to="id + '/'">Overview</v-tab>
                <v-tab :to="id + '/input'">Input</v-tab>
                <v-tab :to="id + '/output'">Output</v-tab>
            </v-tabs>
            <router-view name="content"></router-view>
        </app-card>
    </app-main-wrapper>
</template>

<script>
import AppMainWrapper from "@/components/AppMainWrapper";
import AppCard from "@/components/AppCard";

export default {
    name: "City",
    props: {
        id: String
    },
    components: {AppCard, AppMainWrapper},
    data: () => ({
        tab: null
    })
}
</script>

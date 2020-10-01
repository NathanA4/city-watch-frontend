<template>
    <app-main-wrapper>
        <app-card>
            <v-card-title>Getting Started</v-card-title>
            <v-card-text>
                To get started, click below and search for your city!
            </v-card-text>
            <v-card-actions>
                <v-btn color="primary" block to="/search">Lookup City</v-btn>
            </v-card-actions>
        </app-card>
        <app-card>
            <v-img max-height="300" :src="require('@/assets/skyline.jpg')"></v-img>
            <v-card-title>Welcome to CityWatch!</v-card-title>
            <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat ullamcorper laoreet. Donec
                ultricies aliquam neque. Donec finibus faucibus urna, ac volutpat nunc suscipit ut. Etiam enim lacus,
                ornare ut risus non, pharetra consequat magna. Sed ac nisi tristique, dapibus mauris sed, accumsan
                felis. Morbi non massa elementum nisi viverra tincidunt ac ultrices elit.
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text to="/about">Learn More</v-btn>
            </v-card-actions>
        </app-card>
    </app-main-wrapper>
</template>

<script>

import AppMainWrapper from "@/components/AppMainWrapper";
import AppCard from "@/components/AppCard";

export default {
    name: 'Home',
    components: {AppCard, AppMainWrapper},
}
</script>

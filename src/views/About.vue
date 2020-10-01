<template>
    <app-main-wrapper>
        <app-card>
            <v-img max-height="300" :src="require('@/assets/skyline.jpg')"></v-img>
            <v-card-title>What is CityWatch?</v-card-title>
            <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat ullamcorper laoreet. Donec
                ultricies aliquam neque. Donec finibus faucibus urna, ac volutpat nunc suscipit ut. Etiam enim lacus,
                ornare ut risus non, pharetra consequat magna. Sed ac nisi tristique, dapibus mauris sed, accumsan
                felis. Morbi non massa elementum nisi viverra tincidunt ac ultrices elit.
            </v-card-text>
        </app-card>
    </app-main-wrapper>
</template>

<script>
import AppMainWrapper from "@/components/AppMainWrapper";
import AppCard from "@/components/AppCard";

export default {
    name: "About",
    components: {AppCard, AppMainWrapper}
}
</script>

<style scoped>

</style>

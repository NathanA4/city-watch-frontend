<template>
    <v-main class="back">
        <v-responsive class="mx-auto" max-width="1200" style="overflow: visible;">
            <slot></slot>
        </v-responsive>
    </v-main>
</template>

<script>
export default {
    name: "app-main-wrapper"
}
</script>

<template>
    <v-app class="ma-0 pa-0">
        <v-app-bar app color="primary" dark>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-icon large left>mdi-city</v-icon>
            <v-toolbar-title class="display-1 text-uppercase">
                City<span class="font-weight-thin">Watch</span>
            </v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav>
                <v-list-item to="/">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/about">
                    <v-list-item-icon>
                        <v-icon>mdi-information</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>About</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/search">
                    <v-list-item-icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Search</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-group>
                    <template v-slot:activator>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-city</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Favourite Cities</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                    <v-list-item to="/city/oshawa">
                        <v-list-item-content>
                            <v-list-item-title>Oshawa</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
            </v-list>
        </v-navigation-drawer>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </v-app>
</template>

<script>

export default {
    name: 'App',
    components: {},
    data: () => ({
        drawer: false
    }),
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition-duration: 0.2s;
    transition-property: opacity;
    transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>

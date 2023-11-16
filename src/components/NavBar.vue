<template>
    <div style="display: flex; justify-content: space-around; height: 60px;" dir="rtl">
        <div style="z-index: 1;"><img class="logo ml-8" src="photo/logo/logo.png" alt="" /></div>
        <nav dir="rtl" class="navbar navbar-expand-lg navbar-light bg-light"
            style="background-color: transparent !important; z-index: 1; padding-top: 25px;">
            <v-menu offset-y style=" ">
                <template v-slot:activator="{ on }">
                    <button v-on="on" class="navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span style="z-index: 1;" class="navbar-toggler-icon"></span>
                    </button>
                </template>
                <v-list dir="rtl" style="padding: 0; width: 260px; background-color: gray !important;">
                    <v-list-item v-for="(item, index) in links" :key="index">
                        <v-list-item-action>
                            <a :class="[{ 'active-item': isActive(item.route) }, getButtonClass(item.route)]"
                                class="nav-link navlink" :href="item.route">{{ item.text }}</a>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
                <div class="mr-8" fixed dir="rtl"
                    style="margin-right: 0 !important; padding-right: 47px !important;  background-color: gray;">
                    <router-link to="/SearchResult" custom v-slot="{ navigate }">
                        <v-btn icon class="buttons" @click="navigate" role="link">
                            <v-icon class="icon">mdi-magnify</v-icon>
                        </v-btn>
                    </router-link> <br>
                    <v-btn icon class="buttons">
                        <v-icon class="icon">EN</v-icon>
                    </v-btn>
                </div>
            </v-menu>

            <div style="left: 220px; position: relative;" class="collapse navbar-collapse justify-content-center"
                id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item" v-for="(item, index) in links" :key="index" style="font-family: 'ExpoBook';">
                        <a :class="[{ 'active-item': isActive(item.route) }, getButtonClass(item.route)]"
                            class="nav-link navlink" :href="item.route">{{ item.text }}</a>
                    </li>
                </ul>
                <div class="mr-8" fixed>
                    <router-link to="/SearchResult" custom v-slot="{ navigate }">
                        <v-btn icon class="buttons" @click="navigate" role="link" style="margin-left: 5px;">
                            <v-icon class="icon">mdi-magnify</v-icon>
                        </v-btn>
                    </router-link>
                    <v-btn icon class="buttons">
                        <v-icon class="icon">EN</v-icon>
                    </v-btn>
                </div>
            </div>
        </nav>
    </div>
</template>
  
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
export default {
    data() {
        return {
            drawer: false,
            links: [
                { text: "الرئيسية", route: "/" },
                { text: "من نحن؟", route: "/WhoWe" },
                { text: "المنتجات", route: "/ProductPage" },
                { text: "الفعاليات", route: "/EventS" },
                { text: "الألبومات", route: "/StodiO" },
                { text: "الوظائف", route: "/JobS" },
                { text: "تواصل معنا", route: "/ContactUs" },
            ],
            snackbar: false,
            activeRoute: '',
        };
    },
    computed: {
        isMobile() {
            return (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm);
        },
    },
    methods: {
        isActive(route) {
            return this.activeRoute === route;
        },
        getButtonClass(route) {
            return {
                'active--item': this.activeRoute === route,
                'white--text': this.activeRoute === '/',
                'black--text': this.activeRoute === '/WhoWe' || this.activeRoute === '/ProductPage' || this.activeRoute === '/EventS' || this.activeRoute === '/StodiO' || this.activeRoute === '/JobS' || this.activeRoute === '/ContactUs'
                    || this.activeRoute === '/JobDetails' || this.activeRoute === '/JobDetails2' || this.activeRoute === '/EventDetails' || this.activeRoute === '/SearchResult',
            };
        },
    },
    mounted() {
        this.activeRoute = window.location.pathname;
    },
};
</script>
  
<style>
@font-face {
    font-family: "ExpoBook";
    src: url(/public/fonts/ExpoArabic/ExpoArabicBook/ExpoArabicBook.ttf);
}

.logo {
    position: relative;
    background-image: url("/public/photo/logo/BG.png");
    padding: 10px 40px;
    background-position: 19px -8px;
}

.v-main {
    padding: 0 !important;
}

.icon {
    font-size: 15px !important;
    color: black;
    background-color: #F3F3F3;
    border-radius: 6px;
    padding: 5px 7px 2px 7px;
    min-width: 35px;
    font-family: 'ExpoBook' !important;
}

.buttons {
    font-family: 'ExpoBook';
}

.buttons:hover,
.navlink:hover {
    color: #00a651 !important;
}

s .v-btn:before {
    background-color: transparent;
    color: #00a651;
}

.white--text {
    color: white !important;
}

.black--text {
    color: black !important;
}

.active--item.nav-link {
    color: #6fcd9c !important;
}

/* .v-menu__content {
    z-index: 1000;
    position: absolute;
    background-color: gray;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    min-width: 86px !important;
    top: 0px !important;
    transform-origin: left top !important;
    height: -webkit-fill-available;
    left: unset !important;
}

[dir="rtl"] .v-menu__content {
    left: 0;
    right: auto;
}

.v-list-item__content {
    padding: 0;
}

.v-list-item__title {
    font-family: 'ExpoBook';
}

.v-menu__activator {
    cursor: pointer;
}

.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: rgba(0, 0, 0, 0.87);
    background-color: gray;

} */
</style>
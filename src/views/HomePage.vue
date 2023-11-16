<template>
    <v-app>
        <div style="position: relative; bottom: 60px;">
            <v-carousel height="105vh" hide-delimiters>
                <v-carousel-item v-for="(item, index) in carouselItems" :key="index">
                    <v-img :src="item" alt="Carousel Image" class="carousel-image">
                        <v-container fill-height fluid pa-0 ma-0>
                            <v-layout fill-height align-center>
                                <v-flex xs12 style="text-align: center;">
                                    <v-card class="pa-2 cardColor">
                                        <span
                                            style="font-family: 'ExpoBook'; font-size: xx-large !important; line-height: 3rem;"
                                            class="white--text text-center">
                                            أجبان وألبان جمال الدين أبو عيطة
                                            <br />
                                            للطعم ... أصول
                                        </span>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-img>
                </v-carousel-item>
            </v-carousel>

            <div class="overlay-container" style="position: relative;">
                <img src="photo/background/Milk Splash.png" alt="Overlay Image" class="overlay-image" />
            </div>
        </div>
        <br>

        <v-content>
            <v-container fluid>
                <v-row dir="rtl" class="container" style="margin: auto;">
                    <v-col cols="12" sm="12" md="6">
                        <div class="bef" style="text-align: right;" v-if="loaded">
                            <p class="aboutCom" style="margin-left: -100px;"> {{ textData ? textData.title1 : '' }} </p>
                            <br>
                            <h4 class="son son2"> {{ textData ? textData.title2 : '' }}</h4>
                            <br>
                            <div style=" justify-content: flex-start; ">
                                <p class="pargraph"> {{ textData ? textData.paragraph : '' }} </p>
                            </div>
                            <div>
                                <router-link to="/WhoWe" custom v-slot="{ navigate }">
                                    <v-btn color="#00a651" class="white--text read" @click="navigate" role="link">
                                        إقرأ المزيد
                                    </v-btn>
                                </router-link>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="12" md="6">
                        <div style="display: flex; justify-content: center; margin-right: 70px;">
                            <img src="photo/product/milk.png" alt="">
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>

        <v-container fluid class="mt-10" style="background-color: #f3f3f3;padding: 2% 12%; text-align: right;">
            <v-row dir="rtl" justify="space-between" align="center" class="px-4 py-2">
                <v-col cols="12" sm="12" md="6" v-if="loadedsign">
                    <h4 class="aboutCom2" style="margin-left: 25%;">{{ signData ? signData.title : '' }}</h4>
                    <p class="son">{{ signData ? signData.paragraph : '' }}</p>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="d-flex justify-sm-end justify-md-between"
                    style=" margin-left: -90px;">
                    <img class="grouplogo gl2" src="photo/logo/Group 2.png" alt="">
                    <img class="grouplogo" src="photo/logo/Group 98.png" alt="">
                </v-col>
            </v-row>
        </v-container>

        <div style=" padding: 5% 13%; text-align: right;" class="text-right">
            <div v-if="loadeduniq">
                <h4 style="position: relative;" class="aboutCom4">{{ uniqData ? uniqData.title : '' }}</h4> <br>
                <p class="son">{{ uniqData ? uniqData.paragraph : '' }}</p>
            </div>
            <v-container style="padding: 0;" class="ml-2">
                <v-layout wrap>
                    <v-flex xs12 sm6 md4 lg3 v-for="(icon, index) in icons" :key="index">
                        <v-card-actions class="justify-space-between">
                            <v-card width="300" height="250px" flat class="text-center pa-5"
                                :style="{ 'background-color': backgrond[index] }">
                                <v-responsive>
                                    <div class="mt-2"
                                        style="border-radius: 100%; width: 100px; height: 90px; display: inline-block;"
                                        :style="{ 'background-color': colors[index] }">
                                        <img style="margin-top: 22%;" :src="icon.src">
                                    </div>
                                </v-responsive>
                                <v-card-text class="mt-4">
                                    <div style="font-family: 'ExpoBook';">{{ icon.title }}</div>
                                    <div style="font-family: 'ExpoLight';">{{ icon.paragraph }}</div>
                                </v-card-text>
                            </v-card>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>

        <div style=" padding: 2% 13%; text-align: right;">
            <div style="display: flex; justify-content: space-between;">
                <div class="ml-5">
                    <router-link to="/ProductPage" custom v-slot="{ navigate }">
                        <v-btn class="all mt-5" @click="navigate" role="link">
                            عرض الجميع
                        </v-btn>
                    </router-link>
                </div>
                <div>
                    <h4 style="position: relative;" class=" aboutCom3">{{ proData ? proData.title : '' }}</h4> <br>
                    <p class="son">{{ proData ? proData.paragraph : '' }}</p>
                </div>
            </div>
            <v-container style="padding: 0;">
                <v-layout wrap style="justify-content: space-between;">
                    <v-flex class="d-flex justify-start " xs12 sm6 md3 lg2 v-for="(product, index) in products"
                        :key="product.src">
                        <v-card-actions class="justify-space-between">
                            <v-card flat class="text-center pt-3 rounded-lg" style="height: 280px; width: 180px;"
                                :style="'border: 1px solid #d9d9d9;'">
                                <v-responsive class="pt-4 pb-4">
                                    <img class="proguctImg" :src="product.src"
                                        :style="index === 0 || index === 3 ? 'padding-bottom: 30px;' : ''">
                                </v-responsive>
                                <v-card-text style="padding: 0 !important;" dir="rtl">
                                    <div style="font-family: 'ExpoBook';">{{ product.title }}</div>
                                    <div style="font-family: 'ExpoLight'; color: #00a651">{{ product.size }}</div>
                                </v-card-text>
                            </v-card>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>

        <div
            style="display: flex; justify-content: end; padding: 2% 13%; margin: 5% 0; background-color: #2e3092; height: 90px;">
            <div style="display: flex; color: white; font-family: 'ExpoBook'; font-size: 25px;">
                <div>(ISO 22000)</div>
                <div class="ml-5">
                    <h4> منتجات الشـــــركة حاصلة على شهادة الجودة العالمية</h4>
                </div>
            </div>
            <div class="ml-10" style="position: relative; bottom: 62px;">
                <img src="photo/icon/iso.png" alt="">
            </div>
        </div>

        <div style=" padding: 2% 13%; text-align: right;">
            <div style="display: flex; justify-content: space-between;">
                <div class="ml-5">
                    <router-link to="/EventS" custom v-slot="{ navigate }">
                        <v-btn class="all mt-5 ml-5" @click="navigate" role="link">
                            عرض الجميع
                        </v-btn>
                    </router-link>
                </div>
                <div>
                    <h4 style="position: relative; margin-left: 50px;" class="aboutCom3">{{ eventData ? eventData.title : ''
                    }}</h4>
                    <br>
                    <p class="son">{{ eventData ? eventData.paragraph : '' }}</p>
                </div>
            </div>
            <v-container>
                <v-layout wrap>
                    <v-flex xs12 sm6 md4 lg4 v-for="event in events" :key="event.title">
                        <v-card-actions class="justify-space-between">
                            <v-card flat class="ml-5" width="1000">
                                <v-responsive class="pt-4" style="width: 500px;">
                                    <img style="width: -webkit-fill-available;" :src="event.src">
                                </v-responsive>
                                <v-card-text class="event-text">
                                    <div class="text-right">
                                        <div style="display: flex; justify-content: right;">
                                            <div class="pa-2 mt-1 event-date">{{ event.date }}</div>
                                            <v-icon class="calendar pa-2">mdi-calendar-month-outline</v-icon>
                                        </div>
                                        <div class="event-title pt-2 pb-2">{{ event.title }}</div>
                                        <div class="event-paragraph">{{ event.paragraph }}</div>
                                    </div>
                                    <div class="text-center pb-1 pt-5">
                                        <router-link to="/EventDetails" custom v-slot="{ navigate }">
                                            <v-btn icon class="pa-2" @click="navigate" role="link">
                                                <v-icon class="arrow pa-4">mdi-arrow-left</v-icon>
                                            </v-btn>
                                        </router-link>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>

        <div style=" padding: 2% 13%; text-align: right;">
            <div style="display: flex; justify-content: space-between;">
                <div class="ml-5">
                    <router-link to="/StodiO" custom v-slot="{ navigate }">
                        <v-btn class="all mt-5 ml-5" @click="navigate" role="link">
                            عرض الجميع
                        </v-btn>
                    </router-link>
                </div>
                <div>
                    <h4 style="position: relative; margin-left: 50px;" class="aboutCom2">{{ stidoData ? stidoData.title : ''
                    }}</h4> <br>
                    <p class="son">{{ stidoData ? stidoData.paragraph : '' }}</p>
                </div>
            </div>
            <v-container>
                <v-layout wrap>
                    <v-flex xs12 sm6 md4 lg4 v-for="photo in photos" :key="photo.src">
                        <v-card-actions class="justify-space-between">
                            <v-card flat class="ml-5" width="1000">
                                <v-responsive class="pt-4" style="width: 500px;">
                                    <img style="width: -webkit-fill-available;" :src="photo.src">
                                </v-responsive>
                            </v-card>
                        </v-card-actions>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>

    </v-app>
</template>

<script>
import { firebase } from "@/fb";
import "firebase/firestore";

export default {
    data() {
        return {
            carouselItems: [],
            colors: ['#ffe3e5', '#ccffe6', '#fffcc5', '#ebebff'],
            backgrond: ['#ffeeef', '#eafff5', '#ffffe9', '#f3f3ff'],
            icons: [],
            products: [],
            events: [],
            photos: [],

            textData: null,
            signData: null,
            uniqData: null,
            proData: null,
            eventData: null,
            stidoData: null,
            loaded: false,
            loadedsign: false,
            loadeduniq: false,
            loadedpro: false,
            loadedevent: false,
            loadedstido: false,

            iconTitle: "",
            iconDescription: "",
        };
    },
    metaInfo() {
        return {
            title: 'HomePage',
            titleTemplate: '%s | Titulo',
            meta: [
                { charset: 'utf-8' },
                { equiv: 'Content-Type', content: 'text/html' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }

            ]
        }
    },
    async mounted() {
        this.getTextDataFromFirestore();
        this.fetchCarouselItems();
    },
    methods: {
        async fetchCarouselItems() {
            const collectionName = "HomePage";
            const collectionName2 = "ProductPage";
            const collectionName3 = "EventS";
            const collectionName4 = "StodiO";
            const documentId = "04Ds5kD8YQ9bjiIQZWTe";
            const documentId2 = "iEKroEcyvyQ6ZGxzszbS";
            const documentId3 = "5eiUDuMOdjOhQBREIEHO";
            const documentId4 = "2KCze4akCEV0QEZe9oYj";
            const documentId5 = "NwUYIAPFY3sFl4881pk9";
            const arrayName = "headimage";
            const arrayName2 = "images";
            const arrayName3 = "titles";
            const arrayName4 = "paragraph2";
            const arrayName5 = "names";
            const arrayName6 = "size";
            const arrayName7 = "paragraphs";
            const arrayName8 = "dates";


            firebase.firestore()
                .collection(collectionName)
                .doc(documentId)
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        const headimage = doc.data()[arrayName];
                        for (let i = 0; i < headimage.length; i++) {
                            this.carouselItems.push({
                                src: headimage[i],
                            });
                        }
                    } else {
                        console.log("Document not found!");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching document:", error);
                });

            firebase.firestore()
                .collection(collectionName)
                .doc(documentId2)
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        const images = doc.data()[arrayName2];
                        const titles = doc.data()[arrayName3];
                        const paragraph2 = doc.data()[arrayName4];
                        for (let i = 0; i < images.length; i++) {
                            this.icons.push({
                                src: images[i],
                                title: titles[i],
                                paragraph: paragraph2[i],
                            });
                        }
                    } else {
                        console.log("Document not found!");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching document:", error);
                });

            firebase.firestore()
                .collection(collectionName2)
                .doc(documentId3)
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        const images = doc.data()[arrayName2];
                        const names = doc.data()[arrayName5];
                        const size = doc.data()[arrayName6];
                        for (let i = 0; i < images.length && i < 5; i++) {
                            this.products.push({
                                src: images[i],
                                title: names[i],
                                size: size[i],
                            });
                        }
                    } else {
                        console.log("Document not found!");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching document:", error);
                });

            firebase.firestore()
                .collection(collectionName3)
                .doc(documentId4)
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        const images = doc.data()[arrayName2];
                        const titles = doc.data()[arrayName3];
                        const paragraphs = doc.data()[arrayName7];
                        const dates = doc.data()[arrayName8];
                        for (let i = 0; i < images.length && i < 3; i++) {
                            this.events.push({
                                date: dates[i],
                                src: images[i],
                                title: titles[i],
                                paragraph: paragraphs[i],
                            });
                        }
                    } else {
                        console.log("Document not found!");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching document:", error);
                });

            firebase.firestore()
                .collection(collectionName4)
                .doc(documentId5)
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        const images = doc.data()[arrayName2];
                        for (let i = 0; i < images.length && i < 3; i++) {
                            this.photos.push({
                                src: images[i],
                            });
                        }
                    } else {
                        console.log("Document not found!");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching document:", error);
                });
        },
        getTextDataFromFirestore() {
            const db = firebase.firestore();
            const textRef = db.collection("HomePage").doc("phfzqg82dluD8jVE4R65");
            const signRef = db.collection("HomePage").doc("oV2OYEFutF82jpAUJ2jP");
            const uniqRef = db.collection("HomePage").doc("iEKroEcyvyQ6ZGxzszbS");
            const proRef = db.collection("HomePage").doc("mwRkCu0uZDhEPa8hD5dE");
            const eventRef = db.collection("HomePage").doc("FPzPW6FALMP3qD7mnYXY");
            const stidoRef = db.collection("HomePage").doc("wm98g0XtTTrpu3U98qmg");

            Promise.all([
                textRef.get(),
                signRef.get(),
                uniqRef.get(),
                proRef.get(),
                eventRef.get(),
                stidoRef.get(),
            ])
                .then((docs) => {
                    this.textData = docs[0].exists ? docs[0].data() : {};
                    this.signData = docs[1].exists ? docs[1].data() : {};
                    this.uniqData = docs[2].exists ? docs[2].data() : {};
                    this.proData = docs[3].exists ? docs[3].data() : {};
                    this.eventData = docs[4].exists ? docs[4].data() : {};
                    this.stidoData = docs[5].exists ? docs[5].data() : {};

                    this.loaded = true;
                    this.loadedsign = true;
                    this.loadeduniq = true;
                    this.loadedpro = true;
                    this.loadedevent = true;
                    this.loadedstido = true;

                    this.$emit('data-fetched');
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                    this.loaded = true;
                    this.loadedsign = true;
                    this.loadeduniq = true;
                    this.loadedpro = true;
                    this.loadedevent = true;
                    this.loadedstido = true;
                });
        },

    }
};
</script>
  
<style>
@font-face {
    font-family: 'ExpoLight';
    src: url(/public/fonts/ExpoArabic/ExpoArabicLight/ExpoArabicLight.ttf);
}

@font-face {
    font-family: "ExpoBook";
    src: url(/public/fonts/ExpoArabic/ExpoArabicBook/ExpoArabicBook.ttf);
}

.carousel-image {
    width: 100%;
    height: 100%;
}

.overlay-image {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 500px;
}

.bef .aboutCom::before,
.aboutCom2::before,
.aboutCom3::before,
.aboutCom4::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 15%;
    width: 32px;
    height: 2px;
    background-color: currentColor;
}

.aboutCom2::before {
    right: 33%;
}

.aboutCom3::before {
    right: 65%;
}

.aboutCom4::before {
    right: 10%;
}

.aboutCom,
.aboutCom1,
.aboutCom2,
.aboutCom3,
.aboutCom4 {
    color: #00a651;
    font-family: 'ExpoLight';
    font-size: 20px;
}

.son {
    font-size: 32px;
    font-family: 'ExpoBook', sans-serif;
}

.son2 {
    max-width: 90%;
}

.pargraph {
    position: relative;
    padding-bottom: 1rem;
    font-size: 17px;
    font-family: 'ExpoLight', sans-serif;
    bottom: 10px;
    /* max-width: 600px; */
    line-height: 1.5;
    max-width: 600px;
    justify-content: flex-start;
}

.bef {
    background-image: url("/public/photo/background/cow3.png");
    background-size: 300px;
    /* background-position-x: 20px; */
    background-position-y: 120px;
    line-height: 1.1;
    /* text-align: right; */
}

.read {
    padding: 20px 25px !important;
    font-size: 15px !important;
    border-radius: 10px;
    font-family: 'ExpoLight';
}

.read:hover {
    background-color: red !important;
}

.proguctImg:hover {
    transform: scale(1.1);
}

.grouplogo {
    background-color: white;
    margin: 0 10px;
    padding: 20px 0;
    border-radius: 10px;
}

.gl2 {
    padding: 20px 20px;
}

.cardColor {
    background-color: rgba(255, 255, 255, 0) !important;
    box-shadow: none !important;
}

.all {
    box-shadow: none;
    font-family: 'ExpoBook';
    font-weight: bold;
    color: #00a651 !important;
    border: 2px solid #00a651;
    border-radius: 10px;
    background-color: white !important;
    padding: 15px !important;
}

.all:hover {
    background-color: #00a651 !important;
    color: white !important;
}

.calendar {
    color: #00a651 !important;
    background-color: white;
    /* padding: 5px; */
    border-radius: 100%;
}

.arrow {
    color: white !important;
    background-color: #00a651;
    border-radius: 100%;
}

.event-text {
    background-color: #f3f3f3;
    position: relative;
    bottom: 7px;
    border-bottom-left-radius: 10px !important;
    border-bottom-right-radius: 10px !important;
}

.event-title {
    font-family: 'ExpoBook';
    font-weight: bold;
}

.event-paragraph,
.event-date {
    font-family: 'ExpoLight';
}

.aboutCom {
    position: relative;
}

.aboutCom2 {
    position: relative;
}

.v-application .justify-sm-end {
    justify-content: unset !important;
}
</style>
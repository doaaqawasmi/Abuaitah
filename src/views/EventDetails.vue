<template>
    <div dir="rtl">
        <div class="EventdPage-title" style="text-align: center; height: 450px;"> </div>
        <div>
            <div style="background-color: #f3f3f3;" dir="rtl">
                <div class="container" style="font-family: 'ExpoBook';">
                    <v-icon style="color: #989da0;">mdi-home-outline</v-icon>
                    <router-link to="/" custom v-slot="{ navigate }" style="margin: auto;">
                        <v-btn text @click="navigate" role="link">
                            <h4 style="color: #989da0; white-space: break-spaces;"> الرئيسية </h4>
                        </v-btn>
                    </router-link>
                    <v-icon style="color: #989da0; font-size: 12px;">mdi-less-than</v-icon>
                    <router-link to="/EventS" custom v-slot="{ navigate }" style="margin: auto;">
                        <v-btn text @click="navigate" role="link">
                            <h4 style="color: #989da0; white-space: break-spaces;">الفعاليات</h4>
                        </v-btn>
                    </router-link>
                    <v-icon style="color: #989da0; font-size: 12px;">mdi-less-than</v-icon>
                    <v-btn text @click="navigate" role="link">
                        <h4 style="color: #00a651;">تفاصيل الفعالية</h4>
                    </v-btn>
                </div>
            </div>
        </div>


        <div dir="rtl" class="container pt-15 mb-5">
            <div class="mb-10">
                <h3 class="font">{{ textData ? textData.title : '' }}</h3>
                <div style="display: flex; justify-content: right;">
                    <v-icon class="calendar cal2 mt-1">mdi-calendar-month-outline</v-icon>
                    <div class="pa-2 mt-1 event-date">{{ textData ? textData.date : '' }}</div>
                </div>
                <p v-for="index in 5" :key="index">{{ textData ? textData['paragraph' + index] : '' }}</p>
            </div>
            <hr color="#f6f6f6">

            <div style="display: flex;" class="mt-5">
                <h4 class="font pl-10" style="font-size: 15px; line-height: 30px;">مشاركة الوظيفة</h4>
                <v-btn v-for="(social, index) in socialMedia" :key="index" class="social social3">
                    <img :src="social.image" :alt="social.name">
                </v-btn>
            </div>

            <div class="mt-16">
                <div style="padding-top: 3%;">
                    <h4 style="position: relative;" class=" aboutCom4">فعاليات أخرى</h4>
                    <p class="son">المزيد من الفعاليات</p>
                </div>

                <v-layout wrap>
                    <v-flex xs12 sm6 md4 lg4 v-for="event in events" :key="event.src">
                        <v-card-actions class="justify-space-between">
                            <v-card flat class="ml-5" width="1000">
                                <v-responsive class="pt-4" style="width: 500px;">
                                    <img style="width: -webkit-fill-available;" :src="event.src">
                                </v-responsive>
                                <v-card-text class="event-text">
                                    <div class="text-right">
                                        <div style="display: flex; justify-content: right;">
                                            <v-icon class="calendar pa-2">mdi-calendar-month-outline</v-icon>
                                            <div class="pa-2 mt-1 event-date">{{ event.date }}</div>
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
            </div>
        </div>

    </div>
</template>
<script>
import { firebase } from "@/fb";
import "firebase/firestore";
export default {
    data() {
        return {
            events: [],
            socialMedia: [
                { name: 'Twitter', image: 'photo/icon/twitter2.png' },
                { name: 'Instagram', image: 'photo/icon/instagram2.png' },
                { name: 'Facebook', image: 'photo/icon/facebook2.png' },
                { name: 'YouTube', image: 'photo/icon/youtube2.png' },
            ],
            textData: null,
            loaded: false,
        }
    },

    methods: {
        getTextDataFromFirestore() {
            const db = firebase.firestore();
            const textRef = db.collection("EventDetails").doc("Xbju0RqYhXCFBQbZLtMy");

            textRef
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        this.textData = doc.data();
                    } else {
                        console.log("Document not found!");
                    }
                    this.loaded = true;
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    this.loaded = true;
                });
        },

        // async fetchEventData2() {
        //     const docId = "2KCze4akCEV0QEZe9oYj";
        //     const docRef = firebase.firestore().collection("EventS").doc(docId);

        //     try {
        //         const doc = await docRef.get();
        //         if (doc.exists) {
        //             const data = doc.data();
        //             const eventIndices = [0, 1, 2];
        //             eventIndices.forEach((index, i) => {
        //                 this.events[index].date = data[`date${i + 1}`];
        //                 this.events[index].title = data[`title${i + 1}`];
        //                 this.events[index].paragraph = data[`paragraph${i + 1}`];
        //             });
        //         } else {
        //             console.log("Document not found!");
        //         }
        //     } catch (error) {
        //         console.error("Error fetching data:", error);
        //     }
        // },
        async fetchCarouselItems() {
            const collectionName = "EventS";
            const documentId = "2KCze4akCEV0QEZe9oYj";
            const arrayName = "dates";
            const arrayName2 = "images";
            const arrayName3 = "paragraphs";
            const arrayName4 = "titles";

            firebase.firestore()
                .collection(collectionName)
                .doc(documentId)
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        const images = doc.data()[arrayName2];
                        const titles = doc.data()[arrayName4];
                        const paragraphs = doc.data()[arrayName3];
                        const dates = doc.data()[arrayName];
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
        }
    },

    async created() {
        await this.fetchCarouselItems();
    },

    async mounted() {
        this.getTextDataFromFirestore();
        await this.fetchEventData2();
    },
}
</script>
<style>
.EventdPage-title {
    background-image: url('/public/photo/background/IMG_5096.png');
    background-size: cover;
    height: 100%;
}

p {
    font-family: 'ExpoBook';
    font-size: medium;
    /* width: 80%; */
}

.background-div {
    height: 100vh;
    background-image: url('/public/photo/background/IMG_5096.png');
}

.cal2 {
    border: 1px solid;
    width: 35px;
    height: 35px;
}
</style>
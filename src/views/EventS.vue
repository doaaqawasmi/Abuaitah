<template>
    <div>
        <div class="EventPage-title" style="text-align: center; height: 450px;">
            <div class="mr-7">
                <h4 class="whotext">
                    الفعاليات
                </h4>
            </div>
        </div>
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
                    <v-btn text @click="navigate" role="link">
                        <h4 style="color: #00a651;">الفعاليات</h4>
                    </v-btn>
                </div>
            </div>
        </div>

        <div class="container mt-15" style=" text-align: right;" dir="rtl">
            <div style="display: flex; justify-content: space-between;">
                <div class="mr-5">
                    <h4 style="position: relative; margin-left: 50px;" class="aboutCom3">{{ textData ? textData.title : ''
                    }}</h4>
                    <br>
                    <p class="son">{{ textData ? textData.paragraph : '' }}</p>
                </div>
                <div dir="rtl" style="margin-left: 20px;">
                    <v-select class="stodioselsect" v-model="sortType" :items="sortOptions" label="عرض حسب:"
                        @change="sortedEvents"></v-select>
                </div>
            </div>
            <v-container>
                <v-layout wrap>
                    <v-flex xs12 sm6 md4 lg4 v-for="event in sortedEvents" :key="event.src">
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
            </v-container>

        </div>
        <div style="text-align: center;" class="mb-7">
            <div>
                <v-btn class="all ml-5">عرض المزيد</v-btn>
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
            sortType: "asc",
            sortOptions: [
                { text: "الأحدث", value: "asc" },
                { text: "الأقدم", value: "desc" },
            ],
            textData: null,
            loaded: false,
        };
    },



    methods: {
        getTextDataFromFirestore() {
            const db = firebase.firestore();
            const textRef = db.collection("EventS").doc("2KCze4akCEV0QEZe9oYj");

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
                        for (let i = 0; i < images.length; i++) {
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

    computed: {
        sortedEvents() {
            const events = [...this.events];

            if (this.sortType === "asc") {
                events.sort((a, b) => a.date.localeCompare(b.date));
            } else if (this.sortType === "desc") {
                events.sort((a, b) => b.date.localeCompare(a.date));
            }

            return events;
        },
    },

    async created() {
        await this.fetchCarouselItems();
        this.sortedEvents()
    },

    async mounted() {
        this.getTextDataFromFirestore();
        await this.fetchEventData();
    },
};
</script>
<style>
.EventPage-title {
    background-image: url('/public/photo/background/Events.png');
    background-size: cover;
    height: 100%;
}

.v-application--is-ltr .v-text-field .v-label {
    transform-origin: top left;
    display: contents;
}

.v-select.v-text-field:not(.v-text-field--single-line) input {
    margin-top: 0;
    width: 10px;
}

.v-select__selection--comma {
    color: #00a651;
}
</style>
<template>
    <div>
        <div class="head">
            <div class="formall formall3 container">
                <div class="formdiv in2" dir="rtl">
                    <v-icon class="formicon ico">mdi-magnify</v-icon>
                    <v-text-field v-model="searchQuery" class="forminput" placeholder="إبحث" clearable
                        @input="filterItems"></v-text-field>
                </div>
            </div>
        </div>

        <v-app>
            <v-container fluid>
                <v-row class="row">
                    <v-col cols="12">
                        <v-card>
                            <v-card-text>
                                <v-row align="center" justify="center" v-if="filteredItems.length > 0">
                                    <v-col cols="12" sm="6" md="4" lg="4" v-for="event in filteredItems" :key="event.title">
                                        <v-card-actions class="justify-space-between">
                                            <v-card dir="rtl" flat class="ml-5" width="1000" style="display: flex; ">
                                                <v-responsive
                                                    style="width: 500px; text-align: end; position: relative; bottom: 7px; height: 208px;">
                                                    <img style="width: 325px;" :src="event.src">
                                                </v-responsive>
                                                <v-card-text class="event-text"
                                                    style="border-top-left-radius: 10px; border-bottom-right-radius: unset !important;">
                                                    <div class="text-right">
                                                        <div style="display: flex; justify-content: right;">
                                                            <v-icon
                                                                class="calendar pa-2">mdi-calendar-month-outline</v-icon>
                                                            <div class="pa-2 mt-1 event-date">{{ event.date }}</div>
                                                        </div>
                                                        <div style="display: flex;">
                                                            <div>
                                                                <div class="event-title pt-2 pb-2">{{ event.title }}</div>
                                                                <div class="event-paragraph">{{ event.paragraph }}</div>
                                                            </div>
                                                            <div class="text-center pb-1 pt-5">
                                                                <router-link to="/EventDetails" custom
                                                                    v-slot="{ navigate }">
                                                                    <v-btn icon class="pa-2" @click="navigate" role="link">
                                                                        <v-icon class="arrow pa-4">mdi-arrow-left</v-icon>
                                                                    </v-btn>
                                                                </router-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </v-card-text>
                                            </v-card>
                                        </v-card-actions>
                                    </v-col>
                                </v-row>

                                <v-row align="center" justify="center" v-if="filteredProducts.length > 0">
                                    <v-col v-for="item in filteredProducts" :key="item.title" xs12 sm6 md3 lg2
                                        class="col2 ml-6">
                                        <v-card flat class="text-center pt-3 rounded-lg"
                                            style="height: 280px; width: 180px; border: 1px solid #d9d9d9;">
                                            <v-responsive class="pt-4">
                                                <img class="proguctImg" :src="item.src">
                                            </v-responsive>
                                            <v-card-text>
                                                <div style="font-family: 'ExpoBook';">{{ item.title }}</div>
                                                <div style="font-family: 'ExpoLight'; color: #00a651">{{ item.size }}</div>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>

                                <v-row align="center" justify="center" v-else-if="searchQuery && !filteredItems.length">
                                    <v-col cols="12" sm="6" md="4" lg="3">
                                        <div>No results found.</div>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-app>
    </div>
</template>

<script>
import { firebase } from "@/fb";
import "firebase/firestore";
export default {
    data() {
        return {
            events: [],
            products: [],
            searchQuery: '',
            filteredItems: [],
            filteredProducts: [],
            textData: null,
            loaded: false,
        };
    },
    methods: {
        filterItems() {
            const query = this.normalizeArabic(this.searchQuery.toLowerCase());
            this.filteredItems = this.events.filter((event) =>
                this.normalizeArabic(event.title.toLowerCase()).includes(query)
            );
            this.filteredProducts = this.products.filter((item) =>
                this.normalizeArabic(item.title.toLowerCase()).includes(query)
            );
        },
        normalizeArabic(text) {
            return text
                .replace(/[\u064B-\u0652]/g, '')
                .replace(/[\u0621-\u064A]/g, (match) => String.fromCharCode(match.charCodeAt(0) - 0x0621 + 0x41));
        },

        async fetchCarouselItems() {
            const collectionName = "EventS";
            const collectionName2 = "ProductPage";
            const documentId = "2KCze4akCEV0QEZe9oYj";
            const documentId2 = "5eiUDuMOdjOhQBREIEHO";
            const arrayName = "dates";
            const arrayName2 = "images";
            const arrayName3 = "paragraphs";
            const arrayName4 = "titles";
            const arrayName5 = "names";
            const arrayName6 = "size";

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
                                src: 'photo/events/milk.png',
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
                .collection(collectionName2)
                .doc(documentId2)
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        const images = doc.data()[arrayName2];
                        const names = doc.data()[arrayName5];
                        const size = doc.data()[arrayName6];
                        for (let i = 0; i < images.length; i++) {
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
        },
    },

    async mounted() {
        this.fetchCarouselItems();
    },
};
</script>
  
<style>
.formall3 {
    margin: auto;
}

.head {
    background-color: #f3f3f3;
    padding: 90px 0 20px 0;
}

.in2 {
    background-color: white;
}

.ico {
    color: black !important;
}
</style>
  
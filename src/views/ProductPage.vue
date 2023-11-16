<template>
    <div>
        <div class="ProductPage-title" style="text-align: center; height: 450px;">
            <div class="mr-7">
                <h4 class="whotext">
                    المنتجات
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
                        <h4 style="color: #00a651;">المنتجات</h4>
                    </v-btn>
                </div>
            </div>
        </div>

        <div>

            <div style="text-align: right; line-height: 20px;" class="container mt-15">
                <div>
                    <h4 style="position: relative;  margin-left: -300px;" class=" aboutCom4">{{ textData ? textData.title :
                        '' }}</h4> <br>
                    <p class="son">{{ textData ? textData.paragraph : '' }}</p>
                </div>
            </div>

            <v-app>
                <v-content>
                    <v-container fluid>
                        <v-row class="row">
                            <v-col cols="12">
                                <v-card>
                                    <v-card-text>
                                        <v-row class="row" align="center" justify="center"
                                            style="text-align: center; font-family: 'ExpoBook';">
                                            <v-col v-for="filter in filters" :key="filter.id" cols="12" sm="6" md="4" lg="3"
                                                xl="2">
                                                <v-btn class="filterbtn"
                                                    :color="selectedFilter === filter.id ? '#00a651' : ''" large text
                                                    :style="{
                                                        borderBottom: selectedFilter === filter.id ? '2px solid #00a651' : '1px solid transparent'
                                                    }" @click="selectFilter(filter.id)">
                                                    {{ filter.name }}
                                                </v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>

                        <v-row v-if="selectedFilter" class="container"
                            style="margin: auto; text-align: right; justify-content: center;" dir="rtl">
                            <v-col v-for="item in filteredItems" :key="item.id" xs12 sm6 md3 lg2 class="col2 ml-6">
                                <v-card flat class="text-center pt-3 rounded-lg"
                                    style="height: 280px; width: 180px; border: 1px solid #d9d9d9;">
                                    <v-responsive class="pt-4 pb-4">
                                        <img class="proguctImg" :src="item.src">
                                    </v-responsive>
                                    <v-card-text style="padding: 0 !important;">
                                        <div style="font-family: 'ExpoBook';">{{ item.title }}</div>
                                        <div style="font-family: 'ExpoLight'; color: #00a651">{{ item.size }}</div>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-content>
            </v-app>
        </div>
    </div>
</template>
  
<script>
import { firebase } from "@/fb";
import "firebase/firestore";
export default {
    data() {
        return {
            filters: [
                { id: 1, name: "منتجات الحمص والسلطات" },
                { id: 2, name: "منتجات الأجبان" },
                { id: 3, name: "منتجات الألبان" },
                { id: 4, name: "كل المنتجات" },
            ],
            selectedFilter: null,
            products: [],

            textData: null,
            loaded: false,
        };
    },
    computed: {
        filteredItems() {
            if (this.selectedFilter) {
                return this.products.filter((item) => item.filterId === this.selectedFilter);
            }
            return [];
        },
    },
    methods: {
        selectFilter(filterId) {
            this.selectedFilter = filterId;
        },

        async fetchCarouselItems() {
            const collectionName = "ProductPage";
            const documentId = "5eiUDuMOdjOhQBREIEHO";
            const arrayName1 = "images";
            const arrayName2 = "names";
            const arrayName3 = "size";


            firebase.firestore()
                .collection(collectionName)
                .doc(documentId)
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        const images = doc.data()[arrayName1];
                        const names = doc.data()[arrayName2];
                        const size = doc.data()[arrayName3];

                        let filterId;
                        for (let i = 0; i < names.length; i++) {
                            filterId = 4;
                            if (names[i].startsWith("لبن ")) {
                                filterId = 3;
                            } else if (names[i].startsWith("لبنة ")) {
                                filterId = 2;
                            } else if (names[i].startsWith("حمص")) {
                                filterId = 1;
                            }
                            this.products.push({
                                src: images[i],
                                title: names[i],
                                size: size[i],
                                filterId: filterId,
                            });
                        }

                        for (let i = 0; i < images.length; i++) {
                            if (images[i].startsWith("p")) {
                                filterId = 4;
                            }
                            this.products.push({
                                src: images[i],
                                title: names[i],
                                size: size[i],
                                filterId: filterId,
                            });
                        }
                    }
                }
                )
                .catch((error) => {
                    console.error("Error fetching document:", error);
                });
        },

        getTextDataFromFirestore() {
            const db = firebase.firestore();
            const textRef = db.collection("ProductPage").doc("5eiUDuMOdjOhQBREIEHO");

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
    },
    async mounted() {
        this.selectedFilter = 4;
        this.getTextDataFromFirestore();
        this.fetchCarouselItems();
    },
};
</script>
<style>
.ProductPage-title {
    background-image: url('/public/photo/background/ProductPage.png');
    background-size: cover;
    height: 100%;
}

.col2 {
    flex-basis: 0;
    flex-grow: 0;
    max-width: 100%;
}

.filterbtn {
    border-radius: unset !important;
    padding: 0 10px !important;
}
</style>
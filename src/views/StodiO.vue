<template>
    <div>
        <div class="Stodio-title" style="text-align: center; height: 450px;">
            <div class="mr-7">
                <h4 class="whotext">
                    الألبومات
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
                        <h4 style="color: #00a651;">الألبومات</h4>
                    </v-btn>
                </div>
            </div>
        </div>

        <div>

            <div class="container mt-15" style="display: flex; justify-content: space-between; text-align: right;">
                <div dir="rtl">
                    <v-select class="ml-4 stodioselsect" v-model="sortType" :items="sortOptions" label="عرض حسب:"
                        @change="sortPhotos" />
                </div>
                <div class="mr-5">
                    <h4 style="position: relative; " class="aboutCom2">{{ textData ? textData.title : '' }}</h4> <br>
                    <p class="son">{{ textData ? textData.paragraph : '' }}</p>
                </div>
            </div>

            <v-app>
                <v-content dir="rtl">
                    <v-container fluid>
                        <div>
                            <v-row>
                                <v-col>
                                    <v-card>
                                        <v-card-text>
                                            <v-row align="center" justify="center"
                                                style="text-align: center; font-family: 'ExpoBook';">
                                                <v-col v-for="filter in filters" :key="filter.id" cols="12" sm="6" md="4"
                                                    lg="3">
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

                            <v-layout wrap class="container">
                                <v-flex xs12 sm6 md4 lg4 class="fancy-gallery" v-for="item in filteredPhotos"
                                    :key="item.src2">
                                    <v-card flat class="ml-5 pt-4 img-fluid" data-fancybox="images">
                                        <Fancybox :options="{ Carousel: { infinite: false, }, }">
                                            <a data-fancybox="gallery" :href="item.src">
                                                <v-img :src="item.src" class="mb-3 rounded fancy-gallery" />
                                            </a>
                                            <a data-fancybox="gallery" :href="item.src2">
                                                <v-img :src="item.src2" class="rounded" />
                                            </a>
                                        </Fancybox>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </div>
                    </v-container>
                </v-content>
            </v-app>

            <div style="text-align: center;" class="mb-7">
                <div>
                    <v-btn class="all ml-5">عرض المزيد</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { firebase } from "@/fb";
import "firebase/firestore";
import { Fancybox } from "@fancyapps/ui";
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default {
    props: {
        options: Object,
    },
    data() {
        return {
            filters: [
                { id: 3, name: "الكل" },
                { id: 2, name: "الصور" },
                { id: 1, name: "الفيديوهات" },
            ],
            photos: [],
            sortType: "asc",
            sortOptions: [
                { text: "الأحدث", value: "asc" },
                { text: "الأقدم", value: "desc" },
            ],
            selectedFilter: 3,
            lightbox: false,
            activePhotoId: null,
            activeCarouselItem: 0,
            textData: null,
            loaded: false,
        };
    },
    computed: {
        sortPhotos() {
            const sortedPhotos = [...this.photos];

            if (this.sortType === "asc") {
                sortedPhotos.sort((a, b) => a.index - b.index);
            } else if (this.sortType === "desc") {
                sortedPhotos.sort((a, b) => b.index - a.index);
            }

            return sortedPhotos;
        },
        filteredPhotos() {
            if (this.selectedFilter) {
                return this.sortPhotos.filter((photo) => photo.filterId === this.selectedFilter);
            } else {
                return this.sortPhotos;
            }
        },
    },
    async created() {
        await this.fetchCarouselItems();
        this.sortPhotos()
    },
    methods: {
        initializeFancybox() {
        },
        selectFilter(filterId) {
            this.selectedFilter = filterId;
        },

        async fetchCarouselItems() {
            const collectionName = "StodiO";
            const documentId = "NwUYIAPFY3sFl4881pk9";
            const arrayName = "images";
            const arrayName2 = "videos";

            try {
                const doc = await firebase.firestore()
                    .collection(collectionName)
                    .doc(documentId)
                    .get();

                if (doc.exists) {
                    const images = doc.data()[arrayName];
                    const videos = doc.data()[arrayName2];

                    for (let i = 0; i < images.length; i++) {
                        this.photos.push({
                            src: images[i],
                            src2: videos[i],
                            filterId: 3,
                            index: i,
                        });
                        this.photos.push({
                            src: images[i],
                            filterId: 2,
                            index: i,
                        });
                    }
                    for (let i = 0; i < videos.length; i++) {
                        this.photos.push({
                            src: videos[i],
                            filterId: 1,
                            index: i,
                        });
                    }
                    this.sortPhotos();
                } else {
                    console.log("Document not found!");
                }
            } catch (error) {
                console.error("Error fetching document:", error);
            }
        },

        getTextDataFromFirestore() {
            const db = firebase.firestore();
            const textRef = db.collection("StodiO").doc("rB054gpLDZyqxvMLvphf");

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
        this.selectedFilter = 3;
        this.getTextDataFromFirestore();
        await this.fetchStodioData();
        this.initializeFancybox();

        Fancybox.bind(this.$refs.container, '[data-fancybox]', {
            ...(this.options || {}),
        });
    },
    updated() {
        Fancybox.unbind(this.$refs.container);
        Fancybox.close();

        Fancybox.bind(this.$refs.container, '[data-fancybox]', {
            ...(this.options || {}),
        });
    },
    unmounted() {
        Fancybox.destroy();
    },
};
</script>
<style>
.Stodio-title {
    background-image: url('/public/photo/background/cow6.png');
    background-size: cover;
    height: 100%;
}

.stodioselsect {
    border: 1px solid #e6e6e6;
    padding: 5px;
    border-radius: 5px;
}

.v-text-field__details {
    display: none;
}

.col-md-4 {
    flex: 0 0 12.333333% !important;
    margin: -10px;
}

.lightbox-img {
    max-height: 500px;
    max-width: 100%;
    margin: 0 auto;
}

/* .f-thumbs__slide:not(.for-image) {
    display: none;
} */
</style>
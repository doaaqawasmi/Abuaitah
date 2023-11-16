<template>
    <div dir="rtl">
        <div class="JobsPage-title" style="text-align: center; height: 450px;">
            <div class="mr-7">
                <h4 class="whotext">
                    الوظائف
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
                    <router-link to="/JobS" custom v-slot="{ navigate }" style="margin: auto;">
                        <v-btn text @click="navigate" role="link">
                            <h4 style="color: #989da0; white-space: break-spaces;">الوظائف</h4>
                        </v-btn>
                    </router-link>
                    <v-icon style="color: #989da0; font-size: 12px;">mdi-less-than</v-icon>
                    <v-btn text @click="navigate" role="link">
                        <h4 style="color: #00a651;">التفاصيل</h4>
                    </v-btn>
                </div>
            </div>
        </div>

        <div>

            <div class="container">
                <div>
                    <div style="display: flex;">
                        <h3 class="font pl-10" style=" font-size: large;">{{ textData ? textData.req : '' }}</h3>
                        <v-btn color="pa-3" class="avilabel avilabel3">{{ textData ? textData.status2 : '' }}</v-btn>
                    </div>
                    <div style="display: flex;">
                        <h4 class="font pl-10" style="font-size: 15px; line-height: 30px;">مشاركة الوظيفة</h4>
                        <v-btn v-for="(social, index) in socialMedia" :key="index" class="social social3">
                            <img :src="social.image" :alt="social.name">
                        </v-btn>
                    </div>
                </div>
            </div>

            <div class="job-details-box-sec discriction container">
                <div class="row ">
                    <div class="col-sm-6 col-lg-4">
                        <div class="info-item media">
                            <div class="media-body">
                                <div>
                                    <v-icon class="calendar jobicon jobicon-2">mdi-map-marker-outline</v-icon>
                                    <label class="pa-2 mt-1 font"> العنوان :</label>
                                </div>
                                <label class="mr-10 font font2"><strong>
                                        {{ textData ? textData.address : '' }}
                                    </strong></label>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-2 " style="border-right: 1px solid #aeb1b4;">
                        <div class="info-item media">
                            <div class="media-body">
                                <div>
                                    <v-icon class="calendar jobicon jobicon-2">mdi-bag-personal-outline</v-icon>
                                    <label class="pa-2 mt-1 font">نوع الدوام:</label>
                                </div>
                                <label class="mr-10 font font2"><strong>{{ textData ? textData.jobtime : ''
                                }}</strong></label>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3 " style="border-right: 1px solid #aeb1b4;">
                        <div class="info-item media">
                            <div class="media-body">
                                <div>
                                    <v-icon class="calendar jobicon jobicon-2">mdi-calendar-month-outline</v-icon>
                                    <label class="pa-2 mt-1 font">تاريخ بداية التقديم :</label>
                                </div>
                                <label class="mr-10 font font2"><strong>{{ textData ? textData.datestart : ''
                                }}</strong></label>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-3 " style="border-right: 1px solid #aeb1b4;">
                        <div class="info-item media">
                            <div class="media-body">
                                <div>
                                    <v-icon class="calendar jobicon jobicon-2">mdi-clock-time-four-outline</v-icon>
                                    <label class="pa-2 mt-1 font">ينتهي التقديم في:</label>
                                </div>
                                <label class="mr-10 font font2"><strong>{{ textData ? textData.dateend : ''
                                }}</strong></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <v-app>
                <v-content>
                    <v-container fluid>
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

                        <v-row v-if="selectedFilter" dir="rtl">
                            <v-col v-for="item in filteredItems" :key="item.id" cols="12" sm="6" md="4" lg="4">
                                <v-card flat class="ml-5" width="1000">
                                    {{ item.src }}
                                </v-card>
                            </v-col>
                        </v-row>
                        <div class="container mt-9">
                            <div class="tab-content" id="myTabContent"
                                :style="{ display: showMyTabContent ? 'block' : 'none' }">
                                <div class="tab-pane fade show active" id="job_description" role="tabpanel">
                                    <div class="job-description-sec font" style="line-height: 30px;">
                                        <h3>{{ textData ? textData.descriptiontitle : '' }}</h3>
                                        <p>{{ textData ? textData.description : '' }}</p>
                                        <br>
                                        <h3>{{ textData ? textData.jobreq : '' }}</h3>
                                        <ul class="mr-4">
                                            <li v-for="(requirement, index) in reqKeys" :key="index">{{ requirement }}</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                { id: 1, name: "وصف الوظيفة" },
            ],
            selectedFilter: null,
            divs: [
                { id: 1, src: '', filterId: 1 },
            ],
            socialMedia: [
                { name: 'Twitter', image: 'photo/icon/twitter2.png' },
                { name: 'Instagram', image: 'photo/icon/instagram2.png' },
                { name: 'Facebook', image: 'photo/icon/facebook2.png' },
                { name: 'YouTube', image: 'photo/icon/youtube2.png' },
            ],
            textData: null,
            loaded: false,
            reqKeys: [],
        }
    },
    computed: {
        filteredItems() {
            if (this.selectedFilter) {
                return this.divs.filter((item) => item.filterId === this.selectedFilter);
            }
            return [];
        },
        showMyTabContent() {
            return this.selectedFilter === 1;
        },
    },
    methods: {
        selectFilter(filterId) {
            this.selectedFilter = filterId;
        },
        getTextDataFromFirestore() {
            const db = firebase.firestore();
            const textRef = db.collection("JobDetails").doc("aE3C6jZZETVPsGEhyYql");

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
            const collectionName = "JobDetails";
            const documentId = "aE3C6jZZETVPsGEhyYql";
            const arrayName1 = "requirement";

            try {
                const doc = await firebase
                    .firestore()
                    .collection(collectionName)
                    .doc(documentId)
                    .get();

                if (doc.exists) {
                    const requirements = doc.data()[arrayName1] || [];
                    for (let i = 0; i < requirements.length; i++) {
                        this.reqKeys.push(requirements[i]);
                    }
                }
            } catch (error) {
                console.error("Error fetching document:", error);
            }
        },
    },

    async mounted() {
        this.selectedFilter = 1;
        this.getTextDataFromFirestore();
        this.fetchCarouselItems();
    },

}
</script>
<style>
.avilabel3 {
    color: #f14a50 !important;
    background-color: #ffe3e5 !important;
}

.font {
    font-family: 'ExpoBook';
}

.social3 {
    height: 29px !important;
    margin-left: 10px;
    border-radius: 100%;
    border: 1px solid;
}

.discriction {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    border: 1px solid #aeb1b4;
    border-radius: 10px;
    padding: 15px;
}

.font2 {
    font-size: 15px;
    font-weight: bold;
}

.jobicon-2 {
    font-size: 19px !important;
    padding: 0 5px !important;
    height: 32px;
    margin-top: 7px;
}
</style>
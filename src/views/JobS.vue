<template>
    <div>
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
                    <v-btn text @click="navigate" role="link">
                        <h4 style="color: #00a651;">الوظائف</h4>
                    </v-btn>
                </div>
            </div>
        </div>

        <div>
            <div class="container mt-15" style="display: flex; justify-content: space-between; text-align: right;">
                <div dir="rtl">
                    <v-select class="stodioselsect" v-model="sortType" :items="sortOptions" label="عرض حسب:"
                        @change="sortedJobs"></v-select>
                </div>
                <div>
                    <h4 style="position: relative; line-height: 10px; " class="aboutCom3">{{ textData1 ? textData1.title :
                        ''
                    }}</h4> <br>
                    <p class="son" style="line-height: 20px;">{{ textData1 ? textData1.paragraph : '' }}</p>
                </div>
            </div>

            <v-container fluid>
                <v-row justify="center" style="display: grid;">
                    <v-col xs12 sm6 md4 lg7 v-for="job in sortedJobs" :key="job.id">
                        <v-card class="mb-3"
                            style="display: flex; width: 1164px; box-shadow: none; border: 1px solid #e6e6e6; border-radius: 10px;">
                            <v-card-actions>
                                <router-link :to="job.buttonStatus === 'متاح' ? '/JobDetails' : '/JobDetails2'" custom
                                    v-slot="{ navigate }">
                                    <v-btn color="#00a651" class="white--text read detals" @click="navigate" role="link">
                                        التفاصيل
                                    </v-btn>
                                </router-link>
                            </v-card-actions>

                            <v-card-text>
                                <v-row justify="end">
                                    <v-col cols="12" md="auto" style="margin-right: 15px;">
                                        <v-btn class="avilabel" :style="jobStyles(job.buttonStatus)">
                                            {{ job.buttonStatus }}
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="12" md="auto">
                                        <h4 class="requier">{{ textData ? textData.req : '' }}</h4>
                                    </v-col>
                                </v-row>

                                <v-row class="eventdetails" style="justify-content: end;">
                                    <v-col cols="12" sm="6" md="auto" style="margin: auto; margin-right: 35.55%;">
                                        <div class="eventdetails1 eventdetails2">
                                            <div class="pa-2 mt-1 event-date1">
                                                {{ job.states }}</div>
                                            <v-icon class="calendar jobicon pa-2">mdi-bag-personal-outline</v-icon>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="auto">
                                        <div class="eventdetails1 eventdetails2">
                                            <div class="pa-2 mt-1 event-date1">{{ job.date }}</div>
                                            <v-icon class="calendar jobicon pa-2">mdi-calendar-month-outline</v-icon>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row class="eventdetails" style="justify-content: end;">
                                    <v-col cols="12" sm="6" md="auto">
                                        <div class="eventdetails1" style="margin-right: 87px;">
                                            <div dir="rtl" class="pa-2 mt-1 event-date2">ينتهي التقديم في: <span
                                                    class="event-date1">
                                                    {{ textData ? textData.dateend : '' }}</span>
                                            </div>
                                            <v-icon class="calendar jobicon pa-2">mdi-clock-time-four-outline</v-icon>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="auto">
                                        <div class="eventdetails1">
                                            <div class="pa-2 mt-1 event-date2"><span class="event-date1">العنوان: </span>
                                                {{ job.address }} </div>
                                            <v-icon class="calendar jobicon pa-2">mdi-map-marker-outline</v-icon>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>
<script>
import { firebase } from "@/fb";
import "firebase/firestore";
export default {
    data() {
        return {
            jobs: [],
            sortOptions: [
                { text: "الأحدث", value: "asc" },
                { text: "الأقدم", value: "desc" },
            ],
            textData: null,
            loaded: false,
            textData1: null,
            loaded1: false,
            sortType: "asc",
            sortField: "index",
        }
    },
    computed: {
        sortedJobs() {
            const jobs = [...this.jobs];

            if (this.sortType === "asc") {
                jobs.sort((a, b) => a.buttonStatus.localeCompare(b.buttonStatus));
            } else if (this.sortType === "desc") {
                jobs.sort((a, b) => b.buttonStatus.localeCompare(a.buttonStatus));
            }

            return jobs;
        },
    },

    methods: {
        getTextDataFromFirestore() {
            const db = firebase.firestore();
            const textRef = db.collection("JobS").doc("6BPrEFkXXihWGFjZsa5G");
            const textRef1 = db.collection("JobS").doc("87AYvxi7aofNMoxzwCve");

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

            textRef1
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        this.textData1 = doc.data();
                    } else {
                        console.log("Document not found!");
                    }
                    this.loaded1 = true;
                })
                .catch((error) => {
                    console.error("Error fetching data:", error);
                    this.loaded1 = true;
                });
        },

        async fetchJobsData() {
            const db = firebase.firestore();
            const jobsCollection = db.collection("JobS");

            try {
                const querySnapshot = await jobsCollection.get();
                const jobs = [];
                querySnapshot.forEach((doc) => {
                    if (doc.id !== "87AYvxi7aofNMoxzwCve") {
                        const data = doc.data();
                        const job = {
                            req: data.req,
                            date: data.date,
                            dateend: data.dateend,
                            states: data.states,
                            address: data.address2,
                            buttonStatus: data.buttonStatus,
                        };
                        jobs.push(job);
                    }
                });
                this.jobs = jobs;
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        },

        jobStyles(buttonStatus) {
            if (buttonStatus === "متاح") {
                return {
                    backgroundColor: "#f2fae3",
                    color: "#82ab3c",
                };
            } else if (buttonStatus === "منتهي") {
                return {
                    backgroundColor: "#ffe3e5",
                    color: "#f14a50",
                };
            }
        },
    },
    async created() {
        await this.getTextDataFromFirestore();
        await this.fetchJobsData();

    },
}
</script>
<style>
.JobsPage-title {
    background-image: url('/public/photo/background/jobs.png');
    background-size: cover;
    height: 100%;
}

.eventdetails {
    display: flex;
    justify-content: space-between;
}

.eventdetails1 {
    display: flex;
    margin-top: 10px;
}

.flex.lg7 {
    flex-basis: 58.3333333333%;
    flex-grow: 0;
    max-width: 94.333333%;
}

.eventdetails2 {
    justify-content: end;
}

.event-date2 {
    font-family: 'Expobook';
    color: #231f20;
}

.event-date1 {
    font-family: 'Expolight';
    color: #b9b9b9;
}

.detals {
    margin-top: 25%;
    margin-left: 35px;
}

.requier {
    font-family: 'ExpoBook' !important;
    color: black;
}

.avilabel {
    font-family: 'ExpoBook';
    box-shadow: none;
    border-radius: 10px;
    width: 90px;
    height: 30px;
}

.jobicon {
    border: 1px solid #00a651;
}

.row+.row {
    margin-top: 0px;
}
</style>
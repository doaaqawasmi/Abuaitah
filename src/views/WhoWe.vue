<template>
    <div>
        <div class="pagetitle" style="text-align: center; height: 500px;">
            <div class="mr-7">
                <h4 class="whotext">
                    من نحن
                </h4>
            </div>
        </div>
        <div>
            <div style="background-color: #f3f3f3;" dir="rtl">
                <div class="container" style="font-family: 'ExpoBook'; font-size: small;">
                    <v-icon style="color: #989da0;">mdi-home-outline</v-icon>
                    <router-link to="/" custom v-slot="{ navigate }" style="margin: auto;">
                        <v-btn text @click="navigate" role="link">
                            <h4 style="color: #989da0; white-space: break-spaces;"> الرئيسية </h4>
                        </v-btn>
                    </router-link>
                    <v-icon style="color: #989da0; font-size: 12px;">mdi-less-than</v-icon>
                    <v-btn text @click="navigate" role="link">
                        <h4 style="color: #00a651;">من نحن؟</h4>
                    </v-btn>
                </div>
            </div>
        </div>

        <v-content>
            <v-container>
                <v-row dir="rtl" class="mt-15 mb-15">
                    <v-col v-if="loaded" cols="12" md="6">
                        <div class="bef bef2">
                            <h4 class="son pb-3">{{ textData ? textData.title : '' }}</h4>
                            <div class="paragraph">
                                <p>{{ textData ? textData.paragraph : '' }}</p>
                            </div>
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <div class="image-container">
                            <img src="photo/product/milk.png" alt="">
                        </div>
                    </v-col>
                </v-row>

                <v-row class="goalsdiv" dir="rtl">
                    <v-col cols=" 12" md="4" style="max-width: 10%; flex: 0 0 10%;">
                        <div class="goalsimagediv">
                            <img class="goalsimage" src="photo/icon/arow.png" alt="">
                        </div>
                    </v-col>
                    <v-col v-if="loadedGoal" cols=" 12" md="8" style="max-width: 90%; flex: 0 0 90%;">
                        <div class="" dir="rtl" style="display: flex;">
                            <div class="">
                                <h4 class="goals">{{ golData ? golData.title : '' }}</h4>
                                <p class="goalsParag">
                                    {{ golData ? golData.paragraph : '' }} </p>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>

        <div v-if="loadedteam" class="container mb-9" style="text-align: right; line-height: 45px;">
            <h4 style=" position: relative; margin-left: 50px; margin-left: -150px;" class="aboutCom4"> {{ teamData ?
                teamData.title : '' }}</h4>
            <h4 class="son mb-3" style="font-size: 30px; font-weight: normal;">{{ teamData ? teamData.title2 : '' }}</h4>
            <ul dir="rtl" style="margin-right: 15px; line-height: 15px;">
                <li>
                    <p> {{ teamData ? teamData.li1 : '' }} </p>
                </li>
                <li>
                    <p>{{ teamData ? teamData.li2 : '' }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { firebase } from "@/fb";
import "firebase/firestore";

export default {
    data() {
        return {
            textData: null,
            golData: null,
            teamData: null,
            loaded: false,
            loadedGoal: false,
            loadedteam: false,
        };
    },
    mounted() {
        this.getTextDataFromFirestore();
    },
    methods: {
        getTextDataFromFirestore() {
            const db = firebase.firestore();
            const textRef = db.collection("WhoWe").doc("u0OWBbh4atgFCOEknG6T");
            const golRef = db.collection("WhoWe").doc("2hHzMdWjMYpWbfqlYpTI");
            const teamRef = db.collection("WhoWe").doc("0YZ6KoafalMlSvV1Amfd");

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

            golRef
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        this.golData = doc.data();
                    } else {
                        console.log("Goal Document not found!");
                    }
                    this.loadedGoal = true; // Set 'loadedGoal' to true after goal data retrieval
                })
                .catch((error) => {
                    console.error("Error fetching goal data:", error);
                    this.loadedGoal = true; // Set 'loadedGoal' to true even if there's an error
                });

            teamRef
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        this.teamData = doc.data();
                    } else {
                        console.log("Goal Document not found!");
                    }
                    this.loadedteam = true; // Set 'loadedGoal' to true after goal data retrieval
                })
                .catch((error) => {
                    console.error("Error fetching goal data:", error);
                    this.loadedteam = true; // Set 'loadedGoal' to true even if there's an error
                });
        },
    },
};
</script>

<style>
.pagetitle {
    background-image: url('/public/photo/background/Whobackground.png');
    background-size: cover;
    height: 100%;
}

.bef2 {
    background-position-y: 80px;
    line-height: 1.5;
    padding-left: 34px;
}

.whotext {
    color: white;
    font-family: 'ExpoBook';
    font-size: 40px;
    padding-top: 12%;
    text-shadow: 1px 1px black;
}

.goalsdiv {
    margin-bottom: 5%;
    display: flex;
    justify-content: right;
    text-align: right;
    background-color: #f3f3f3;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #dfdfdf;
}

.goalsimagediv {
    background-color: white;
    border-radius: 100%;
    width: 95px;
    height: 90px;
    justify-content: center;
    text-align: center;
}

.goalsimage {
    margin-top: 25%;
}

.goalsParag,
.goals {
    font-family: 'ExpoBook';
    font-weight: normal;
}

.goals {
    color: #3a3b98;
}

.goalsParag {
    color: #727171;
}

.content {
    display: flex;
    justify-content: space-between;
    line-height: 1.1;
    text-align: right;
}

.paragraph {
    max-width: 600px;
    justify-content: flex-start;
}

.image-container {
    display: flex;
    justify-content: flex-end;
}

@media (max-width: 599px) {
    .content {
        flex-direction: column;
        align-items: center;
    }

    .image-container {
        margin-top: 1rem;
    }
}


.content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-right: 1rem;
}

.goals {
    margin-bottom: 0.5rem;
}

.image-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

@media (max-width: 599px) {
    .content {
        flex-direction: column;
        align-items: flex-start;
        margin-right: 0;
        margin-bottom: 1rem;
    }

    .image-container {
        justify-content: center;
        margin-top: 1rem;
    }
}

h4,
.h4 {
    font-size: 1rem;
    margin-top: 10px;
}
</style>
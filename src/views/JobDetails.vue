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
                        <v-btn color="pa-3" class="avilabel avilabel2">{{ textData ? textData.status1 : '' }}</v-btn>
                    </div>
                    <div style="display: flex;">
                        <h4 class="font pl-10" style="font-size: 15px; line-height: 30px;">مشاركة الوظيفة</h4>
                        <div class="mt-3">
                            <v-btn v-for="(social, index) in socialMedia" :key="index" class="social social3">
                                <img :src="social.image" :alt="social.name">
                            </v-btn>
                        </div>
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
                                <div style="text-align: center; padding-top: 30px;">
                                    <v-btn color="#00a651" class="white--text jobreq" @click="click" role="link">
                                        تقديم الطلب
                                    </v-btn>
                                </div>
                            </div>
                        </div>

                        <div style="justify-content: center; align-items: end;"
                            :style="{ display: showMyTabContent ? 'none' : 'flex' }">
                            <input type="file" ref="fileInput" style="display: none" @change="handleFileImport4"
                                accept="image/*">
                            <v-btn class="selectbtn" color="white" @click="openFileInput"
                                style="width: 0 !important; height: 0 !important;">
                                <v-icon class="cameraicon">mdi-camera-outline</v-icon>
                            </v-btn>
                            <div v-if="profilePhoto" class="profilephoto"
                                style="border: 1px solid #e8e8e8; width: fit-content; border-radius: 100%; margin-left: 35px;">
                                <img :src="profilePhoto" alt="Profile Photo"
                                    style="width: 100px; height: 100px; border-radius: 100%;">
                            </div>
                            <div v-else class="profilephoto"
                                style="border: 1px solid #e8e8e8; width: fit-content; border-radius: 100%; margin-left: 35px;">
                                <v-icon
                                    style="background-color: #f3f3f3; padding: 22px; font-size: 42px; border-radius: 100%; margin: 5px;"
                                    class="formicon">mdi-account-outline</v-icon>
                            </div>
                        </div>
                    </v-container>
                    <v-container fluid :style="{ display: showMyTabContent ? 'none' : 'flex', padding: '2% 13%' }">
                        <v-row justify="space-between" align="center">
                            <v-col cols="12" md="6">
                                <form @submit.prevent="submit" class="form1" style="width: 100%; margin-top: 0 !important;">
                                    <div style="display: inline;">
                                        <div class="formall">
                                            <label class="formlabel" for="">الإسم كاملا*</label>
                                            <div class="formdiv">
                                                <v-text-field v-model="name" class="forminput pr-3"
                                                    placeholder="أدخل إسمك رباعيا" required
                                                    :rules="[v => !!v || 'Item is required']"></v-text-field>
                                            </div>
                                        </div>

                                        <div class="formall">
                                            <label class="formlabel" for="">البريد الإلكتروني</label>
                                            <div class="formdiv">
                                                <v-text-field v-model="email" class="forminput pr-3"
                                                    placeholder="أدخل بريدك الالكتروني"></v-text-field>
                                            </div>
                                        </div>

                                        <div class="formall">
                                            <label class="formlabel" for=""> رقم الجوال*</label>
                                            <div class="formdiv">
                                                <v-text-field v-model="phoneNumber" class="forminput pr-3"
                                                    placeholder="أدخل رقم جوالك " required
                                                    :rules="[v => !!v || 'Item is required']"></v-text-field>
                                            </div>
                                        </div>

                                        <div class="formall">
                                            <label class="formlabel" for="">الحالة الإجتماعية*</label>
                                            <div class="formdiv">
                                                <v-select v-model="status" class="forminput pr-3" :items="items"
                                                    :rules="[v => !!v || 'Item is required']"
                                                    placeholder="إختر حالتك الإجتماعية" required></v-select>
                                            </div>
                                        </div>
                                        <div class="formall" style="align-items: center;">
                                            <label class="formlabel" for="">السيرة الذاتية</label>
                                            <div class="formdiv formdiv2 formlabel2">
                                                <v-btn class="selectbtn" color="white" rounded dark
                                                    @click="handleFileImport">
                                                    <p v-if="selectedFile">{{ selectedFile.name }}</p>
                                                    <h4 v-else>
                                                        <span style="color: #00a651;">ارفاق ملف</span>
                                                        أو السحب والإفلات هنا
                                                        <br>
                                                        <span style="font-size: 11px;">يجب ألا يزيد حجم الملف عن 5
                                                            ميجا</span>
                                                    </h4>
                                                </v-btn>
                                                <input ref="uploader" class="d-none" type="file" @change="onFileChanged">
                                            </div>
                                        </div>
                                        <div class="formall" style="align-items: center;">
                                            <label class="formlabel" for="">شهادات الخبرة</label>
                                            <div class="formdiv formdiv2 formlabel2">
                                                <v-btn class="selectbtn" color="white" rounded dark
                                                    @click="handleFileImport1">
                                                    <p v-if="selectedFile1">{{ selectedFile1.name }}</p>
                                                    <h4 v-else>
                                                        <span style="color: #00a651;">ارفاق ملف</span>
                                                        أو السحب والإفلات هنا
                                                        <br>
                                                        <span style="font-size: 11px;">يجب ألا يزيد حجم الملف عن 5
                                                            ميجا</span>
                                                    </h4>
                                                </v-btn>
                                                <input ref="uploader1" class="d-none" type="file" @change="onFileChanged1">
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </v-col>
                            <v-col cols="12" md="6">
                                <div style="display: inline; width: 45%;">
                                    <div class="formall">
                                        <label class="formlabel" for="">الجنس*</label>
                                        <div class="formdiv">
                                            <v-select v-model="gender" class="forminput pr-3" :items="sex"
                                                :rules="[v => !!v || 'Item is required']" placeholder="إختر نوع جنسك"
                                                required></v-select>
                                        </div>
                                    </div>

                                    <div class="formall">
                                        <label class="formlabel" for="">عنوان السكن*</label>
                                        <div class="formdiv">
                                            <v-text-field v-model="address" class="forminput pr-3"
                                                placeholder="أدخل بريدك الالكتروني"
                                                :rules="[v => !!v || 'Item is required']"></v-text-field>
                                        </div>
                                    </div>

                                    <div class="formall">
                                        <v-col cols="12" sm="6" md="4" style="margin: 0; padding: 0;">
                                            <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent
                                                width="290px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <label class="formlabel" for="">تاريخ الميلاد*</label>
                                                    <div class="formdiv" style="display: flex;">
                                                        <v-text-field class="forminput pr-3" v-model="date"
                                                            placeholder="إختر تاريخ ميلادك" Append-icon="mdi-calendar"
                                                            readonly v-bind="attrs" v-on="on"
                                                            :rules="[v => !!v || 'Item is required']">
                                                        </v-text-field>
                                                        <v-icon class="formicon">mdi-calendar-month-outline</v-icon>
                                                    </div>
                                                </template>
                                                <v-date-picker v-model="date" scrollable>
                                                    <v-spacer></v-spacer>
                                                    <v-btn text color="primary" @click="modal = false">
                                                        Cancel
                                                    </v-btn>
                                                    <v-btn text color="primary" @click="$refs.dialog.save(date)">
                                                        OK
                                                    </v-btn>
                                                </v-date-picker>
                                            </v-dialog>
                                        </v-col>
                                    </div>


                                    <div class="formall">
                                        <label class="formlabel" for="">المؤهلات العلمية*</label>
                                        <div class="formdiv">
                                            <v-select v-model="degree1" class="forminput pr-3" :items="degree"
                                                :rules="[v => !!v || 'Item is required']" placeholder="إختر مؤهلك العلمي"
                                                required></v-select>
                                        </div>
                                    </div>

                                    <div class="formall" style="align-items: center;">
                                        <label class="formlabel" for="">الشهادة الجامعية</label>
                                        <div class="formdiv formdiv2 formlabel2">
                                            <v-btn class="selectbtn" color="white" rounded dark @click="handleFileImport2">
                                                <p v-if="selectedFile2">{{ selectedFile2.name }}</p>
                                                <h4 v-else>
                                                    <span style="color: #00a651;">ارفاق ملف</span>
                                                    أو السحب والإفلات هنا
                                                    <br>
                                                    <span style="font-size: 11px;">يجب ألا يزيد حجم الملف عن 5
                                                        ميجا</span>
                                                </h4>
                                            </v-btn>
                                            <input ref="uploader2" class="d-none" type="file" @change="onFileChanged2">
                                        </div>
                                    </div>

                                    <div class="formall" style="align-items: center;">
                                        <label class="formlabel" for="">رخصة القيادة</label>
                                        <div class="formdiv formdiv2 formlabel2">
                                            <v-btn class="selectbtn" color="white" rounded dark @click="handleFileImport3">
                                                <p v-if="selectedFile3">{{ selectedFile3.name }}</p>
                                                <h4 v-else>
                                                    <span style="color: #00a651;">ارفاق ملف</span>
                                                    أو السحب والإفلات هنا
                                                    <br>
                                                    <span style="font-size: 11px;">يجب ألا يزيد حجم الملف عن 5
                                                        ميجا</span>
                                                </h4>
                                            </v-btn>
                                            <input ref="uploader3" class="d-none" type="file" @change="onFileChanged3">
                                        </div>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>

                    <div class="mb-10">
                        <div style="text-align: center;" :style="{ display: showMyTabContent ? 'none' : 'block' }">
                            <v-btn color="#00a651" class="white--text jobreq" @click="handleButtonClick" role="link">
                                إرسال الطلب
                            </v-btn>
                        </div>

                        <v-dialog v-model="popupVisible" max-width="500px" style="border-radius: 18px;">
                            <v-card style="border-radius: 18px;">
                                <v-card-actions style="justify-content: end;">
                                    <v-btn class="mt-3" text rounded style="background-color: #f3f3f3; color: #000;"
                                        @click="closePopup"><v-icon>mdi-close</v-icon></v-btn>
                                </v-card-actions>
                                <div
                                    style="background-color: #f3f3ff; border-radius: 100%; width: fit-content; padding: 14px; margin: auto;">
                                    <div
                                        style="background-color: #ebebff; border: 1px solid #cccbfb; border-radius: 100%; width: fit-content; padding: 18px;">
                                        <v-icon style="color: #2e3092; font-size: xx-large;">mdi-check-bold</v-icon>
                                    </div>
                                </div>
                                <v-card-title style="justify-content: center; font-family: 'ExpoBook';"> شكرا لك
                                </v-card-title>
                                <v-card-text dir="rtl" style="text-align: center; font-family: 'ExpoBook';">
                                    تم إرسال طلبك بنجاح، وسيتم التواصل معك في أقرب وقت
                                    <br>
                                    نتمنى لك حظا موفقا.
                                </v-card-text>
                                <div class="pb-10" style="text-align: center;">
                                    <router-link to="/" custom v-slot="{ navigate }">
                                        <v-btn color="#00a651" class="white--text read" @click="navigate" role="link">
                                            العودة للرئيسية
                                        </v-btn>
                                    </router-link>
                                </div>
                            </v-card>
                        </v-dialog>
                    </div>
                </v-content>
            </v-app>
        </div>

    </div>
</template>
<script>
import { firebase, db } from "@/fb";
import "firebase/firestore";

export default {
    data() {
        return {
            filters: [
                { id: 1, name: "وصف الوظيفة" },
                { id: 2, name: "تقديم الطلب" },
            ],
            selectedFilter: null,
            divs: [
                { id: 1, src: '', filterId: 1 },
                { id: 2, src: '', filterId: 2 },
            ],
            socialMedia: [
                { name: 'Twitter', image: 'photo/icon/twitter2.png' },
                { name: 'Instagram', image: 'photo/icon/instagram2.png' },
                { name: 'Facebook', image: 'photo/icon/facebook2.png' },
                { name: 'YouTube', image: 'photo/icon/youtube2.png' },
            ],
            // reqKeys: ['req1', 'req2', 'req3', 'req4', 'req5', 'req6', 'req7', 'req8'],
            reqKeys: [],
            select: null,
            items: ['متزوج', 'أعزب'],
            sex: ['أنثى', 'ذكر'],
            degree: ['بكالوريوس', 'ماجستير'],
            checkbox: false,
            isSelecting: false,
            selectedFile: null,
            selectedFile1: null,
            selectedFile2: null,
            selectedFile3: null,
            popupVisible: false,

            name: '',
            email: '',
            phoneNumber: '',
            status: null,
            gender: null,
            address: '',
            date: null,
            degree1: null,
            profilePhoto: null,
            textData: null,
            loaded: false,
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
        handleFileImport() {
            this.$refs.uploader.click();
        },
        handleFileImport1() {
            this.$refs.uploader1.click();
        },
        handleFileImport2() {
            this.$refs.uploader2.click();
        },
        handleFileImport3() {
            this.$refs.uploader3.click();
        },
        onFileChanged(e) {
            this.selectedFile = e.target.files[0];
        },
        onFileChanged1(e) {
            this.selectedFile1 = e.target.files[0];
        },
        onFileChanged2(e) {
            this.selectedFile2 = e.target.files[0];
        },
        onFileChanged3(e) {
            this.selectedFile3 = e.target.files[0];
        },
        openPopup() {
            this.popupVisible = true;
        },
        closePopup() {
            this.popupVisible = false;
        },
        handleButtonClick() {
            if (this.name && this.phoneNumber && this.status && this.gender && this.address && this.date && this.degree1) {
                this.popupVisible = true;
                const formData = {
                    name: this.name,
                    email: this.email,
                    phoneNumber: this.phoneNumber,
                    status: this.status,
                    gender: this.gender,
                    address: this.address,
                    date: this.date,
                    degree1: this.degree1,
                };

                db.collection('JobDetailsData').add(formData).then(() => {
                    console.log("Data added to Firestore.");
                    this.name = "";
                    this.email = "";
                    this.phoneNumber = "";
                    this.status = "";
                    this.gender = "";
                    this.address = "";
                    this.date = null;
                    this.degree1 = "";
                }).catch((error) => {
                    console.error("Error submitting data:", error);
                });
            } else {
                alert('Please fill in all inputs.');
            }
        },

        click() {
            this.selectedFilter = 2;
        },

        handleFileImport4(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.profilePhoto = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        },
        openFileInput() {
            this.$refs.fileInput.click();
        },

        getTextDataFromFirestore() {
            const db = firebase.firestore();
            const textRef = db.collection("JobDetails").doc("YFekFKuIONV88t4pNvhz");

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
            const documentId = "YFekFKuIONV88t4pNvhz";
            const arrayName1 = "requirement";

            try {
                const doc = await firebase
                    .firestore()
                    .collection(collectionName)
                    .doc(documentId)
                    .get();

                if (doc.exists) {
                    const requirements = doc.data()[arrayName1] || []; // Ensure the array exists

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
.avilabel2 {
    background-color: #f2fae3 !important;
    color: #82ab3c !important;
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

.job-details-box-sec .row>div:not(:first-child):before {
    position: absolute;
    border-right: 1px solid black;
    top: 0;
    bottom: 0;
}

.jobreq {
    font-family: 'ExpoBook';
    padding: 17px 134px !important;
    border-radius: 10px;
}

.col-md-4 {
    flex: 0 0 33.3333333333%;
    max-width: 100%;
}

.v-list-item .v-list-item__title,
.v-list-item .v-list-item__subtitle {
    line-height: 1.2;
    text-align: end;
}

.v-application--is-ltr .v-input__prepend-outer {
    display: none;
}

.formdiv2 {
    height: 85px;
    border: 1px dashed #d9d9d9;
    align-items: center;
    display: grid;
}

.v-file-input .v-text-field__slot {
    min-height: 64px;
}

.v-text-field>.v-input__control>.v-input__slot>.v-text-field__slot {
    display: flex;
    flex: 1 1 auto;
    position: relative;
    justify-content: center;
}

.theme--light.v-file-input .v-file-input__text--placeholder {
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
    width: 39%;
}

.selectbtn {
    color: #969b9f !important;
    box-shadow: none;
}

.selectbtn:hover {
    box-shadow: none;
    color: white;
}

.cameraicon {
    color: white !important;
    background-color: #00a651;
    /* height: 31px; */
    border-radius: 100%;
    padding: 4px;
    position: relative;
    right: 32px;
    bottom: 10px;
    z-index: 1;
}

.v-dialog:not(.v-dialog--fullscreen) {
    max-height: 90%;
    border-radius: 18px;
}
</style>
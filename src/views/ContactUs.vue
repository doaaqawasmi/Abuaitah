<template>
    <div>
        <div class="ContactPage-title" style="text-align: center; height: 450px;">
            <div class="mr-7">
                <h4 class="whotext">
                    تواصل معنا
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
                        <h4 style="color: #00a651;">تواصل معنا</h4>
                    </v-btn>
                </div>
            </div>
        </div>
        <v-container>
            <v-row dir="rtl" style="justify-content: space-between;" class="mt-15">
                <v-col cols="12" md="6">
                    <div class="contact-section">
                        <h4 style="position: relative; line-height: 10px; margin-left: 160px;" class="aboutCom2">{{ textData
                            ? textData.title : '' }}
                        </h4>
                        <br />
                        <p class="son" style="line-height: 20px;">{{ textData ? textData.paragraph : '' }}</p>
                        <form @submit.prevent="submit" class="form1">

                            <div class="formall">
                                <label class="formlabel" for="">نوع الرسالة</label>
                                <div class="formdiv">
                                    <v-icon class="formicon">mdi-account-outline</v-icon>
                                    <v-select class="forminput" v-model="select" :items="items"
                                        :rules="[v => !!v || 'Item is required']" placeholder="إختر نوع الرسالة"
                                        required></v-select>
                                </div>
                            </div>

                            <div class="formall">
                                <label class="formlabel" for="">الإسم كاملا</label>
                                <div class="formdiv">
                                    <v-icon class="formicon">mdi-email-outline</v-icon>
                                    <v-text-field v-model="name" class="forminput" placeholder="أدخل إسمك رباعيا"
                                        required></v-text-field>
                                </div>
                            </div>

                            <div class="formall">
                                <label class="formlabel" for="">رقم الجوال</label>
                                <div class="formdiv">
                                    <v-icon class="formicon">mdi-cellphone</v-icon>
                                    <v-text-field v-model="phoneNumber" class="forminput" placeholder="أدخل رقم جوالك "
                                        required></v-text-field>
                                </div>
                            </div>

                            <div class="formall">
                                <label class="formlabel" for="">البريد الإلكتروني</label>
                                <div class="formdiv">
                                    <v-icon class="formicon">mdi-at</v-icon>
                                    <v-text-field v-model="email" class="forminput" placeholder="أدخل بريدك الالكتروني"
                                        required></v-text-field>
                                </div>
                            </div>

                            <div class="formall">
                                <label class="formlabel" for="">الرسالة</label>
                                <div class="formdiv" style="height: 120px !important;">
                                    <v-icon style="position: relative; bottom: 40px;"
                                        class="formicon">mdi-format-align-right</v-icon>
                                    <v-text-field v-model="message" class="forminput" placeholder="أكتب نص رسالتك هنا"
                                        required></v-text-field>
                                </div>
                            </div>

                            <div style="text-align: end;">
                                <v-btn @click="submit" style="padding: 0 40px !important;" color="#00a651"
                                    class="white--text read">ارسال</v-btn>
                            </div>
                        </form>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="contact-info" style=" border: 1px solid #aeb1b4; border-radius: 10px;">
                        <div style="padding: 25px 50px;">
                            <div>
                                <h3 class="formlabel" style="line-height: 40px;">بيانات الإتصال</h3>
                                <h4 style="font-family: 'ExpoBook'; font-size: 13px;">
                                    أهلا بك .. نحن على استعداد لخدمتك واستقبال كافة اقتراحاتك واستفساراتك, يمكنك التواصل
                                    معنا مباشرة على أرقامنا
                                </h4>
                            </div>
                            <div class="group">
                                <div style="display: flex;">
                                    <v-icon class="formicon">mdi-map-marker-outline</v-icon>
                                    <h3 class="formlabel">العنوان</h3>
                                </div>
                                <h3 class="mr-10"><span class="color-text">العنوان:</span>
                                    شمال غزة – شارع صلاح الدين – منطقة شعشاعة</h3>
                            </div>
                            <hr>
                            <div class="group">
                                <div style="display: flex;">
                                    <v-icon class="formicon">mdi-phone-in-talk-outline</v-icon>
                                    <h3 class="formlabel">أرقام الشركة</h3>
                                </div>
                                <div class="mr-10">
                                    <h3><span class="color-text">رقم الجوال: </span>0598893600</h3>
                                    <h3><span class="color-text">رقم الهاتف: </span>082455020</h3>
                                    <h3><span class="color-text">رقم مدير المبيعات: </span>0566606600</h3>
                                    <h3><span class="color-text">رقم متابعة العملاء: </span>0598893600</h3>

                                </div>
                            </div>
                            <hr>
                            <div class="group">
                                <div style="display: flex;">
                                    <v-icon class="formicon">mdi-at</v-icon>
                                    <h3 class="formlabel">إيميل الشركة</h3>
                                </div>
                                <h3 class="mr-10"><span class="color-text">البريد الإلكتروني:</span>info@abuaitah.ps</h3>
                            </div>
                            <hr>
                            <div class="group">
                                <div style="display: flex;">
                                    <v-icon class="formicon">mdi-account-group-outline</v-icon>
                                    <h3 class="formlabel">أرقام الموزعين</h3>
                                </div>
                                <table
                                    style="border: 1px solid; border-collapse: collapse; position: relative; top: 15px; border-radius: 10px !important; border-style: hidden;">
                                    <tbody style=" ">
                                        <tr>
                                            <td class="tabled">محافظة الشمال: <strong>0594220235</strong></td>
                                            <td class="tabled">محافظة غزة: <strong>0594220235</strong></td>
                                        </tr>
                                        <tr style="background-color: #f3f3f3;">
                                            <td class="tabled">محافظة الوسطى: <strong>0594220235</strong></td>
                                            <td class="tabled">محافظة خانيونس: <strong>0594220235</strong></td>
                                        </tr>
                                        <tr>
                                            <td class="tabled">محافظة رفح: <strong>0594220235</strong></td>
                                            <td class="tabled">
                                                <div class="ct-social">
                                                    <span>شبكاتنا </span>
                                                    <v-btn v-for="(social, index) in socialMedia" :key="index"
                                                        class="social social3">
                                                        <img :src="social.image" :alt="social.name">
                                                    </v-btn>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <div class="ContactPage-map" style="text-align: center; height: 450px; " dir="rtl">
            <div class="maptext">
                <v-icon class="mapicon">mdi-map-marker-outline</v-icon>
                <div class="text-center" style="max-width: 99%;">
                    <h3>المقر:</h3>
                    <p>شمال غزة – شارع صلاح الدين – منطقة شعشاعة</p>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import { firebase, db } from "@/fb";
import "firebase/firestore";
export default {
    data() {
        return {
            items: [{ text: "" }, { text: "" }, { text: "" }],
            // numberData: [
            //     { num: '', number: '' },
            // ],
            socialMedia: [
                { name: 'Twitter', image: 'photo/icon/twitter2.png' },
                { name: 'Instagram', image: 'photo/icon/instagram2.png' },
                { name: 'Facebook', image: 'photo/icon/facebook2.png' },
                { name: 'YouTube', image: 'photo/icon/youtube2.png' },
            ],
            checkbox: false,
            textData: null,
            loaded: false,

            select: null,
            name: '',
            phoneNumber: '',
            email: '',
            message: '',
        }
    },

    async mounted() {
        this.getTextDataFromFirestore();
        try {
            await this.fetchContactUsData();
            this.loaded = true;
        } catch (error) {
            console.error("Error fetching data:", error);
            this.loaded = true;
        }
    },

    methods: {
        getTextDataFromFirestore() {
            const db = firebase.firestore();
            const textRef = db.collection("ContactUs").doc("5qAxMkILIO0LYfdhDXHC");

            textRef
                .get()
                .then((doc) => {
                    if (doc.exists) {
                        this.textData = doc.data();
                        const data = doc.data();
                        for (let i = 1; i <= 4; i++) {
                            const numKey = `num${i}`;
                            const numberKey = `number${i}`;
                            if (data[numKey] && data[numberKey]) {
                                this.numberData.push({ num: data[numKey], number: data[numberKey] });
                            }
                        }
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

        async fetchContactUsData() {
            const docId = "5qAxMkILIO0LYfdhDXHC";
            const docRef = firebase.firestore().collection("ContactUs").doc(docId);

            try {
                const doc = await docRef.get();
                if (doc.exists) {
                    const data = doc.data();
                    for (let i = 0; i < 3; i++) {
                        this.items[i].text = data[`problem${i + 1}`];
                    }
                } else {
                    console.log("Document not found!");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        submit() {
            const formData = {
                select: this.select,
                name: this.name,
                phoneNumber: this.phoneNumber,
                email: this.email,
                message: this.message,
            };

            db.collection('ContactUs').add(formData).then(() => {
                console.log("Data added to Firestore.");
                this.select = "";
                this.name = "";
                this.phoneNumber = "";
                this.email = "";
                this.message = "";
            }).catch((error) => {
                console.error("Error submitting data:", error);
            });
        },
    },


}
</script>
<style>
.ContactPage-title {
    background-image: url('/public/photo/background/Contact.png');
    background-size: cover;
    height: 100%;
}

.v-select__slot label {
    left: auto !important;
}

.v-text-field>.v-input__control>.v-input__slot:before,
.v-text-field>.v-input__control>.v-input__slot:after {
    content: none;
}

.formdiv {
    border: 1px solid #d9d9d9;
    border-radius: 7px;
    display: flex;
    height: 40px;
}

.formicon {
    color: #00a651 !important;
    margin-left: 10px;
    margin-right: 5px;
}

.forminput {
    position: relative;
    bottom: 13px;
    font-family: 'Expobook';
    font-size: small;
}

.formlabel {
    font-family: 'Expobook';
    font-size: medium;
    line-height: 30px;
}

.formall {
    margin: 18px 0;
}

.form1 {
    margin-top: 40px;
}

.tabled {
    border: 1px solid #aeb1b4;
    padding: 7px;
    padding-left: 25px;
}

.group {
    margin: 20px 0;
    font-family: 'ExpoLight';
    font-size: small !important;
}

.color-text {
    color: #aeb1b4;
    font-size: small;
}

.v-btn:not(.v-btn--round).v-size--default {
    min-width: 30px !important;
}

.social2 {
    height: 19px !important;
}

table td::before {
    content: "";
    position: absolute;
    border-radius: 10px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #aeb1b4;
}

.ContactPage-map {
    margin-top: 30px;
    background-image: url('/public/photo/background/map.png');
    background-position-x: center;
}

.maptext {
    background-color: white;
    display: inline-table;
    position: relative;
    top: 49%;
    border-radius: 11px;
    max-width: fit-content;
}

.mapicon {
    background-color: #00a651;
    color: white !important;
    border-radius: 100%;
    padding: 7px;
    position: relative;
    bottom: 20px;
}

.ct-social {
    width: max-content;
}

h3,
.h3 {
    font-size: 0.85rem;
}
</style>
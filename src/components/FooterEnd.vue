<template>
    <div>

        <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column footer-head">

            <v-btn class="mt-4 telegram" x-large icon>
                <img class="" src="photo/icon/telegram.png" alt="">
            </v-btn>

            <h4 class="white--text mt-5 mb-13" style="font-family: 'ExpoBook' !important; font-size: x-large;">إنضم للقائمة
                البريدية ليصلك كل
                جديد</h4>
            <v-container>
                <v-row justify="center">
                    <v-col cols="12" sm="8" md="6" lg="6">
                        <form action="" class="mb-7 formSc">
                            <div class="form-div">
                                <button type="submit" class="subcicrib pl-7 pr-7">إشتراك</button>
                                <div style="display: flex;">
                                    <v-text-field dir="rtl" class="pt-1 pr-2 forminput"
                                        style=" position: relative; top: 1px;" required="" type="email"
                                        placeholder="البريد الإلكتروني"></v-text-field>
                                    <v-icon class="email">mdi-email-outline</v-icon>
                                </div>
                            </div>
                        </form>
                    </v-col>
                </v-row>
            </v-container>

            <v-container>
                <v-row class="row">
                    <v-col cols="12">
                        <div class="white--text d-flex justify-space-between flex-wrap">
                            <div class="footerText">
                                <h4 style="text-align: end;">الشبكات الإجتماعية</h4>
                                <div class="d-flex">
                                    <v-btn class="social">
                                        <img class="socialImg" src="photo/icon/youtube.png" alt="">
                                    </v-btn>
                                    <v-btn class="social">
                                        <img class="socialImg" src="photo/icon/linkedin.png" alt="">
                                    </v-btn>
                                    <v-btn class="social">
                                        <img class="socialImg" src="photo/icon/instagram.png" alt="">
                                    </v-btn>
                                    <v-btn class="social">
                                        <img class="socialImg" src="photo/icon/facebook.png" alt="">
                                    </v-btn>
                                    <v-btn class="social">
                                        <img class="socialImg" src="photo/icon/twitter.png" alt="">
                                    </v-btn>
                                </div>
                            </div>
                            <div>
                                <router-link to="/ContactUs" custom v-slot="{ navigate }" style="margin: auto;">
                                    <v-btn text @click="navigate" role="link">
                                        <h4 class="footerText">تواصل معنا</h4>
                                    </v-btn>
                                </router-link>
                            </div>
                            <div class="d-flex flex-column">
                                <router-link to="/EventS" custom v-slot="{ navigate }" class="my-2">
                                    <v-btn text @click="navigate" role="link">
                                        <h4 class="footerText">الفعاليات</h4>
                                    </v-btn>
                                </router-link>
                                <router-link to="/StodiO" custom v-slot="{ navigate }" class="my-2">
                                    <v-btn text @click="navigate" role="link">
                                        <h4 class="footerText">الألبومات</h4>
                                    </v-btn>
                                </router-link>
                                <router-link to="/JobS" custom v-slot="{ navigate }" class="my-2">
                                    <v-btn text @click="navigate" role="link">
                                        <h4 class="footerText">الوظائف</h4>
                                    </v-btn>
                                </router-link>
                            </div>
                            <div class="d-flex flex-column">
                                <router-link to="/" custom v-slot="{ navigate }" class="my-2">
                                    <v-btn text @click="navigate" role="link">
                                        <h4 class="footerText">الرئيسية</h4>
                                    </v-btn>
                                </router-link>
                                <router-link to="/WhoWe" custom v-slot="{ navigate }" class="my-2">
                                    <v-btn text @click="navigate" role="link">
                                        <h4 class="footerText">من نحن؟</h4>
                                    </v-btn>
                                </router-link>
                                <router-link to="/ProductPage" custom v-slot="{ navigate }" class="my-2">
                                    <v-btn text @click="navigate" role="link">
                                        <h4 class="footerText">المنتجات</h4>
                                    </v-btn>
                                </router-link>
                            </div>
                            <div>
                                <img src="photo/logo/logo.png" alt="">
                            </div>
                        </div>
                    </v-col>
                </v-row>

            </v-container>

            <v-divider></v-divider>

        </v-footer>
        <div class="footercopy">
            {{ new Date().getFullYear() }} &copy; <strong>جميع الحقوق محفوظة </strong>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
    }),
}
</script>
<style>
.footer-head {
    background-image: url("/public/photo/background/cow5.png");
    background-size: cover;
}

.telegram {
    background-color: #00a651 !important;
    border-radius: 100%;
}

.subcicrib {
    color: white;
    background-color: #00a651;
    border-radius: 10px;
    padding: 5px 25px;
}

.subcicrib:hover {
    background-color: red;
}

.formSc {
    background-color: white;
    border-radius: 10px;
    padding: 4px 5px;
}

.form-div {
    display: flex;
    justify-content: space-between;
}

.email {
    color: #00a651 !important;
}

*:focus {
    outline: none;
}

.social {
    background-color: transparent !important;
    box-shadow: none;
    margin-left: 10px !important;
}

.v-btn:not(.v-btn--round).v-size--default {
    height: 36px;
    min-width: 44px !important;
    padding: 0 0px;
}

.footerText {
    line-height: 3rem;
    font-family: 'ExpoBook';
    color: white;
}

.socialImg:hover {
    background-color: #00a651;
    border-radius: 100%;
}

.footercopy {
    background-color: #2e3092;
    padding: 15px;
    color: white;
    width: 100%;
    text-align: center;
    font-family: 'ExpoBook';
}
</style>
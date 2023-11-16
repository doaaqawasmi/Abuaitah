import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa' || 'md' || 'mdi',
        defaultSet: 'mdi',
    },
    theme: {
        themes: {
            light: {
                primary: '#7C92FE'
            }
        }
    }
});

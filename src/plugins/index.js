/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import VWave from 'v-wave'
import { VueAxios, axios } from './axios'
import i18n from '../i18n'
import 'aos/dist/aos.css'
// import Vue from 'vue'
// import MarqueeText from 'vue-marquee-text-component'

import VueApexCharts from "vue3-apexcharts";
// Or, if you have to support IE9
import '@dcasia/vue-aos/dist/vue-aos.css'
import  AOS  from 'aos'


export function registerPlugins (app) {
  loadFonts()
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(VueAxios, axios)
    .use(i18n)
    .use(AOS.init())
    .use(VueApexCharts)
    .use(VWave)
    // Vue.component('marquee-text', MarqueeText)

}

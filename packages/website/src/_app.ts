import type { App } from "vue";
import RouterLink from './components/router-link.vue'

export default (app: App) => {
    app.component('router-link', RouterLink)
};
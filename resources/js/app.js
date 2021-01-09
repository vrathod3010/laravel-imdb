require("./bootstrap");

import { App, plugin } from "@inertiajs/inertia-vue";
import Vue from "vue";
import { InertiaProgress } from "@inertiajs/progress";
import VueImageLoader from "@kevindesousa/vue-image-loader";

InertiaProgress.init({ color: "#F97316" });
Vue.use(plugin);
Vue.use(VueImageLoader);

const el = document.getElementById("app");

new Vue({
    render: h =>
        h(App, {
            props: {
                initialPage: JSON.parse(el.dataset.page),
                resolveComponent: name =>
                    import(`@/Pages/${name}`).then(module => module.default)
            }
        })
}).$mount(el);

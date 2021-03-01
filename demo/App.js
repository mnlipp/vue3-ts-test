import { createApp } from "/node_modules/vue/dist/vue.esm-browser.js";
import { Hello } from "/lib/vue3-ts-demo.js";

let RootComponent = {
};

const app = createApp(RootComponent);
app.config.globalProperties.window = window;

app.component('hello', Hello);

app.mount('#app');

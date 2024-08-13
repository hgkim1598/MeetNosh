import { createApp } from 'vue'; // Vue 애플리케이션을 생성하는 함수를 가져옵니다.
import App from './App.vue'; // 최상위 컴포넌트인 App을 가져옵니다.
import vuetify from './plugins/vuetify'; // Vuetify 플러그인을 가져옵니다.

const app = createApp(App); // Vue 애플리케이션 인스턴스를 생성합니다.

app.use(vuetify); // Vuetify 플러그인을 Vue 애플리케이션에 추가합니다.

app.mount('#app'); // Vue 애플리케이션을 '#app' 엘리먼트에 마운트합니다.
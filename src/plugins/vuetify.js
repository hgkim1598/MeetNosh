import { createVuetify } from 'vuetify'; // Vuetify를 생성하는 함수를 가져옴
import 'vuetify/styles'; // Vuetify의 기본 스타일을 가져옴
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'; // Material Design Icons(MDI) 아이콘 세트를 가져옴
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default createVuetify({
  // Vuetify 인스턴스를 생성합니다.
  components, // Vuetify 컴포넌트를 설정합니다
  directives, // Vuetify 지시문을 설정합니다
  icons: {
    defaultSet: 'mdi', // 기본 아이콘 세트를 MDI로 설정
    aliases, // 아이콘 별칭을 설정
    sets: {
      mdi, // MDI 아이콘 세트를 설정
    },
  },
});

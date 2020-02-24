import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false;

[
  faPlus,
  faCheck
].forEach(v => library.add(v))

// グローバルコンポーネントとして登録
Vue.component('fa', FontAwesomeIcon)

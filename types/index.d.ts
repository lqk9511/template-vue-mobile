import { VueConstructor } from 'vue'
// import { Store } from 'vuex'
// import { ElMessage } from 'element-ui/types/message'

declare module 'vue/types/vue' {
  interface VueConstructor {
    // store: Store<any>
    api: any
    chineseDistricts: any
    // message: ElMessage
  }
}
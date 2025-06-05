// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import 'vuetify/styles' // make sure styles are imported
import { aliases, mdi } from 'vuetify/iconsets/mdi' // if you use icons
import { VBtn } from 'vuetify/components'


const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  aliases: {
    VBtnSecondary: VBtn,
    VBtnTertiary: VBtn,
  },
  defaults: {
    VBtn: {
      color: 'primary',
      variant: 'text',
      fontweight: 'bold',
    },
    VBtnSecondary: {
      color: 'secondary',
      variant: 'flat',
    },
    VBtnTertiary: {
      rounded: true,
      variant: 'plain',
    },
  },
  // other Vuetify options...
})

export default vuetify;

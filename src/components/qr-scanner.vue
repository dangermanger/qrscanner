<template>
  <qrcode-stream>
  <b>stuff here overlays the camera stream</b>
</qrcode-stream>
</template>


<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {

  components: { QrcodeStream },

  data () {
    return {
      result: '',
      error: ''
    }
  }
}
</script>

<style scoped>
.scanner{
    width: 500px !important;
    height: 300px !important;
}
</style>
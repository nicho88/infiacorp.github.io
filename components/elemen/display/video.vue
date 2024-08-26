<template>
    <div>
      <video ref="videoPlayer" class="video-js vjs-fill 	vjs-layout-small" ></video>
    </div>
  </template>
  
  <script>
  import videojs from 'video.js';
  


  export default {
    name: 'VideoPlayer',
    props: {
      options: {
        type: Object,
        default() {
          return {};
        }
      },
      // value: {
      //   type: String
      // }
    },
    data() {
      return {
        player: null,
        nomor: 0
      }
    },
    head: {
      link: [
          { rel: 'stylesheet', href: "https://unpkg.com/video.js@7/dist/video-js.min.css" },
      ]
    },
    watch: {
      nomor(val) {
        console.log('atch',val)
      }
    },

    mounted() {
      // this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      //   // this.player.log('onPlayerReady', this);
      // });
        this.initialize()


    },
    beforeDestroy() {
      if (this.player) {
        this.player.dispose();
      }
    },
    methods: {
      initialize() {
        this.player = videojs(this.$refs.videoPlayer, this.options);
        this.player.on('ready', function(){
          // console.log('ready')
        })
        
        this.player.on('ended',function(e){
          console.log('beres')
        })

      },

    }
  }
  </script>
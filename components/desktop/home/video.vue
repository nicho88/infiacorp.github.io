<template>
    <div>
        <!-- <div class="opacity-0">
            <ElemenModalVid 
            v-model="modal.status"
            :key="'fdafda'+modal.key"
        >
            <div class="opacity-0 h-screen bg-warna001 flex items-center relative">
                <button v-if="statusVisit" @click="tutupModal" class="absolute right-0 top-0 text-gray-400 p-3 transition-all duration-200 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
                </button>
                <div class="w-screen ">
                    <ElemenDisplayVideo 
                    :options="videoOptions"
                    />
                </div>

            </div>

        </ElemenModalVid> -->
        <!-- </div> -->
    <transition name="fade1">
            <div v-if="modal.status" class="fixed top-0 left-0 right-0 bottom-0 bg-warna001  flex items-center" style="z-index:9999 !important">
            <div class="w-screen bg-[#1436F0] ">
                <div class="elemen-vid">
                    <ElemenDisplayVideo 
                    :options="videoOptions"
                    />

                </div>

                </div>
        </div>
        </transition>


    </div>
</template>

<script>


    export default {



        head: {
      link: [
          { rel: 'stylesheet', href: "https://unpkg.com/video.js@7/dist/video-js.min.css" },
      ]
    },
        data() {
            return {
                vid: '',
                statusVisit: false,
                modal: {
                    status: false,
                    key: 0,
                },
                pathVid: '/vids/infia-opening-1.mp4',
                videoOptions: {
                    preload: 'auto',
                    autoplay: true,
                    controls: false,
                    muted:true,
                    loop:false,
                    playsinline:true,
                    responsive: true,
                    fluid:true,
                    fill:true,
                    breakpoints: {
                        small:800
                    },
                    sources: [
                        { src: "/vids/infia-opening-1.mp4",type: "video/mp4" },
                        { src: "/vids/infia-opening-1.webm",type: "video/webm" },

                    ]
                }
            }
        },
        mounted() {
            this.initialize()

        },
        methods: {

            initialize() {


                this.$nextTick(() => {
                    this.modal.status = true
                    this.modal.key +=1
                    if (process.client) document.body.classList.add('overflow-hidden')
                })
                setTimeout(() => {
                    this.pindah()
                    // this.modal.status = false
                }, 10500);

            },
            pindah() {
                console.log('kesini')
                // this.$gsap.to('.elemen-vid',{
                //     ocpacity:0.1,
                //     duration:1,
                //     ease: "Power1.easeOut",
                // })
                setTimeout(() => {
                    this.modal.status=false
                    if (process.client) document.body.classList.remove('overflow-hidden')

                },2000)
            },

            tutupModal() {
                this.modal.status = false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
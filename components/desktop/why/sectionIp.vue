<template>
    <div class="bg-warna14  " >
        <div class="wrapper-smooth" >
        <div class="main-why" >
            <section class="why-section-1 relative pt-[64px]">
                <div class="inside-wrapper max-h-screen relative">
                    <div class="banner-wrapper h-[50vh] overflow-hidden">
                        <img src="/images/banner-ip.png"  class="banner-ip w-full banner-ip border  " />
                    </div>


                </div>
            </section>
            <div :style="loader ?'opacity:1;' : 'opacity:0;' ">
                <DesktopWhySubIp1 />
            </div>
            <DesktopWhySubMarketShare >
                <div class="container mx-auto py-10">
                    <ElemenTab 
                        v-model="tab"
                        :list="listTab"
                    />
                </div>
            </DesktopWhySubMarketShare>

            <section>
            <div class="bg-black overflow-hidden">
                <div class="container mx-auto  image-ip ">
                    <div class="min-[500px] overflow-hidden">
                        <img src="/images/champion.png" class="h-full my-10 mx-auto" v-if="parseTab=='champion'" />
                        <img src="/images/value-chain.png" class="h-full my-10 mx-auto" v-if="parseTab=='value'" />
                        <img src="/images/ecosystem.png" class="h-full my-10 mx-auto" v-if="parseTab=='expanding'" />
                    </div>

                        <!-- <img src="/images/champion.png" class="h-full my-10 mx-auto" /> -->
                </div>
            </div>
            <div class="footer-champion">
                <div class="bg-warna001 pt-20 " style="background:url('/images/bulat-footer.png') no-repeat bottom right">
                    <div class="container mx-auto mb-20" v-if="parseTab=='champion'">
                        <div class="text-white font-acumin text-[32px] mb-5 font-bold">Champion IP Cycle</div>
                        <div class="text-white w-full md:w-3/5">
                            With years of experience in cultivating IP, we can turn any IP into a champion. Supporting them in a cycle of infinity that will keep giving birth to brand new IPs for aeons. Developed IP Web3 & Other Derivative Business Licensing
                        </div>
                    </div>
                    <div class="container mx-auto mb-20" v-if="parseTab=='value'">
                        <!-- <div class="text-white font-acumin text-[32px] mb-5 font-bold">Champion IP Cycle</div>
                        <div class="text-white w-full md:w-3/5">
                            With years of experience in cultivating IP, we can turn any IP into a champion. Supporting them in a cycle of infinity that will keep giving birth to brand new IPs for aeons. Developed IP Web3 & Other Derivative Business Licensing
                        </div> -->
                    </div>
                    <div class="container mx-auto mb-20" v-if="parseTab=='expanding'">
                        <div class="text-white w-full md:w-3/5">
                            We aim to become big for the sake of creators. Being big means maintaining a better ecosystem, connecting to more networks, and, most importantly, becoming a creative IP Powerhouse that always has their back.
                        </div>
                    </div>
                    <div class=" text-right text-[14px] container mx-auto py-2 text-warnad9">
                        Copyright © INFIA 2023
                    </div>
                </div>
        </div>

    </section>
        <!-- <DesktopWhyChampion 
            :status="statusComponent.champion"
            v-model="comp.champion"
        />
        <DesktopWhyValue 
            :status="statusComponent.value"
            v-model="comp.value"
        /> -->
    </div>
</div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                loader:false,
                statusComponent: {
                    champion: '',
                    value: '',
                    expanding: ''
                },
                comp: {
                    champion: '',
                    value: '',
                    expanding: ''
                },

                tab: '',
                parseTab: '',
                oldComponent: '',
                newComponent: '',
                keyTab: 0,
                listTab: [
                    {
                        id: 'champion',
                        name: 'Champion IP Cycle'
                    },
                    {
                        id: 'value',
                        name: 'Value Chain'
                    },
                    {
                        id: 'expanding',
                        name: 'Expanding Universe Ecosystem Model'
                    }
                ]
            }
        },
        watch: {
            tab(val, oldVal) {
                // this.animateImage()
                setTimeout(() => {
                    this.parseTab = val
                },500)

            },
            'comp.champion'(val) {
                this.setTab(val)
            }
        },
        mounted() {
            this.initialize()
        },
        methods: {
            initialize() {

                this.loader=false;

                this.tab = 'champion'
                this.comp.champion = 'ready'
                    setTimeout(() => {
                        this.loader=true;

                        this.animate()
                    },300)

            },
            animate() {
                const smoother = this.$ScrollSmoother.create({
                    wrapper: '.wrapper-smooth',
                    effects:true,
                    content: '.main-why',
                    smooth:4,
                    smoothTouch: 0.1,
                })
                this.section1()
            },
            section1() {

                this.$gsap.fromTo('.shw-header-1', 
                { yPercent:-50, opacity:0},
                    {
                    yPercent: 0,
                    delay: 0.5,
                    opacity:1,
                    ease: 'Power1.easeIn',
                    duration:0.5,
                })
                this.$gsap.fromTo('.shw-header-2', 
                { y:50, opacity:0},
                    {
                    y: 0,
                    delay: 0.7,
                    opacity:1,
                    ease: 'Power1.easeIn',
                    duration:0.8,
                    // scrollTrigger: {
                    //     trigger: '.section-4',
                    //     // pin: true,
                    //     start: "40px 60%",
                    //     end: '+=200',
                    //     scrub: true,
                    //     // markers: true,
                    //     // once:true
                    //     }
                })
                this.$gsap.to('.banner-ip',
                {
                    yPercent:-50,
                    duration:1,
                    ease: 'Power1.easeIn',
                    scrollTrigger: {
                        trigger: '.banner-wrapper',
                        pin:true,
                        scrub:true,
                        markers: true,
                        start: 'top top'
                    }

                })


            },




            setTab(val) {
                this.comp = {
                    champion: '',
                    value: '',
                    expanding: ''
                }
                this.$nextTick(() => {
                    this.comp[val] = 'ready'
                })
            },
            animateImage() {
                // this.$gsap.to('.image-ip', {opacity: 0, duration:0.5, ease: 'Power4.easeOut'})
                // setTimeout(() => {
                //     this.$gsap.to('.image-ip', {opacity: 100, duration:0.5, ease: 'Power4.easeIn'});
                // },500)

            }
            
        }

    }
</script>

<style lang="scss" scoped>

</style>
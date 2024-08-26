<template>
    <div class="smooth-inside bg-warna14">
        <div class="overflow-hidden  banner-wrapper">
                <div class="h-[190px] md:h-[350px]  overflow-hidden relative ">
                    <img ref="bannerip" src="/images/banner-ip-baru.png"  class=" w-full absolute  top-0 left-0 right-0  banner-ip" />
                </div>
            <div class="relative">
                    <div class="hidden md:block absolute top-0 left-0 " >
                            <img src="/images/why-bg.png" class="h-[335px] w-[522px] -translate-y-[50%]" />
                    </div>
                    <div class="block md:absolute top-0   left-0 w-full right-0">
                        <div class="container mx-auto md:-translate-y-[100%]">
                            <h1 class="section-header shw-header-1 opacity-10">Why We Focus on IP?</h1>
                        </div>
                    </div>
                    <DesktopWhySubIp1 />
             </div>
        </div>
        <div class="hidden md:block h-[500px] w-full bg-warna14"></div>
        <DesktopWhySubMarketShare >
            <div class="container mx-auto py-10">
                <ElemenTab 
                    v-model="tab"
                    :list="listTab"
                />
            </div>
        </DesktopWhySubMarketShare>
        <div class="bg-black  overflow-hidden min-h-[200px] md:min-h-[500px] transition-all duration-200">
            <div class="container mx-auto  image-ip market-share-tab-item ">
                <div class="min-[500px] overflow-hidden">
                    <img src="/images/champion.png" class="h-full my-10 mx-auto" v-if="parseTab==0" />
                    <img src="/images/value-chain.png" class="h-full my-10 mx-auto" v-if="parseTab==1" />
                    <img src="/images/ecosystem.png" class="h-full my-10 mx-auto" v-if="parseTab==2" />
                </div>

                    <!-- <img src="/images/champion.png" class="h-full my-10 mx-auto" /> -->
            </div>
        </div>

        <div class="footer-champion ">
            <div class="bg-warna001 pt-20 pb-44  relative" style="background:url('/images/bulat-footer.png') no-repeat bottom right">
                <div class="container mx-auto mb-20" v-if="parseTab==0">
                    <div class="text-white font-acumin text-[32px] mb-5 font-bold">Champion IP Cycle</div>
                    <div class="text-white w-full md:w-3/5">
                        With years of experience in cultivating IP, we can turn any IP into a champion. Supporting them in a cycle of infinity that will keep giving birth to brand new IPs for aeons. Developed IP Web3 & Other Derivative Business Licensing
                    </div>
                </div>
                <div class="container mx-auto mb-20" v-if="parseTab==1">
                    <!-- <div class="text-white font-acumin text-[32px] mb-5 font-bold">Champion IP Cycle</div>
                    <div class="text-white w-full md:w-3/5">
                        With years of experience in cultivating IP, we can turn any IP into a champion. Supporting them in a cycle of infinity that will keep giving birth to brand new IPs for aeons. Developed IP Web3 & Other Derivative Business Licensing
                    </div> -->
                </div>
                <div class="container mx-auto mb-20" v-if="parseTab==2">
                    <div class="text-white w-full md:w-3/5">
                        We aim to become big for the sake of creators. Being big means maintaining a better ecosystem, connecting to more networks, and, most importantly, becoming a creative IP Powerhouse that always has their back.
                    </div>
                </div>
                <div class="absolute right-0 bottom-0 text-right text-[14px] container mx-auto py-2 text-warnad9">
                    Copyright © INFIA 2023
                </div>
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

                tab: 0,
                parseTab: 0,
                oldComponent: '',
                newComponent: '',
                keyTab: 0,
                listTab: [
                    {
                        id: 0,
                        name: 'Champion IP Cycle'
                    },
                    {
                        id: 1,
                        name: 'Value Chain'
                    },
                    {
                        id: 2,
                        name: 'Expanding Universe Ecosystem Model'
                    }
                ]
            
            }
        },
        watch: {
            tab(val, oldVal) {
                this.animateTab(val, oldVal)
                // setTimeout(() => {
                //     this.parseTab = val
                // },500)

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

                this.tab = 0
                this.comp.champion = 'ready'


                setTimeout(() => {
                    this.animateNow()
                },500)
            },
            animateNow() {
                const smoother = this.$ScrollSmoother.create({
                    // wrapper: '.smooth-wrapper',
                    effects:true,
                    content: '.smooth-inside',
                    smooth:2,
                    smoothTouch: 1,
                    normalizeScroll: true
                })
                // smoother.effects('.banner-ip', {speed: 'auto', pin:true})\
                // this.$ScrollTrigger.matchMedia({
                //     "(min-width:800px)": function() {
                //         this.$gsap.to('.banner-ip', {
                //             yPercent:-50,
                //             ease:'none',
                //             duration: 0.5,
                //             scrollTrigger: {
                //                 trigger: '.banner-wrapper',
                //                 pin:'.banner-wrapper',
                //                 start: 'top 67px',
                //                 end: 'bottom center',
                //                 scrub:3,
                //                 // markers:true,
                //                 pinSpacing:false
                //             }
                //         })
                //     }
                // })

                this.pageTitle()
                this.section2()
            },
            section2() {
                // this.$ScrollTrigger.matchMedia({
                //     "(min-width:800px)": function() {
                //         this.$gsap.fromTo('.mio-content',
                //             {
                //                 opacity:0,
                //                 x: -20,
                //             },
                //             {
                //                 opacity:1,
                //                 x:0,
                //                 ease: 'none',
                //                 stagger: 0.2,
                //                 scrollTrigger: {
                //                     trigger: '.why-section-3',
                //                     start: 'bottom 30%',
                //                     end: 'top top',
                //                     scrub:true,
                //                 }
                //             }
                //         )
                //     },
                // })
                const mm = this.$gsap.matchMedia();
                mm.add("(min-width:800px)", () => {

                    this.$gsap.to('.banner-ip', {
                            yPercent:-50,
                            ease:'none',
                            duration: 0.5,
                            scrollTrigger: {
                                trigger: '.banner-wrapper',
                                pin:'.banner-wrapper',
                                start: 'top 67px',
                                end: 'bottom center',
                                scrub:3,
                                // markers:true,
                                pinSpacing:false
                            }
                        })

                        this.$gsap.fromTo('.mio-content',
                            {
                                opacity:0,
                                x: -20,
                            },
                            {
                                opacity:1,
                                x:0,
                                ease: 'none',
                                stagger: 0.2,
                                scrollTrigger: {
                                    trigger: '.why-section-3',
                                    start: 'bottom 30%',
                                    end: 'top top',
                                    scrub:true,
                                }
                            }
                        );
                });
                mm.add("(max-width: 799px)", () => {
                    this.$gsap.fromTo('.mio-content',
                            {
                                opacity:0,
                                x: -20,
                            },
                            {
                                opacity:1,
                                x:0,
                                ease: 'none',
                                stagger: 0.2,
                                scrollTrigger: {
                                    trigger: '.why-section-3',
                                    start: 'top bottom',
                                    end: 'top center',
                                    scrub:true,
                                }
                            }
                        );
                });




                this.$gsap.fromTo('.mio-content-2',
                    {
                        opacity:0,
                        scale: 1.1,
                    },
                    {
                        opacity:1,
                        scale:1,
                        ease: 'none',
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: '.why-section-4',
                            start: 'center bottom',
                            end: 'top center',
                            scrub:true,
                        }
                    }
                )
                this.$gsap.fromTo('.sms-p',
                    {
                        opacity:0,
                        scale: 1.1,
                        y:10
                    },
                    {
                        opacity:1,
                        scale:1,
                        y:0,
                        ease: 'none',
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: '.section-market-share',
                            start: 'center bottom',
                            end: 'top center',
                            scrub:true,
                        }
                    }
                )

            },
            pageTitle() {
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
            animateTab(newVal, oldVal) {

                this.$gsap.to('.market-share-tab-item',
                {
                    xPercent: parseInt(newVal) > parseInt(oldVal) ? -100 : 100,
                    ease:'Power1.easeOut',
                    duration: 0.5,

                    onComplete:() => {
                        this.parseTab = newVal;
                        this.$gsap.fromTo('.market-share-tab-item',
                        {
                            xPercent: parseInt(newVal) > parseInt(oldVal) ? 100 : -100
                        },
                        {
                            xPercent:0,
                            ease:'Power1.easeIn',
                            duration: 0.5,
                        }
                        )
                    }
                }
                )
            }

        }
    }
</script>


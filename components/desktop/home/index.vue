<template>
    <div>
<!-- <DesktopHomeVideo 
        v-if="withVideo"
        /> -->
        <div v-if="loader">
            <div  class="overflow-hidden bg-warna15 wrapper-smooth">
                <div  class="main-home">
                    <div class="seksi-1" >
                        <DesktopHomeSection1 />
                    </div>
                    <div class="back-home1 relative " >
                        <div class="home-section home-section-2 pb-5  relative">
                            <DesktopHomeSection2 />
                        </div>
                        <div class="absolute top-0 right-0 -z-10 hidden md:block" data-speed="0.9"  >
                                <img  src="/images/bg-home-line-kanan.png" class="h-[165vh] " />
                            </div>
                        <div class="relative hidden md:block">
                            <div class="absolute top-0 left-0" data-speed="1.1"  >
                                <img  src="/images/bg-home-line-kiri.png" class="h-full z-10" />
                            </div>


                        </div>
                        <div class="home-section relative">
<!--                        <DesktopHomeSection3 /> -->
                        </div>
                        <div class=" home-section">
                            <DesktopHomeSection4 />
                        </div>
                    </div>

                    <div class="bg-white home-section">
<!--                    <DesktopHomeSection6 /> -->
                    </div>
<!--                    <DesktopHomeSectionFooter /> -->
                </div>
            </div>
        
        </div>

    </div>

</template>

<script>
    export default {
        props:['withVideo'],
        data() {
            return {
                statusVisit: false,
                loader:false
            }
        },
        mounted() {
            this.initialize()
        },
        methods: {
            initialize() {
                if (this.withVideo) {
                    setTimeout(() => {
                        this.loader = true;
                        this.$nextTick(() => this.animate())
                    },12500)
                } else {
                    this.loader = true;
                    this.$nextTick(() => this.animate())


                }
            },
            animate() {
                const smoother = this.$ScrollSmoother.create({
                    wrapper: '.wrapper-smooth',
                    effects:true,
                    content: '.main-home',
                    smooth:2,
                    smoothTouch: 1,
                })
                // smoother.paused(true)
                
                const triggerSection1 = {
                        trigger: '.section-1',
                        // pin: true,
                        start: 'top',
                        end: 'bottom',
                        scrub: true,
                        // markers: true
                        }
                this.$gsap.fromTo('.section-header-1', 
                    {opacity:0, x:100},
                    {
                    opacity: 1,
                    delay:0.5,
                    x:0,
                    ease: 'Expo.easeOut',
                    duration:4,
                    // scrollTrigger: triggerSection1
                })
                this.$gsap.fromTo('.section-desc-1', 
                    {opacity:0, x:100},
                    {
                    opacity: 1,
                    delay:0.7,
                    x:0,
                    ease: 'Expo.easeOut',
                    duration:5,
                    // scrollTrigger: triggerSection1
                })

                this.$gsap.to('.section-image-1', {
                    x: -200,
                    ease: 'Power1.easeOut',
                    duration:1,
                    scrollTrigger: triggerSection1
                })
                this.$gsap.to('.section-image-1-a', {
                    x: 300,
                    ease: 'Power1.easeOut',
                    duration:2,
                    scrollTrigger: triggerSection1
                })

                // this.setSnapSection()


                this.section2()
                this.section3()
                this.section4()
                this.section6()


            },
            section6() {
                this.$gsap.fromTo('.section-header-6', {
                    opacity:0,
                    x: -10
                    },
                    {
                        opacity:1,
                        x:0,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '.section-6',
                            scrub:true,
                            // markers: true,
                            start: 'top bottom',
                            end: 'top center'
                        }
                    }
                )
                this.$gsap.fromTo('.section-desc-6',
                    {
                        x: 10, opacity: 0
                    },
                    {
                        x: 0, opacity:1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '.section-6',
                            scrub: true,
                            // markers: true,
                            start: 'top bottom',
                            end: 'top center'
                        }
                    }
                )

            },
            section4() {
                this.$gsap.fromTo('.section-header-4', 
                { xPercent:-10, opacity:0},
                    {
                    xPercent: 0,
                    opacity:1,
                    ease: 'none',
                    duration:2,
                    scrollTrigger: {
                        trigger: '.section-4',
                        // pin: true,
                        start: "40px 60%",
                        end: '+=200',
                        scrub: true,
                        // markers: true,
                        // once:true
                        }
                })

                this.$gsap.fromTo('.section-desc-4', 
                { y:100, opacity:0.5},
                    {
                    y: 0,
                    opacity:1,
                    ease: 'none',
                    duration:2,
                    scrollTrigger: {
                        trigger: '.section-4',
                        // pin: true,
                        start: "40px 60%",
                        end: '+=200',
                        scrub: true,
                        // markers: true,
                        // once:true
                        }
                })

            },
            section3() {
                this.$gsap.to('.char', {
                    y: 0,
                    stagger: 0.01,
                    // delay: 0.1,
                    duration: .1,
                    scrollTrigger: {
                        trigger: '.section-3',
                        // pin: true,
                        start: "top 90%",
                        // end: '+=50',
                        end:'top 60%',
                        scrub: 3,
                        // markers:true
                        // once:true
                        }
                })

                this.$gsap.fromTo('.section-desc-3', 
                { y:300},
                    {
                    y: 0,
                    ease: 'none',
                    duration:2,
                    stagger:0.2,
                    scrollTrigger: {
                        trigger: '.section-3',
                        // pin: true,
                        start: "top 90%",
                        end: '30% center',
                        scrub: true,
                        // once:true
                        }
                })
                this.$gsap.fromTo('.home-image-why-we-focus', 
                    {
                        x:100,
                        opacity:0,
                    },
                    {
                        x:0,
                        opacity:1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: '.section-3',
                            start: 'top 90%',
                            end: 'center center',
                            scrub:true
                        }
                    }
                )
                // home-image-why-we-focus
            },
            section2() {
                this.$gsap.fromTo('.section-header-2', 
                { x:50, opacity: 0},
                    {
                    x: 0,
                    opacity:1,
                    ease: 'none',
                    duration:2,
                    scrollTrigger: {
                        trigger: '.section-2',
                        // pin: true,
                        start: "top center",
                        end: '+=50',
                        once: false,
                        scrub: true,
                        // markers: true,
                        // once:true
                        }
                })

                this.$gsap.fromTo('.section-slider-2', 
                { y:100},
                    {
                    y: 0,
                    ease: 'none',
                    duration:2,
                    scrollTrigger: {
                        trigger: '.slider-trigger-2',
                        // pin: true,
                        start: "top bottom",
                        end: 'top 60%',
                        scrub: 3,
                        once:false,
                        // markers: true
                        }
                })
            },
            setSnapSection() {
                const homeSection = this.$gsap.utils.toArray(".home-section");
                homeSection.forEach((e,index) => {
                    this.$ScrollTrigger.create({
                        trigger: e,
                        snap: {
                            snapTo: 1,
                            duration: { min: 0.2, max: 1 },
                            delay: 0.1
                        },
                        scrub: true,
                        pin: true,
                        id: 'home-scene-'+index,
                    })
                })
            }


        }
    }
</script>

<style>
.char {
    transform: translateY(115px);
    transition: transform .5s;
}
</style>


<template>
    <div class="slick-dots-1">
        <client-only>
            <VueSlickCarousel v-bind="sliderOptions">
                <div
                    v-for="(item, index) in list" :key="'key3slider'+index"
                >
                    <div class="grid grid-cols-12">
                        <div class="col-span-8 flex items-end">
                            <div class="pb-5">
                                <div class=" text-[20px] lg:text-[40px] 2xl:text-[60px] leading-none text-white font-trickster-black mb-2" v-html="item.title">  </div>
                                <div class=" text-white text-md md:text-lg font-bold"> {{ item.text }} </div>
                            </div>

                        </div>
                        <div class="col-span-4">
                            <img :src="item.image" :alt="item.title" />
                        </div>
                    </div>

                </div>
            </VueSlickCarousel>
        </client-only>
    </div>

</template>

<script>
    export default {
        props:['list'],
        data() {
            return {
                sliderOptions: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    infinite: false,
                    responsive: [
                        {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                        },
                        {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: false,
                            dots: false
                        }
                        }

                    ]
                },
                // list: [
                //     {
                //         image: '/images/sliderhome1/01.png',
                //         text: 'INDONESIA BIGGEST CREATIVE IP POWERHOUSE',
                //         description: 'We aim to become big for the sake of creators ...',
                //         target: '/'
                //     },
                //     {
                //         image: '/images/sliderhome1/02.png',
                //         text: 'UNSTOPPABLE',
                //         description: 'Belum ada',
                //         target: '/'
                //     }
                // ]
            }
        },
        methods: {
            buttonAction(item) {
                this.$router.push(item.target)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
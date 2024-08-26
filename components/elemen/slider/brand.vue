<template>
    <div class="slick-dots-1">
        <client-only>
            <VueSlickCarousel v-bind="sliderOptions">
                <div
                    v-for="(item, index) in list" :key="'key1'+index"
                    class="w-4/5"
                >
                    <div class="overflow-hidden mr-5 relative">
                        <img :src="item.image" :alt="item.title" class="-mb-3" />
                        <div class="md:absolute bottom-0 left-0 top-0 right-0 p-3 flex items-center">
                            <div class="md:translate-y-[50%]">
                                <div class="mb-3 ">
                                <img :src="item.brandImage" class="h-[30px] object-cover" />
                                </div>
                                <div class="text-md md:text-[64px] font-bold text-white font-trickster mb-1" v-html="item.title">  </div>
                                <div class=" text-white text-md mb-5 w-full md:w-1/2 font-acumin text-[22px]"> {{ item.description }} </div>
                            </div>
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
                    autoplay:true,
                    autoplaySpeed: 5000,
                    dots: true,
                    arrows: false,
                    infinite: true,
                    variableWidth: true,
                    responsive: [
                        {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: false,
                        }
                        },
                        {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: false,

                        }
                        }

                    ]
                },
                // list: [
                //     {
                //         brandImage: '/images/slider/brand/brand-1.png',
                //         title: 'TahiLalats',
                //         subTitle: "+62 Netizen's Favourite IP",
                //         description: "(a.k.a Mindblowon) is an Indonesian webcomic which includes many experiences and stories of everyday life with ‘satirical, over-exaggerated and absurd twists’ characteristics.",
                //         image: '/images/slider/brand/background-1.png'
                //     },
                //     {
                //         brandImage: '/images/slider/brand/brand-2.png',
                //         title: 'Dudu',
                //         subTitle: "Dagelan Original Character",
                //         description: "Dudu is Dagelan’s original character as the main IP and represents Dagelan persona’s who was born from the explosion of memes and netizen debate.",
                //         image: '/images/slider/brand/background-2.png'
                //     },
                //     {
                //         brandImage: '/images/slider/brand/brand-3.png',
                //         title: 'Dalang Pelo',
                //         subTitle: "Dagelan Original Character",
                //         description: "Dalang Pelo is an animated entertainment sketch portraying daily activities and fantasy adventure from Acil and other main characters such as Om Gepeng, Leri, Kane Monkey and many more.",
                //         image: '/images/slider/brand/background-3.png'
                //     },

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
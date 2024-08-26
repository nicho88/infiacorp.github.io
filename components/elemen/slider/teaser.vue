<template>
    <div class="slick-dots-1">
        <client-only>
            <VueSlickCarousel v-bind="sliderOptions">
                <div
                    v-for="(item, index) in list" :key="'key1'+index"
                    class=""
                >
                    <div @click="klik && klik === true ? buttonAction(item) : doNothing()" 
                        class=" rounded-xl overflow-hidden mr-5 relative" :class="klik && klik === true ? 'cursor-pointer': '' ">
                        <img :src="item.image" :alt="item.title" />
                        <div class="absolute bottom-0 left-0 right-0 bg-warna21/80 p-3">
                            <div class="text-md md:text-xl font-bold text-white font-acumin mb-1" v-html="item.title">  </div>
                            <div class=" text-white text-md mb-2"> {{ item.description }} </div>
                        </div>

                    </div>
                </div>
            </VueSlickCarousel>
        </client-only>
        <button 
        class="button-action"
        :style="'margin-left:'+marginButton+'px;'"
        @click="buttonSeeMore"
    >See More ></button>
    </div>

</template>

<script>
    export default {
        props:['list', 'klik', 'seeMoreTarget'],
        data() {
            return {
                marginButton: 0,
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
                listOri: [
                    {
                        image: '/images/slider/slider-home1/slider-1.png',
                        title: 'JSD 2023',
                        description: 'Last upload - March 2023',
                        target: '/'
                    },
                    {
                        image: '/images/slider/slider-home1/slider-2.png',
                        title: 'Tahilalats x Sinchan Event',
                        description: 'Last upload - March 2023',
                        target: '/'
                    },
                    {
                        image: '/images/slider/slider-home1/slider-3.png',
                        title: 'Dalang Pelo & Si Aa',
                        description: 'Last upload - March 2023',
                        target: '/'
                    },

                ]
            }
        },
        mounted() {
            this.initialize()
        },
        methods: {
            initialize() {
                this.marginButton = (this.list.length * 30 ) + 10
            },
            buttonAction(item) {
                this.$router.push(item.target)
            },

            doNothing() {

            },
            buttonSeeMore() {
                this.$router.push(this.seeMoreTarget)

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
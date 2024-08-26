<template>
    <div class="slick-dots-1">
        <client-only>
            <VueSlickCarousel v-bind="sliderOptions">
                <div v-for="(item, index) in list" :key="'key1'+index" class="">
                    <!-- <img src="/images/img-tahilalats.png" alt="" class="flex items-end"> -->
                    <div class="flex">
                    
                        <div class="flex justify-items-center flex-col z-20 ">
                            <div class="text-white text-8xlplus font-trickster-black "> {{ item.title }} </div>
                            <div class="text-white text-4xlplus "> {{ item.subtitle }} </div>
                            <div class="text-white text-2xl  -mr-20"> {{ item.description }} </div>
                            <img src="/images/img-sosmed.png" alt="" class=" mt-7 w-2/3">
                        </div>
                        <img class="bg-no-repeat bg-right z-10 flex justify-center" :src="item.image">
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
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
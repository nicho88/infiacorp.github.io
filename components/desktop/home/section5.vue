<template>
    <section class="md:-pt-20 overflow-hidden  -z-10" >
        <div class="flex justify-end">
            <div class=" py-20 container mx-auto" >
                <div class="slider-area w-[100vw] ">
                    <ElemenSliderBrand :list="list"  />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {

                listSlider : [
                    {
                        brandImage: '/images/slider/brand/brand-1.png',
                        title: 'TahiLalats',
                        subTitle: "+62 Netizen's Favourite IP",
                        description: "(a.k.a Mindblowon) is an Indonesian webcomic which includes many experiences and stories of everyday life with ‘satirical, over-exaggerated and absurd twists’ characteristics.",
                        image: '/images/slider/brand/background-1.png'
                    },

                ],
                marginButton: 0,
                list: [
                    {
                        brandImage: '/images/slider/brand/brand-1.png',
                        title: 'TahiLalats',
                        subTitle: "+62 Netizen's Favourite IP",
                        description: "(a.k.a Mindblowon) is an Indonesian webcomic which includes many experiences and stories of everyday life with ‘satirical, over-exaggerated and absurd twists’ characteristics.",
                        image: '/images/slider/brand/background-1.png'
                    },
                    {
                        brandImage: '/images/slider/brand/brand-2.png',
                        title: 'Dudu',
                        subTitle: "Dagelan Original Character",
                        description: "Dudu is Dagelan’s original character as the main IP and represents Dagelan persona’s who was born from the explosion of memes and netizen debate.",
                        image: '/images/slider/brand/background-2.png'
                    },
                    {
                        brandImage: '/images/slider/brand/brand-3.png',
                        title: 'Dalang Pelo',
                        subTitle: "Dagelan Original Character",
                        description: "Dalang Pelo is an animated entertainment sketch portraying daily activities and fantasy adventure from Acil and other main characters such as Om Gepeng, Leri, Kane Monkey and many more.",
                        image: '/images/slider/brand/background-3.png'
                    },

                ]

            }
        },
        computed: {
            panjangBrowser() {
                if (process.client) {
                    return window.innerWidth
                } 
            }
        },
        watch: {
            panjangBrowser(val) {
                console.log('panjang'+val)
            }
        },
        mounted() {
            this.initialize()
        },
        methods: {
            initialize() {
                this.marginButton = (this.listSlider.length * 30 ) + 10

            },
            buttonAction() {

            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
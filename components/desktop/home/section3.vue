<template>
    <section class="relative overflow-hidden section-3">
        <div class="container mx-auto py-20 md:py-40">
            <div class="w-full md:w-3/5">
                <h2 class="section-header section-header-3 mb-5 flex items-center" 
                    style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);"
                >
                    <!-- Why We Focus on IP? -->
                    <div class="char " :class="i===' ' ? 'w-5' : '' " v-for="(i, index) in teks" :key="'dasfdaw'+index">
                        {{ i }}
                    </div>
                </h2>
                <div class="section-desc-3">
                    <p  class="text-acumin section-desc-3-p text-[22px] font-bold mb-10 text-white">
                        Indonesia is a unique playground where IPs are born and thrive within the digital ecosystem.
                    </p>
                    <p  class="text-acumin section-desc-3-p text-[22px] mb-20 text-white">
                        Indonesia is a unique playground where IPs are born and thrive within the digital ecosystem. They are versatile, reliable and, most importantly, with the huge amount of netizens in Indonesia, they are highly influential.
                    </p>
                    <button  class="button-action" @click="buttonAction">More Details ></button>
                </div>

            </div>
        </div>  
        <img   src="/images/why-we-focus.png" class="home-image-why-we-focus block md:absolute right-0 bottom-0" alt="why we focus on ip?" />
        
    </section>
</template>

<script>
    export default {
        data() {
            return {
                teks: []
            }
        },
        mounted() {
            this.initialize()
        },
        methods: {
            initialize() {
                const teks = 'Why We Focus on IP?'
                const splitTeks = teks.split("");
                this.teks = splitTeks
            },
            buttonAction() {
                this.$router.push('/why-we-focus-on-ip')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <section>
        <div class="bg-black overflow-hidden champion">
            <div class="container mx-auto  ">
                <img src="/images/champion.png" class="h-full my-10 mx-auto" />
            </div>
        </div>
        <div class="footer-champion">
            <div class="bg-warna001 pt-20 " style="background:url('/images/bulat-footer.png') no-repeat bottom right">
                <div class="container mx-auto mb-20">
                    <div class="text-white font-acumin text-[32px] mb-5 font-bold">Champion IP Cycle</div>
                    <div class="text-white w-full md:w-3/5">
                        With years of experience in cultivating IP, we can turn any IP into a champion. Supporting them in a cycle of infinity that will keep giving birth to brand new IPs for aeons. Developed IP Web3 & Other Derivative Business Licensing
                    </div>
                </div>
                <div class=" text-right text-[14px] container mx-auto py-2 text-warnad9">
                    Copyright © INFIA 2023
                </div>

            </div>
        </div>

    </section>
</template>

<script>
    export default {
        props: ['value','status'],
        // mounted() {
        //     this.setRotationOnLoad()
        // },
        watch: {
            status(val) {
                if (val === 'start') {
                    this.mulai()
                } else if (val === 'end') {
                    this.akhir()
                }
            }
        },
        methods: {
            mulai() {
                // this.$gsap.from('.champion', {x:-1000, duration: 1})
                // this.$gsap.to('.champion', { x: 0, duration: 1 })
                // this.$gsap.from('.champion', {height: 0})
                // this.$gsap.to('.champion', {height: 'auto', duration:1, ease: 'Power4.easeOut'})
                // this.$gsap.from('.footer-champion', {opacity: 0, height: 0})
                // this.$gsap.to('.footer-champion', {opacity: 100, height:'auto', duration:1, ease: 'Power4.easeOut'})
            },
            akhir() {
                // this.$gsap.to('.champion', {height: 0, duration:1, ease: 'Power4.easeIn'})
                // this.$gsap.to('.footer-champion', {height: 0, opacity: 0, duration:1, ease: 'Power4.easeOut'})



            },

        }
    }
</script>

<style lang="scss" scoped>

</style>
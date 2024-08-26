<template>
    <section>
        <div class="bg-black py-10 why-section-4 overflow-hidden">
            <div class="container mx-auto">
                <img src="/images/market-share.png" class="w-full mio-content-2" alt="market share" />
            </div>
        </div>
        <div class="relative overflow-hidden" >
            <img src="/images/asset-market-share.png" class="absolute bottom-0 right-0 h-full -z-10" data-speed="1.1"  />
            <div class="py-10 container mx-auto text-white"
            
            >
                <h2 class="font-bold mb-7">Market Share</h2>
                <div class="w-full md:w-3/4 section-market-share">
                    <p class="mb-7 sms-p">
                        In its full potential, Indonesia's market size of IP Licensing and Media & Entertainment industry is a whopping 24.3 Billion US Dollars. But sadly it hasn’t been fully utilized
                    </p>
                    <p class="mb-7 font-bold sms-p">
                        We exist to turn injustice upside down
                        giving IP Creators a safe and supportive ecosystem so they can grow endlessly and unleash the best of their imaginations.
                    </p>
                    <p class="mb-7 sms-p">
                        Along with creative industry rapid growth in Indonesia and awareness of the importance of using native Indonesian IP so that it can be a differentiator in marketing & communication strategies and make message more easily accepted yet brands remain relevant to the lifestyle and target market you want to reach.
                    </p>
                </div>
            </div>
            <slot />
        </div>


    </section>

</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
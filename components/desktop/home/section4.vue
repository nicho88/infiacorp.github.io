<template>
    <div class="section-4">
        <div class=" py-10 md:py-20 relative">
            <div class="container mx-auto ">
                <h2 class="section-header section-header-4 mt-5 mb-5" >
                    INDONESIA BIGGEST CREATIVE IP<br> POWERHOUSE
                </h2>
                <p  class="section-desc-4 text-acumin text-[22px] mb-10 md:mb-20 text-white" >
                    We have 4 kinds of IP in our arsenal and tools to make it big. Because managing IP is one thing, but making it big enough to dye the world in colors is another thing.
                </p>

            </div>
            <div class="absolute left-0 bottom-0 right-0 z-50">
                <div class="container mx-auto py-10" >
                    <button class="button-action" @click="buttonAction">More IP's ></button>
                </div>
                </div>
        </div>

        <div class="gradient-slider md:-mt-80">
            <DesktopHomeSection5 />
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            buttonAction() {
                this.$router.push('/infia-universe')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
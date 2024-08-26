<template>
    <div class="py-10 md:py-20 container mx-auto">
        <div class="md:mb-20">
            <img src="/images/clients.png" alt="infia client" class="mx-auto w-full md:w-11/12" />
        </div>
        <div class="section-6">
            <div class="section-header-6 font-acumin text-[32px] mb-3 font-bold">Other Services</div>
            <div class="grid grid-cols-12 section-desc-6">
                <div class="col-span-12 md:col-span-7 text-[24px]">
                    Our consulting team is made up of multi-discipline experts with a strong academical background as well as long-proven hands-on industry experience.
                </div>
                <div class="col-span-12 md:col-span-5 block md:flex justify-end items-end">
                    <button @click="buttonAction" class="button-action text-black" >More Details ></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            buttonAction() {
                this.$router.push('/our-services')
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
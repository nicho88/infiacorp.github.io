<template>
    <div class="min-h-screen pt-[67px] bg-warna001">
        <!-- <DesktopContactUs /> -->
        <DesktopHomeSectionFooter />

    </div>
</template>

<script>
import SEO from '~/mixins/seo.js'
    export default {
     mixins:[SEO],
        transition: {
            afterLeave(el) {
            console.log('afterLeave', el)
            }
        },
        data() {
            return {
                meta: {
                    title: 'Contact Us',
                    image: '/logo.png',
                    desc: 'Let’s Unleash The Infinity!, Elevate Your Ideas With Us'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
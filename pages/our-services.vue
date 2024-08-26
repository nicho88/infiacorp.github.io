<template>
    <div >
        <DesktopServices />
    </div>
</template>

<script>
import SEO from '~/mixins/seo.js'
    export default {
     mixins:[SEO],

        data() {
            return {
                meta: {
                    title: 'Our Services',
                    image: '/images/banner-services.png',
                    desc: 'Our consulting team is made up of multi-discipline experts with a strong academical background as well as long-proven hands-on industry experience. Most of the experts have been helping hundreds of clients in various sectors and industries achieve their business goals.'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
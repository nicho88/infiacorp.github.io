<template>
    <div class="flex flex-col min-h-screen">
        <header><PageHeader /></header>
        <main class="flex-grow main " >
            <Nuxt :key="'keyMasterLayout'+keyMaster" />
        </main>
        <footer></footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                keyMaster: 1234
            }
        },
        mounted() {
            this.initialize()
        },
        computed: {
            currentPath() {
                return this.$route.path;
            }
        },
        watch: {
            currentPath(val) {
                // console.log('val',val)
                this.$gsap.to(window, {duration: 0, scrollTo: 0})
                this.keyMaster+=1
            }
        },

        methods: {
            initialize() {
                // const smoother = this.$ScrollSmoother.create({
                //     smooth:2,
                //     effects:true,
                //     content: '.main'
                // })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
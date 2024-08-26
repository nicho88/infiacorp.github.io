<template>
    <div class="bg-warna14 fixed top-0 left-0 right-0 py-2 z-50">
        <nav class="container mx-auto flex items-center justify-between">
            <NuxtLink to="/home" class="flex items-center gap-x-4" >
                <img src="/logo.png" alt="logo infia" class="h-[51px] object-cover" />
<!--            <div class="text-white font-trickster-black font-black text-3xl">INFIA</div> -->
            </NuxtLink>
            <div class="">
                <ul class="hidden main-menu md:flex items-center">
                    <li v-for="(item, index) in menu" :key="'menu'+index">
                        <NuxtLink :to="item.path" :style="item.path==='/home'? styleTambahan: ''" >{{ item.name }}</NuxtLink>
                    </li>
                </ul>
                <div class="block md:hidden text-white">
                    <button class="h-[24px] w-[24px] overflow-hidden" @click="mobileMenuStatus? closeMenu():openMenu()">
                        <transition name="fade">
                            <svg v-if="mobileMenuStatus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"/></svg>
                        </transition>
                        <transition name="fade">
                            <svg v-if="!mobileMenuStatus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M20 7H4m16 5H4m16 5H4"/></svg>
                        </transition>
                    </button>
                </div>
            </div>
        </nav>
        <transition name="slide">
            <div v-if="mobileMenuStatus" class="fixed top-[67px] w-full bottom-0 left-0 h-[100vh] bg-warna001 z-100">
                <div class="p-5  text-[20px] font-trickster">
                    <ul class="main-menu">
                    <li @click="closeMenu" v-for="(item, index) in menu" :key="'menu1'+index" >
                        <!-- <button @click="goTo(item)" >{{ item.name }}</button> -->
                        <NuxtLink :to="item.path" class="mb-2"  >{{ item.name }}</NuxtLink>
                    </li>
                </ul>
                </div>
            </div>
        </transition>

    </div>

</template>

<script>
    export default {
        data() {
            return {
                mobileMenuStatus: false,
                styleTambahan: '',
                menu: [
                    {
                        id: 'home',
                        name: 'Home',
                        path: '/home'
                    },
                    {
                        id: 'infiaUniverse',
                        name: 'INFIA Universe',
                        path: '/infia-universe'
                    },
                    {
                        id: 'infiaActivity',
                        name: 'News',
                        path: '/infia-activity'
                    },
                    {
                        id: 'ourServices',
                        name: 'Our Services',
                        path: '/our-services'
                    },
                    {
                        id: 'aboutUs',
                        name: 'About US',
                        path: '/about-us'
                    },
                    {
                        id: 'contactUs',
                        name: 'Contact US',
                        path: '/contact-us'
                    }
                ]
            }
        },
        computed: {
            pathSekarang() {
                return this.$route.path;
            }
        },
        watch: {
            pathSekarang(val) {
                if (val === '/') {
                    
                }
                this.setMenuAktif(val)
            }
        },
        mounted() {
            this.initialize()
        },

        methods: {
            initialize() {
                const path = this.$route.path
                this.setMenuAktif(path)

            },
            setMenuAktif(path) {
                if (path === '/') {
                    this.styleTambahan = 'color: #FFFFFF !important'
                } else {
                    this.styleTambahan = ''
                }
            },
            openMenu() {
                this.mobileMenuStatus = true
                if (process.client) {
                    document.body.classList.add('overflow-hidden')
                }
            },
            closeMenu() {
                this.mobileMenuStatus = false
                if (process.client) {
                    document.body.classList.remove('overflow-hidden')
                }
            },
            goTo(item) {
                this.closeMenu()
                this.$nextTick(() => {
                    this.$router.push(item.path)
                })
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>
<template>
    <div class="pt-[67px] bg-warna0e">
        <div class="h-[37px] bg-[#1744E4]"></div>
        <div class="relative">
            <img src="/images/banner-services.png" alt="our services" class="w-full" />
            <div class="absolute bottom-0 left-0 right-0 w-full">
                <div class=" bg-gradient-to-r from-warna001 via-warna001/50 to-transparent  w-full">
                    <div class="container mx-auto">
                        <h1 class="font-trickster-black text-white text-[40px] md:text-[80px] leading-none">Agency Services</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-warna14 bg-gradient-to-br from-warna001 via-warna001/50 to-transparent"
        >
            <div style="background-image:url('/images/cacing-bg.png'); background-position: right center; background-repeat:no-repeat;">
                <div class="container mx-auto">
                    <div class="konten-area pt-10 text-white font-bold ">
                        <p>
                            Our consulting team is made up of multi-discipline experts with a strong academical background as well as long-proven hands-on industry experience. Most of the experts have been helping hundreds of clients in various sectors and industries achieve their business goals.
                        </p>
                        <ul class="list-square list-outside md:list-inside pl-5 md:pl-0 mt-10 mb-10 pb-10 columns-1 md:columns-2">
                            <li v-for="(item,index) in list" :key="'list'+index">{{ item }}</li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
        <div class="bg-white py-10">
            <div class="container mx-auto">
                <img src="/images/clients.png" alt="clients" class="w-full mx-auto" />
            </div>
        </div>
        <DesktopServicesFooter />

    </div>
</template>

<script>
    export default {
        data() {
            return {
                list: [
                    'Intellectual Property Service',
                    'Creative Campaign',
                    'Creative Content Production',
                    'Performance Based Marketing',
                    'KOL Management',
                    'Event Organizer & Experience Marketing',
                    'Consulting Services',
                    'Digital Army',
                    'Business intelligence and', 
                    'Performance Analysis', 
                    'Market Brand Research & Analysis', 
                    'Business Planning & Analysis'

                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
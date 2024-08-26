<template>
  <div>
    <div
      class="bg-warna001 min-h-screen hidden md:flex md:flex-col overflow-hidden"
    >
      <div class="text-white relative flex-grow">
        <img src="/images/footer-bg.png" class="w-full" data-speed="0.8" />
        <div
          class="container mx-auto pb-10 absolute top-0 bottom-0 left-0 right-0 flex items-center"
        >
          <div class="w-full">
            <div class="font-trickster font-bold text-[64px] text-white mb-5">
              Let’s Unleash The Infinity!
            </div>
            <div class="text-white text-2xl mb-5">
              Elevate Your Ideas With Us
            </div>
            <div class="text-[32px] font-bold mb-5">Let's Talk</div>
            <div class="w-full md:w-2/5">
              <div
                v-for="(item, index) in list"
                :key="'hfdauhf' + index"
                class="grid grid-cols-12 gap-5 mb-5"
              >
                <div class="col-span-3 md:col-span-2">
                  <img :src="item.icon" class="w-[24px] object-cover" />
                </div>
                <div class="col-span-7 md:col-span-10">
                  <div class="konten" v-html="item.desc"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-right container mx-auto py-5 text-warnad9 text-[14px]">
        Copyright © INFIA 2023
      </div>
    </div>
    <div class="block md:hidden bg-warna001 overflow-hidden">
      <div class="container mx-auto">
        <div class="w-full text-white pt-10">
          <div
            class="font-trickster font-bold text-[40px] text-white mb-5 leading-none"
          >
            Let’s Unleash The Infinity!
          </div>
          <div class="text-white text-xl mb-5 leading-none">
            Elevate Your Ideas With Us
          </div>
          <div class="text-[32px] font-bold mb-5">Let's Talk</div>
          <div class="w-full md:w-2/5">
            <div
              v-for="(item, index) in list"
              :key="'hfdauhf' + index"
              class="grid grid-cols-12 gap-3 mb-5"
            >
              <div class="col-span-1 md:col-span-2">
                <img :src="item.icon" class="w-[24px] object-cover" />
              </div>
              <div class="col-span-11 md:col-span-10">
                <div class="konten text-[16px]" v-html="item.desc"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- style="background-image:url('/images/footer-bg.png');background-position-y: 0;" -->
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          icon: "/images/icons/mail.png",
          desc: "Commercial: <a href='mailto:sales@infia.co'>sales@infia.co</a><br>General Info: <a href='mailto:hello@infia.co'>hello@infia.co</a>",
        },
        {
          icon: "/images/icons/location.png",
          desc: "Jl. RC. Veteran Raya No.68, RT.4/RW.10, Bintaro, Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240",
        },
        {
          icon: "/images/icons/instagram.png",
          desc: "<a href='https://www.instagram.com/infia.corp/' target='_blank'>https://www.instagram.com/infia.corp/</a>  ",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

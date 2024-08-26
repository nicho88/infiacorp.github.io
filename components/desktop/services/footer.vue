<template>
  <div class="bg-warna001 flex flex-col pt-10">
    <div class="text-white relative flex-grow">
      <div class="container mx-auto pb-10 flex items-center">
        <div class="w-full">
          <div
            class="font-trickster font-bold text-[40px] md:text-[64px] leading-none text-white mb-5"
          >
            Let’s Unleash The Infinity!
          </div>
          <div class="text-white text-xl md:text-2xl mb-5">
            Elevate Your Ideas With Us
          </div>
          <div class="text-[32px] font-bold mb-5">Let's Talk</div>
          <div class="w-full md:w-2/5">
            <div
              v-for="(item, index) in list"
              :key="'hfdauhf' + index"
              class="grid grid-cols-12 gap-5 mb-5"
            >
              <div class="col-span-1 md:col-span-2">
                <img :src="item.icon" class="w-[24px] object-cover" />
              </div>
              <div class="col-span-11 md:col-span-10">
                <div
                  class="konten text-[16px] md:text-[22px]"
                  v-html="item.desc"
                ></div>
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

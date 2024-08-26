<template>
  <div class="min-h-screen">
    <div class="bg-warna14 h-[67px]"></div>
    <div
      class="bg-contain md:bg-cover bg-warna14"
      style="
        background-image: url('/images/banner-about-us.png');
        background-repeat: no-repeat;
      "
    >
      <div class="container mx-auto pt-14 flex flex-col">
        <h1
          class="font-trickster font-bold text-[60px] md:text-[80px] leading-tight text-white"
        >
          Meet Our Boards
        </h1>
        <div class="grid grid-cols-12 gap-y-5 flex-grow my-5">
          <div
            v-for="(item, index) in list"
            :key="'founder' + index"
            :class="`col-span-12 md:col-span-4 lg:col-span-3 flex  justify-center`"
          >
            <div class="text-center text-white">
              <img
                :src="'/images/' + item.image"
                :alt="item.name"
                class="mx-auto"
              />
              <div class="font-bold mb-2 mt-1 leading-none">
                {{ item.name }}
              </div>
              <div
                class="text-[24px] leading-tight"
                v-html="item.jabatan"
              ></div>
            </div>
          </div>
        </div>
        <div class="pt-14 flex flex-col -mt-[30px]">
          <h1
            class="font-trickster font-bold text-white text-[60px] md:text-[80px]"
          >
            Meet us There
          </h1>
          <div class="slick-dots-3 mt-10">
            <client-only>
              <VueSlickCarousel v-bind="sliderOptions">
                <div v-for="item in meetUseList" class="cursor-pointer">
                  <a
                    :href="item?.link"
                    target="_blank"
                    class="flex justify-center px-2"
                  >
                    <div class="relative hover:ring rounded-xl">
                      <div class="">
                        <img
                          :src="item?.image"
                          class="object-cover rounded-xl"
                          alt=""
                        />
                        <div
                          class="absolute bottom-0 left-0 right-0 bg-warna21/90 p-3 rounded-b-xl"
                        >
                          <div
                            class="text-[14px] md:text-2xl font-bold text-white font-acumin mb-1"
                          >
                            {{ item?.title || "-" }}
                          </div>
                          <!-- <div
                            class="text-white text-[12px] md:text-base text-md mb-2"
                          >
                            -
                          </div> -->
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </VueSlickCarousel>
            </client-only>
            <!-- <div>
            <h2 class="text-[30px] text-white">
              - Hong Kong International Licensing Show
            </h2>
          </div>
          <div>
            <h2 class="text-[30px] text-white">- Toy Con PH</h2>
          </div>
          <div>
            <h2 class="text-[30px] text-white">
              - IMX (Indonesia Modification Expo)
            </h2>
          </div> -->
          </div>
        </div>
      </div>
      <div class="text-right py-5 text-warnad9 text-[14px]">
        Copyright © INFIA 2023
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderOptions: {
        centerMode: true,
        centerPadding: "20px",
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 2,
        speed: 500,
        dots: true,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: false,
            },
          },
        ],
      },
      meetUseList: [
        {
          title: "Hong Kong International Licensing Show",
          image: `/images/slider/meet-us-here/hong-kong-international-licensing-show.jpg`,
          link: "https://www.hktdc.com/event/hklicensingshow/en",
        },
        {
          title: "Toy Con PH",
          image: `/images/slider/meet-us-here/toy-con-ph.jpg`,
          link: "https://www.toyconph.com/",
        },
        {
          title: "IMX (Indonesia Modification Expo)",
          image: `/images/slider/meet-us-here/imx-indonesia-modification-expo.jpg`,
          link: "https://indonesiamodificationexpo.com/",
        },
      ],
      list: [
        {
          image: "founder-aditya.png",
          name: "Aditya Kusumapriandana",
          jabatan: "Commisioner",
          col: 12,
        },
        {
          image: "founder-aji.png",
          name: "Aji Pratomo",
          jabatan: "Founder/Group CEO",
        },
        {
          image: "founder-andrey.png",
          name: "Andrey Noelfry Tarigan",
          jabatan: "Co-Founder/Chief Commercial",
        },
        {
          image: "founder-noviar.png",
          name: "Muhammad Noviar Rahman",
          jabatan: "Chief Investment Officer",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

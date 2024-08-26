<template>
  <section class="bg-black section-1">
    <div
      class="hidden h-[calc(100vh-67px-67px)] mt-[67px] bg-black relative md:flex items-center"
    >
      <img
        src="/images/section1-1.png"
        alt="satu"
        class="h-full section-image-1 absolute bottom-0 left-0"
      />
      <img
        src="/images/section1-2.png"
        alt="dua"
        class="h-full section-image-1-a absolute bottom-0 right-0"
      />
      <div class="container mx-auto text-white">
        <h1 class="section-header section-header-1 mb-3">
          INDONESIA'S<br />BIGGEST CREATIVE<br />POWERHOUSE
        </h1>
        <div class="section-desc section-desc-1 text-white w-1/2">
          We see Intellectual Property (IP) as the current game changer in Indonesia's media and entertainment
          industry. Indonesia is a unique playground where Ips are born and thrive within the digital ecosystem.
          There are versatile, reliable and, most importantly with the huge amount of netizens in Indonesia, they are
          highly influential.
        </div>
      </div>
    </div>
    <div class="block md:hidden mt-[67px]">
      <img src="/images/mobile/banner-home.png" alt="banner" class="w-full" />
    </div>

    <div
      class="h-[30px] md:h-[67px] bg-gradient-to-b from-[#1641DA] via-[#FF39BA] to-[#153FD4] relative"
    >
      <div class="container mx-auto relative">
<!--      <img
          src="/images/running-text.png"
          class="absolute top-0 -translate-y-[40%] z-10 w-[100px] md:w-[200px]"
          alt="runningtext"
        /> -->
<!--      <div class="h-[30px] md:h-[67px] overflow-hidden">
          <ElemenSliderMarquee :list="texts" />
        </div> -->
<!--      <div class="absolute top-0 left-0">
         <div
            class="h-[30px] md:h-[67px] w-[100px] md:w-[200px] bg-gradient-to-b from-[#1641DA] via-[#FF39BA] to-[#153FD4]"
          ></div> 
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      texts: [
        {
          label: "-- Tahilalats x One Piece -- ",
          path: "/infia-activity#tahilalats-x-onepiece",
        },
        {
          label: " -- New Episode on Dagelan TV --",
          path: "",
        },
        {
          label: "-- INFIA to the Moon! --",
          path: "",
        },
      ],
    };
  },

  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      console.log("start sectin");
    },
  },
};
</script>

<style lang="scss" scoped></style>

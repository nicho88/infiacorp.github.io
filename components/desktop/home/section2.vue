<template>
  <section
    class="pt-10 md:pt-20 pb-20 section-brand section-2"
    ref="lebarbrowser"
  >
    <div ref="what" class="container mx-auto mt-10 relative">
      <h2 class="section-header section-header-2">Whats going on?</h2>
      <div class="absolute top-0 left-0 -z-10">
        <img
          src="/images/bg-bulat-1.png"
          class="w-[80vw] md:w-[50vw]"
          data-speed="1.1"
        />
      </div>
    </div>
    <div>
      <DesktopInfiaActivityWhatsGoingOn :limit="3" />
      <button
        class="text-white font-bold md:mx-24 mx-5 mt-5"
        @click="$router.push('infia-activity')"
      >
        See More >
      </button>
    </div>
    <!-- <div class="flex justify-end slider-trigger-2">
      <div class="container mx-auto relative">
        <div class="slider-area slider-teaser-1 w-[100vw] section-slider-2">
          <ElemenSliderTeaser
            :list="listSlider"
            :klik="true"
            :seeMoreTarget="'/infia-activity'"
          />
        </div>
      </div>
    </div> -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      listSlider: [
        {
          id: "news01",
          image: "/images/slider/slider-home1/slider-1.png",
          title: "JSD 2023",
          description: "Last upload - March 2023",
          target: "/infia-activity#news01",
        },
        {
          id: "news02",
          image: "/images/slider/slider-home1/slider-2.png",
          title: "Tahilalats x Sinchan Event",
          description: "Last upload - March 2023",
          target: "/infia-activity#news02",
        },
        {
          id: "news03",
          image: "/images/slider/slider-home1/slider-3.png",
          title: "Dalang Pelo & Si Aa",
          description: "Last upload - March 2023",
          target: "/infia-activity#news03",
        },
      ],
      marginButton: 0,
    };
  },
  computed: {
    panjangBrowser() {
      if (process.client) {
        return window.innerWidth;
      }
    },
  },
  watch: {
    panjangBrowser(val) {
      console.log("panjang" + val);
    },
  },
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      this.marginButton = this.listSlider.length * 30 + 10;
    },
    buttonAction() {
      this.$router.push("/infia-activity");
    },
  },
};
</script>

<style lang="scss" scoped></style>

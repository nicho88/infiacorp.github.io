<template>
  <section class="overflow-hidden" ref="lebarbrowser">
    <!-- <div ref="what" class="container mx-auto">
            <h2 class="section-header mb-5">Whats going on?</h2>
        </div> -->
    <div class="flex justify-end">
      <div class="flex flex-col pt-10 container mx-auto">
        <div
          class="text-white -translate-y-3"
          :style="'margin-left:' + marginButton + 'px;'"
        >
<!--        We have {{ list.length }} articles -->
        </div>

        
        <div class="slider-area w-[89vw]">
         <ElemenSliderTeaserPage :list="listSlider" />
        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import artikel from "../../../data/artikel/ARTICLE_REGISTER";

export default {
  props: {
    limit: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      list: artikel,
      // list: [
      //   {
      //     id: "tahilalats-x-onepiece",
      //     image: "/images/slider/slider-home1/tahilalats-x-onepiece.png",
      //     title: "Tahilalats Collaboration With One Piece",
      //     description: "Last update - 14 June 2024",
      //     target: "infia-activity#tahilalats-x-onepiece",
      //   },
      //   {
      //     id: "dalang-pelo-si-aa",
      //     image: "/images/slider/slider-home1/slider-3.png",
      //     title: "Dalang Pelo & Si Aa",
      //     description: "Last update - 22 March 2023",
      //     target: "infia-activity#dalang-pelo-si-aa",
      //   },
      //   {
      //     id: "tahilalats-x-sinchan",
      //     image: "/images/slider/slider-home1/slider-2.png",
      //     title: "Tahilalats x Sinchan Event",
      //     description: "Last update - 6 March 2023",
      //     target: "infia-activity#tahilalats-x-sinchan",
      //   },
      //   {
      //     id: "jsd-2023",
      //     image: "/images/slider/slider-home1/slider-1.png",
      //     title: "JSD 2023",
      //     description: "Last update - 21 February 2023",
      //     target: "infia-activity#jsd-2023",
      //   },
      // ],
      marginButton: 0,
    };
  },
  computed: {
    panjangBrowser() {
      if (process.client) {
        return window.innerWidth;
      }
    },
    listSlider() {
      if (this.limit > 0) return this.list.slice(0, this.limit);
      return this.list;
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
      this.marginButton = this.listSlider.length * 30 + 30;
    },
  },
};
</script>

<style lang="scss" scoped></style>

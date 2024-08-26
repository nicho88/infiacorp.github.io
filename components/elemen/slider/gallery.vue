<template>
  <div class="slick-dots-1">
    <client-only>
      <VueSlickCarousel v-bind="sliderOptions">
        <div v-for="(item, index) in list" :key="'key1' + index" class="">
          <div class="rounded-xl overflow-hidden mr-5 relative">
            <img :src="item.image" :alt="item.title" class="" />
          </div>
        </div>
      </VueSlickCarousel>
    </client-only>
  </div>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      sliderOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        arrows: false,
        infinite: true,
        variableWidth: true,
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
      listOri: [
        {
          image: "/images/slider/slider-home1/slider-1.png",
          title: "JSD 2023",
          description: "Last upload - March 2023",
          target: "/",
        },
        {
          image: "/images/slider/slider-home1/slider-2.png",
          title: "Tahilalats x Sinchan Event",
          description: "Last upload - March 2023",
          target: "/",
        },
        {
          image: "/images/slider/slider-home1/slider-3.png",
          title: "Dalang Pelo & Si Aa",
          description: "Last upload - March 2023",
          target: "/",
        },
      ],
    };
  },
  methods: {
    buttonAction(item) {
      this.$router.push(item.target);
    },
  },
};
</script>

<style lang="scss" scoped></style>

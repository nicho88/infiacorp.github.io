<template>
  <div class="slick-dots-3">
    <client-only>
      <VueSlickCarousel v-bind="sliderOptions">
        <div
          v-for="(item, index) in list"
          :key="'key1' + index"
          class="cursor-pointer"
          @click="buttonAction(item?.id)"
        >
          <div class="rounded-xl overflow-hidden mr-5 relative hover:ring">
            <img :src="item.teaserImage" :alt="item.title" />
            <div class="absolute bottom-0 left-0 right-0 bg-warna21/80 p-3">
              <div
                class="text-[14px] md:text-xl font-bold text-white font-acumin mb-1"
                v-html="item.title"
              ></div>
              <div class="text-white text-[12px] md:text-base text-md mb-2">
                {{ item.date }}
              </div>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </client-only>
  </div>
</template>

<script>
export default {
  props: {
    list: [Array, Object],
  },
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
    };
  },
  methods: {
    buttonAction(target) {
      this.$router.push("infia-activity#" + target);
    },
  },
};
</script>

<style lang="scss" scoped></style>

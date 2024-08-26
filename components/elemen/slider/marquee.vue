<template>
  <div class="slick-dots-1">
    <client-only>
      <VueSlickCarousel v-bind="sliderOptions" ref="slickmarquee">
        <div
          @mouseover="onMouseOver"
          @mouseout="onMouseOut"
          v-for="(item, index) in list"
          :key="'key1' + index"
          class="w-full"
        >
          <div class="mx-10 flex items-center h-[30px] md:h-[67px] drop-shadow">
            <NuxtLink
              :to="item.path"
              class="text-white hover:opacity-80 text-sm lg:text-lg"
              >{{ item.label }}</NuxtLink
            >
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
        speed: 5000,
        autoplay: true,
        // pauseOnHover: true,
        // pauseOnFocus: true,
        autoplaySpeed: 0,
        centerMode: true,
        cssEase: "linear",
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
      },
      // list: [
      //     {
      //         brandImage: '/images/slider/brand/brand-1.png',
      //         title: 'TahiLalats',
      //         subTitle: "+62 Netizen's Favourite IP",
      //         description: "(a.k.a Mindblowon) is an Indonesian webcomic which includes many experiences and stories of everyday life with ‘satirical, over-exaggerated and absurd twists’ characteristics.",
      //         image: '/images/slider/brand/background-1.png'
      //     },
      //     {
      //         brandImage: '/images/slider/brand/brand-2.png',
      //         title: 'Dudu',
      //         subTitle: "Dagelan Original Character",
      //         description: "Dudu is Dagelan’s original character as the main IP and represents Dagelan persona’s who was born from the explosion of memes and netizen debate.",
      //         image: '/images/slider/brand/background-2.png'
      //     },
      //     {
      //         brandImage: '/images/slider/brand/brand-3.png',
      //         title: 'Dalang Pelo',
      //         subTitle: "Dagelan Original Character",
      //         description: "Dalang Pelo is an animated entertainment sketch portraying daily activities and fantasy adventure from Acil and other main characters such as Om Gepeng, Leri, Kane Monkey and many more.",
      //         image: '/images/slider/brand/background-3.png'
      //     },

      // ]
    };
  },
  methods: {
    buttonAction(item) {
      this.$router.push(item.target);
    },
    onMouseOver() {
      this.$refs.slickmarquee.pause();
    },
    onMouseOut() {
      this.$refs.slickmarquee.play();
    },
  },
};
</script>

<style lang="scss" scoped></style>

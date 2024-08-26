<template>
  <div class="slick-dots-2 relative">
    <div class="absolute top-0 left-0 right-0 z-20">
      <div class="container mx-auto translate-y-10">
        <ul class="custom-slick-dots flex items-center gap-x-2">
          <li
            v-for="(item, index) in list.length"
            :key="'custso' + index"
            :class="currentSlide === index ? 'aktif' : ''"
          >
            <button @click="maju(index)">{{ index }}</button>
          </li>
        </ul>
      </div>
    </div>

    <client-only>
      <VueSlickCarousel
        v-bind="sliderOptions"
        ref="carMedia"
        @afterChange="rubah"
      >
        <div v-for="(item, index) in list" :key="'key1' + index" class="w-full">
          <div class="bg-warna001 py-10 relative min-h-[500px]">
            <div class="container mx-auto mt-10">
              <div
                class="text-md md:text-[64px] font-bold text-white font-trickster mb-5"
                v-html="item.title"
              ></div>
              <div
                class="text-sm md:text-[32px] font-bold text-white font-acumin mb-5"
              >
                {{ item.subTitle }}
              </div>
              <div
                class="text-white text-md mb-5 w-full md:w-3/5 font-acumin text-[22px]"
              >
                {{ item.description }}
              </div>
            </div>
            <div
              class="md:absolute top-0 bottom-0 right-0 z-10 block md:flex items-center"
            >
              <img
                :src="item.path + item.id + '/bg.png'"
                :alt="item.title"
                height="500"
                class="md:h-[500px] z-10"
              />
            </div>
          </div>
          <div class="">
            <div class="container mx-auto">
              <ElemenDisplaySocialMedia :externalLink="item.externalLink" />

              <div class="text-white text-[18px] mb-10">
                {{ item.lastUpdate }}
              </div>

              <div class="text-white text-[32px] font-semibold mb-10">
                Portfolios
              </div>
              <div class="portofolio-area">
                <slot
                  :name="item.id"
                  v-bind:item="item"
                  v-bind:index="index"
                ></slot>
              </div>
            </div>
          </div>
          <!-- <div class="h-10 bg-warna14"></div>  
                    <div class="overflow-hidden relative bg-warna001">
                        <div class="container mx-auto flex justify-end">
                            <img :src="item.image" :alt="item.title" class="" />
                        </div>
                        <div class="absolute bottom-0 left-0 right-0 p-3 flex items-end">
                            <div class="">
                                <div class="text-md md:text-[64px] font-bold text-white font-trickster mb-1" v-html="item.title">  </div>
                                <div class=" text-white text-md mb-5 w-full md:w-1/2 font-acumin text-[22px]"> {{ item.description }} </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-10 bg-warna14"></div>   -->
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
      currentSlide: 0,
      sliderOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false,
        infinite: true,
        variableWidth: false,
        // dotsClass:'custom-dots',
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              dots: false,
            },
          },
        ],
      },
    };
  },
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {},
    cariDiv() {
      if (process.client) {
        console.log("cariMedia");
        var wrapper = document.createElement("div");
        var myDiv = document.querySelector(".slick-dots");
        console.log("myDiv", myDiv);
        wrapper.className = "container mx-auto";
        myDiv.parentNode.insertBefore(wrapper, myDiv);
        wrapper.appendChild(myDiv);
      }
    },
    buttonAction(item) {
      this.$router.push(item.target);
    },
    maju(nom) {
      this.$refs.carMedia.goTo(nom);
    },
    rubah(e) {
      this.currentSlide = e;
    },
  },
};
</script>

<style lang="scss" scoped></style>

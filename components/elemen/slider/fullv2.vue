<template>
  <div class="slick-dots-2 relative">
    <ul
      class="container bg-warna001 pt-10 -z-50 custom-slick-dots flex items-center gap-x-2"
    >
      <li
        v-for="(item, index) in list.length"
        :key="'c' + index"
        :class="[activeSlide(index)]"
      >
        <button @click="maju(index)">{{ index }}</button>
      </li>
    </ul>

    <client-only>
      <VueSlickCarousel v-bind="sliderOpt" ref="carFull" @afterChange="rubah">
        <div v-for="(item, i) in list" :key="'k' + i" class="w-full">
          <div class="blue-section grid grid-cols-1 md:grid-cols-2">
            <div class="">
              <div v-if="item.brandImage">
                <img :src="item.brandImage" class="object-cover h-[40px]" />
              </div>
              <h1 class="ip-title" v-html="item.title" />
              <h2 class="ip-sub-title" v-html="item.subTitle" />
              <p class="ip-description">{{ item.description }}</p>
            </div>
            <div class="flex justify-end items-center">
              <img :src="item.image" :alt="item.title" class="mt-0" />
            </div>
          </div>
          <div class="">
            <div class="container mx-auto">
              <!-- <div class="flex items-center gap-x-7 py-5">
                                <a v-for="(i, index2) in item.externalLink" :key="'fhdkadfa'+index2" class="flex items-center hover:opacity-70" :href="i.url" target="_blank">
                                    <img :src="'/images/icons/sm/'+i.name+'.png'" class="h-[48px]" :alt="i.title" />
                                    <div class="text-white text-[24px] font-semibold ml-2">{{ i.followers }} Followers</div>
                                </a>
                            </div> -->
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
      sliderOpt: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false,
        infinite: true,
        variableWidth: false,
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
  computed: {},
  mounted() {
    this.initialize();
  },
  methods: {
    initialize() {
      // setTimeout(() => {
      //     this.cariDiv()
      // },500)
    },

    initCar() {
      console.log("rubah");
      setTimeout(() => {
        this.cariDiv();
      }, 500);
    },

    cariDiv() {
      if (process.client) {
        var wrapper = document.createElement("div");
        var myDiv = document.querySelector(".slick-dots");
        wrapper.className = "container mx-auto";
        myDiv.parentNode.insertBefore(wrapper, myDiv);
        wrapper.appendChild(myDiv);
      }
    },
    buttonAction(item) {
      this.$router.push(item.target);
    },
    maju(nom) {
      this.$refs.carFull.goTo(nom);
    },
    rubah(e) {
      this.currentSlide = e;
    },
    activeSlide(index) {
      return this.currentSlide === index ? "aktif" : "";
    },
  },
};
</script>

<style scoped>
.ip-title {
  @apply text-[42px] md:text-[64px] font-bold text-white font-trickster mb-5;
}

.ip-sub-title {
  @apply text-sm md:text-[28px] font-bold text-white font-acumin mb-5;
}

.ip-description {
  @apply text-white mb-5 w-full font-acumin text-[22px];
}

.blue-section {
  @apply text-white pt-10 bg-warna001 container pb-2 min-h-[420px];
}
</style>

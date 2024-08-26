<template>
  <div class="bg-warna14 pt-[67px] min-h-screen">
    <section class="relative max-h-[calc(100vh-67px)] overflow-hidden">
      <img
        src="/images/banner-infia-universe.png"
        class="w-full object-bottom max-h-[calc(100vh-67px)]"
      />
      <div
        class="hidden md:block md:absolute left-0 bottom-0 z-10 w-full right-0"
      >
        <div class="w-full container mx-auto">
          <h1
            class="font-trickster font-bold text-white text-[80px] leading-none"
          >
            INFIA Universe
          </h1>
        </div>
      </div>
    </section>

    <section class="">
      <div class="container mx-auto text-white pb-20 pt-10">
        <h1
          class="block md:hidden font-trickster font-bold text-white text-[60px] mb-5 -mt-7 leading-none"
        >
          INFIA Universe
        </h1>

        <div class="w-full md:w-4/5 font-bold">
          We believe that every Indonesian IP can become supermassive, but
          sadly, most could barely even thrive. Being held back by unjust
          deals—their potential is being locked away, waiting to be unleashed.
          We exist to turn injustice upside down giving IP Creators a safe and
          supportive ecosystem so they can grow endlessly and unleash the best
          of their imaginations.
        </div>
      </div>
    </section>
    <section>
      <img src="/images/infia-universe-2.png" class="w-full" />
      <div class="container mx-auto text-white pb-20 pt-10">
        <div class="w-full md:w-4/5 font-bold">
          We have 4 kinds of IP in our arsenal and tools to make it big. Because
          managing IP is one thing, but making it big enough to dye the world in
          colors is another thing. We do so through We do so through licensing,
          content ads, collaboration and partnership.
        </div>
      </div>
    </section>
    <div ref="topOfSlider" class="text-transparent h-[40px]"></div>
    <div class="container mx-auto py-10" ref="sliderContent">
      <ElemenTab v-model="tab" :list="listTab" />
    </div>
    <div class="konten-area">
      <transition name="fade">
        <div v-if="tab === 'character'">
          <DesktopInfiaUniverseCharacter
            :key="'asdf1' + keyTab"
            :kunci="keyTab"
          />
        </div>
      </transition>
      <transition name="fade">
        <div v-if="tab === 'media'">
          <DesktopInfiaUniverseMedia :key="'asdf' + keyTab" :kunci="keyTab" />
        </div>
      </transition>
      <transition name="fade">
        <div v-if="tab === 'talent'">
          <DesktopInfiaUniverseTalent :key="'adsdf' + keyTab" :kunci="keyTab" />
        </div>
      </transition>
      <transition name="fade">
        <div v-if="tab === 'event'">
          <DesktopInfiaUniverseEvent
            :key="'adsdfevent' + keyTab"
            :kunci="keyTab"
          />
        </div>
      </transition>
      <transition name="fade">
        <div v-if="tab === 'offlineexp'">
          <DesktopInfiaUniverseOfflineExp
            :key="'adsdfevent' + keyTab"
            :kunci="keyTab"
          />
        </div>
      </transition>

      <transition name="fade">
        <div v-if="tab === 'web3'">
          <DesktopInfiaUniverseWeb3
            :key="'adsdfweb3' + keyTab"
            :kunci="keyTab"
          />
        </div>
      </transition>
    </div>
    <div v-if="showScrollTop" class="fixed bottom-0 right-0 z-[99999] p-10">
      <div class="flex flex-col items-center gap-2 text-white text-[12px]">
        <button
          @click="clickToTop"
          class="w-[40px] bg-[#e16441] hover:ring-1 rounded-full h-[40px] text-white text-[20px] font-semibold"
        >
          &#8679;
        </button>
        Back To Top
      </div>
    </div>
    <div class="text-right text-[14px] container mx-auto py-2 text-warnad9">
      Copyright © INFIA 2023
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showScrollTop: false,
      tab: "",
      keyTab: 0,
      listTab: [
        {
          id: "character",
          name: "Character",
        },
        {
          id: "media",
          name: "Media",
        },
        {
          id: "talent",
          name: "Talent",
        },
        {
          id: "event",
          name: "Event",
        },
        {
          id: "offlineexp",
          name: "Offline Experience",
        },
        {
          id: "web3",
          name: "Web3",
        },
      ],
    };
  },
  watch: {
    tab(val) {
      this.keyTab += 1;
    },
  },
  mounted() {
    this.initialize();
    window.addEventListener("scroll", this.showClickToTop);
  },
  unmounted() {
    window.removeEventListener("scroll", this.showClickToTop);
  },
  methods: {
    showClickToTop() {
      const bodyScrollTop = this?.$refs?.sliderContent?.offsetTop;
      const docElScrollTop = document.documentElement.scrollTop;
      console.log(bodyScrollTop, docElScrollTop);
      if (bodyScrollTop < docElScrollTop) {
        this.showScrollTop = true;
      } else {
        this.showScrollTop = false;
      }
    },
    clickToTop() {
      this?.$refs?.topOfSlider?.scrollIntoView();
    },
    initialize() {
      this.tab = "character";
    },
  },
};
</script>

<style lang="scss" scoped></style>

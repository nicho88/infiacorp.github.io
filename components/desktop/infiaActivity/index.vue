<template>
  <div>
    <div class="pt-[67px]">
      <div v-if="showScrollTop" class="fixed bottom-0 right-0 z-[99999] p-10">
        <div class="flex flex-col items-center gap-2 text-white text-[12px]">
          <button
            @click="clickToTop"
            class="w-[40px] bg-blue-600 hover:ring-1 rounded-full h-[40px] text-white text-[20px] font-semibold"
          >
            &#8679;
          </button>
          Back To Top
        </div>
      </div>
      <!-- <section 
                class="min-h-[calc(100vh-67px)] overflow-hidden bg-auto bg-no-repeat bg-center w-full bg-warna14" 
                style="background-size: 100%;background-image:url('/images/bg-infia-activity.png')"
                >
                <div>
                    <div class="container mx-auto ">
                        <h1 class="text-[80px] mt-40 text-white font-trickster-black">Whats going on?</h1>
                    </div>
                    <DesktopInfiaActivityWhatsGoingOn />
                </div>
            </section> -->
      <div
        class="min-h-[calc(100vh-67px)] relative bg-warna0e hidden md:flex items-end"
      >
        <div class="absolute top-0 left-0 right-0 bottom-0">
          <img
            src="/images/bg-infia-activity.png"
            class="w-full h-[calc(100vh-67px)] object-cover object-center"
            alt="back"
          />
        </div>
        <div
          class="absolute top-0 left-0 right-0 bottom-0 z-10 flex items-center"
        >
          <div class="w-full">
            <div class="container mx-auto">
              <h1 class="text-[80px] text-white font-trickster-black">
                Whats going on?
              </h1>
            </div>
            <DesktopInfiaActivityWhatsGoingOn />
          </div>
        </div>
      </div>
      <div class="block md:hidden bg-warna0e">
        <div
          class="bg-cover"
          style="background: url('/images/bg-infia-activity.png') no-repeat"
        >
          <div class="w-full">
            <div class="container mx-auto">
              <h1 class="text-[60px] text-white font-trickster-black">
                Whats going on?
              </h1>
            </div>
            <DesktopInfiaActivityWhatsGoingOn />
          </div>
        </div>
      </div>

      <DesktopInfiaActivityArtikel />
      <div class="bg-warna0e">
        <div class="text-right text-[14px] container mx-auto py-2 text-warnad9">
          Copyright © INFIA 2023
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showScrollTop: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.showClickToTop);
  },
  unmounted() {
    window.removeEventListener("scroll", this.showClickToTop);
  },
  methods: {
    clickToTop() {
      this.$router.push("");
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    showClickToTop() {
      const bodyScrollTop = document.body.scrollTop;
      const docElScrollTop = document.documentElement.scrollTop;

      if (bodyScrollTop > 50 || docElScrollTop > 50) {
        this.showScrollTop = true;
      } else {
        this.showScrollTop = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

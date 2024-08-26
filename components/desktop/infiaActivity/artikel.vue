<template>
  <div class="random-bg">
    <section
      v-for="(item, index) in listArtikel"
      :key="'keyArtikel' + index"
      :id="item.id"
    >
      <div class="bg-warna001 overflow-hidden">
        <div class="container mx-auto py-20">
          <h1 class="section-header mb-10">{{ item.title }}</h1>
          <div class="text-white text-[24px] mb-10">{{ item.date }}</div>
          <p
            class="artikel text-white columns-1 md:columns-2"
            v-html="item.description"
          />
        </div>
        <div
          class="container mx-auto pb-10 md:pb-20"
          v-if="item?.images?.length !== 0"
        >
          <div class="w-screen pb-10 md:pb-20">
            <ElemenSliderGallery :list="item.images" />
          </div>
        </div>
      </div>

      <div class="h-[50px] md:h-[150px] w-full" :class="item.divider"></div>
    </section>
  </div>
</template>

<script>
import artikel from "../../../data/artikel/ARTICLE_REGISTER";

export default {
  data() {
    return {
      listArtikel: artikel,
    };
  },
};
</script>

<style lang="scss" scoped></style>

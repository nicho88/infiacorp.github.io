<template>
  <div class="flex flex-wrap items-center gap-x-5 md:gap-x-7 gap-y-5 py-5">
    <a
      v-for="(i, index2) in externalLink"
      :key="'fhdkadfa' + index2"
      class="flex items-center hover:opacity-70"
      :href="i.url"
      target="_blank"
    >
      <img
        :src="'/images/icons/sm/' + i.name + '.png'"
        class="h-[30px] md:h-[48px]"
        :alt="i.title"
      />
      <div class="text-white text-[18px] md:text-[24px] font-semibold ml-2">
        {{ i.followers }} Followers
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["externalLink"],
};
</script>

<style lang="scss" scoped></style>

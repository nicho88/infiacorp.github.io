<template>
  <div>
    <DesktopAboutUs />
  </div>
</template>

<script>
import SEO from "~/mixins/seo.js";
export default {
  mixins: [SEO],

  data() {
    return {
      meta: {
        title: "About Us",
        image: "/images/logo.png",
        desc: "Meet Our Founders, Aji Pratomo founder, Andrey Noelfry Tarigan, Co Founder,Muhammad Noviar Rahman, Co Founder Chief Investment Officer ",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>

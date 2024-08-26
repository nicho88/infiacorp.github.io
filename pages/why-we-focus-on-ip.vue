<template>
  <div class="overflow-hidden bg-warna14">
    <DesktopWhy2 />
  </div>
</template>

<script>
import SEO from "~/mixins/seo.js";
export default {
  mixins: [SEO],

  data() {
    return {
      meta: {
        title: "Why We Focus on IP?",
        image: "/images/banner-ip.png",
        desc: "We see Intellectual Property (IP) as the current game-changer in Indonesia’s media and entertainment industry.Indonesia is a unique playground where IPs are born and thrive within the digital ecosystem. They are versatile, reliable and, most importantly, with the huge amount of netizens in Indonesia, they are highly influential.",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>

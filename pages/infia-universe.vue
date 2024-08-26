<template>
  <div>
    <DesktopInfiaUniverse />
  </div>
</template>

<script>
import SEO from "~/mixins/seo.js";
export default {
  mixins: [SEO],

  data() {
    return {
      meta: {
        title: "INFIA Universe",
        image: "/images/banner-infia-universe.png",
        desc: "We believe that every Indonesian IP can become supermassive, but sadly, most could barely even thrive. Being held back by unjust deals—their potential is being locked away, waiting to be unleashed. We exist to turn injustice upside down giving IP Creators a safe and supportive ecosystem so they can grow endlessly and unleash the best of their imaginations.",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>

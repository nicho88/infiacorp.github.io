<template>
  <div>
    <DesktopInfiaActivity />
  </div>
</template>

<script>
import SEO from "~/mixins/seo.js";
export default {
  mixins: [SEO],

  data() {
    return {
      meta: {
        title: "INFIA Activity",
        image: "/logo.png",
        desc: "Whats goin on INFIA Activity",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>

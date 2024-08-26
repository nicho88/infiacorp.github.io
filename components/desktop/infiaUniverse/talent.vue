<template>
  <div>
    <div class="bg-bulat-kiri-bawah">
      <ElemenSliderFull :list="list">
        <template v-slot:medy-renaldy="{ item }">
          <div class="pb-20">
            <img
              :src="'/images/slider/talent/' + item.id + '/portofolio.png'"
              class="w-full"
            />
          </div>
        </template>

        <template v-slot:willy-winarko="{ item }">
          <div class="pb-20">
            <img
              :src="'/images/slider/talent/' + item.id + '/portofolio.png'"
              class="w-full"
            />
          </div>
        </template>

        <template v-slot:semakin-didevan="{ item }">
          <div class="pb-20">
            <img
              :src="'/images/slider/talent/' + item.id + '/portofolio.png'"
              class="w-full"
            />
          </div>
        </template>
      </ElemenSliderFull>
    </div>
  </div>
</template>

<script>
export default {
  props: ["kunci"],
  data() {
    return {
      list: [
        {
          id: "medy-renaldy",
          path: "/images/slider/talent/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/medyrenaldy/",
              followers: "667k",
            },
            {
              name: "twitter",
              url: "https://twitter.com/medyrenaldy_",
              followers: "27.3k",
            },
            {
              name: "tiktok",
              url: "https://www.tiktok.com/@medyrenaldy_",
              followers: "8.6m",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@MedyRenaldy",
              followers: "3.46m",
            },
          ],
          title: "Medy Renaldy",
          // subTitle: "Dagelan Mascot",
          lastUpdate: "Last update 13 june 2024",
          description:
            "A content creator who specifically reviews about toys. The main goal is to become the number one toy reviewer in Indonesia, to become a ‘mecca’ that can be trusted by all toy aenthusiasts.",
          image: "/images/slider/talent/medy-renaldy/bg.png",
        },
        {
          id: "semakin-didevan",
          path: "/images/slider/talent/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/semakindidevan/",
              followers: "322k",
            },
            {
              name: "twitter",
              url: "https://twitter.com/semakindidevan",
              followers: "3.6k",
            },
            {
              name: "tiktok",
              url: "https://www.tiktok.com/@devandemotivator",
              followers: "28.7 K",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@semakindidevan",
              followers: "1.21k",
            },
          ],
          title: "Semakin Di Devan",
          // subTitle: "Dagelan Mascot",
          lastUpdate: "Last update 13 june 2024",
          description:
            "Unlike other stand-up comedians, Devan Yulio finds his strength in using word play and uses it for his approach as certified demotivator. With his signature Batik shirt and laugh, Devan is ready to serve his satiric comedy through his demotivational contents. Concerns about love, career, family, economy and all aspects of human life.",
          image: "/images/slider/talent/semakin-didevan/bg.png",
        },
        {
          id: "willy-winarko",
          path: "/images/slider/talent/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/willywinarko/",
              followers: "535k",
            },
            {
              name: "twitter",
              url: "https://twitter.com/willywinarko_",
              followers: "3.8 K",
            },
            {
              name: "tiktok",
              url: "https://www.tiktok.com/@willywinarko_",
              followers: "384.1k",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@WillyWinarko",
              followers: "45.5k",
            },
          ],
          title: "Willy Winarko",
          // subTitle: "Dagelan Mascot",
          lastUpdate: "Last update 13 june 2024",
          description:
            "Willy Winarko is a musician, rapper, and content creator. He became a talent development output from The Rap Up, presenting various content through his ability in rapping and writing songs by bringing social issues wrapped in his proactive and fun personality with critical point of view.",
          image: "/images/slider/talent/willy-winarko/bg.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

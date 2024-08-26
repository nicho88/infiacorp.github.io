<template>
  <div class="overflow-hidden">
    <div class="bg-bulat-kiri-bawah">
      <div class=" ">
        <ElemenSliderEvent :list="list">
          <template v-slot:jsd="{ item }">
            <div class="pb-20">
              <img
                :src="'/images/slider/event/' + item.id + '/portofolio.png'"
                class="w-full"
              />
            </div>
          </template>
          <template v-slot:melodi-alam="{ item }">
            <div class="pb-20">
              <img
                :src="'/images/slider/event/' + item.id + '/portofolio.png'"
                class="w-full"
              />
            </div>
          </template>
          <template v-slot:fantoystic="{ item }">
            <div class="pb-20">
              <img
                :src="'/images/slider/event/' + item.id + '/portofolio.png'"
                class="w-full"
              />
            </div>
          </template>
        </ElemenSliderEvent>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keySlider: 0,
      list: [
        {
          id: "jsd",
          path: "/images/slider/event/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/jakartasneakerday/",
              followers: "308k",
            },
            {
              name: "twitter",
              url: "https://twitter.com/jktsneakerday",
              followers: "648",
            },

            {
              name: "tiktok",
              url: "https://www.tiktok.com/@jktsneakerday",
              followers: "12.4k",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@jakartasneakerday",
              followers: "2.53k",
            },
          ],
          title: "JAKARTA SNEAKER DAY (JSD)",
          subTitle:
            "The Pioneer of Offline to Online Expo Sneaker Event in Indonesia",
          lastUpdate: "Last Update 13 June 2024",
          description:
            "Started in January 2017 and in 2019 became the PIONEER of ONLINE expo and bazaar in the following years until now. JSD is driven to grow and educate the public about sneaker culture and local brands. JSD marked it as the first nationwide event to give a local brand a product launching platform such as Compass. ",
        },
        {
          id: "melodi-alam",
          path: "/images/slider/event/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/melodi.alam/",
              followers: "189k",
            },
            {
              name: "twitter",
              url: "https://twitter.com/melodi_alam",
              followers: "108",
            },

            {
              name: "tiktok",
              url: "https://www.tiktok.com/@melodi.alam",
              followers: "8.5k",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@melodialam",
              followers: "18.6k",
            },
          ],
          title: "MELODI ALAM",
          subTitle: "The Most Intimate Forest Music Festival",
          lastUpdate: "Last Update 13 June 2024",
          description:
            "Held in Pine Forest, Bogor. The different experience was after the event finished and into a camping session with bonfire, where audiences and performers can SING TOGETHER, SHARING, and TALKING with each other. In 2019, Melodi Alam collaborated with BBQ Mountain Boys on an event “Melodi Alam: The Uncommon Journey”, a combination of Music and BBQ Dining Experience. ",
        },
        {
          id: "fantoystic",
          path: "/images/slider/event/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/fantoysticworld/",
              followers: "20.2k",
            },

            // {
            //     name: 'twitter',
            //     url: 'https://twitter.com/fantoysticworld',
            //     followers: '0'
            // },

            {
              name: "tiktok",
              url: "https://www.tiktok.com/@fantoysticworld",
              followers: "1.7k",
            },

            {
              name: "youtube",
              url: "https://www.youtube.com/@fantoysticworld",
              followers: "32",
            },
          ],
          title: "FANTOYSTIC WORLD",
          subTitle: "The New Experience of Toys Event",
          lastUpdate: "Last Update 13 June 2024",
          description:
            "Collaboration between INFIA and Medy to expand the IP by creating Fantoystic World in 2022, the experience toys event for toy lovers and community to sell, trade, buy & gather. Fantoystic involved visitors in some of the experiences that they elaborate on the event.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

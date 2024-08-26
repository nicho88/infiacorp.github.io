<template>
  <div>
    <div class="bg-bulat-kiri-bawah">
      <ElemenSliderFlat :list="list">
        <template v-slot:mindblowon="{ item }">
          <div class="pb-20">
            <img
              :src="'/images/slider/web3/' + item.id + '/portofolio.png'"
              class="w-full"
            />
          </div>
        </template>
        <template v-slot:utopia="{ item }">
          <div class="pb-20">
            <img
              :src="'/images/slider/web3/' + item.id + '/portofolio.png'"
              class="w-full"
            />
          </div>
        </template>
        <template v-slot:parallax="{ item }">
          <div class="pb-20">
            <img
              :src="'/images/slider/web3/' + item.id + '/portofolio.png'"
              class="w-full"
            />
          </div>
        </template>
      </ElemenSliderFlat>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: "mindblowon",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/mindblowonuniverse/",
              followers: "338k",
            },
            {
              name: "twitter",
              url: "https://x.com/Mindblowon_io?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
              followers: "137.1k",
            },

            {
              name: "tiktok",
              url: "https://www.tiktok.com/@tahilalats?lang=en",
              followers: "1.8m",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@MindblowonTV",
              followers: "428k",
            },
          ],
          brandImage: "/images/slider/web3/mindblowon/logo.png",
          title: "Mindblowon",
          subTitle: "mindblowon.io",
          description:
            "<p>Just another Mindblowon day for 6969 weirdos in the metaverse, from the creators of Tahilalats, Join us as we embark on a weird but blessed journey to a new universe where imagination and laughter are limitless.</p><p>Sold out in less than a minute in a fair Dutch auction and since the release date, Mindblowon has collaborated with big names projects in NFT, such as BBC Ice Cream, Bored N’ Hungry, Carrots, etc.</p>",
        },
        {
          id: "utopia",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/utopiaclub_/",
              followers: "2.2k",
            },
            {
              name: "twitter",
              url: "https://x.com/Utopiaclub_",
              followers: "30.1k",
            },

            // {
            //     name: 'tiktok',
            //     url: 'https://www.tiktok.com/@tahilalats',
            //     followers: '4.5 K'
            // },
            // {
            //     name: 'youtube',
            //     url: 'https://www.youtube.com/@MindblowonTV',
            //     followers: '481'
            // }
          ],

          brandImage: "/images/slider/web3/utopia/logo.png",
          title: "UTOPIA NFT",
          subTitle: "utopianft.club",
          description:
            "<p>Utopia NFT club is an exclusive close-knit community, a melting pot of influential people in Indonesia’s NFT scene with various backgrounds: from degens to investors, celebrities to entrepreneurs, and web2 to web3 professionals that connect to conventional brands and global web3 projects.</p>",
        },
        {
          id: "parallax",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/parallax.network/",
              followers: "389",
            },
            {
              name: "twitter",
              url: "https://twitter.com/parallaxnet",
              followers: "342",
            },

            // {
            //     name: 'tiktok',
            //     url: 'https://www.tiktok.com/@tahilalats',
            //     followers: '4.5 K'
            // },
            // {
            //     name: 'youtube',
            //     url: 'https://www.youtube.com/@MindblowonTV',
            //     followers: '481'
            // }
          ],

          brandImage: "/images/slider/web3/parallax/logo.png",
          title: "Parallax",
          subTitle: "parallaxnetwork.io",
          description:
            "<p>Parallax is an R&D Crew and Think Tank Lab providing composable and interoperable products, protocols, and services to radically improve the internet and partners ecosystem in Web3 space. We are built as a club of builders, creators, and professionals. Exploring the new frontier of internet culture with cutting-edge technology, Product design & strategy.</p>",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

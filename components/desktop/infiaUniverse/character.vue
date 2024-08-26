<template>
  <div>
    <div class="bg-bulat-kiri-bawah">
      <ElemenSliderFull :list="list">
        <template v-slot:tahilalats="{ item }">
          <div class="pb-20">
            <div class="grid grid-cols-3 gap-5">
              <div class="grid gap-5">
                <div v-for="data in [1, 13, 7, 5]">
                  <img
                    :src="item.path + item.id + `/porto-${data}.jpg`"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div class="grid gap-5">
                <div v-for="data in [11, 2, 8, 6]">
                  <img
                    :src="item.path + item.id + `/porto-${data}.jpg`"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div class="grid gap-5">
                <div v-for="data in [12, 3, 9, 4]">
                  <img
                    :src="item.path + item.id + `/porto-${data}.jpg`"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:dudu="{ item }">
          <div class="pb-20">
            <div class="grid grid-cols-3 gap-5">
              <div class="grid gap-5">
                <div v-for="data in [3, 1]">
                  <img
                    :src="item.path + item.id + `/porto-${data}.jpg`"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div class="grid gap-5">
                <div v-for="data in [4, 5]">
                  <img
                    :src="item.path + item.id + `/porto-${data}.jpg`"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div class="grid gap-5">
                <div v-for="data in [2, 6]">
                  <img
                    :src="item.path + item.id + `/porto-${data}.jpg`"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:dalang-pelo="{ item }">
          <div class="pb-20">
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-12 md:col-span-6">
                <img
                  :src="item.path + item.id + '/1-1.png'"
                  class="mb-5 object-cover w-full"
                />
                <img
                  :src="item.path + item.id + '/1-2.png'"
                  class="object-cover w-full"
                />
              </div>
              <div
                class="col-span-12 md:col-span-6 overflow-hidden flex items-stretch"
              >
                <img
                  :src="item.path + item.id + '/2-1.png'"
                  class="h-full object-cover w-full"
                />
              </div>
              <div class="col-span-12">
                <img
                  :src="item.path + item.id + '/3-1.png'"
                  class="mb-5 object-cover w-full"
                />
              </div>
            </div>
          </div>
        </template>
        <template v-slot:vernalta="{ item }">
          <div class="pb-20">
            <div class="grid grid-cols-12 gap-5 mb-5">
              <div
                class="col-span-12 md:col-span-4 overflow-hidden flex items-stretch"
              >
                <img
                  :src="item.path + item.id + '/1-1.png'"
                  class="w-full object-cover"
                />
              </div>
              <div
                class="col-span-12 md:col-span-4 overflow-hidden flex items-stretch"
              >
                <img
                  :src="item.path + item.id + '/1-2.png'"
                  class="w-full object-cover"
                />
              </div>
              <div
                class="col-span-12 md:col-span-4 overflow-hidden flex items-stretch"
              >
                <img
                  :src="item.path + item.id + '/1-3.png'"
                  class="w-full object-cover"
                />
              </div>
            </div>
            <div class="grid grid-cols-12 gap-5">
              <div class="col-span-12 md:col-span-6 overflow-hidden">
                <div class="mb-3">
                  <img :src="item.path + item.id + '/2-1.png'" class="w-full" />
                </div>
                <div class="h-1/2">
                  <img :src="item.path + item.id + '/2-2.png'" class="w-full" />
                </div>
              </div>
              <div class="col-span-12 md:col-span-6 flex items-stretch">
                <img
                  :src="item.path + item.id + '/3-1.png'"
                  class="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </template>
        <template v-slot:funcica="{ item }">
          <div class="pb-20">
            <div class="grid grid-cols-3 gap-5">
              <div class="grid gap-5">
                <div v-for="data in [1, 4]">
                  <img
                    :src="item.path + item.id + `/porto-${data}.jpg`"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div class="grid gap-5">
                <div v-for="data in [2, 5]">
                  <img
                    :src="item.path + item.id + `/porto-${data}.jpg`"
                    class="object-cover w-full"
                  />
                </div>
              </div>
              <div class="grid gap-5">
                <div v-for="data in [3, 6]">
                  <img
                    :src="item.path + item.id + `/porto-${data}.jpg`"
                    class="object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:tanduk-putih="{ item }">
          <div class="pb-20">
            <div class="grid grid-cols-3 gap-5">
              <div class="grid gap-5">
                <div v-for="data in [1, 4]">
                  <img
                    :src="item.path + item.id + `/porto-${data}.jpg`"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div class="grid gap-5">
                <div v-for="data in [2, 5]">
                  <img
                    :src="item.path + item.id + `/porto-${data}.jpg`"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div class="grid gap-5">
                <div v-for="data in [3, 6]">
                  <img
                    :src="item.path + item.id + `/porto-${data}.jpg`"
                    class="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
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
          id: "tahilalats",
          path: "/images/slider/character/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/tahilalats/",
              followers: "5.4m",
            },
            {
              name: "twitter",
              url: "https://www.tiktok.com/@tahilalats",
              followers: "932.8k",
            },

            {
              name: "tiktok",
              url: "https://www.tiktok.com/@tahilalats",
              followers: "1.8m",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@MindblowonTV",
              followers: "427k",
            },
          ],
          brandImage: "/images/slider/character/tahilalats/logo.png",
          title: "Tahilalats",
          subTitle: "+62 Netizen’s Favourite IP",
          lastUpdate: "13 June 2024",
          description:
            "(a.k.a Mindblowon) is an Indonesian webcomic which includes many experiences and stories of everyday life with ‘satirical, over-exaggerated and absurd twists’ characteristics.",
          image: "/images/slider/character/tahilalats/bg.png",
        },
        {
          id: "dudu",
          path: "/images/slider/character/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/hai.dudu/",
              followers: "562k",
            },
            {
              name: "tiktok",
              url: "https://www.tiktok.com/@haidudu_",
              followers: "90.8k",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@haidudu5125",
              followers: "2.3k",
            },
          ],
          brandImage: "/images/slider/character/dudu/logo.png",
          title: "Dudu",
          subTitle: "Dagelan Mascot",
          lastUpdate: "13 June 2024",
          description:
            "Dudu is Dagelan’s original character as the main IP and represents Dagelan persona’s who was born from the explosion of memes and netizen debate.",
          image: "/images/slider/character/dudu/bg.png",
        },
        {
          id: "dalang-pelo",
          path: "/images/slider/character/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/dalang.pelo/",
              followers: "3.5m",
            },
            {
              name: "twitter",
              url: "https://twitter.com/dalangpeloo",
              followers: "2.3k",
            },

            {
              name: "tiktok",
              url: "https://www.tiktok.com/@dalangpeloanimasi",
              followers: "1m",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@DalangPelo",
              followers: "4.72m",
            },
          ],
          brandImage: "/images/slider/character/dalang-pelo/logo.png",
          title: "Dalang Pelo",
          subTitle: "An Absurd Universe of Dalang Pelo",
          lastUpdate: "13 June 2024",
          description:
            "Dalang Pelo is an animated entertainment sketch portraying daily activities and fantasy adventure from Acil and other main characters such as Om Gepeng, Leri, Kane Monkey and many more.",
          image: "/images/slider/character/dalang-pelo/bg.png",
        },
        {
          id: "vernalta",
          path: "/images/slider/character/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/vernalta/",
              followers: "1.8m",
            },
            {
              name: "twitter",
              url: "https://twitter.com/vernalta_world",
              followers: "5.9k",
            },

            {
              name: "tiktok",
              url: "https://www.tiktok.com/@vernalta",
              followers: "8.7m",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@Vernalta",
              followers: "5.3m",
            },
          ],
          brandImage: "/images/slider/character/vernalta/logo.png",
          title: "Vernalta",
          subTitle: "The Monster Universe That is Loved by The Nation    ",
          lastUpdate: "13 June 2024",
          description:
            "Vernalta is a universe where there are no humans at all. Their roles were replaced by monsters that resemble human beings. Follow alongside Tutu the toxic bear, Martin the apprentice grim reaper and other strange monsters. It’s extremely absurd!",
          image: "/images/slider/character/vernalta/bg.png",
        },
        {
          id: "funcica",
          path: "/images/slider/character/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/funcican",
              followers: "30.6k",
            },
            {
              name: "twitter",
              url: "https://x.com/funcican",
              followers: "2.8k",
            },

            {
              name: "tiktok",
              url: "https://www.tiktok.com/@funcican",
              followers: "6.4k",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/channel/UCltG62pa9hrPHKOHRsZ_Img",
              followers: "135k",
            },
          ],
          brandImage: "/images/slider/character/funcica/logo.webp",
          title: "Fun Cican",
          subTitle: "Child best friend pony-haired bunny",
          lastUpdate: "13 June 2024",
          description: `FUN CICAN is a children's character promoting creativity and positive values. Living in Republik Istimewa, Cican's stories cover daily life, health, emotions, and learning. Over 50 storybooks have been published. Cican also formed a band, "Metal Cican," releasing an album about daily activities like eating healthy and tidying up.`,
          image: "/images/slider/character/funcica/bg.png",
        },
        {
          id: "tanduk-putih",
          path: "/images/slider/character/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/funcican",
              followers: "30.6k",
            },
            {
              name: "twitter",
              url: "https://x.com/funcican",
              followers: "2.8k",
            },

            {
              name: "tiktok",
              url: "https://www.tiktok.com/@funcican",
              followers: "6.4k",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/channel/UCltG62pa9hrPHKOHRsZ_Img",
              followers: "135k",
            },
          ],
          brandImage: "/images/slider/character/tanduk-putih/logo.png",
          title: "Tanduk putih",
          subTitle: "Child best friend pony-haired bunny",
          lastUpdate: "13 June 2024",
          description: `Tanduk Putih is a character from comics and animation that tells about relatable things in the lives of the social life, which are annoying, fun, or even absurd events. Tanduk Putih was made as an icon and representation of a random and nosy character, a description of the nature of the author himself. However, with the development of the story, Tanduk Putih is now able to represent several character traits that generally exist in society with an absurd touch.`,
          image: "/images/slider/character/tanduk-putih/bg.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="overflow-hidden">
    <div class="bg-bulat-kiri-bawah">
      <div class=" ">
        <ElemenSliderMedia :list="list">
          <template v-slot:dagelan="{ item }">
            <div class="pb-20">
              <img
                src="/images/slider/media/dagelan/portofolio.png"
                class="w-full"
              />
            </div>
          </template>
          <template v-slot:volix="{ item }">
            <div class="pb-20">
              <img
                src="/images/slider/media/volix/portofolio.png"
                class="w-full"
              />
            </div>
          </template>
          <template v-slot:bapak2id="{ item }">
            <div class="pb-20">
              <img
                src="/images/slider/media/bapak2id/portofolio.png"
                class="w-full"
              />
            </div>
          </template>
          <template v-slot:komikinajah="{ item }">
            <div class="pb-20">
              <img
                src="/images/slider/media/komikinajah/portofolio.png"
                class="w-full"
              />
            </div>
          </template>
          <template v-slot:vbiz="{ item }">
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
          <template v-slot:infipop="{ item }">
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
          <template v-slot:crush="{ item }">
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
          <template v-slot:babam="{ item }">
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
        </ElemenSliderMedia>
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
          id: "dagelan",
          path: "/images/slider/media/",
          externalLink: [
            {
              name: "instagram",
              url: "https://instagram.com/dagelan",
              followers: "23.5m",
            },
            {
              name: "twitter",
              url: "https://x.com/dagelan",
              followers: "1.8k",
            },

            {
              name: "tiktok",
              url: "https://www.tiktok.com/@dagelantv",
              followers: "846.4k",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@DagelanTVOfficial",
              followers: "7.08k",
            },
          ],
          title: "Dagelan",
          subTitle: "Representing Indonesia’s Internet Culture Since 2014",
          lastUpdate: "Last Update 13 June 2024",
          description:
            "Dagelan is part of Infia Group as a pioneer of broadcasting-based companies and digital content aggregator in Indonesia. Founded in 2014, Dagelan focused on curating and developing content that represents Indonesia’s internet culture. Dagelan believes that happiness should be broadcast frequently.",
        },
        {
          id: "volix",
          path: "/images/slider/media/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/volix.media/",
              followers: "608k",
            },
            // {
            //     name: 'twitter',
            //     url: 'https://instagram.com/dagelan',
            //     followers: '64 K'
            // },
            {
              name: "tiktok",
              url: "https://www.tiktok.com/@volix.media",
              followers: "378.9k",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@volix_media",
              followers: "401k",
            },
          ],
          title: "VOLIX.",
          subTitle:
            "Hub of Entertainment, Information and Ideas for Indonesia Youth Generation",
          lastUpdate: "Last Update 13 June 2024",
          description:
            "VOLIX Media is a Gen Z and Millenials-focused media company that aims to catalyze Indonesia’s creative culture. VOLIX Media creates and operates content with various pillars, such as, news, podcast, music session, memes, etc.",
        },
        {
          id: "bapak2id",
          path: "/images/slider/media/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/bapak2id/",
              followers: "1.6m",
            },
            {
              name: "twitter",
              url: "https://twitter.com/bapak2id",
              followers: "3.3k",
            },
            {
              name: "tiktok",
              url: "https://www.tiktok.com/@bapak2id",
              followers: "4.3k",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@bapak2idofficial296",
              followers: "3.5k",
            },
          ],
          title: "BAPAK2ID",
          subTitle: "Nation’s Bapack-Bapack Role Model",
          lastUpdate: "Last Update 13 June 2024",
          description:
            "Bapak2ID is the first media platform in Indonesia that serves you anything related to bapak2 (fatherhood), from 101 tutorials, tips & tricks for being a good dad and husband, to life lessons. We believe “bapak2 tanggung'' is the present future. Bapak2ID aim is to educate, inform and give inspiration to bapak2 tanggung (mediocre) to be the best version of themselves.",
        },
        {
          id: "komikinajah",
          path: "/images/slider/media/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/komikin_ajah/",
              followers: "1.9m",
            },
            {
              name: "twitter",
              url: "https://twitter.com/komikinajah",
              followers: "256",
            },
            // {
            //     name: 'tiktok',
            //     url: 'https://www.tiktok.com/@komikin_ajah',
            //     followers: '1.5 K'
            // },
            {
              name: "youtube",
              url: "https://www.youtube.com/@komikinajah7274",
              followers: "1.38k",
            },
          ],
          title: "KOMIKIN AJAH",
          subTitle: "The Biggest Comic Incubator in Indonesia",
          lastUpdate: "Last Update 13 June 2024",
          description:
            "Komikin Ajah is an online based creator community, with the main showcase platform on instagram. Currently, Komikin has almost 2 million followers and around 135 creators from all over Indonesia with members like Tahilalats, Dalang Pelo to Sengklekman.",
        },
        {
          id: "vbiz",
          path: "/images/slider/media/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/vbiz.co.id/",
              followers: "696K",
            },
            {
              name: "twitter",
              url: "https://x.com/vbiz_co_id",
              followers: "106",
            },
            {
              name: "tiktok",
              url: "https://www.tiktok.com/@vbiz.co.id",
              followers: "6.7k",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@vbiz_/channels",
              followers: "223",
            },
          ],
          title: "VBIZ",
          subTitle: "Lights, camera, entertainment! 🍿✨",
          lastUpdate: "Last Update 13 June 2024",
          description: `VBIZ is a media and intellectual property company with a strong focus on the realms of entertainment and the film industry. VBIZ are here to deliver fresh content from the world of entertainment and committed to push the Indonesian film industry forward, in a VBIZ way!`,
        },
        {
          id: "infipop",
          path: "/images/slider/media/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/infipop.id/",
              followers: "3.1m",
            },
            {
              name: "twitter",
              url: "https://x.com/infipopid",
              followers: "70",
            },
            {
              name: "tiktok",
              url: "https://www.tiktok.com/@infipop.id",
              followers: "2.8k",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@infipop",
              followers: "2.23k",
            },
          ],
          title: "Infipop",
          subTitle: "Ultimate Destination For Gen Z",
          lastUpdate: "Last Update 13 June 2024",
          description: `infipop is the ultimate destination for Gen Z, where we celebrate the spirit, creativity, and unique perspectives of our generation. We believe that infipop can become a cultural driver, also a bridge between generations.`,
        },
        {
          id: "crush",
          path: "/images/slider/media/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/crushmedia.id/",
              followers: "415k",
            },
            // {
            //   name: "twitter",
            //   url: "https://x.com/infipopid",
            //   followers: "70",
            // },
            {
              name: "tiktok",
              url: "https://www.tiktok.com/@crushmedia.id",
              followers: "7.7k",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/channel/UCfO2xs_l_cTzb0njOBdJrOQ",
              followers: "31k",
            },
          ],
          title: "Crush Media",
          subTitle: "Fun Automotive Media",
          lastUpdate: "Last Update 13 June 2024",
          description: `CRUSH is a collaboration between INFIA Group, NMAA, & GARASI DRIFT. CRUSH is simply an entertainment digital platform which brings anything about automotive, mainly about four-wheels, vintage, modification, car culture all around the world, and any other things that attract petrolheads. CRUSH will bring and deliver all the contents in a fresher and more fun way. So, be prepared to have fun with CRUSH!`,
        },
        {
          id: "babam",
          path: "/images/slider/media/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/sipalingbabam/",
              followers: "16.3k",
            },
            // {
            //   name: "twitter",
            //   url: "https://x.com/infipopid",
            //   followers: "70",
            // },
            {
              name: "tiktok",
              url: "https://www.tiktok.com/@sipalingbabam?_t=8j6Ashvdy2a&_r=1",
              followers: "603.3K",
            },
            {
              name: "youtube",
              url: "https://www.youtube.com/@sipalingbabam",
              followers: "132k",
            },
          ],
          title: "BABAM!",
          subTitle: "On The Way To Be #1 Gameshow In Indonesia",
          lastUpdate: "Last Update 13 June 2024",
          description: `BABAM! is an entertainment company that aims to provide fun and excitement through game shows, quizzes, and challenges!
                        The word "BABAM!" comes from the Korean 바밤, meaning similar to "ta-da!" -
                        to indicate an impressive entrance or a dramatic
                        announcement.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="overflow-hidden">
    <div class="bg-bulat-kiri-bawah">
      <div class=" ">
        <ElemenSliderOfflineExp :list="list">
          <template v-slot:tahilalats_store="{ item }">
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
          <template v-slot:samsara_bogor="{ item }">
            <div class="pb-20">
              <div class="grid gap-5 mb-6">
                <div v-for="data in [3]">
                  <iframe
                    class="w-full h-[600px]"
                    src="https://www.youtube.com/embed/IMpneIgT0b0"
                    :title="`Kahitna - Sejauh Dua Benua (Official Music Video)`"
                    frameborder="0"
                    :allow="`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  />
                </div>
              </div>
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
        </ElemenSliderOfflineExp>
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
          id: "tahilalats_store",
          path: "/images/slider/offline/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/toko.tahilalats",
              followers: "20.6k",
            },
          ],
          title: "Toko Tahilalats",
          subTitle: "Where you can get the best food & Experience",
          lastUpdate: "Last Update 13 June 2024",
          description: `Tahilalats shop is a shop that provides a food menu using the theme of a 
          character from a comic strip called tahilalats. besides providing delicious and distinctive 
          food, this shop also has an aesthetic photo spot thanks to the many ornaments from tahilalats 
          that decorate the shop.`,
        },
        {
          id: "samsara_bogor",
          path: "/images/slider/offline/",
          externalLink: [
            {
              name: "instagram",
              url: "https://www.instagram.com/samsara.bogor",
              followers: "6.03k",
            },
          ],
          title: "Samsara Bogor",
          subTitle: "Symphony of Melody and Taste",
          lastUpdate: "Last Update 13 June 2024",
          description: `Samsara is a cafe with the concept of melody and flavor! The cafe is located in 
          Bogor, West Java. Samsara combines melody and flavor. Samsara also offers 
          room that can be used for a meeting. Samsara has an elegant feel with 
          Samsara's menu starts at Rp 20,000 and includes dessert, pizza or heavy meals are available.`,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>

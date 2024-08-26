<template>
    <div>
      <DesktopHome 
        :withVideo="false"
      />
      <!-- hufdhsf -->
    </div>
  </template>
  
  <script>
  import SEO from '~/mixins/seo.js'
  export default {
    mixins:[SEO],
    name: 'IndexPage',
    data() {
      return {
        meta: {
          title: 'INFIA',
          image: '/logo.png',
          desc: 'Imagine a world without imagination, impossible isn’t it? That’s just how powerful imagination is. We believe there are infinite possibilities you can achieve from just one imagination alone, and we know how to help you unleash it.'
        }
      }
    }
  }
  </script>
  
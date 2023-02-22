<template>
    <div class="home" >
      <div class="containSearch" >
        <div class="theSearch">
          <input type="text" placeholder="Search.." class="search" :style="{ border: '4px solid ' + Ayato.colorLighter }">
        </div>
      </div>
      <div class="regionContainer">
        <RegionPanel :character="Ayato"/>
      </div>
      <div class="logoContainer">
        <LogoName :character="Ayato"/>
      </div>
  
      <div :style="{ backgroundColor: Ayato.color, height:'90vh', width:'100vh', position:'fixed', zIndex:'-2', marginTop:'3rem', borderRadius:'2rem'}"></div>
      <div>
        <GalleryComposant :character="Ayato"/>
      </div>
      <div :style="{ position:'fixed',left:'130vh', top:'30vh'}">
        <ColorPalette :character="Ayato"/>
      </div>
      
      <div :style="{ position:'fixed',right:'135vh', top:'10vh'}">
        <ImagePanel :character="Ayato"/>
      </div>
    </div>
  </template>
  
  <script>
  import GalleryComposant from '@/components/GalleryComposant'
  import ColorPalette from '@/components/ColorPalette'
  import ImagePanel from '@/components/ImagePanel.vue'
  import LogoName from '@/components/LogoName.vue'
  import RegionPanel from '@/components/RegionPanel.vue'
  
  
  // @ is an alias to /src
  export default {
      name: "AyatoView",
      components: { GalleryComposant, ColorPalette, ImagePanel, LogoName, RegionPanel },
      data() {
      return {
          Ayato: {
              name: "Ayato",
              image: require("@/assets/Kamisato-Ayato-1.webp"),
              color:"#3F4082",
              colorLighter:"#696BC0",
              colorSecondary:"#CFDEF2",
              colorTertiary:"#7D6BAC",
              emote1:require("@/assets/Icon_Emoji_065_Hu_Tao_Evil_laugh.webp"),
              emote2:require("@/assets/Icon_Emoji_070_Hu_Tao_I21.webp"),
              logoName:require("@/assets/ayatoLogo.png"),
              region:'inazuma'
          }
      }
    }
  }
</script>



<style>

</style>
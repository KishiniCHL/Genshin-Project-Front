<template>
    <div class="home" >
      <div class="containSearch" >
        <div class="theSearch">
          <input type="text" placeholder="Search.." class="search" :style="{ border: '4px solid ' + Nahida.colorLighter }">
        </div>
      </div>
      <div class="regionContainer">
        <RegionPanel :character="Nahida"/>
      </div>
      <div class="logoContainer">
        <LogoName :character="Nahida"/>
      </div>
  
      <div :style="{ backgroundColor: Nahida.color, height:'90vh', width:'100vh', position:'fixed', zIndex:'-2', marginTop:'3rem', borderRadius:'2rem'}"></div>
      <div>
        <GalleryComposant :character="Nahida"/>
      </div>
      <div :style="{ position:'fixed',left:'130vh', top:'30vh'}">
        <ColorPalette :character="Nahida"/>
      </div>
      
      <div :style="{ position:'fixed',right:'135vh', top:'10vh'}">
        <ImagePanel :character="Nahida"/>
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
      name: "NahidaView",
      components: { GalleryComposant, ColorPalette, ImagePanel, LogoName, RegionPanel },
      data() {
      return {
          Nahida: {
              name: "Nahida",
              image: require("@/assets/_render_2__nahida___genshin_impact_by_bennzanimations_dfijoeu-fullview.png"),
              color:"#E5F4DC",
              colorLighter:"#A9E073",
              colorSecondary:"#87B659",
              colorTertiary:"#5E7D47",
            //   emote1:require("@/assets/"),
            //   emote2:require("@/assets/"),
              logoName:require("@/assets/nahidaLogo.png"),
              region:'sumeru'
          }
      }
    }
  }
</script>



<style>

</style>
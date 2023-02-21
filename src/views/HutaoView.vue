<template>
  <div class="home" >
    <div class="containSearch" >
      <div class="theSearch">
        <input type="text" placeholder="Search.." class="search" :style="{ border: '4px solid ' + Hutao.colorLighter }">
      </div>
    </div>
    <div class="regionContainer">
      <RegionPanel :character="Hutao"/>
    </div>
    <div class="logoContainer">
      <LogoName :character="Hutao"/>
    </div>

    <div :style="{ backgroundColor: Hutao.color, height:'90vh', width:'100vh', position:'fixed', zIndex:'-2', marginTop:'3rem', borderRadius:'2rem'}"></div>
    <div>
      <GalleryComposant :character="Hutao"/>
    </div>
    <div :style="{ position:'fixed',left:'130vh', top:'30vh'}">
      <ColorPalette :character="Hutao"/>
    </div>
    
    <div :style="{ position:'fixed',right:'135vh', top:'10vh'}">
      <ImagePanel :character="Hutao"/>
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
    name: "IndexView",
    components: { GalleryComposant, ColorPalette, ImagePanel, LogoName, RegionPanel },
    data() {
    return {
        Hutao: {
            name: "Hutao",
            image: require("@/assets/hu_tao_genshin_impact_character_render_by_deg5270_deg0oro-fullview.png"),
            color:"#734949",
            colorLighter:"#AC6868",
            colorSecondary:"#BD2723",
            colorTertiary:"#3C2C2C",
            emote1:require("@/assets/Icon_Emoji_065_Hu_Tao_Evil_laugh.webp"),
            emote2:require("@/assets/Icon_Emoji_070_Hu_Tao_I21.webp"),
            logoName:require("@/assets/hutaoLogo.png"),
            region:'liyue'
        }
    }
  }
}
</script>

<style>
.home{
  display: flex;
  align-items: center;
  flex-direction:column;
  height: 100vh;
}
.containSearch{
  position: relative;
}
.theSearch{
  width: 100vh;
  margin-top: 1rem;
  position: fixed;
  top: 0;
  left: 55vh;
}

.search{
  /* border: 4px solid rgba(130, 130, 242, 0.5); */
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 16px;
  outline: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.logoContainer{
  position: fixed;
  margin-left: 60vh;
  margin-top: 10vh;
}

.regionContainer{
  position: fixed;
  bottom: 2vh;
  left: 35vh;
}
</style>
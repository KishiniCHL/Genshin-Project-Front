<template>

    <div class="regionContainer">
        <img :src="regionImage" :alt="region" class="regionImage">
    </div>
</template>

<script>
    export default {
        name: "RegionPanel",
    props: {
        character: Object,
    },
    computed: {
    region() {
      return this.character.region;
    },
    regionImage() {
        if (this.region === "liyue") {
            return require("@/assets/liyueregion.jpg");
        } else if (this.region === "inazuma") {
            return require("@/assets/inazumaregion.jpg");
        } else if (this.region === "sumeru") {
            return require("@/assets/Sumeru_City.webp");
        } else if (this.region === "mondstadt") {
            return require("@/assets/mondstadtregion.jpg");
        } else {
            return "";
        }
        },
    },
};
</script>


<style scoped>


.regionContainer{
    opacity: 0.95;
    width: 50vh;
    height: 30vh;
    background-color: rgba(233, 233, 233, 0.767);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 1rem;
}

.regionImage{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
}
</style>
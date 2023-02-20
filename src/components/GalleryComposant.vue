<template>

    <div class="gallery_container">
      <div class="image_container">
        <img :src="character.image" :alt="character.name + ' image'">
      </div>
    </div>

</template>

<script>
    export default {
        name: "GalleryComposant",
    props: {
        character: Object,
    },
};
</script>


<style scoped>

.image_container{
    /* background-color: black; */
    /* height: 120vh; */
    width: 100%;
    height: 100%;
    overflow: hidden;
    

}
.gallery_container{
    /* display: flex; */
    height: 100vh;
    width: 100vh;

}
.gallery_container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* transform: translateX(-13rem); */
}


</style>
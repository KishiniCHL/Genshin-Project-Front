<template>

    <div class="imgPanel_container">
        <h2 class="titleImgPanel">Emotes</h2>
        <div class="firstSectionImgPanel">
            <div class="imgPanel_display" id="imgContainer1" :style="{ border: '3px solid ' + character.colorLighter }">
                <img :src="character.emote1" :alt="character.name + 'emote'" id="imageContainer1">
            </div>
            <div class="imgPanel_display" id="imgContainer2" :style="{ border: '3px solid ' + character.colorLighter }">
                <img :src="character.emote2" :alt="character.name + 'emote'" id="imageContainer1">
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ImagePanel",
    props: {
        character: Object,
    },
};
</script>


<style scoped>
.imgPanel_container{
    width: 20vh;
    height: 40vh;
    border-radius: 2rem;
    background-color: rgb(249, 249, 249);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;
}
.titleImgPanel{
    text-decoration: underline;
}
.firstSectionImgPanel{
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    gap: 1rem;
}

.imgPanel_display{
    width: 13vh;
    height: 13vh;
    border-radius: 1rem;
}

#imageContainer1{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
/* #defaultColor{
    background-color: ;
} */
</style>
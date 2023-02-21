<template>

    <div class="color_container">
        <h2 class="titlePalette">Color Palette</h2>
        <div class="firstSectionPalette">
            <div class="color_display" id="firstColor" :style="{ backgroundColor: character.color}"></div>
            <div class="color_display" id="defaultColor" :style="{ border: '3px solid ' + character.colorLighter }"></div>
        </div>
        <div class="secondSectionPalette">
            <div class="color_display" id="secondColor" :style="{ backgroundColor: character.colorSecondary}"></div>
            <div class="color_display" id="thirdColor" :style="{ backgroundColor: character.colorTertiary}"></div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "ColorPalette",
    props: {
        character: Object,
    },
};
</script>


<style scoped>
.color_container{
    width: 30vh;
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
.titlePalette{
    text-decoration: underline;
}
.firstSectionPalette, .secondSectionPalette{
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    gap: 1rem;
}

.color_display{
    width: 10vh;
    height: 10vh;
    border-radius: 1rem;
}

/* #defaultColor{
    background-color: ;
} */
</style>
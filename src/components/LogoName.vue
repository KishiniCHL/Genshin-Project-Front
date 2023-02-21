<template>

    <div>
        <img :src="character.logoName" :alt="character.name + 'Logo Name'">
    </div>

</template>

<script>
    export default {
        name: "LogoName",
    props: {
        character: Object,
    },
};
</script>


<style scoped>

</style>
<template>
  <nav id="navbar">
    <!-- <div class="theSearch">
      <input type="text" placeholder="Search.." class="search">
    </div> -->

    <!-- <router-link to="/index">Hutao</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/index">index</router-link> -->
  </nav>
  <router-view/>
</template>

<style>


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}



#navbar{
  display: flex;
  justify-content: center;
}

</style>

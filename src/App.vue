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
  
}


#navbar{
  display: flex;
  justify-content: center;
}



@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

body{
  font-family: 'Pacifico', cursive;
}
</style>

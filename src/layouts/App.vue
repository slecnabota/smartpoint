<template>
    <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
@import "@/assets/sass/fonts/fonts.scss";
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #FFF;
  color: #0E1F4D;
  font-family: 'SFProDisplay Regular';
}
html, body{
  height: 100%;
}
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
}
img{
  display: block;
}
a{
  display: block;
  text-decoration: none;
  color: #0E1F4D;
  font-family: 'SFProDisplay SemiBold';
}
button{
  display: block;
  outline: none;
  background: transparent;
  border: none;
  cursor: pointer;
}
.delete{
  color: #DA483D;
  font-family: 'SFProDisplay SemiBold';
}
</style>

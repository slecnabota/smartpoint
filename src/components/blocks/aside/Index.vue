<template>
    <div class="aside">
      <links-block></links-block>
    </div>
</template>
<script>
import LinksBlock from "@/components/blocks/aside/Links.vue";

export default{
    name: 'AsideBlock',
  components: {LinksBlock},
}
</script>
<style scoped lang="scss">
.aside{
  position: fixed;
  top: 65px;
  left: 0;
  height: 100vh;
  width: 240px;
  background: #fff;
  border-right: 1px solid #EFF0F4;
}
</style>
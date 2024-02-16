<script>
export default {
  name: "coverBlock",
  data() {
    return {

    };
  },
  props: ['urlImage',]
}
</script>

<template>
  <div class="cover">
    <div class="cover__heading">Обложка</div>
    <img :src="urlImage" alt="" class="cover__image">
    <div class="cover__functions">
      <button class="cover__update">Обновить фото</button>
      <button class="cover__delete">Удалить фото</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cover{
  margin-bottom: 10px;
  &__heading{
    font-family: 'SFProDisplay SemiBold';
    font-size: 17px;
    line-height: 27px;
  }
  &__functions{
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    width: fit-content;
  }
  &__update{
    color: #235EE8;
    font-size: 15px;
    line-height: 22px;
    font-family: 'SFProDisplay SemiBold';
  }
  &__delete{
    color: #DA483D;
    font-size: 15px;
    line-height: 22px;
    font-family: 'SFProDisplay SemiBold';
  }
  &__image{
    margin: 10px 0;
    width: 350px;
    height: 200px;
  }
}
</style>
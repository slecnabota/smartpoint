<template>
  <div>
    <div class="service__heading">Услуги</div>
    <div class="service__wrapper">
      <div class="service__inner" v-for="(service, index) in services" :key="index">
        <router-link :to="`conference/edit/${index}`" class="service__card">
          <div class="service__image" :style="{ backgroundImage: 'url(' + service.image + ')' }"></div>
          <div class="service__name">{{ service.name }}</div>
        </router-link>
        <img src="@/assets/icons/photo_del.svg" alt="" class="service__delete">
      </div>
      <router-link v-if="services.length < 10" :to="{name: 'add'}" class="service__add">
        <img src="@/assets/icons/file.svg" alt="">
        + добавить услугу
      </router-link>
    </div>

  </div>
</template>

<script setup>
import { useMainStore } from '@/store/index.js';

const store = useMainStore();
const services = store.services;
</script>
<style scoped lang="scss">
.service{
  &__heading{
    font-size: 17px;
    line-height: 27px;
    font-family: 'SFProDisplay SemiBold';
    margin-bottom: 15px;
  }
  &__wrapper{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 20px;
    row-gap: 25px;
  }
  &__image{
    width: 130px;
    height: 130px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 15px;
  }
  &__inner{
    position: relative;
  }
  &__delete{
    cursor: pointer;
    position: absolute;
    top: -10px;
    right: 0;
  }
  &__add{
    background: #EFF0F4;
    width: 130px;
    height: 130px;
    border-radius: 15px;
    font-size: 13px;
    line-height: 20px;
    color: #75809E;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    & img{
      margin: 0 auto 5px;
    }
    & span{
      color: #75809E;
      font-family: 'SFProDisplay SemiBold';
      font-size: 13px;
      line-height: 20px;
      margin-top: 5px;
    }
  }
  &__name{
    margin-top: 10px;
    font-family: 'SFProDisplay SemiBold';
    font-size: 15px;
    line-height: 22px;
  }
}
</style>
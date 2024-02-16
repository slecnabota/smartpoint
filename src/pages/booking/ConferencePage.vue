<template>
  <div class="conference">
    <nav-back :link="getLink()"></nav-back>
    <div class="conference__top">
      <h2 class="conference__title">Конференц залы</h2>
      <button class="conference__del delete">Удалить</button>
    </div>
    <div class="conference__content">
      <cover-block :urlImage="conferenceImage"/>
      <div class="conference__form">
        <div class="conference__section">
          <form-input id="titleField" label="Название" :value="conferenceTitle" />
          <div class="conference__check">
            <input type="checkbox" name="" id="">
            <span>Материнская категория</span>
          </div>
        </div>
        <div class="conference__section conference__images">
          <service-list />
        </div>
      </div>
    </div>
    <button class="conference__save">Сохранить</button>
  </div>
</template>
<script>
import { useMainStore } from '@/store/index.js';
import NavBack from '@/components/ui/nav-back/Index.vue';
import coverBlock from "@/components/blocks/coverBlock/coverBlock.vue";
import formInput from "@/components/ui/form-input/formInput.vue";
import PhotoBlock from "@/components/blocks/photo-block/photoBlock.vue";
import ServiceList from "@/pages/booking/service-add/ServiceList.vue";
export default{
  name: 'ConferencePage',
  data(){
    return{
      conferenceImage: require('@/assets/img/conference.png'),
      conferenceTitle: "Конференц залы",
      photos: [],
    }
  },
  components:{ServiceList, PhotoBlock, NavBack, coverBlock, formInput },
  methods: {
    getLink() {
      const pagesStore = useMainStore();
      const currentPage = pagesStore.booking.find(page => page.name === this.$route.name);
      return currentPage ? currentPage.parent : null;
    },
  }
}
</script>
<style scoped lang="scss">
.conference{
  height: auto;
  &__del{
    font-size: 17px;
    line-height: 27px;
  }
  &__top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid #EFF0F4;
  }
  &__section{
    display: block;
    border-top: 1px solid #EFF0F4;
    padding: 25px 0;
    width: 60%;
    &:last-child{
      border-bottom: 1px solid #EFF0F4;
      padding-bottom: 50px;
    }
  }
  &__save{
    margin-left: auto;
    background: #00BE88;
    border-radius: 10px;
    padding: 15px 25px;
    font-size: 15px;
    line-height: 22px;
    font-family: 'SFProDisplay SemiBold';
    color: white;
    margin-top: 30px;
  }
  &__grid{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 15px;
  }
  &__add{
    display: block;
    color: #235EE8;
    font-size: 15px;
    line-height: 22px;
    font-family: 'SFProDisplay SemiBold';
    margin-top: 70px;
    text-align: left;
  }
  &__input, &__textarea{
    background: #EFF0F4;
    padding: 15px;
    border-radius: 10px;
    width: 100%;
    outline: none;
    border: none;
    color: #0E1F4D;
    font-family: 'SFProDisplay Regular';
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
  }
  &__textarea{
    resize: none;
    height: 100px;
  }
  &__check{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
    span {
      font-family: 'SFProDisplay Medium';
      font-size: 15px;
      line-height: 22px;
    }
  }
  &__label{
    color: #0E1F4D;
    font-size: 17px;
    line-height: 27px;
    font-family: 'SFProDisplay SemiBold';
    display: block;
    margin-bottom: 15px;
  }
  &__content, &__form{
    margin-top: 20px;
  }
  &__list{
    display: flex;
    flex-direction: column;
    gap: 15px;
    &-add{
      color: #235EE8;
      font-size: 15px;
      line-height: 22px;
      font-family: 'SFProDisplay SemiBold';
      margin-top: 20px;
    }
  }
}

</style>

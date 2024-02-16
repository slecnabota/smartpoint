<template>
  <div class="coworking">
    <nav-back :link="getLink()"></nav-back>
    <div class="coworking__top">
      <h2 class="coworking__title">Рабочее место в коворкинге</h2>
      <button class="coworking__del delete">Удалить</button>
    </div>
    <div class="coworking__content">
      <cover-block :urlImage="coworkingImage"/>
      <div class="coworking__form">
        <div class="coworking__section">
          <form-input id="titleField" label="Название" :value="coworkingTitle" />
        </div>
        <div class="coworking__section">
          <form-textarea id="descField" label="Описание" :value="coworkingDescription" />
        </div>
        <div class="coworking__section">
          <div class="coworking__field">
            <label for="featureField" class="coworking__label">Особенности</label>
            <div class="coworking__list">
              <form-input v-for="(feature, index) in additionalFeatures" :key="index" :value="feature" />
            </div>
            <button class="coworking__list-add">+ добавить особенность</button>
          </div>
        </div>
        <div class="coworking__section coworking__grid">
          <div v-for="(tariff, index) in tariffs" :key="index">
            <tariff-block :tariff="tariff" :index="index" @remove="removeTariff(index)"/>
          </div>
          <button class="coworking__add" @click="addTariff">+ добавить еще тариф</button>
        </div>
        <div class="coworking__section coworking__images">
          <photo-block heading="Фото" title="фото" />
        </div>
      </div>
    </div>
    <button class="coworking__save">Сохранить</button>
  </div>
</template>
<script>
import { useMainStore } from '@/store/index.js';
import NavBack from '@/components/ui/nav-back/Index.vue';
import coverBlock from "@/components/blocks/coverBlock/coverBlock.vue";
import formInput from "@/components/ui/form-input/formInput.vue";
import formTextarea from "@/components/ui/form-textarea/formTextarea.vue";
import TariffBlock from "@/components/blocks/tariff-block/TariffBlock.vue";
import PhotoBlock from "@/components/blocks/photo-block/photoBlock.vue";
export default{
  name: 'CoworkingPage',
  data(){
    return{
      coworkingImage: require('@/assets/img/coworking.png'),
      coworkingTitle: "Рабочее место в коворкинге",
      coworkingDescription: "Приобретая пакет, вы получаете доступ к зоне коворкинга, где можете занять любое свободное место",
      additionalFeatures: [
        'Доступ и услуги ресепшн 24/7', 'Безлимитный высокоскоростной интернет', 'Доступ в тренажерный зал и душевые 24/7', 'Доступ в кухни, лаундж-зоны, игровые зоны, библиотеку, телефонные будки'
      ],
      tariffs: [
        {
          name: 'Day Pass',
          description: 'Очень классный и выгодный тариф. Тут будет описание тарифа, зачем он и для кого он, чтобы лучше было понятно. Либо сюда ничего не писать',
          features: [''],
          price: 6000
        }
      ],
      photos: [],
    }
  },
  components:{PhotoBlock, TariffBlock, NavBack, coverBlock, formInput, formTextarea },
  methods: {
    getLink() {
      const pagesStore = useMainStore();
      const currentPage = pagesStore.booking.find(page => page.name === this.$route.name);
      return currentPage ? currentPage.parent : null;
    },
    addFeature() {
      this.additionalFeatures.push('');
    },
    addTariff() {
      this.tariffs.push({
        name: '',
        description: '',
        features: [],
        price: 0
      });
    },
    removeTariff(index) {
      this.tariffs.splice(index, 1);
    },
  }
}
</script>
<style scoped lang="scss">
.coworking{
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

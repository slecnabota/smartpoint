<template>
  <div class="new__service">
    <nav-back link="conference"/>
    <div class="service__top">
      <h2 class="service__title">Новая услуга</h2>
    </div>
    <cover-add  @change="onFileChange"/>
    <div class="service__section service__flex">
      <form-input v-model="service.name" label="Название" placeholder="Название" />
      <form-input type="Number" label="Макс. количество человек" placeholder="Макс. количество человек" />
    </div>
    <div class="service__section">
      <form-textarea id="descField" label="Описание" :placeholder="serviceDescription" />
    </div>
    <div class="service__section">
      <div class="service__field">
        <label for="featureField" class="service__label">Особенности</label>
        <div class="service__list">
          <form-input v-for="(feature, index) in additionalFeatures" :key="index" :value="feature" />
        </div>
        <button class="service__list-add">+ добавить особенность</button>
      </div>
    </div>
    <div class="service__section service__price">
      <form-input label="Стоимость" placeholder="Стоимость" />
      <custom-select
          :options="['В день', 'В Неделю', 'В Месяц', 'В Год']"
          :default="'В день'"
          class="select"
          @input="handleInput"/>
    </div>
    <div class="service__section service__images">
      <photo-block heading="Фото" title="фото" />
    </div>
    <button class="service__btn" @click="saveService">Сохранить</button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useMainStore } from '@/store/index.js';
  import { useRoute, useRouter } from 'vue-router';
  import NavBack from "@/components/ui/nav-back/Index.vue";
  import CoverAdd from "@/components/blocks/cover-add/CoverAdd.vue";
  import FormInput from "@/components/ui/form-input/formInput.vue";
  import formTextarea from "@/components/ui/form-textarea/formTextarea.vue";
  import PhotoBlock from "@/components/blocks/photo-block/photoBlock.vue";
  import CustomSelect from "@/components/ui/custom-select/CustomSelect.vue";
  import { alert } from 'vue';

  function handleInput(event) {
    alert(event);
  }
  const route = useRoute();
  const router = useRouter();
  const store = useMainStore();

  const service = ref({ name: '', image: '' });
  let serviceDescription = 'Описание услуги';
  let additionalFeatures = [];
  const serviceId = route.params.id ? Number(route.params.id) : null;
  if (serviceId !== null && store.services[serviceId]) {
  service.value = { ...store.services[serviceId] };
}

  function onImageUploaded(imageData) {
  service.value.image = imageData;
}
  function addFeature() {
    this.additionalFeatures.push('');
  }

  function saveService() {
  if (serviceId !== null) {
  store.updateService(serviceId, service.value);
} else {
  store.addService(service.value);
}
  router.push('/booking/conference');
}
</script>
<style scoped lang="scss">
.service{
  &__top{
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
  &__label{
    color: #0E1F4D;
    font-size: 17px;
    line-height: 27px;
    font-family: 'SFProDisplay SemiBold';
    display: block;
    margin-bottom: 15px;
  }
  &__flex{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
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
  &__price{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: flex-end;
  }
  &__btn{
    color: #75809E;
    font-size: 15px;
    line-height: 22px;
    font-family: 'SFProDisplay SemiBold';
    padding: 15px 25px;
    border-radius: 10px;
    background: #D4D8E1;
    margin-top: 250px;
    margin-left: auto;
  }
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  text-align: center;
}
</style>

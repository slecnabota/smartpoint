<template>
  <div class="tariff">
    <div class="tariff__top">
      <h4 class="tariff__heading">{{ 'Тариф ' + (index + 1)}}</h4>
      <button class="tariff__delete" @click="removeTariff">Удалить тариф</button>
    </div>
    <div class="tariff__content">
      <form-input label="Название" v-model="tariff.name"  label-class="small"/>
      <form-textarea label="Описание" v-model="tariff.description" label-class="small" />
      <div class="tariff__field">
        <label class="tariff__label small">Особенности</label>
        <div class="tariff__list">
          <form-input v-for="(feature, index) in tariff.features" :key="index" v-model="tariff.features[index]" placeholder="Добавьте особенность тарифа"></form-input>
        </div>
        <button class="tariff__list-add" @click="addFeature">+ добавить особенность</button>
      </div>
      <div class="tariff__inner">
        <div class="tariff__price">
          <label class="tariff__label">Стоимость, ₸</label>
          <form-input type="number" v-model="tariff.price" />
        </div>
        <div class="tariff__select">
          <custom-select
              :options="['В день', 'В Неделю', 'В Месяц', 'В Год']"
              :default="'В день'"
              class="select"
              @input="handleInput"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formInput from "@/components/ui/form-input/formInput.vue";
import formTextarea from "@/components/ui/form-textarea/formTextarea.vue";
import CustomSelect from "@/components/ui/custom-select/CustomSelect.vue";
import { alert } from 'vue';

function handleInput(event) {
  alert(event);
}
export default {
  name: 'TariffBlock',
  data(){
    return{

    }
  },
  props: ['tariff', 'index'],
  components:{
    CustomSelect,
    formInput, formTextarea
  },
  methods: {
    addFeature() {
      this.tariff.features.push('');
    },
    removeTariff() {
      this.$emit('remove', this.index);
    }
  }
}
</script>

<style scoped lang="scss">
.tariff{
  background: #F8F9FB;
  padding: 20px;
  border-radius: 20px;
  &__content{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    row-gap: 15px;
  }
  &__inner{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-items: flex-end;
  }
  &__label{
    display: block;
    font-size: 13px;
    line-height: 20px;
    font-family: 'SFProDisplay SemiBold';
    margin-bottom: 10px;
  }
  &__top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  &__delete{
    color: #DA483D;
    font-family: 'SFProDisplay SemiBold';
    font-size: 15px;
    line-height: 22px;
  }
  &__list{
    display: flex;
    flex-direction: column;
    gap: 10px;
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

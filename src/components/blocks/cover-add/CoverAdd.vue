<template>
  <div class="cover" :class="custom">
    <div class="cover__heading">Обложка</div>
    <button v-if="showAddButton" class="cover__add" @click="triggerFileInput">
      <slot name="photo" />
      + добавить
    </button>
    <input type="file" @change="onFileChange" ref="fileInput" style="display: none;">
    <div v-if="urlImage" class="cover__image" :style="{ backgroundImage: 'url(' + urlImage + ')' }"></div>
  </div>
</template>

<script>
export default {
  name: "CoverAdd",
  data() {
    return {
      urlImage: '',
      showAddButton: true,
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    onFileChange(e) {
      const file = e.target.files[0];
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        this.urlImage = e.target.result;
        this.showAddButton = false;
        this.$emit('image-uploaded', this.urlImage);
      };
      reader.readAsDataURL(file);
    },
  },
  props: ['custom']
}
</script>


<style scoped lang="scss">
.cover{
  padding: 20px 0 75px;
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
  &__update, &__delete{
    color: #235EE8;
    font-size: 15px;
    line-height: 22px;
    font-family: 'SFProDisplay SemiBold';
  }
  &__delete{
    color: #DA483D;
  }
  &__image{
    width: 350px;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    margin: 10px 0;
    border-radius: 15px;
  }
  &__add{
    background: #EFF0F4;
    border-radius: 15px;
    width: 350px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: #75809E;
    font-size: 13px;
    line-height: 20px;
    font-family: 'SFProDisplay SemiBold';
    img{
    }
  }
  &.rounded{
    & .cover__add, & .cover__image{
      border-radius: 100%;
      width: 150px;
      height: 150px;
    }
    & .cover__heading{
      display: none;
    }
  }

}
</style>

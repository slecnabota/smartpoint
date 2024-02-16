<template>
    <header class="header">
        <div class="header__wrapper">
            <div class="header__logo">
                <img :src="logo" alt="logo">
            </div>
           <div class="header__content">
             <div class="header__loop">
               <img :src="loop" alt="loop">
               <input type="text" placeholder="Поиск">
             </div>
             <div class="header__block">
               <div class="header__notification">
                 <img :src="notification" alt="notification">
               </div>
               <div class="header__user">
                 <img :src="user" alt="">
                 <arrow-down />
               </div>
             </div>
           </div>
           </div>
    </header>
</template>
<script>
import logo from '@/assets/icons/logo.svg';
import loop from '@/assets/icons/loop.svg';
import notification from '@/assets/icons/with_notification.svg';
import arrow_down from '@/assets/icons/arrow_down.svg';
import user from '@/assets/img/user.png';
import ArrowDown from "@/components/ui/ArrowDown.vue";
export default{
    name: 'HeaderBlock',
    data() {
      return {
        logo, loop, notification, arrow_down, user
      }
    },
  components:{
      ArrowDown
  }
}
</script>
<style scoped lang="scss">
.header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 10px;
  background: white;
  z-index: 5;
  border-bottom: 1px solid #EFF0F4;
  &__wrapper{
    display: grid;
    grid-template-columns: 230px calc(100% - 260px);
    column-gap: 30px;
  }
  &__content{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__loop{
    display: flex;
    align-items: center;
    background: #EFF0F4;
    padding: 10px 15px;
    column-gap: 10px;
    border-radius: 10px;
    input{
      font-size: 15px;
      line-height: 22px;
      background: transparent;
      border: none;
      width: 350px;
      font-family: 'SFProDisplay Regular';
      outline: none;
    }
  }
  &__block{
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
  &__user{
    display: flex;
    align-items: center;
    column-gap: 5px;
  }
    &__logo{
      width: 100%;
    }
}
</style>
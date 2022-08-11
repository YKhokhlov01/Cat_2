<template>
  <div class="cat-shop">
    <div class="pattern">
      <div class="shadow"></div>
    </div>
    <div class="desk">
      <!-- Header-->
      <div class="header">
        <span class="text-header">Ты сегодня покормил кота?</span>
      </div>
      <!--Карточки-->
      <div class="carts">
        <cart
          v-for="store in storecat"
          :key="store.id"
          v-bind:shopcat="store"
        />
      </div>

      <!---->
    </div>
  </div>
</template>

<script>
import cart from "./cart.vue";

export default {
  components: { cart },
  name: "CatFood",
  props: {},
  data() {
    return {
      storecat: [
        {
          id: 1,
          texthead: "Сказочное заморское яство",
          texttitle: "Нямушка",
          texttaste: "с фуа-гра",
          textsale: "10 порций мышь в подарок",
          textweight: "0,5",
          textweight0: "кг",
          textbuy: "купи.",
          textfooter: "Чего сидишь? Порадуй котэ, ",
          textfooterSelect: "Печень утки разварная с артишоками.",
          textfooterEnd: "Печалька, с фуа-гра закончился.",
        },
        {
          id: 2,
          texthead: "Сказочное заморское яство",
          texttitle: "Нямушка",
          texttaste: "с рыбой",
          textsale: "40 порций 2 мыши в подарок",
          textweight: "2",
          textweight0: "кг",
          textbuy: "купи.",
          textfooter: "Чего сидишь? Порадуй котэ, ",
          textfooterSelect: "Головы щучьи с чесноком да свежайшая сёмгушка.",
          textfooterEnd: "Печалька, с рыбой закончился.",
        },
        {
          id: 3,
          texthead: "Сказочное заморское яство",
          texttitle: "Нямушка",
          texttaste: "с курой",
          textsale: "100 порций 5 мышей в подарок заказчик доволен",
          textweight: "5",
          textweight0: "кг",
          textbuy: "купи.",
          textfooter: "Чего сидишь? Порадуй котэ, ",
          textfooterSelect: "Филе из цыплят с трюфелями в бульоне.",
          textfooterEnd: "Печалька, с курой закончился.",
        },
      ],
    };
  },
};
</script>

<style>
body {
  min-width: 360px;
  margin: 0;
  padding: 0;
  position: relative;
}
 body::before {
   background: url(../assets/PIC/Pattern.png) no-repeat center center;
    background-size: cover;
    content: ' ';
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    will-change: transform;
    z-index: -1;
    flex-grow: 0;
    flex-shrink: 0;
 }

 body::after {
   background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 5e-5) 49.88%,
    rgba(0, 0, 0, 0.5) 100%
  );
    background-size: cover;
    content: ' ';
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    will-change: transform;
    z-index: -1;
    flex-grow: 0;
    flex-shrink: 0;
 }
.cat-shop {
 
  box-sizing: border-box;
  border-color: transparent;
  margin: 0px auto;
  min-width: 360px;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: auto;
}

.header {
  margin: 0 auto;
  margin-top: 36px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
}
.text-header {
  font-family: "Exo2.0";
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
  text-shadow: 0px 1px 1px #000000;
}

.desk {
  box-sizing: border-box;
  border-color: transparent;
  margin: 0 auto;

  width: 1280px;
  position: absolute;
  display: block;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
}
.carts {
  display: flex;
  align-items: flex-start;
  align-content: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1px;
}

@media (max-width: 1280px) {
  .cat-shop {
    align-items: flex-start;
  }
  .desk {
    width: 800px;
  }
  .carts {
    justify-content: space-around;
  }
}
@media (max-width: 800px) {
  .cat-shop {
    align-items: flex-start;
  }
  .carts {
    justify-content: center;
  }
  .desk {
    width: 340px;
  }
}
</style>
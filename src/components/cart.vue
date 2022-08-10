<template>
  <!--Карточка-->
  <div class="background">
    <div class="wrapper">
      <div
        class="item"
        v-bind:class="[
          { selectCart: isSelect },
          { unfocus: isUnFocus },
          { frozen: isFrozen },
        ]"
      ></div>
      <div class="photoCat" v-bind:class="{ disabled: isFrozen }">
        <div class="cat1">
          <div class="cat"></div>
        </div>
      </div>
      <!--Граница-->
      <div
        class="border"
        v-bind:class="[
          { selectCart: isSelect },
          { unfocus: isUnFocus },
          { frozen: isFrozen },
        ]"
      ></div>
      <div
        class="border1"
        v-bind:class="[
          { selectCart: isSelect },
          { unfocus: isUnFocus },
          { frozen: isFrozen },
        ]"
      ></div>
    </div>
    <!--Oval-->
    <div
      class="oval"
      v-bind:class="[
        { selectCart: isSelect },
        { unfocus: isUnFocus },
        { frozen: isFrozen },
      ]"
    ></div>
    <!--1-Текстовый Блок-->
    <span class="text001head" v-bind:class="{ disabled: isFrozen }">
      {{ shopcat.texthead }}
    </span>
    <span class="text002title" v-bind:class="{ disabled: isFrozen }">
      {{ shopcat.texttitle }}
    </span>
    <span class="text003taste" v-bind:class="{ disabled: isFrozen }">
      {{ shopcat.texttaste }}
    </span>
    <span class="text004sale" v-bind:class="{ disabled: isFrozen }">
      {{ shopcat.textsale }}
    </span>
    <span class="text006weight" v-bind:class="{ disabled: isFrozen }">
      {{ shopcat.textweight }}
    </span>
    <span class="text007weight" v-bind:class="{ disabled: isFrozen }">
      <br />
      <span style="font-size: 21px">
        {{ shopcat.textweight0 }}
      </span>
    </span>

    <!-- Блок Footer: текст, линии -->
    <span class="text005footer" v-if="isFrozen"
      >{{ shopcat.textfooterEnd }}
    </span>
    <span class="text005footer" v-else-if="!isSelect">
      {{ shopcat.textfooter }}
      <span
        class="textbuy"
        v-on:click="isSelect = !isSelect"
        v-bind:class="{ act: isUnFocus }"
      >
        {{ shopcat.textbuy }}
      </span>
    </span>
    <span class="text005footer" v-else-if="isSelect">
      {{ shopcat.textfooterSelect }}
    </span>

    <div v-if="isFrozen"></div>
    <div
      class="line"
      v-bind:class="{ unfocus: isUnFocus }"
      v-else-if="!isSelect"
    >
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
      <div class="line4"></div>
      <div class="line5"></div>
      <div class="line6"></div>
    </div>
    <!--Блок отвечающий за 1) Выбор карточки 2) За состояние наведения-->
    <div
      class="push"
      v-if="!isFrozen"
      v-on:mouseout="enable"
      v-on:mouseover="mute()"
      v-on:click="isSelect = !isSelect"
    ></div>
    <!--Отключение 1 карточки-->
    <div class="disabled1" v-on:click="isFrozen = !isFrozen"></div>
    <!---->
  </div>
</template>

<script>
export default {
  name: "CatFood",
  props: {
    shopcat: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      isSelect: false,
      isUnFocus: false,
      isFrozen: false,     
    };
  },
  methods: {
    enable() {
      this.isUnFocus = true;
    },
    mute() {
      this.isUnFocus = false;
    },
  },
};
</script>

<style>
/*Базовые карточки*/
.background {
  display: flex;
  width: 320px;
  height: 509px;
  position: relative;
  box-sizing: border-box;
  margin-top:  24px;
  margin-bottom: 18px;
  
}

.push {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 5.7%;
  height: 480px;
  width: 320px;
  z-index: 1;
  border-radius: 60px 12px 12px 12px;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.wrapper {
  overflow: hidden;
  position: absolute;
  box-sizing: border-box;
  left: 0px;
  right: 0px;
  top: -1px;
  bottom: 0%;
  height: 480px;
  width: 320px;
  backface-visibility: hidden;
  border-radius: 12px 12px 12px 12px;
}

.item {
  box-sizing: border-box;
  position: relative;
  left: 0%;
  right: 0%;
  top: 48px;
  bottom: 5.7%;
  height: 432px;
  width: 318px;

  background: #f2f2f2;
  border-radius: 0 0 12px 12px;
  display: flex;
  align-items: flex-start;
}

.item:before {
  content: "";
  box-sizing: border-box;
  height: 88px;
  width: 88px;
  border-radius: 0px;
  position: absolute;
  left: 6.95px;
  top: -38.69px;
  background: #f2f2f2;
  border-left: 4px solid #1698d9;
  transform: rotate(45deg);
  backface-visibility: hidden;
}

.item:after {
  content: "";
  height: 49px;
  width: 274px;
  position: absolute;
  left: 43px;
  top: -48px;
  background: #f2f2f2;
}

.photoCat {
  height: 360px;
  width: 368px;
  left: -24px;
  top: 208px;
  border-radius: 0px;
  position: absolute;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
}

.cat1 {
  position: absolute;
  left: 24px;
  right: 0px;
  top: -3px;
  bottom: 0%;
  overflow: hidden;
  width: 318px;
}

.cat {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 3px;
  bottom: 0%;
  min-width: 100%;
  min-height: 100%;
  border-radius: 0px;
  outline: 3px solid #f2f2f2;
  outline-offset: -2px;
  box-sizing: border-box;
  background: url(../assets/PIC/Photo.png);
}

.border {
  box-sizing: border-box;
  position: absolute;
  bottom: 0%;
  height: 437px;
  width: 320px;
  background: transparent;
  border-radius: 0 0 12px 12px;
  border-right: 4px solid #1698d9;
  border-left: 4px solid #1698d9;
  border-bottom: 4px solid #1698d9;
  backface-visibility: hidden;
  overflow: hidden;
}

.border1 {
  box-sizing: border-box;
  background: transparent;
  height: 44px;
  width: 278px;
  position: absolute;
  left: 42px;
  top: 0px;
  right: 0%;
  bottom: 0%;
  border-radius: 0 12px 0 0;
  border-right: 4px solid #1698d9;
  border-top: 4px solid #1698d9;
  overflow: hidden;
}

.oval {
  height: 80px;
  width: 80px;
  left: 224px;
  top: 384px;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  background: #1698d9;
}

/* Карточка при выборе*/
.border1.selectCart {
  border-right: 4px solid #d91667;
  border-top: 4px solid #d91667;
}

.item.selectCart:before {
  border-left: 4px solid #d91667;
}

.border.selectCart {
  border-right: 4px solid #d91667;
  border-left: 4px solid #d91667;
  border-bottom: 4px solid #d91667;
}

.oval.selectCart {
  background: #d91667;
}

/*Карточка при потери фокуса*/
.item.unfocus:before {
  border-left: 4px solid #2ea8e6;
}

.border.unfocus {
  border-right: 4px solid #2ea8e6;
  border-left: 4px solid #2ea8e6;
  border-bottom: 4px solid #2ea8e6;
}

.border1.unfocus {
  border-right: 4px solid #2ea8e6;
  border-top: 4px solid #2ea8e6;
}

.line.unfocus div {
  background: #2ea8e6;
}

.oval.unfocus {
  background: #2ea8e6;
}

.textbuy.act {
  cursor: pointer;
  color: #2ea8e6;
}

/*Карточка при выборе и потери фокуса*/
.border.selectCart.unfocus {
  background: transparent;
  border-right: 4px solid #e52e7a;
  border-left: 4px solid #e52e7a;
  border-bottom: 4px solid #e52e7a;
}

.border1.selectCart.unfocus {
  border-right: 4px solid #e52e7a;
  border-top: 4px solid #e52e7a;
}

.item.selectCart.unfocus:before {
  border-left: 4px solid #e52e7a;
}

.oval.selectCart.unfocus {
  background: #e52e7a;
}

/* Текстовый блок*/
.textbuy {
  cursor: pointer;
  color: #1698d9;
}

.text001head {
  position: absolute;
  height: 19px;
  left: 15.94%;
  right: 2%;
  top: calc(50% - 19px / 2 - 224px);
  z-index: 1;
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Trebuchet MS";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #666666;
}

.text002title {
  position: absolute;
  height: 56px;
  left: 15%;
  right: 19.06%;
  top: calc(50% - 56px / 2 - 181.5px);
  z-index: 1;
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Trebuchet MS";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
}

.text003taste {
  position: absolute;
  height: 28px;
  left: 15.94%;
  right: 10%;
  top: calc(50% - 28px / 2 - 140.5px);
  z-index: 1;
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Trebuchet MS";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
}

.text004sale {
  position: absolute;
  height: 48px;
  left: 15.94%;
  right: 44.38%;
  top: calc(50% - 48px / 2 - 87.5px);
  z-index: 1;
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Trebuchet MS";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #666666;
}

.text005footer {
  position: absolute;
  height: 15px;
  left: 1.25%;
  right: 0.94%;
  top: calc(50% - 15px / 2 + 247px);
  font-family: "Trebuchet MS";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  text-align: center;
  color: #ffffff;
}

.text006weight {
  position: absolute;
  height: 22px;
  left: 73.28%;
  right: 7.97%;
  top: calc(50% - 22px / 2 + 160.5px);
  z-index: 1;
  margin-top: 0;
  margin-bottom: 0;
  font-family: "Trebuchet MS";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 22px;
  display: inline-block;
  align-items: flex-end;
  text-align: center;
  color: #ffffff;
}

.text007weight {
  position: absolute;
  height: 52px;
  left: 79.53%;
  right: 14.22%;
  top: calc(50% - 52px / 2 + 175.5px);
  margin-top: 0;
  margin-bottom: 0;
  z-index: 1;
  font-family: "Trebuchet MS";
  font-style: normal;
  font-weight: 400;
  font-size: 42px;
  line-height: 22px;
  text-align: center;
  color: #ffffff;
}

/* Underline*/
.line1 {
  height: 1px;
  width: 3px;
  left: 80%;
  right: 19.06%;
  top: 99.8%;
  bottom: 0%;
  border-radius: 0px;
  position: absolute;
  background: #1698d9;
}

.line2 {
  height: 1px;
  width: 3px;
  left: 78.44%;
  right: 20.62%;
  top: 99.8%;
  bottom: 0%;
  position: absolute;
  background: #1698d9;
}

.line3 {
  height: 1px;
  width: 3px;
  left: 76.88%;
  right: 22.19%;
  top: 99.8%;
  bottom: 0%;
  border-radius: 0px;
  position: absolute;
  background: #1698d9;
}

.line4 {
  height: 1px;
  width: 3px;
  left: 75.31%;
  right: 23.75%;
  top: 99.8%;
  bottom: 0%;
  border-radius: 0px;
  position: absolute;
  background: #1698d9;
}

.line5 {
  height: 1px;
  width: 3px;
  left: 73.75%;
  right: 25.31%;
  top: 99.8%;
  bottom: 0%;
  border-radius: 0px;
  position: absolute;
  background: #1698d9;
}

.line6 {
  height: 1px;
  width: 3px;
  left: 72.19%;
  right: 26.88%;
  top: 99.8%;
  bottom: 0%;
  border-radius: 0px;
  position: absolute;
  background: #1698d9;
}

/* Отключение карточки */
.disabled1 {
  width: 320px;
  height: 15px;
  position: absolute;
  box-sizing: border-box;
  bottom: -25px;
}

*.disabled {
  mix-blend-mode: normal;
  opacity: 0.5;
}

.oval.frozen {
  background: #b3b3b3 !important;
}

.border.frozen {
  border-right: 4px solid #b3b3b3 !important;
  border-left: 4px solid #b3b3b3 !important;
  border-bottom: 4px solid #b3b3b3 !important;
}

.border1.frozen {
  border-right: 4px solid #b3b3b3 !important;
  border-top: 4px solid #b3b3b3 !important;
}

.item.frozen:before {
  border-left: 4px solid #b3b3b3 !important;
}
</style>
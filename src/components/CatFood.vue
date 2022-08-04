<template>
    <div>
        <div class="cat-shop">
            <div class="pattern">
                <div class="shadow"></div>
            </div>
            <div class="desk">
                <!-- Header-->
                <div class="header">
                    <span class="text-header">Ты сегодня покормил кота?</span>
                </div>
                <!--Карточка №1-->
                <div class="background1">
                    <div class="wrapper">
                        <div class="item" v-bind:class="[
                        { selectCart: isSelect1 },
                        { unfocus: isUnFocus1 },                        
                        { frozen: isFrozen1 }]">
                        </div>
                        <div class="photoCat" v-bind:class="{ disabled: isFrozen1 }">
                            <div class="cat1">
                                <div class="cat"></div>
                            </div>
                        </div>
                        <div class="border" v-bind:class="[
                        { selectCart: isSelect1 },
                        { unfocus: isUnFocus1 },                        
                        { frozen: isFrozen1}]">
                        </div>
                        <div class="border1" v-bind:class="[
                        { selectCart: isSelect1 },
                        { unfocus: isUnFocus1 },                    
                        { frozen: isFrozen1}]">
                        </div>
                    </div>

                    <div class="oval" v-bind:class="[
                    { selectCart: isSelect1 },
                    { unfocus: isUnFocus1 },                   
                    { frozen: isFrozen1}]">
                    </div>
                    <!--1-Текстовый Блок-->
                    <span class="text001head" v-bind:class="{ disabled: isFrozen1 }">
                        {{ texthead }}
                    </span>
                    <span class="text002title" v-bind:class="{ disabled: isFrozen1 }">
                        {{ texttitle }}
                    </span>
                    <span class="text003taste" v-bind:class="{ disabled: isFrozen1 }">
                        {{ texttaste1 }}
                    </span>
                    <span class="text004sale" v-bind:class="{ disabled: isFrozen1 }">
                        {{ textsale1 }}
                    </span>
                    <span class="text006weight" v-bind:class="{ disabled: isFrozen1 }">
                        {{ textweight1 }}
                    </span>
                    <span class="text007weight" v-bind:class="{ disabled: isFrozen1 }">
                        <br />
                        <span style="font-size: 21px;">
                        {{ textweight0 }}
                        </span>
                    </span>

                    <!-- Блок Footer: текст, линии -->
                    <span class="text005footer" v-if="isFrozen1">{{ textfooter1End }}
                    </span>
                    <span class="text005footer" v-else-if="!isSelect1">
                        {{ textfooter }}
                        <span class="textbuy1" 
                        v-on:click="isSelect1 = !isSelect1"
                        v-bind:class="{ act: isUnFocus1 }">
                            {{ textbuy }}
                        </span>
                    </span>
                    <span class="text005footer" v-else-if="isSelect1">
                        {{ textfooter1Select }}
                    </span>

                    <div v-if="isFrozen1"></div>
                    <div class="line" 
                    v-bind:class="{ unfocus: isUnFocus1 }"
                     v-else-if="!isSelect1">
                        <div class="line1"></div>
                        <div class="line2"> </div>
                        <div class="line3"></div>
                        <div class="line4"></div>
                        <div class="line5"></div>
                        <div class="line6"></div>
                    </div>
                    <!--Блок отвечающий за 1) Выбор карточки 2) За состояние наведения-->
                    <div class="push1" 
                    v-if="!isFrozen1" 
                    v-on:mouseout="enable1"
                    v-on:mouseover="mute1()" 
                    v-on:click="isSelect1 = !isSelect1">
                    </div>
                    <!--Отключение 1 карточки-->
                    <div class="disabled1" v-on:click="isFrozen1 = !isFrozen1">
                    </div>
                </div>
                <!--Вторая карточка-->
                <div class="background2">
                    <div class="wrapper">
                        <div class="item"
                            v-bind:class="[
                                { selectCart: isSelect2 },
                                { unfocus: isUnFocus2 },                                
                                { frozen: isFrozen2 }]">
                        </div>
                        <div class="photoCat" v-bind:class="{ disabled: isFrozen2 }">
                            <div class="cat1">
                                <div class="cat"></div>
                            </div>
                        </div>
                        <div class="border"
                            v-bind:class="[
                                { selectCart: isSelect2 }, 
                                { unfocus: isUnFocus2 },                                
                                 { frozen: isFrozen2 }]">
                        </div>
                        <div class="border1"
                            v-bind:class="[
                                { selectCart: isSelect2 }, 
                                { unfocus: isUnFocus2 },                              
                                { frozen: isFrozen2 }]">
                        </div>
                    </div>
                    <div class="oval"
                        v-bind:class="[
                            { selectCart: isSelect2 }, 
                            { unfocus: isUnFocus2 },                             
                            { frozen: isFrozen2 }]">
                    </div>
                    <!--2-Текстовый Блок-->
                    <span class="text001head" v-bind:class="{ disabled: isFrozen2 }">
                        {{ texthead }}
                        </span>
                    <span class="text002title" v-bind:class="{ disabled: isFrozen2 }">
                        {{ texttitle }}
                        </span>
                    <span class="text003taste" v-bind:class="{ disabled: isFrozen2 }">
                        {{ texttaste2 }}
                        </span>
                    <span class="text004sale" v-bind:class="{ disabled: isFrozen2 }">
                        {{ textsale2 }}
                        </span>
                    
                    <span class="text006weight" v-bind:class="{ disabled: isFrozen2 }">
                        {{ textweight2 }}
                    </span>
                    <span class="text007weight" v-bind:class="{ disabled: isFrozen2 }">
                        <br /> 
                        <span style="font-size: 21px;">
                            {{ textweight0 }}
                        </span>
                    </span>
                    <!-- Блок Footer: текст, линии -->
                    <span class="text005footer" 
                        v-if="isFrozen2">
                        {{ textfooter2End }}
                    </span>
                    <span class="text005footer" 
                        v-else-if="!isSelect2">
                        {{ textfooter }}
                        <span class="textbuy2"
                            v-on:click="isSelect2 = !isSelect2"
                            v-bind:class="{ act: isUnFocus2 }">
                                {{ textbuy }}
                        </span>
                    </span>
                    <span class="text005footer" 
                        v-else-if="isSelect2">
                        {{ textfooter2Select }}
                    </span>

                    <div v-if="isFrozen2"></div>
                    <div class="line" 
                    v-bind:class="{ unfocus: isUnFocus2 }" 
                    v-else-if="!isSelect2">
                        <div class="line1"></div>
                        <div class="line2"> </div>
                        <div class="line3"></div>
                        <div class="line4"></div>
                        <div class="line5"></div>
                        <div class="line6"></div>
                    </div>
                    <!--Блок отвечающий за 1) Выбор карточки 2) За состояние наведения-->
                    <div class="push2" 
                    v-if="!isFrozen2" 
                    v-on:mouseout="enable2"
                    v-on:mouseover="mute2()" 
                    v-on:click="isSelect2 = !isSelect2"></div>
                    <!--Отключение 2 карточки-->
                    <div class="disabled2"
                    v-on:click="isFrozen2 = !isFrozen2">
                    </div>
                </div>
                <!--Карточка №3-->
                <div class="background3">
                    <div class="wrapper">
                        <div class="item"
                            v-bind:class="[
                                { selectCart: isSelect3 }, 
                                { unfocus: isUnFocus3 },                              
                                { frozen: isFrozen3 }]">
                        </div>
                        <div class="photoCat" v-bind:class="{ disabled: isFrozen3 }">
                            <div class="cat1">
                                <div class="cat"></div>
                            </div>
                        </div>
                        <div class="border"
                            v-bind:class="[
                                { selectCart: isSelect3 }, 
                                { unfocus: isUnFocus3 },                                
                                { frozen: isFrozen3 }]">
                        </div>
                        <div class="border1"
                            v-bind:class="[
                                { selectCart: isSelect3 }, 
                                { unfocus: isUnFocus3 },                                 
                                { frozen: isFrozen3 }]">
                        </div>
                    </div>
                    <div class="oval"
                        v-bind:class="[
                            { selectCart: isSelect3 }, 
                            { unfocus: isUnFocus3 },                             
                            { frozen: isFrozen3 }]">
                    </div>
                    <!--3-Текстовый блок-->
                    <span class="text001head" v-bind:class="{ disabled: isFrozen3 }">
                        {{ texthead }}
                    </span>
                    <span class="text002title" v-bind:class="{ disabled: isFrozen3 }">
                        {{ texttitle }}
                    </span>
                    <span class="text003taste" v-bind:class="{ disabled: isFrozen3 }">
                        {{ texttaste3 }}
                    </span>
                    <span class="text004sale" v-bind:class="{ disabled: isFrozen3 }">
                        {{ textsale3 }}
                    </span>
                    
                    <span class="text006weight" v-bind:class="{ disabled: isFrozen3 }">
                        {{ textweight3 }}
                    </span>
                    <span class="text007weight" v-bind:class="{ disabled: isFrozen3 }"
                        > <br /> 
                        <span style="font-size: 21px;">
                            {{ textweight0 }}
                        </span>
                    </span>
                    <!-- Блок Footer: текст, линии -->   
                    <span class="text005footer" v-if="isFrozen3">
                        {{ textfooter3End }}
                    </span>
                    <span class="text005footer" v-else-if="!isSelect3">
                        {{ textfooter }}
                        <span class="textbuy2"
                            v-on:click="isSelect3 = !isSelect3"
                            v-bind:class="{ act: isUnFocus3 }">
                                {{ textbuy }}
                            </span>
                    </span>
                    <span class="text005footer" v-else-if="isSelect3">
                        {{ textfooter3Select }}
                    </span>        
                    <div v-if="isFrozen3"></div>
                    <div class="line" 
                    v-bind:class="{ unfocus: isUnFocus3 }" 
                    v-else-if="!isSelect3">
                        <div class="line1"></div>
                        <div class="line2"> </div>
                        <div class="line3"></div>
                        <div class="line4"></div>
                        <div class="line5"></div>
                        <div class="line6"></div>
                    </div> 
                    <!--Блок отвечающий за 1) Выбор карточки 2) За состояние наведения-->
                    <div class="push3"
                    v-if="!isFrozen3" 
                    v-on:mouseout="enable3"
                    v-on:mouseover="mute3()"
                     v-on:click="isSelect3 = !isSelect3"></div>
                     <!--Отключение 3 карточки-->
                    <div class="disabled3" v-on:click="isFrozen3 = !isFrozen3"></div>
                </div>
                <!---->
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'CatFood',
    props: {},
    data() {
        return {
            texthead: 'Сказочное заморское яство',
            texttitle: 'Нямушка',
            texttaste1: 'с фуа-гра',
            texttaste2: 'с рыбой',
            texttaste3: 'с курой',
            textsale1: '10 порций мышь в подарок',
            textsale2: '40 порций 2 мыши в подарок',
            textsale3: '100 порций 5 мышей в подарок заказчик доволен',
            textweight1: '0,5',
            textweight2: '2',
            textweight3: '5',
            textweight0: 'кг',
            textbuy: 'купи.',
            textfooter: 'Чего сидишь? Порадуй котэ, ',
            textfooter1Select: 'Печень утки разварная с артишоками.',
            textfooter1End: 'Печалька, с фуа-гра закончился.',
            textfooter2Select: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            textfooter2End: 'Печалька, с рыбой закончился.',
            textfooter3Select: 'Филе из цыплят с трюфелями в бульоне.',
            textfooter3End: 'Печалька, с курой закончился.',
            isSelect1: false,
            isSelect2: false,
            isSelect3: false,
            isUnFocus1: false,
            isUnFocus2: false,
            isUnFocus3: false,
            isFrozen1: false,
            isFrozen2: false,
            isFrozen3: false,
           

        }
    },
    methods: {    
       
        enable1() {
            this.isUnFocus1 = true
        },
        mute1() {
            this.isUnFocus1 = false
        },
        
        enable2() {
            this.isUnFocus2 = true
        },
        mute2() {
            this.isUnFocus2 = false
        },        
        enable3() {
            this.isUnFocus3 = true
        },
        mute3() {
            this.isUnFocus3 = false
        },
    }
}
</script>

<style>

body{
    min-width: 370px;
}

.cat-shop {
    box-sizing: border-box;
    border-color: transparent;
    margin: 0px;
    min-height: 100vh;
    min-width: 100vw;
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    overflow: auto;
}

.pattern {
    height: 100vh;
    width: 100vw;
    left: 0px;
    top: 0px;
    object-fit: cover;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    background: url(../assets/PIC/Pattern.png);
}

.shadow {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    flex-grow: 0;
    flex-shrink: 0;
    left: 0px;
    top: 0px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 5e-05) 49.88%, rgba(0, 0, 0, 0.5) 100%);
}

.text-header {
    position: absolute;
    width: 1119px;
    height: 43px;
    left: 81px;
    top: 36px;
    font-family: 'Exo2.0';
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #FFFFFF;
    text-shadow: 0px 1px 1px #000000;
}

.desk {
    min-width: 1280px;
    min-height: 680px;
    margin: 0 auto;
    box-sizing: border-box;
    position: absolute;
}

/*Базовые карточки*/
.background1 {
    width: 320px;
    height: 509px;
    position: absolute;
    box-sizing: border-box;
    left: 80px;
    top: 104px;
}

.push1 {
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
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}

.background2 {
    width: 320px;
    height: 509px;
    position: absolute;
    box-sizing: border-box;
    left: 480px;
    top: 104px;
}

.push2 {
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
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}

.background3 {
    width: 320px;
    height: 509px;
    position: absolute;
    box-sizing: border-box;
    left: 880px;
    top: 104px;
}

.push3 {
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
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}

@media (max-width: 1280px) {

    .pattern {
        height: 100vh;
        width: 100vw;
        left: 0px;
        top: 0px;
        overflow: auto;
        min-height: 1229px;
        min-width: 768px;
        border-radius: 0px;
        border-radius: 0px;
        object-fit: cover;
        flex-grow: 0;
        flex-shrink: 0;
        box-sizing: border-box;
        background: url(../assets/PIC/Pattern.png)
    }

    .shadow {
        height: 100vh;
        width: 100vw;
        overflow: auto;
        min-height: 1229px;
        min-width: 768px;
        left: 0px;
        top: 0px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 5e-05) 49.88%, rgba(0, 0, 0, 0.5) 100%);
    }

    .text-header {
        position: absolute;
        width: 768px;
        height: 43px;
        left: 0px;
        top: 36px;
        font-family: 'Exo2.0';
        font-size: 36px;
        line-height: 42px;
        text-align: center;
        color: #FFFFFF;
        text-shadow: 0px 1px 1px #000000;
    }

    .desk {
        min-width: 768px;
        min-height: 1229px;
        margin: auto;
        box-sizing: border-box;
        position: absolute;
    }
    
    /*Базовые карточки*/
    .background1 {
        width: 320px;
        height: 509px;
        position: absolute;
        box-sizing: border-box;
        left: 14px;
        top: 104px;
    }

    .background2 {
        width: 320px;
        height: 509px;
        position: absolute;
        box-sizing: border-box;
        left: 414px;
        top: 104px;
    }

    .background3 {
        width: 320px;
        height: 509px;
        position: absolute;
        box-sizing: border-box;
        left: 214px;
        top: 673px;
    }
}
@media (max-width: 800px) {

    .pattern {
        height: 100%;
        width: 100%;
        left: 0px;
        top: 0px;
        overflow: auto;
        min-height: 1838px;
        min-width: 370px;
        border-radius: 0px;
        border-radius: 0px;
        object-fit: cover;
        flex-grow: 0;
        flex-shrink: 0;
        box-sizing: border-box;
        background: url(../assets/PIC/Pattern.png)
    }

    .shadow {
        width: 100%;
        height: 100%;
        overflow: auto;
        min-height: 1838px;
        min-width: 370px;
        left: 0px;
        top: 0px;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 5e-05) 49.88%, rgba(0, 0, 0, 0.5) 100%);
    }

    .text-header {
        position: absolute;
        width: 370px;
        height: 43px;
        left: 0px;
        top: 16px;
        font-family: 'Exo2.0';
        font-size: 36px;
        line-height: 42px;
        text-align: center;
        color: #FFFFFF;
        text-shadow: 0px 1px 1px #000000;
    }

    .desk {
        min-width: 370px;
        min-height: 1838px;
        margin: auto;
        box-sizing: border-box;
        position: absolute;
    }

    /*Базовые карточки*/
    .background1 {
        width: 320px;
        height: 509px;
        position: absolute;
        box-sizing: border-box;
        left: 6%;
        top: 140px;
    }

    .background2 {
        width: 320px;
        height: 509px;
        position: absolute;
        box-sizing: border-box;
        left: 6%;
        top: 707px;
    }

    .background3 {
        width: 320px;
        height: 509px;
        position: absolute;
        box-sizing: border-box;
        left: 6%;
        top: 1276px;
    }
}



.wrapper {
    overflow: hidden;
    position: absolute;
    box-sizing: border-box;
    left: 0px;
    right: 0px;
    top: 0px;
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
    
    background: #F2F2F2;
    border-radius: 0 0 12px 12px;
    display: flex;
    align-items: flex-start;
}

.item:before {
    content: '';
    box-sizing: border-box;
    height: 88px;
    width: 88px;
    border-radius: 0px;
    position: absolute;
    left: 6.95px;
    top: -38.69px;
    background: #F2F2F2;
    border-left: 4px solid #1698D9;
    transform: rotate(45deg);
    backface-visibility: hidden;
}

.item:after {
    content: '';
    height: 49px;
    width: 274px;
    position: absolute;
    left: 43px;
    top: -48px;
    background: #F2F2F2;  
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
    outline: 3px solid #F2F2F2;
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
    border-right: 4px solid #1698D9;
    border-left: 4px solid #1698D9;
    border-bottom: 4px solid #1698D9;
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
    border-right: 4px solid #1698D9;
    border-top: 4px solid #1698D9;  
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
    background: #1698D9;
}

/* Карточка при выборе*/
.border1.selectCart {
    border-right: 4px solid #D91667;
    border-top: 4px solid #D91667;
}

.item.selectCart:before {
    border-left: 4px solid #D91667;
}

.border.selectCart {
    border-right: 4px solid #D91667;
    border-left: 4px solid #D91667;
    border-bottom: 4px solid #D91667;
}

.oval.selectCart {
    background: #D91667;
}

/*Карточка при потери фокуса*/
.item.unfocus:before {
    border-left: 4px solid #2EA8E6;
}

.border.unfocus {
    border-right: 4px solid #2EA8E6;
    border-left: 4px solid #2EA8E6;
    border-bottom: 4px solid #2EA8E6;
}

.border1.unfocus {
    border-right: 4px solid #2EA8E6;
    border-top: 4px solid #2EA8E6;
}

.line.unfocus div {
    background: #2EA8E6
}

.oval.unfocus {
    background: #2EA8E6
}

.textbuy1.act {
    cursor: pointer;
    color: #2EA8E6
}

.textbuy2.act {
    cursor: pointer;
    color: #2EA8E6
}

.textbuy3.act {
    cursor: pointer;
    color: #2EA8E6
}

/*Карточка при выборе и потери фокуса*/
.border.selectCart.unfocus {
    background: transparent;
    border-right: 4px solid #E52E7A;
    border-left: 4px solid #E52E7A;
    border-bottom: 4px solid #E52E7A;
}

.border1.selectCart.unfocus {
    border-right: 4px solid #E52E7A;
    border-top: 4px solid #E52E7A;
}

.item.selectCart.unfocus:before {
    border-left: 4px solid #E52E7A;
}

.oval.selectCart.unfocus {
    background: #E52E7A;
}

/* Текстовый блок*/
.textbuy1 {
    cursor: pointer;
    color: #1698D9;
}

.textbuy2 {
    cursor: pointer;
    color: #1698D9;
}

.textbuy3 {
    cursor: pointer;
    color: #1698D9;
}

.text001head {
    position: absolute;
    height: 19px;
    left: 15.94%;
    right: 20%;
    top: calc(50% - 19px/2 - 224px);
    z-index: 1;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Trebuchet MS';
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
    top: calc(50% - 56px/2 - 181.5px);
    z-index: 1;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Trebuchet MS';
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
    right: 49.06%;
    top: calc(50% - 28px/2 - 140.5px);
    z-index: 1;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Trebuchet MS';
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
    top: calc(50% - 48px/2 - 87.5px);
    z-index: 1;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Trebuchet MS';
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
    top: calc(50% - 15px/2 + 247px);
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    color: #FFFFFF;
}

.text006weight {
    position: absolute;
    height: 22px;
    left: 73.28%;
    right: 7.97%;
    top: calc(50% - 22px/2 + 160.5px);
    z-index: 1;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 22px;
    display: inline-block;
    align-items: flex-end;
    text-align: center;
    color: #FFFFFF;
}

.text007weight {
    position: absolute;
    height: 52px;
    left: 79.53%;
    right: 14.22%;
    top: calc(50% - 52px/2 + 175.5px);
    margin-top: 0;
    margin-bottom: 0;
    z-index: 1;
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
}

.textbuy {
    cursor: pointer;
    color: #1698D9;
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
    background: #1698D9;
}

.line2 {
    height: 1px;
    width: 3px;
    left: 78.44%;
    right: 20.62%;
    top: 99.8%;
    bottom: 0%;
    position: absolute;
    background: #1698D9;
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
    background: #1698D9;
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
    background: #1698D9;
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
    background: #1698D9;
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
    background: #1698D9;
}

/* Отключение карточки */
.disabled1 {
    width: 320px;
    height: 20px;
    position: absolute;
    box-sizing: border-box;
    top: -28px
}

.disabled2 {
    width: 320px;
    height: 20px;
    position: absolute;
    box-sizing: border-box;
    top: -28px
}

.disabled3 {
    width: 320px;
    height: 20px;
    position: absolute;
    box-sizing: border-box;
    top: -28px
}

*.disabled {
    mix-blend-mode: normal;
    opacity: 0.5;
}

.oval.frozen{
    background: #B3B3B3 !important;
}

.border.frozen {
    border-right: 4px solid #B3B3B3 !important;
    border-left: 4px solid #B3B3B3 !important;
    border-bottom: 4px solid #B3B3B3 !important;
}

.border1.frozen {
    border-right: 4px solid #B3B3B3 !important;
    border-top: 4px solid #B3B3B3 !important;
}

.item.frozen:before {
    border-left: 4px solid #B3B3B3 !important;
}
</style>
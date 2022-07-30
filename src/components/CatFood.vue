<template>
    <div>
        <div class="cat-shop">
            <div class="pattern">
                <div class="shadow"></div>
            </div>
            <div class="desk">
                <!---->
                <div class="header">
                    <span class="text-header">Ты сегодня покормил кота?</span>
                </div>
                <!---->
                <div class="background">
                    <div class="wrapper">
                        <div class="item"
                            v-bind:class="[{ active: isActive1 }, { active1: !isActive4 }, { active3: isActive7 }]">
                        </div>
                        <div class="photoCat" v-bind:class="{ disabled: isActive7 }">
                            <div class="cat"></div>
                        </div>
                        <div class="border"
                            v-bind:class="[{ active: isActive1 }, { active1: !isActive4 }, { active3: isActive7 }]">
                        </div>
                    </div>


                    <div class="oval"
                        v-bind:class="[{ active: isActive1 }, { active1: !isActive4 }, { active3: isActive7 }]">
                    </div>
                    <!---->
                    <span class="text001head" v-bind:class="{ disabled: isActive7 }">{{ texthead }}</span>
                    <span class="text002title" v-bind:class="{ disabled: isActive7 }">{{ texttitle }}</span>
                    <span class="text003taste" v-bind:class="{ disabled: isActive7 }">{{ texttaste1 }}</span>
                    <span class="text004sale" v-bind:class="{ disabled: isActive7 }">{{ textsale1 }}</span>
                    <span class="text005footer13" v-if="isActive7">{{ textfooter1End }}</span>
                    <span class="text005footer" v-else-if="!isActive1">{{ textfooter }}<span class="textbuy1"
                            v-on:click="isActive1 = !isActive1" style="color:#1698D9">купи.</span></span>
                    <span class="text005footer12" v-else-if="isActive1">{{ textfooter1Select }}</span>
                    <span class="text006weight" v-bind:class="{ disabled: isActive7 }">{{ textweight1 }}</span>
                    <span class="text007weight" v-bind:class="{ disabled: isActive7 }"> <br /> <span
                            style="font-size: 21px;">{{ textweight0 }}</span></span>
                    <div v-if="isActive7"></div>
                    <div v-else-if="!isActive1">
                        <div class="line1"></div>
                        <div class="line2"> </div>
                        <div class="line3"></div>
                        <div class="line4"></div>
                        <div class="line5"></div>
                        <div class="line6"></div>
                    </div>
                    <div class="push1" v-if="!isActive7" v-on:mouseout="isActive4 = !isActive4"
                        v-on:mouseover="isActive4 = !isActive4" v-on:click="isActive1 = !isActive1"></div>
                    <div class="disabled1" v-on:click="isActive7 = !isActive7"></div>
                </div>
                <!---->
                <div class="background2">
                    <div class="wrapper">
                        <div class="item"
                            v-bind:class="[{ active: isActive2 }, { active1: !isActive5 }, { active3: isActive8 }]">
                        </div>
                        <div class="photoCat" v-bind:class="{ disabled: isActive8 }">
                            <div class="cat"></div>
                        </div>
                        <div class="border"
                            v-bind:class="[{ active: isActive2 }, { active1: !isActive5 }, { active3: isActive8 }]">
                        </div>
                    </div>
                    <div class="oval"
                        v-bind:class="[{ active: isActive2 }, { active1: !isActive5 }, { active3: isActive8 }]">
                    </div>
                    <!---->
                    <span class="text001head" v-bind:class="{ disabled: isActive8 }">{{ texthead }}</span>
                    <span class="text002title" v-bind:class="{ disabled: isActive8 }">{{ texttitle }}</span>
                    <span class="text003taste2" v-bind:class="{ disabled: isActive8 }">{{ texttaste2 }}</span>
                    <span class="text004sale2" v-bind:class="{ disabled: isActive8 }">{{ textsale2 }}</span>
                    <span class="text005footer23" v-if="isActive8">{{ textfooter2End }}</span>
                    <span class="text005footer" v-else-if="!isActive2">{{ textfooter }}<span class="textbuy2"
                            v-on:click="isActive2 = !isActive2" style="color:#1698D9">купи.</span></span>
                    <span class="text005footer22" v-else-if="isActive2">{{ textfooter2Select }}</span>
                    <span class="text006weight2" v-bind:class="{ disabled: isActive8 }">{{ textweight2 }}</span>
                    <span class="text007weight" v-bind:class="{ disabled: isActive8 }"> <br /> <span
                            style="font-size: 21px;">{{ textweight0 }}</span></span>
                    <div v-if="isActive8"></div>
                    <div v-else-if="!isActive2">
                        <div class="line1"></div>
                        <div class="line2"> </div>
                        <div class="line3"></div>
                        <div class="line4"></div>
                        <div class="line5"></div>
                        <div class="line6"></div>
                    </div>
                    <div class="push2" v-if="!isActive8" v-on:mouseout="isActive5 = !isActive5"
                        v-on:mouseover="isActive5 = !isActive5" v-on:click="isActive2 = !isActive2"></div>
                    <div class="disabled2" v-on:click="isActive8 = !isActive8"></div>
                </div>
                <!---->
                <div class="background3">
                    <div class="wrapper">
                        <div class="item"
                            v-bind:class="[{ active: isActive3 }, { active1: !isActive6 }, { active3: isActive9 }]">
                        </div>
                        <div class="photoCat" v-bind:class="{ disabled: isActive9 }">
                            <div class="cat"></div>
                        </div>
                        <div class="border"
                            v-bind:class="[{ active: isActive3 }, { active1: !isActive6 }, { active3: isActive9 }]">
                        </div>
                    </div>
                    <div class="oval"
                        v-bind:class="[{ active: isActive3 }, { active1: !isActive6 }, { active3: isActive9 }]">
                    </div>
                    <!---->
                    <span class="text001head" v-bind:class="{ disabled: isActive9 }">{{ texthead }}</span>
                    <span class="text002title" v-bind:class="{ disabled: isActive9 }">{{ texttitle }}</span>
                    <span class="text003taste3" v-bind:class="{ disabled: isActive9 }">{{ texttaste3 }}</span>
                    <span class="text004sale3" v-bind:class="{ disabled: isActive9 }">{{ textsale3 }}</span>
                    <span class="text005footer33" v-if="isActive9">{{ textfooter3End }}</span>
                    <span class="text005footer" v-else-if="!isActive3">{{ textfooter }}<span class="textbuy2"
                            v-on:click="isActive3 = !isActive3" style="color:#1698D9">купи.</span></span>
                    <span class="text005footer32" v-else-if="isActive3">{{ textfooter3Select }}</span>
                    <span class="text006weight3" v-bind:class="{ disabled: isActive9 }">{{ textweight3 }}</span>
                    <span class="text007weight" v-bind:class="{ disabled: isActive9 }"> <br /> <span
                            style="font-size: 21px;">{{ textweight0 }}</span></span>
                    <div v-if="isActive9"></div>
                    <div v-else-if="!isActive3">
                        <div class="line1"></div>
                        <div class="line2"> </div>
                        <div class="line3"></div>
                        <div class="line4"></div>
                        <div class="line5"></div>
                        <div class="line6"></div>
                    </div>
                    <div class="push3" v-if="!isActive9" v-on:mouseout="isActive6 = !isActive6"
                        v-on:mouseover="isActive6 = !isActive6" v-on:click="isActive3 = !isActive3"></div>
                    <div class="disabled3" v-on:click="isActive9 = !isActive9"></div>

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
            textfooter: 'Чего сидишь? Порадуй котэ, ',
            textfooter1Select: 'Печень утки разварная с артишоками.',
            textfooter1End: 'Печалька, с фуа-гра закончился.',
            textfooter2Select: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            textfooter2End: 'Печалька, с рыбой закончился.',
            textfooter3Select: 'Филе из цыплят с трюфелями в бульоне.',
            textfooter3End: 'Печалька, с курой закончился.',
            isActive1: false,
            isActive2: false,
            isActive3: false,
            isActive4: false,
            isActive5: false,
            isActive6: false,
            isActive7: false,
            isActive8: false,
            isActive9: false,
        }
    },

}
</script>

<style scoped>
.cat-shop {
    box-sizing: border-box;
    border-color: transparent;
    margin: 0px;
    background-color: rgba(255, 255, 255, 1);
    height: 100vh;
    width: 100vw;
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
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    object-fit: cover;
    flex-grow: 0;
    flex-shrink: 0;
    box-sizing: border-box;
    background: url(../assets/PIC/Pattern.png);
}

.shadow {
    width: 100%;
    height: 100%;
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
    margin: auto;
    box-sizing: border-box;
    position: absolute;
}

/*Базовые карточки*/
.background {
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
    z-index: 3;
    border-radius: 60px 12px 12px 12px;
    cursor: pointer;
}

.push1.disabled1 {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 5.7%;
    height: 480px;
    width: 320px;
    z-index: 3;
    border-radius: 60px 12px 12px 12px;
    cursor: pointer;
    border-color: transparent;
    mix-blend-mode: normal;
    opacity: 0.5;
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
    z-index: 3;
    border-radius: 60px 12px 12px 12px;
    cursor: pointer;
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
    top: 104px;
    bottom: 0%;
    height: 480px;
    width: 320px;
    z-index: 3;
    border-radius: 60px 12px 12px 12px;
    cursor: pointer;
}

@media (max-width: 1200px) {
    .cat-shop {
        margin: 0;
        box-sizing: border-box;
        border-color: transparent;
        margin: 0px auto;
       
        height: 100vh;
        width: 100vw;
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        align-items: start;
        align-content: center;
        justify-content: center;
        overflow: auto;
    }

    .pattern {
        height: 100%;
        width: 100%;
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
        width: 100%;
        height: 100%;
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
        margin: auto;
        box-sizing: border-box;
        position: absolute;
    }

    /*Базовые карточки*/
    .background {
        width: 320px;
        height: 509px;
        position: absolute;
        box-sizing: border-box;
        left: 24px;
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
        z-index: 3;
        border-radius: 60px 12px 12px 12px;
        cursor: pointer;
    }

    .push1.disabled1 {
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 5.7%;
        height: 480px;
        width: 320px;
        z-index: 3;
        border-radius: 60px 12px 12px 12px;
        cursor: pointer;
        border-color: transparent;
        mix-blend-mode: normal;
        opacity: 0.5;
    }

    .background2 {
        width: 320px;
        height: 509px;
        position: absolute;
        box-sizing: border-box;
        left: 424px;
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
        z-index: 3;
        border-radius: 60px 12px 12px 12px;
        cursor: pointer;
    }

    .background3 {
        width: 320px;
        height: 509px;
        position: absolute;
        box-sizing: border-box;
        left: 224px;
        top: 673px;
    }

    .push3 {
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 5.7%;
        height: 480px;
        width: 320px;
        z-index: 3;
        border-radius: 60px 12px 12px 12px;
        cursor: pointer;
    }

}


@media (max-width: 768px) {
    .cat-shop {
        margin: 0;
        box-sizing: border-box;
        border-color: transparent;
        margin: 0px auto;
        background-color: rgba(255, 255, 255, 1);
        height: 100vh;
        width: 100vw;
        position: relative;
        top: 0;
        left: 0;
        display: flex;
        align-items: start;
        align-content: center;
        justify-content: center;
        overflow: auto;
    }

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
        min-width:370px;
        margin: auto;
        box-sizing: border-box;
        position: absolute;
    }

    /*Базовые карточки*/
    .background {
        width: 320px;
        height: 509px;
        position: absolute;
        box-sizing: border-box;
        left: 25px;
        top: 140px;
    }

    .push1 {
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 5.7%;
        height: 480px;
        width: 320px;
        z-index: 3;
        border-radius: 60px 12px 12px 12px;
        cursor: pointer;
    }

    .push1.disabled1 {
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 5.7%;
        height: 480px;
        width: 320px;
        z-index: 3;
        border-radius: 60px 12px 12px 12px;
        cursor: pointer;
        border-color: transparent;
        mix-blend-mode: normal;
        opacity: 0.5;
    }

    .background2 {
        width: 320px;
        height: 509px;
        position: absolute;
        box-sizing: border-box;
        left: 25px;
        top: 707px;
    }

    .push2 {
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 5.7%;
        height: 480px;
        width: 320px;
        z-index: 3;
        border-radius: 60px 12px 12px 12px;
        cursor: pointer;
    }

    .background3 {
        width: 320px;
        height: 509px;
        position: absolute;
        box-sizing: border-box;
        left: 25px;
        top: 1276px;
    }

    .push3 {
        position: absolute;
        left: 0%;
        right: 0%;
        top: 0%;
        bottom: 5.7%;
        height: 480px;
        width: 320px;
        z-index: 3;
        border-radius: 60px 12px 12px 12px;
        cursor: pointer;
    }

}
.wrapper {
    overflow: hidden;
    position: absolute;
    left:0px;
    right: 0px;
    top: 2px;
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
    width: 316px;
    background: #F2F2F2;
    border-radius: 0 0 12px 12px;
    
    display: flex;
    align-items: flex-start;
    backface-visibility: hidden;
    padding-left: 2px;
    padding-right: 2px;
    padding-bottom: 2px;
}

.item:before {
    content: '';
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
    height: 46px;
    width: 273px;
    border-radius: 0px;
    position: absolute;
    left: 43px;
    top: -48px;
    background: #F2F2F2;
    border-radius: 0 12px 0 0;
    border-right: 4px solid #1698D9;
    border-top: 4px solid #1698D9;
   backface-visibility: hidden;
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
    backface-visibility: hidden;
    box-sizing: border-box;
}

.cat {
    position: absolute;
    left: 24px;
    right: 0px;
    top: 0%;
    bottom: 0%;
    min-width: 100%;
    min-height: 100%;
    border-radius: 0px;
    object-fit: cover;
    backface-visibility: hidden;
    outline: 3px solid #F2F2F2;
    outline-offset: -2px;

    box-sizing: border-box;
    background: url(../assets/PIC/Photo.png);

}

.border {
    box-sizing: border-box;
    position: absolute;
    left: 0%;
    right: 0%;
    bottom: 0%;
    height: 436px;
    width: 320px;
    background: transparent;
    border-radius: 0 0 12px 12px;
    border-right: 4px solid #1698D9;
    border-left: 4px solid #1698D9;
    border-bottom: 4px solid #1698D9;
    backface-visibility: hidden;
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
.item.active::after {
    border-right: 4px solid #D91667;
    border-top: 4px solid #D91667;
}

.item.active:before {
    border-left: 4px solid #D91667;
}

.border.active {
    border-right: 4px solid #D91667;
    border-left: 4px solid #D91667;
    border-bottom: 4px solid #D91667;
}

.oval.active {
    background: #D91667;
}

/*Карточка при потери фокуса*/
.item.active1:before {
    border-left: 4px solid #2EA8E6;
}

.border.active1 {
    border-right: 4px solid #2EA8E6;
    border-left: 4px solid #2EA8E6;
    border-bottom: 4px solid #2EA8E6;
}

.item.active1::after {
    border-right: 4px solid #2EA8E6;
    border-top: 4px solid #2EA8E6;
}

.oval.active1 {
    background: #2EA8E6;
}

/*Карточка при выборе и потери фокуса*/
.border.active.active1 {
    background: transparent;
    border-right: 4px solid #E52E7A;
    border-left: 4px solid #E52E7A;
    border-bottom: 4px solid #E52E7A;
}

.item.active.active1::after {
    border-right: 4px solid #E52E7A;
    border-top: 4px solid #E52E7A;
}

.item.active.active1:before {
    border-left: 4px solid #E52E7A;
}

.oval.active.active1 {
    background: #E52E7A;
}

/* Текстовый блок*/
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

.text003taste2 {
    position: absolute;
    height: 28px;
    left: 15.94%;
    right: 54.69%;
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

.text003taste3 {
    position: absolute;
    height: 28px;
    left: 15.94%;
    right: 56.56%;
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
    height: 32px;
    left: 15.94%;
    right: 50.94%;
    top: calc(50% - 32px/2 - 95.5px);
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

.text004sale2 {
    position: absolute;
    height: 32px;
    left: 15.94%;
    right: 46.88%;
    top: calc(50% - 32px/2 - 95.5px);
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

.text004sale3 {
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
    left: 17.34%;
    right: 17.34%;
    top: calc(50% - 15px/2 + 247px);
    z-index: 1;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    color: #FFFFFF;
}

.text005footer12 {
    position: absolute;
    height: 15px;
    left: 13.75%;
    right: 13.75%;
    top: calc(50% - 15px/2 + 247px);
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    color: #FFFFFF;
}

.text005footer22 {
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

.text005footer32 {
    position: absolute;
    height: 15px;
    left: 11.25%;
    right: 10.94%;
    top: calc(50% - 15px/2 + 247px);
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    color: #FFFFFF;
}

.text005footer13 {
    position: absolute;
    height: 15px;
    left: 18.75%;
    right: 18.44%;
    top: calc(50% - 15px/2 + 247px);
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    color: #FFFF66;
}

.text005footer23 {
    position: absolute;
    height: 15px;
    left: 20.31%;
    right: 20%;
    top: calc(50% - 15px/2 + 247px);
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    text-align: center;
    color: #FFFF66;
}

.text005footer33 {
    position: absolute;
    height: 15px;
    left: 20.62%;
    right: 20.62%;
    top: calc(50% - 15px/2 + 247px);
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    /* identical to box height */

    text-align: center;

    color: #FFFF66;
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
    display: flex;
    align-items: flex-end;
    text-align: center;
    color: #FFFFFF;
}

.text006weight2 {
    position: absolute;
    height: 22px;
    left: 79.22%;
    right: 13.59%;
    top: calc(50% - 22px/2 + 160.5px);
    z-index: 1;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 22px;
    display: flex;
    align-items: flex-end;
    text-align: center;
    color: #FFFFFF;
}

.text006weight3 {
    position: absolute;
    height: 22px;
    left: 79.22%;
    right: 13.59%;
    top: calc(50% - 22px/2 + 160.5px);
    z-index: 1;
    margin-top: 0;
    margin-bottom: 0;
    font-family: 'Trebuchet MS';
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 22px;
    display: flex;
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

.oval.active3 {
    background: #B3B3B3;
}

.border.active3 {
    border-right: 4px solid #B3B3B3;
    border-left: 4px solid #B3B3B3;
    border-bottom: 4px solid #B3B3B3;
}

.item.active3:after {
    border-right: 4px solid #B3B3B3;
    border-top: 4px solid #B3B3B3;
}

.item.active3:before {
    border-left: 4px solid #B3B3B3;
}
</style>
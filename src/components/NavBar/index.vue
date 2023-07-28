<template>
    <header class="header-wrap">

        <a href="javascript:void(0);">
            <img class="logo" src="https://comiru.jp/img/index/logo.png?f4a6d84d" alt="" />
        </a>

        <h1 class="header-title">塾専用コミュニケーション &amp;業務管理システム</h1>
        
        <nav class="header-nav-wrap" :class="{'active': isOpenMenuWrap}">
            <ul class="header-nav header-nav-lg">
                <li v-for="(item, index) in navList" class="header-nav-link" :class="[item?.subList ? 'header-more-link' : 'sub-link']" @mouseenter.prevent="handlePCTabMouseenter" @mouseleave.prevent="handlePCTabMouseleave">
                    <a href="javascript:void(0);">
                        {{ item.name }}
                        <template v-if="item?.subList">
                            <i class="icon-arrow-bottom arrow-pc"></i>
                        </template>
                    </a>
                    <div v-if="item?.subList" class="header-menu-wrap"  style="height:0; overflow: hidden;">
                        <ul class="header-menu">
                            <li class="header-menu-more-link" v-for="(subItem, subIndex) in item?.subList"  @mouseenter.prevent="handlePCSubTabMouseenter" @mouseleave.prevent="handlePCSubTabMouseleave">
                                <a href="javascript:void(0);" class="link-title">
                                    {{ subItem.name }}
                                    <i v-if="subItem?.subList" class="fa fa-caret-right arrow-sub" aria-hidden="true"></i>
                                </a>
                                <div class="header-menu-sub-wrap hidden" v-if="subItem?.subList">
                                    <ul class="header-menu-sub">
                                        <li v-for="inItem in subItem?.subList">
                                            <a href="jascript:viod(0)" class="link-title">
                                                {{ inItem.name }}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            
            <ul class="header-nav header-nav-md" :class="[isOpenMenuSlide? 'w-half': 'w_full']">
                <li v-for="(item, index) in navList" class="header-nav-link" :class="{'header-more-link': item?.subList, 'active': searchIdx[0]?.index == index}">
                    <a href="javascript:void(0);" @click="handleTabClick($event,0,index, !!item?.subList)">
                        {{ item.name }}
                        <template v-if="item?.subList">
                            <i class="fa fa-chevron-right arrow"></i>
                        </template>
                    </a>
                    <div class="header-menu-wrap" v-if="item?.subList">
                        <ul class="sub header-menu">
                            <li class="header-menu-more-link" v-for="(subItem, subIndex) in item?.subList" :class="[searchIdx[1]?.index == subIndex ? 'active' : '']">
                                <a href="javascript:void(0);" class="link-title" @click="handleTabClick($event, 1,subIndex, !!subItem?.subList)">
                                    {{ subItem.name }}
                                    <i v-if="subItem?.subList" class="fa fa-caret-right arrow-sub" aria-hidden="true"></i>
                                </a>
                                <div  class="header-menu-sub-wrap" :style="{'height':curHeight, 'overflow': 'hidden'}">
                                    <ul class="header-menu-sub">
                                        <li v-for="inItem in subItem?.subList">
                                            <a href="jascript:viod(0)" class="link-title">
                                                {{ inItem.name }}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
        <div class="login-btn">
            <a href="/jascript:viod(0)">塾講師ログイン<i class="fa fa-chevron-right arrow"></i></a>
        </div>
        <div class="menu-box hidden">
            <label id="hamburger-1" class="hamburger"  :class="{'active': isOpenMenuIcon}" @click="handleMenuBoxClick">
                <span class="line line-01"></span>
                <span class="line line-02"></span>
                <span class="line line-03"></span>
            </label>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref, watch, watchEffect} from 'vue';
import {slideUp, slideDown, slideLeft} from '../../utils/animat';

const searchIdx:any = ref([])
const navList:any = ref([
    {
        name: 'サービス',
        subList: [{
            name: 'サービス一覧'
        },{
            name: 'ComiruBASIC'
        },{
            name: 'ComiruFREE'
        },{
            name: 'ComiruAir'
        },{
            name: 'ComiruHR'
        }]
    },{
        name: 'プラン一覧',
    },{
        name: '基本機能   ',
        subList: [{
            name: 'Comiru',
            subList: [{
                name: '専用アプリ＆LINE連携',
            },{
                name: '指導報告書',
            },{
                name: 'お知らせ',
            },{
                name: '入退室管理',
            },{
                name: '請求書',
            },{
                name: '口座振替',
            },{
                name: 'カード決済',
            },{
                name: '成績管理',
            },{
                name: '座席管理',
            },{
                name: '見込顧客獲得',
            },{
                name: 'Web申込み',
            },{
                name: '口コミ収集＆掲載',
            }]
        },{
            name: 'ComiruAir',
            subList: [{
                name: 'オンライン授業支援'
            }]
        },{
            name: 'ComiruHR',
            subList: [{
                name: '講師人事労務管理'
            }]
        }]
    },{
        name: '導入事例',
    },{
        name: 'お役立ち資料',
    },{
        name: 'セミナー一覧',
    },{
        name: 'ヘルプ',
        subList: [{
            name: 'Comiru',
            subList: [{
                name: '導入までの流れ'
            },{
                name: 'よくある質問'
            }]
        },{
            name: 'ComiruAir',
            subList: [{
                name: 'よくある質問'
            }]
        },{
            name: 'お問い合わせ'
        }]
    }
])

const curHeight = ref<number>(0);
const contentTop = ref<number>(0); 
const contentLeft = ref<number>(0);
const isOpenMenuIcon = ref<boolean>(false);
const isOpenMenuSlide = ref<boolean>(false);
const contentHeight = ref<number | null>(null);

//h5右上角菜单图标点击
const handleMenuBoxClick = () => {
    isOpenMenuIcon.value = !isOpenMenuIcon.value;
}

//h5点击菜单监听
const handleTabClick = (e:Event, level:number, index: number, isSubList: boolean) => {
    let count = 0;

    if(level == 1 && !isSubList) return 

    if(level == 0){
        isOpenMenuSlide.value = isSubList ? true : false;
    }
    
    if(searchIdx.value[level]?.index == index) count++;
    searchIdx.value[level] ={index, count}

    if(searchIdx.value.length-1 > level) {
        searchIdx.value = searchIdx.value.filter((_: number, idx: number) => idx <= level)
    }

    if(searchIdx.value[1]?.index == index){
        const curDom:any = e.currentTarget!;
        const subDom = curDom.parentNode.querySelector('.header-menu-sub-wrap');
        
        if(searchIdx.value[1].count){
            slideUp.call(subDom, 300, {
                contentHeight: contentHeight.value,
                contentTop: contentTop.value
            });
            searchIdx.value.pop();
        } else {
            const subMenuDom = curDom.parentNode.querySelector('.header-menu-sub');
            const curSubDom = curDom.parentNode.parentNode.querySelector('.header-menu-more-link.active .header-menu-sub-wrap');
            slideUp.call(curSubDom, 300, {
                contentHeight: contentHeight.value,
                // contentTop: contentTop.value
            });
            contentHeight.value = subMenuDom.offsetHeight;
            slideDown.call(subDom, 300, {
                curHeight: curHeight.value,
                contentHeight: contentHeight.value,
                // contentTop: contentTop.value,
            });
        }
    }
}


//pc菜单移入
const handlePCTabMouseenter = (e:Event) => {
    contentLeft.value = 0
    contentTop.value = 20;

    const curDom: any = e.currentTarget!;
    const menuDom = curDom.querySelector('.header-menu-wrap')
    const subMenuDom = curDom.querySelector('.header-menu')
    if(!subMenuDom?.style || !menuDom?.style) return
    
    menuDom.style.marginLeft = '-8px'
    contentHeight.value = subMenuDom.offsetHeight;
    slideDown.call(menuDom, 200, {
        curHeight: curHeight.value,
        contentHeight: contentHeight.value,
        contentTop: contentTop.value,
    });
}

//pc菜单移出
const handlePCTabMouseleave = (e:Event) => { 
    const curDom: any = e.currentTarget!;
    const menuDom = curDom.querySelector('.header-menu-wrap')
    const subDom = curDom.querySelector('.header-menu')
    if(!subDom?.style) return

    contentTop.value = 20;
    contentHeight.value = subDom.offsetHeight;

    slideUp.call(menuDom, 200, {
        contentHeight: contentHeight.value,
        contentTop: contentTop.value
    });
}

//pc菜单移入
const handlePCSubTabMouseenter = (e:Event) => {
    const curDom: any = e.currentTarget!;
    const menuDom = curDom.parentNode.parentNode
    const subDom = curDom.querySelector('.header-menu-sub-wrap')
    if(!subDom?.style || !menuDom?.style) return
    
    menuDom.style.overflow = 'unset'
    subDom.style.display = 'block'
    subDom.style.left = curDom.clientWidth+'px'

    const docWidth = document.documentElement.clientWidth;
    const childLeft = subDom.getBoundingClientRect().right;

    const len = docWidth - childLeft;
    if (childLeft > docWidth && len < contentLeft.value) {
        contentLeft.value =  len
        slideLeft.call(menuDom, 200, {
            contentLeft: contentLeft.value,
            contentTop: contentTop.value,
        });
    }
}

//pc菜单移出
const handlePCSubTabMouseleave = (e:Event) => {
    const curDom: any = e.currentTarget!;
    const menuDom = curDom.parentNode.parentNode;
    const subDom = curDom.querySelector('.header-menu-sub-wrap')
    if(!subDom?.style || !menuDom?.style) return
    
    menuDom.style.overflow = 'hidden';
    subDom.style.display = 'none';
}

//h5菜单弹窗是否显示
const isOpenMenuWrap = ref(false)
watch(isOpenMenuIcon,(value, oldValue)=> {
    isOpenMenuWrap.value = value;
})

//h5 菜单监听
const isOpenMenu = ref<boolean>(false)
watchEffect(() => {
    if(!isOpenMenuIcon.value){
        isOpenMenu.value = false;
        isOpenMenuSlide.value = false;
        contentTop.value= 0
        curHeight.value = 0
        searchIdx.value = []
    }
})
</script>

<style scoped lang="less">

.header-wrap {
    position: fixed;
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    width: 100%;
    height: 80px;
    z-index: 9999;
    background: #FFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    .logo {
        margin-left: 30px;
        width: 172px;
        height: 40px;
    }
    .header-title {
        font-weight: bold;
        margin-left: 16px;
        line-height: 20px;
        color: #493b32;
        font-size: 14px;
        width: 170px
    }
    .login-btn {
        height: 32px;
        padding: 0 10px;
        border-radius: 16px;
        background-color: #fddc3e;
        text-align: center;
        line-height: 32px;
        font-weight: bold;
        a {
            text-decoration: none;
            color: #493b32
        }
    }

    .arrow {
        display: none
    }

    .arrow-pc {
        transition: 0.3s transform ease-in-out;
        display: block;
        width: 12px !important;
        height: 8px !important;
        overflow: hidden;
        position: absolute;
        right: -20px;
        top: 50%;
        margin-top: -4px;
        &:before, &:after {
            content: "";
            position: absolute;
            display: block;
            width: 6px;
            border: 1px solid #493b32;
            border-radius: 1px;
            top: 4px
        }
        &:before {
            transform: rotate(45deg);
            left: 0px
        }

        &:after {
            transform: rotate(-45deg);
            left: 4px
        }
    }

    .header-more-link {
        a {
            position: relative
        }

        &:hover {
            .arrow-pc {
                transform: rotate(-180deg)
            }
            .arrow-pc:before,
            .arrow-pc:after {
                border: 1px solid inherit
            }
        }
    }
    .header-menu {
        li {
            line-height: 2.5em;
            padding: 0 2em;
            a {
                font-weight: normal;
            }
        }
    }
    .header-nav-wrap {
        text-align: right;
        flex: 1
    }
    .header-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
        justify-content: flex-end;
        align-items: flex-end;
        &-link {
            margin-right: 24px;
            cursor: pointer;
            padding: 5px 8px;
            border-radius: 4px;
            transition: background-color .3s;
            &:hover {
                background-color: #ececee
            }
            a {
                color: #493b32;
                text-decoration: none;
                font-weight: bold
            }
        }
    }
}


@media screen and (min-width: 800px) {
    .header-wrap {
        .header-nav-link a:hover {
            color: inherit
        }
        .header-more-link {
            padding-right: 28px;
        }
    }

    .header-menu {
        li:hover {
            background-color: #16BFB7;
            &>a {
                color: #fff;
            }
        }
    }

    .header-menu-wrap {
        box-sizing: content-box;
        position: absolute;
        margin-left: -8px
    }

    .header-menu {
        background-color: #fff;
        border-radius: 8px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(26, 26, 26, 0.2);
        padding: 4px 0;
        &>li {
            position: relative;
            .arrow-sub {
                margin-left: 8px
            }
            &>.header-menu-sub-wrap {
                padding-left: 2px;
                position: absolute;
                top: 0;
                box-sizing: content-box;
                .header-menu-sub {
                    background-color: #fff;
                    border-radius: 8px;
                    text-align: center;
                    box-shadow: 0 2px 8px rgba(26, 26, 26, 0.2);
                    padding: 4px 0;
                    overflow: hidden;
                    box-sizing: content-box;
                    &>li {
                        white-space: nowrap
                    }
                }
            }
        }
    }
    .header-nav-md {
        display: none !important
    }
}

@media screen and (max-width: 1410px) and (min-width: 1301px) {
    .header-nav-link {
        margin-right: 8px
    }
}

@media screen and (max-width: 1300px) and (min-width: 800px) {
    .header-nav-wrap .sub-link {
        display: none
    }
}

@media screen and (max-width: 1050px) and (min-width: 800px) {
    .header-nav-link {
        margin-right: 8px
    }
}

@media screen and (max-width: 990px) {
    .header-wrap .header-title {
        display: none;
    }
}

@media screen and (max-width: 800px) {
    .header-nav-wrap {
        overflow: scroll;
        position: absolute;
        top: 44px;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #FFF;
        padding-bottom: 44px;
        visibility: hidden;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        &.active {
            visibility: visible
        }
    }
    .header-wrap {
        height: 44px;
        padding: 0 16px;
        .header-nav-link:hover>a {
            color: #493b32 !important;
        }
        .logo {
            width: 86px;
            height: 20px;
        }
        .login-btn {
            display: none;
        }
        .header-nav-link {
            display: block;
            padding: 0;
            color: #493b32;
            border-bottom: 0.5px solid #D0D0D5;
            text-align: left;
            font-weight: bold;
            margin-right: 0;
            border-radius: 0;
            a {
                display: block;
                position: relative;
                font-size: 1.1rem;
                line-height: 28px;
                padding: 16px;
            }
        }
        .arrow {
            position: absolute;
            display: inline-block;
            top: 20px;
            right: 8px
        }
        .arrow-pc {
            display: none
        }
        .header-nav {
            width: 100%
        }
        
        .header-nav {
            display: block;
            text-align: left;
            padding-bottom: 75px;
            &.w-half {
                width: 50%;
                transition: 0.3s width ease-in-out
            }
            &.w_full {
                width: 100%;
                transition: 0.3s width ease-in-out
            }
        }
        .header-more-link {
            .header-menu {
                box-shadow: none;
                position: relative;
                padding: 0;
                overflow-y: auto;
                box-sizing: content-box;
                visibility: hidden;
                height: 0;
                transition: 0.3s opacity ease-in-out;
                opacity: 0;
                width: 0;
                background: #F8F8F8;
                &>li {
                    line-height: 28px;
                    padding: 0;
                    font-weight: normal;
                    border-bottom: 0.5px solid #D0D0D5;
                    &>a {
                        padding: 16px;
                        font-size: 1.1rem !important;
                        font-weight: normal !important;
                        &>.arrow-sub {
                            font-size: 22px;
                            transition: all .3s
                        }
                    }
                }
                .header-menu-more-link {
                    &.active {
                        &>a {
                            background-color: #16BFB7;
                            color: #fff !important
                        }
                        .arrow-sub {
                            transform: rotate(90deg)
                        }
                    }
                }
                a {
                    font-size: 14px !important;
                    padding: 0 37px 0 0;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    align-self: stretch;
                    align-items: center
                }
            }
            .header-menu-sub-wrap .header-menu-sub>li {
                padding: 8px 16px;
                font-size: 14px;
                line-height: 24px;
                border-bottom: 0.5px solid #D0D0D5;
                &:first-child {
                    border-top: 0.5px solid #D0D0D5
                }
                &:last-child {
                    border-bottom: none
                }
                &>a {
                    padding-right: 0;
                    font-weight: normal !important
                }
            }
            &.active {
                background-color: #F8F8F8;
                &:hover {
                    background-color: #F8F8F8
                }
                .header-menu {
                    width: 50%;
                    height: calc(100% - 44px);
                    opacity: 1;
                    visibility: visible;
                    position: absolute;
                    right: 0;
                    top: 0;
                    a {
                        color: #493b32 !important
                    }
                    .icon-arrow-right:before, .icon-arrow-right:after {
                        border: 1px solid #493b32 !important
                    }
                }
            }
        }
    }
    .header-nav-lg {
        display: none !important
    }
    .menu-box {
        position: absolute;
        display: block;
        margin: auto;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        float: left;
        overflow: hidden;
        z-index: 100;
        width: 60px;
        &:before {
            content: " ";
            display: block;
            padding-top: 100%
        }
        .hamburger {
            width: 24px;
            cursor: pointer;
            &.active {
                .line {
                    display: block;
                    width: 100%;
                    height: 4px;
                    border-radius: 4px;
                    background-color: #493B32;
                    margin: 4px 0;
                    transition: all 0.3s ease-in-out;
                    &:nth-child(1) {
                        transform: translateY(8px) rotate(45deg)
                    }
                    &:nth-child(2) {
                        opacity: 0
                    }
                    &:nth-child(3) {
                        transform: translateY(-8px) rotate(-45deg)
                    }
                }
            }
            .line {
                display: block;
                width: 100%;
                height: 4px;
                border-radius: 4px;
                background-color: #493B32;
                margin: 4px 0;
                transition: all 0.3s ease-in-out;
                &:first-child {
                    margin: 0 0 4px 0
                }
                &:last-child {
                    margin: 4px 0 0 0
                }
            }
        }
    }
    .link-title {
        padding: 1em 0
    }
}
</style>
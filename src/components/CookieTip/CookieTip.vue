<template>
    <div class="cookie-tips"  v-if="show">
        <div class="cookie-tips-body">
            当社では、(i)ウェブサイトでの体験を向上させるためにパーソナライズされたコンテンツや広告を提供すること、及び(ii)当社ウェブサイトを改善させるためにウェブサイトのトラフィックを分析することを目的に、サードパーティーから提供を受ける
            Cookie を含めた Cookie を使用及び第三者へ提供しています。これにより当社は詳細情報の保存、関心のあるサービスの表示及び継続が可能です。当社の Cookie の利用目的、Cookie
            設定の手続の詳細については、当社の「<a href="javascript:viod(0)" target="_blank">Cookie
                ポリシー</a>」をご覧ください。個人情報の取扱いについては、「<a href="javascript:viod(0)" target="_blank">PRIVACY
                POLICY</a>」をご覧ください。</div>
        <div class="btn-accept" @click="handleClose">OK</div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    show: {
        type: Boolean,
        default: false
    },
})
const emit = defineEmits(['close'])


const handleClose = () => {
    emit('close', false)
}
</script>
<style scoped>
.cookie-tips {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .7);
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    z-index: 80;
    padding: 16px
}

.cookie-tips .cookie-tips-body {
    max-width: 850px;
    margin-right: 12px;
    font-size: 12px;
    line-height: 22px;
    color: #fff
}

.cookie-tips .cookie-tips-body>a {
    color: #fff;
    text-decoration: underline;
    cursor: pointer
}

.cookie-tips .cookie-tips-body>a:hover {
    color: #fff;
    opacity: .6
}

.cookie-tips .btn-accept {
    border-radius: 4px;
    color: #000;
    background-color: #fff;
    height: 40px;
    padding: 0 28px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 22px;
    cursor: pointer
}

.cookie-tips .btn-accept:hover {
    opacity: .8
}

@media only screen and (max-width:800px) {
    .cookie-tips {
        z-index: 100
    }

    .cookie-tips .cookie-tips-body {
        margin-right: 12px;
        font-size: 10px;
        line-height: 14px
    }

    .cookie-tips .cookie-tips-body>a {
        font-size: 10px
    }

    .cookie-tips .btn-accept {
        height: 32px;
        font-size: 12px;
        line-height: 18px
    }
}
</style>
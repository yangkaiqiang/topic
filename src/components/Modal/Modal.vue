<template>
    <div v-if="show" class="dialog-mask flex items-center justify-center">
        <div class="dialog-box">
            <div class="dialog-header">{{title}}</div>
            <slot><p class="dialog-content">{{message}}</p></slot>
            <div class="dialog-footer">
                <button v-if="type == 1" class="button dialog-confirm" @click="handleLogin">登录</button>
                <button class="button dialog-confirm" @click="handleClose">关闭</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    show: {
        type: Boolean,
        default: false
    },
    title: {
        type: String,
        default: ''
    },
    message: {
        type: String,
        default: ''
    },
    type: {
        type: Number,
        default: 1
    },
})
const emit = defineEmits(['close', 'go'])


const handleClose = () => {
    emit('close', false)
}

const handleLogin= () => {
    emit('go', '/login')
}
</script>

<style scoped>
.dialog-mask {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}
.dialog-box {
    background: #fff;
    width: 300px;
    border-radius: 10px;
    overflow: hidden;
}

.dialog-header {
    padding-top: 20px;
    font-weight: bold;
    text-align: center;
}

.dialog-content {
    padding: 5px 20px 20px 20px;
    font-size: 12px;
    text-align: center;
    white-space: pre-wrap;
    word-wrap: break-word;
}

.dialog-footer {
    display: flex;
    overflow: hidden;
    user-select: none;
    border-top: 1px solid #EBEDF0;
}

.button {
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    line-height: 40px;
    background-color: #fff;
}
.button:active {
    background-color: #f2f3f5;
}
.dialog-confirm {
    color: #409EFF;
}
</style>
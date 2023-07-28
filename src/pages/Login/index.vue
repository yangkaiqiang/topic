<template>
    <NavBar />
    <div class="container">

        <div class="title-wrap">
            <h2 class="title">その他の登録</h2>
        </div>

        <div class="login-methods-wrap">
            <div class="login-methods-item">
                <p class="mb-3">
                    メールアドレス（共通アカウント）で<br>
                    ログインする場合はこちら
                </p>
                <a class="inline-block px-7 rounded leading-8 bg-yellow-btn-400 hover:bg-yellow-btn-700 text-center cursor-pointer text-black text-sm font-semibold whitespace-nowrap"
                    href="javascript:void(0)">共通アカウントログイン</a>
            </div>
            <div class="login-methods-item">
                <p class="mb-3">
                    Comiruをすでに友達に追加済みの方<br>
                    以下のアイコンをクリックしてログイン
                </p>
                <a style="display:inline-block;width:36px;height:36px;" href="javascript:void(0)">
                    <img class=" inline-block w-full" src="https://comiru.jp/img/btn_base.png" />
                </a>
            </div>
            <div class="login-methods-item">
                <p class="mb-3">
                    ComiruをLINEではじめてお使いの方<br>
                    以下のアイコンをクリックして友だち追加
                </p>
                <a href="javascript:void(0)" class="inline-block w-[116px]">
                    <img alt="友だち追加" src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" />
                </a>
            </div>
        </div>


        <div class="title-wrap">
            <h2 class="title">生徒・保護者ログイン<span class="sub-title">（スクールポパー）</span></h2>
        </div>


        <p>生徒番号とパスワードを入力してログインしてください。<span class="mark">生徒番号</span>や<span class="mark">パスワード</span>がわからない場合は、教室にお問い合わせください。
        </p>


        <form class="form-wrap">
            <div class="my-2.5">
                <label>
                    <input type="radio" name="type" checked="true" /> 保護者
                </label>
                <label>
                    <input type="radio" name="type" /> 生徒
                </label>
            </div>
            <div class="my-2.5">
                <label for="user_no" class="form-label">生徒番号</label>
                <input type="text" id="user_no" class="form-control" />
            </div>
            <div class="my-2.5">
                <label for="password" class="form-label">パスワード</label>
                <input type="password" id="password" class="form-control" />
            </div>
            <div class="my-2.5">
                <label for="show-password" class="form-label">
                    <input type="checkbox" id="show-password">
                    パスワードを表示
                </label>
            </div>
            <div class="my-5">
                <button type="submit" class="form-btn" @click="handleLogin">ログインする</button>
            </div>
        </form>
        <div>
            <li><a class="underline text-cyan-400  visited:text-cyan-400 hover:text-cyan-700 active:text-cyan-700"
                    href="javascript:void(0)">パスワードを忘れた方はこちら</a></li>
        </div>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import NavBar from '../../components/NavBar/index.vue'


const router = useRouter();

const handleLogin = () => {
    router.replace('/');
}
</script>

<style scoped>
.container {
    padding: 40px 20px 100px 230px;
    transition: .5s padding-left;
    @apply m-auto max-w-[1100px] pl-5 font-extralight bg-white;
}

.title-wrap {
    @apply mt-10 max-[800px]:mt-5;
}

.title {
    @apply pb-2.5 mb-5 text-[25px] border-b border-solid border-[#eee] pt-5 font-semibold;
}

.sub-title {
    @apply text-[80%];
}

.mark {
    @apply text-[larger] text-black;
}

.login-methods-wrap {
    @apply flex justify-between items-stretch flex-wrap
}

.login-methods-item {
    @apply flex-1 border-r-2 border-solid border-[#b4a094] px-2 text-center last:border-r-0 max-[800px]:w-full max-[800px]:flex-auto max-[800px]:border-r-0 max-[800px]:py-4 max-[800px]:px-2 max-[800px]:border-b-2;
}
</style>
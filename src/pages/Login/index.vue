<template>
    <NavBar />
    <div class="container">
        <section class="main-content-container no-nav">
            <div class="page-header">
                <h1>その他の登録</h1>
            </div>
            <div class="login-methods">
                <div class="login-methods-item text-center">
                    <p>
                        メールアドレス（共通アカウント）で<br>
                        ログインする場合はこちら
                    </p>
                    <a class="cr-button" href="javascript:void(0)">共通アカウントログイン</a>
                </div>
                <div class="login-methods-item text-center">
                    <p>
                        Comiruをすでに友達に追加済みの方<br>
                        以下のアイコンをクリックしてログイン
                    </p>
                    <a style="display:inline-block;width:36px;height:36px;" href="javascript:void(0)">
                        <img class=" inline-block w-full" src="https://comiru.jp/img/btn_base.png" />
                    </a>
                </div>
                <div class="login-methods-item text-center">
                    <p>
                        ComiruをLINEではじめてお使いの方<br>
                        以下のアイコンをクリックして友だち追加
                    </p>
                    <a href="javascript:void(0)" class=" inline-block w-[116px]"><img height="36" border="0" alt="友だち追加"
                            src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png" /></a>
                </div>
            </div>
            <div class="page-header">
                <h1>生徒・保護者ログイン<span>（スクールポパー）</span></h1>
            </div>
            <p>生徒番号とパスワードを入力してログインしてください。<span style="font-size:larger;color:#000000;">生徒番号</span>や<span
                    style="font-size:larger;color:#000000;">パスワード</span>がわからない場合は、教室にお問い合わせください。</p>
            <form method="POST">
                <ul class="errors">
                    <li>生徒番号 を入力してください</li>
                    <li>パスワード を入力してください</li>
                </ul>
                <div class="form-group">
                    <label><input type="radio" name="role" value="parent" checked="true"> 保護者</label>
                    <label><input type="radio" name="role" value="subStudent"> 生徒</label>
                </div>
                <div class="form-group">
                    <label for="student-no" class="form-label">生徒番号</label>
                    <input type="text" name="student_no" id="student-no" class="form-control" value="">
                </div>
                <div class="form-group">
                    <label for="password" class="form-label">パスワード</label>
                    <input type="password" name="password" id="password" class="form-control" value="">
                </div>
                <div class="form-group">
                    <label for="show-password" class="form-label">
                        <input type="checkbox" id="show-password">
                        パスワードを表示
                    </label>
                </div>
                <div class="form-group form-group-btn">
                    <button type="submit" class="btn" style="background: #16bFb7;" @click="handleLogin">ログインする</button>
                </div>
            </form>
            <div>
                <li><a href="javascript:void(0)">パスワードを忘れた方はこちら</a></li>
            </div>
        </section>
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

<style>
.main-content-container {
    width: 90%;
    position: relative;
    margin: auto;
    padding: 60px 20px 100px 230px;
    transition: .5s padding-left
}

.navbar-hide .main-content-container {
    padding-left: 0
}

.nav-loading .main-content-container {
    display: none
}

.main-content-container.no-nav {
    max-width: 1100px;
    padding-left: 20px
}

@media screen and (max-width:800px) {
    .main-content-container {
        padding: 60px 0 100px;
        width: 95%
    }

    .main-content-container.no-nav {
        padding-left: 0
    }
}

a:link,
a:visited,
a:hover,
a:active {
    color: #16bfb7
}

a:link:hover,
a:visited:hover,
a:hover:hover,
a:active:hover {
    color: #0e7a75
}

#btn-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    text-align: center;
    border: 1px solid #493b32;
    padding: 20px 15px;
    background: rgba(255, 255, 255, .8);
    cursor: pointer;
    z-index: 10;
    font-size: 14px;
    border-radius: 50%
}

@media screen and (max-width:800px) {
    #btn-to-top {
        bottom: 15px;
        right: 15px;
        padding: 10px 8px;
        font-size: 12px
    }
}

#btn-to-top:hover {
    background: #fff
}

.page-header {
    margin-top: 40px
}

@media screen and (max-width:800px) {
    .page-header {
        margin-top: 20px
    }
}

.page-header::after {
    clear: both;
    content: "";
    display: table
}

.page-header h1 {
    margin-bottom: 20px;
    font-size: 25px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    font-weight: 700
}

.page-header h1 i {
    font-size: 96%;
    color: #b4a094
}

.page-header h1 span {
    font-size: 80%
}

@media screen and (min-width:800px) {
    .page-header h1 br {
        display: none
    }
}

.page-header+p {
    margin-top: -7px
}

.form-group {
    margin: 10px 0
}

.form-group h2 {
    margin-top: 20px
}

.form-group-btn {
    margin: 20px 0
}

.form-label {
    display: block;
    margin: 6px 0 3px;
    font-weight: 700
}

.form-control {
    width: 100%;
    max-width: 540px;
    padding: 10px 8px;
    font-size: 16px;
    line-height: 1;
    border: solid 1px #d0d0d5;
    border-radius: 4px;
    background: #fff;
    -webkit-appearance: none
}

.form-control:-ms-input-placeholder {
    color: #ccc
}

.form-control::placeholder {
    color: #ccc
}

.form-control:focus {
    outline: 0;
    border: 1px solid #16bfb7
}

.form-control:disabled {
    background: #f0f0f0;
    cursor: not-allowed
}

.btn {
    display: inline-block;
    -webkit-appearance: none;
    position: relative;
    height: 36.4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, .1);
    padding: 0 28px;
    border: 1px solid transparent;
    border-radius: 16px;
    color: rgba(255, 255, 255, .9) !important;
    font-size: 14px;
    text-decoration: none;
    line-height: 36.4px;
    background: #16bfb7;
    cursor: pointer
}

.btn .fa {
    color: rgba(255, 255, 255, .6)
}

.btn:hover {
    text-decoration: none;
    color: #fff;
    background: #13a8a1
}

.btn:active {
    top: 1px;
    background: linear-gradient(#19d6cd 0%, #16BFB7 100%)
}

.btn:focus {
    outline: 0
}

.btn:disabled {
    cursor: default;
    pointer-events: none
}

.student-interview-list .form-control {
    margin: 13px 0
}

.cr-button {
    height: 32px;
    line-height: 32px;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    background-color: rgb(253, 220, 62);
    cursor: pointer;
    white-space: nowrap;
    vertical-align: middle;
    display: inline-block;
    font-family: "Noto Sans JP", "Hiragino Kaku Gothic ProN", Arial, メイリオ, Meiryo, sans-serif;
    color: rgb(73, 59, 50) !important;
    padding: 0px 28px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 4px;
    text-decoration: none;
    outline: none;
}

.login-methods {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap
}

.login-methods .login-methods-item {
    -ms-flex: 1;
    flex: 1;
    border-right: 2px solid #b4a094;
    padding: 0 8px
}

.login-methods .login-methods-item:last-child {
    border-right: none
}

@media screen and (max-width: 800px) {
    .login-methods .login-methods-item {
        width: 100%;
        -ms-flex: auto;
        flex: auto;
        border-right: none;
        padding: 16px 8px;
        border-bottom: 2px solid #b4a094
    }

    .login-methods .login-methods-item:last-child {
        border-bottom: none
    }
}

.login-methods .login-methods-item p {
    margin-bottom: 12px
}</style>
<template>
    <!-- <div class="backgroung"></div> -->
    <div class="backgroung_cover">
        <div class="user_box">
            <!-- 登入會員 -->
            <div class="user user_logIn">
                <div class="user_title">快速登入</div>
                <!-- 填寫資料 -->
                <div class="user_form">
                    <form action="#" method="post">
                        <input type="text" class="user_form_input user_form_input_email" name="account" value="" placeholder="輸入email" />
                        <br />
                        <input type="password" class="user_form_input user_form_input_password" name="password" value="" placeholder="輸入密碼" />
                        <br />
                        <input
                            type="button"
                            class="
                    user_form_input user_form_input_bottom user_botton
                    login_btn
                  "
                            name=""
                            value="登入"
                        />
                    </form>
                </div>
                <!-- 外部連結 -->
                <div class="user_external_connection_box">
                    <div class="user_external_connection">其他登入方式</div>
                    <div class="user_social_meadia_icons">
                        <div class="social_meadia_icons_item"><a href=""><img src=../assets/images/svg/google.svg></a></div>
                        <div class="social_meadia_icons_item"><a href=""><img src=../assets/images/svg/facebook.svg></a></div>
                        <div class="social_meadia_icons_item"><a href=""> <img src=../assets/images/svg/line.svg> </a></div>
                        <div class="social_meadia_icons_item"><a href=""> <img src=../assets/images/svg/instagram.svg></a></div>
                    </div>
                </div>
                <div class="user_signin_box">
                    <div class="user_signin user_signin_text">
                        還不是會員?立即加入我們
                    </div>
                    <div class="user_signin user_signin_bottom_box">
                        <input type="button" class="user_signin_bottom user_botton" name="" value="註冊" onclick="location.href='./user_signIn.html'" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'user',
}
</script>
<style lang="scss" scoped>
@import '@/scss/user.scss';
</style>

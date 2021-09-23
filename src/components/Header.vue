<template>
    <header>
        <nav>
            <div class="logo">
                <a href="./index.html"><img id="logo" src="../assets/images/svg/logo.svg"/></a>
            </div>
            <div class="nav_bar">
                <!-- 用input的checkbox與for特性做漢堡選單的選取器 -->
                <input type="checkbox" name="" id="burger" />
                <ul class="header_bar" id="nav_menu">
                    <!-- 關於我 -->
                    <li>
                        <a href="./about_me.html" class="link_style">
                            <span>
                                <img id="introduction" src="../assets/images/svg/dog01.svg" />
                            </span>
                            <span>民宿介紹</span>
                        </a>
                    </li>
                    <!-- 我要認養 -->
                    <li class="adopt_menu">
                        <a>
                            <span>
                                <img id="introduction" src="../assets/images/svg/cat01.svg" />
                            </span>
                            <span>我要認養</span>
                        </a>
                        <!-- 我要認養的下拉選單 -->
                        <ul class="adopt_menu_select_menu">
                            <li class="adopt_menu_select">
                                <a href="./adopt_main.html" class="link_style">
                                    <span>認養須知</span>
                                </a>
                            </li>
                            <li class="adopt_menu_select">
                                <a href="./adopt_dog.html" class="link_style">
                                    <span>認養狗狗</span>
                                </a>
                            </li>
                            <li class="adopt_menu_select">
                                <a href="./adopt_cat.html" class="link_style">
                                    <span>認養貓貓</span>
                                </a>
                            </li>
                            <li class="adopt_menu_select">
                                <a href="./adopt_rabbit.html" class="link_style">
                                    <span>認養兔兔</span>
                                </a>
                            </li>
                            <li class="adopt_menu_select">
                                <a href="./adopt_rodent.html" class="link_style">
                                    <span>認養鼠鼠</span>
                                </a>
                            </li>
                            <li class="adopt_menu_select">
                                <a href="./adopt.html" class="link_style">
                                    <span>醫療團隊</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!-- 住宿相關 -->
                    <li class="booking_rooms_menu">
                        <a>
                            <span>
                                <img id="room" src="../assets/images/svg/rabbit01.svg" />
                            </span>
                            <span>住宿相關</span>
                        </a>
                        <!-- 住宿的下拉選單 -->
                        <ul class="booking_rooms_menu_select_menu">
                            <li class="booking_rooms_select">
                                <a href="./bookingroom_peopleroom.html" class="link_style">
                                    <span>一般住宿</span>
                                </a>
                            </li>
                            <li class="booking_rooms_select">
                                <a href="./pet_room.html" class="link_style">
                                    <span>毛孩寄宿</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <!-- 周邊商品 -->
                    <li>
                        <a href="./product.html" class="link_style">
                            <span>
                                <img id="merchandise" src="../assets/images/svg/mouse01.svg" />
                            </span>
                            <span>周邊商品</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <ul class="user_cart">
                    <!-- 會員 -->
                    <li>
                        <a href="./user.html" class="link_style">
                            <img id="user" src=../assets/images/svg/user-circle-solid.svg>
                        </a>
                    </li>
                    <!-- 我的訂單 -->
                    <li>
                        <a href="#" class="link_style">
                            <img id="cart" src="../assets/images/svg/shopping-cart.svg" />
                        </a>
                    </li>
                </ul>
            </div>
            <!--漢堡選單--->
            <!-- 用input的checkbox與for特性做漢堡選單的選取器 -->
            <label for="burger">
                <div class="burger_box">
                    <div class="bgr_bar top"></div>
                    <div class="bgr_bar middle"></div>
                    <div class="bgr_bar bottom"></div>
                </div>
            </label>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss">
@import '@/scss/header.scss';
</style>

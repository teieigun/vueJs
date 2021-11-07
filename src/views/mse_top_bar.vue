<template>
    <div class="top_bar">
        <div class="container">
            <div class="top_header_content">
                <div class="menu_logo">
                    <a href="#" title="" class="menu">
                        <i class="icon-menu"></i>
                    </a>
                    <a href="index.html" title="" class="logo">
                        <img src="../static/images/logo.png" alt="">
                    </a>
                </div><!--menu_logo end-->
                <div class="search_form">
                    <form>
                        <input type="text" name="search" placeholder="Search Videos">
                        <button type="submit">
                            <i class="icon-search"></i>
                        </button>
                    </form>
                </div><!--search_form end-->
                <ul class="controls-lv">
                    <li>
                        <a href="#" title=""><i class="icon-message"></i></a>
                    </li>
                    <li>
                        <a href="#" title=""><i class="icon-notification"></i></a>
                    </li>
                    <li class="user-log">
                        <div class="user-ac-img">
                            <img src="../static/images/resources/user-img.png" alt="">
                        </div>
                        <div class="account-menu">
                            <h4>AZYRUSMAX <span class="usr-status">PRO</span></h4>
                            <div class="sd_menu">
                                <ul class="mm_menu">
                                    <li>
                                        <span>
											<i class="icon-user"></i>
										</span>
                                        <a href="#" title="">My Channel</a>
                                    </li>
                                    <li>
										<span>
											<i class="icon-paid_sub"></i>
										</span>
                                        <a href="#" title="">Paid subscriptions</a>
                                    </li>
                                    <li>
										<span>
											<i class="icon-settings"></i>
										</span>
                                        <a href="#" title="">Settings</a>
                                    </li>
                                    <li>
										<span>
											<i class="icon-logout"></i>
										</span>
                                        <a href="#" title="">Sign out</a>
                                    </li>
                                </ul>
                            </div><!--sd_menu end-->
                            <div class="sd_menu scnd">
                                <ul class="mm_menu">
                                    <li>
										<span>
											<i class="icon-light"></i>
										</span>
                                        <a href="#" title="">Dark Theme</a>
                                        <label class="switch">
                                            <input type="checkbox">
                                            <b class="slider round"></b>
                                        </label>
                                    </li>
                                    <li>
										<span>
											<i class="icon-language"></i>
										</span>
                                        <a href="#" title="">Language</a>
                                    </li>
                                    <li>
										<span>
											<i class="icon-feedback"></i>
										</span>
                                        <a href="#" title="">Send feedback</a>
                                    </li>
                                    <li>
										<span>
											<i class="icon-location"></i>
										</span>
                                        <a href="#" title="">India</a>
                                        <i class="icon-arrow_below"></i>
                                    </li>
                                </ul>
                            </div><!--sd_menu end-->
                            <div class="restricted-mode">
                                <h4>Restricted Mode</h4>
                                <label class="switch">
                                    <input type="checkbox" checked>
                                    <span class="slider round"></span>
                                </label>
                                <div class="clearfix"></div>
                            </div><!--restricted-more end-->
                        </div>
                    </li>
                    <li>
                        <a id="button_id" href="#" title="" class="btn-default">登录</a>
                    </li>
                </ul><!--controls-lv end-->
                <div class="clearfix"></div>
            </div><!--top_header_content end-->
        </div>
    </div><!--header_content end-->
</template>

<script>
    export default {
        name: "top_bar",
        mounted: function () {
            jQuery(function ($) {

                $(window).on("scroll", function() {
                    var scroll = $(window).scrollTop();
                    if (scroll > 30) {
                        $(".top_bar").addClass("scroll animated slideInDown");
                    } else if (scroll < 30) {
                        $(".top_bar").removeClass("scroll animated slideInDown")
                    }
                });

                var header_height = $(".top_bar").innerHeight();

                $(".side_menu").css({
                    "top": header_height
                });

                $(".menu").on("click", function(){
                    $(".side_menu").toggleClass("active");
                    return false;
                });

                $("html").on("click", function() {
                    $(".side_menu").removeClass("active");
                });
                $(".menu, .side_menu").on("click", function(e){
                    e.stopPropagation();
                });

                $(".user-log").on("click", function() {
                    $(".account-menu").slideToggle();
                });
                $("html").on("click", function() {
                    $(".account-menu").slideUp();
                });
                $(".user-log, .account-menu").on("click", function(e) {
                    e.stopPropagation();
                });

                //  ==================== SCROLLING FUNCTION ====================
                $(function () {
                    $('[data-toggle="tooltip"]').tooltip()
                })

            });
        }
    }
</script>

<style scoped>
    @import "../static/css/style.css";
    @import "../static/css/color.css";
    @import "../static/css/bootstrap.min.css";
    @import "../static/css/responsive.css";
    @import "../static/css/fontello.css";
    @import "../static/css/fontello-codes.css";
</style>
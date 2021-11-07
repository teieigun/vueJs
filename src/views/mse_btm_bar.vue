<template>
    <div class="btm_bar">
        <div class="container">
            <div class="btm_bar_content">
                <nav>
                    <ul>
                        <li><a href="#" title="">导航</a>
                            <div class="mega-menu">
                                <ul>
                                    <li><a href="index.html" title="">主页</a></li>
                                    <li><a href="single_video_page.html" title="">基本信息</a></li>
                                    <li><a href="Single_Video_Simplified_Page.html" title="">历史记录</a></li>
                                    <li><a href="single_video_fullwidth_page.html" title="">我的问题</a></li>
                                    <li><a href="single_video_playlist.html" title="">我的技术简历</a></li>
                                    <li><a href="Upload_Video.html" title="">面试技巧</a></li>
                                    <li><a href="Upload_Edit.html" title="">我的项目</a></li>
                                </ul>
                                <ul>
                                    <li><a href="#" title="">我的视频 <span class="icon-arrow_below"></span></a>
                                        <ul>
                                            <li><a href="Single_Channel_Home.html" title="">html基础</a></li>
                                            <li><a href="Single_Channel_Videos.html" title="">css</a></li>
                                            <li><a href="Single_Channel_Playlist.html" title="">js＆jquery</a></li>
                                            <li><a href="Single_Channel_Channels.html" title="">java入門</a></li>
                                            <li><a href="Single_Channel_About.html" title="">SQL基礎</a></li>
                                            <li><a href="Single_Channel_Products.html" title="">Linux入門</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="login.html" title="">注冊</a></li>
                                    <li><a href="signup.html" title="">登錄</a></li>
                                    <li><a href="User_Account_Page.html" title="">客户信息</a></li>
                                </ul>
                            </div>
                            <div class="clearfix"></div>
                        </li>
                        <li><a href="Browse_Categories.html" title="">视频分类</a></li>
                        <li><a href="Browse_Channels.html" title="">频道</a></li>
                        <li><a href="Single_Channel_Home.html" title="">直播间</a></li>
                        <li><a href="#" title="">轻松一下</a></li>
                    </ul>
                </nav><!--navigation end-->
                <ul class="shr_links">
                    <li>
                        <h3>Go to : </h3>
                    </li>
                    <li>
                        <button data-toggle="tooltip" data-placement="top" title="Like">
                            <i class="icon-like"></i>
                        </button>
                    </li>
                    <li>
                        <button data-toggle="tooltip" data-placement="top" title="Watch later">
                            <i class="icon-watch_later"></i>
                        </button>
                    </li>
                    <li>
                        <button data-toggle="tooltip" data-placement="top" title="Playlist">
                            <i class="icon-playlist"></i>
                        </button>
                    </li>
                    <li>
                        <button data-toggle="tooltip" data-placement="top" title="Purchased">
                            <i class="icon-purchased"></i>
                        </button>
                    </li>
                    <li>
                        <button data-toggle="tooltip" data-placement="top" title="History">
                            <i class="icon-history"></i>
                        </button>
                    </li>
                </ul><!--shr_links end-->
                <ul class="vid_thums">
                    <li>
                        <a class="active" href="#" title=""><i class="icon-grid"></i></a>
                    </li>
                    <li>
                        <a href="#" title="">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 viewBox="0 0 108 108" xml:space="preserve">
										<rect width="63" height="45"/>
                                <rect x="81" width="27" height="45"/>
                                <rect x="45" y="63" width="63" height="45"/>
                                <rect y="63" width="27" height="45"/>
                            </svg>
                        </a>
                    </li>
                </ul><!--vid_status end-->
                <div class="clearfix"></div>
            </div><!--btm_bar_content end-->
        </div>
    </div><!--btm_bar end-->
</template>

<script src="../static/js/jquery.min.js"></script>
<script src="../static/js/popper.js"></script>
<script src="../static/js/bootstrap.min.js"></script>
<script src="../static/js/script.js"></script>
<script src="../static/js/mse.js"></script>

<script>
    export default {
        name: "btm_bar"
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
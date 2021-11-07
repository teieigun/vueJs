<template>
    <div class="wrapper hp_1">
        <header>
            <mse_top_bar />
            <mse_btm_bar />
        </header>
        <mse_side_menu />
        <mse_banner />
        <mse_videolist />
        <mse_end />
    </div>
</template>

<script>
    import Side_menu from "./mse_side_menu";
    export default {
        name: "rootDiv",
        components: {
            mse_side_menu,
            mse_top_bar,
            mse_btm_bar,
            mse_side_menu,
            mse_banner,
            mse_videolist,
            mse_end
        }
    }

    // @ is an alias to /src
    import mse_top_bar from '@/views/mse_top_bar.vue'
    import mse_btm_bar from '@/views/mse_btm_bar.vue'
    import mse_side_menu from '@/views/mse_side_menu.vue'
    import mse_banner from "@/views/mse_banner.vue"
    import mse_videolist from "@/views/mse_video_list.vue"
    import mse_end from "@/views/mse_end.vue"


</script>

<style scoped>
    @import "../static/css/style.css";
</style>
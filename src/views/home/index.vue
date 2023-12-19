<script setup>
import { ref, onMounted } from "vue";
import { NButton, NCarousel } from 'naive-ui'

const banner = ref()
onMounted(() => {
    // 获取banner
    /*GET_BANNER().then(res => {
      banner.value = res.banners
    })*/
})
</script>

<template>
    <div class="top_banner">
        <n-carousel draggable>
            <img
                class="carousel-img"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
            >
            <img
                class="carousel-img"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
            >
            <img
                class="carousel-img"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
            >
            <img
                class="carousel-img"
                src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
            >
        </n-carousel>
        <!--<el-carousel height="500px">
            <el-carousel-item v-for="(item, index) in banner" :key="index">
                <el-image style="width: 100vw; height: 500px" :src="item.imageUrl" fit="cover" />
            </el-carousel-item>
        </el-carousel>-->
    </div>
</template>

<style scoped lang="scss">
    .top_banner{
        .carousel-img{
            width: 100vw;
            height: 500px;
            object-fit: cover;
        }
    }
</style>

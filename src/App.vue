<script setup>
import { ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import {GET_BANNER} from "./api/index.js";

function handleBanner() {

}

const banner = ref()



</script>

<template>
    <router-view/>
</template>

<style scoped>
</style>

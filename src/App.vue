<template>
    <main-laouyt></main-laouyt>
    <router-view></router-view>
</template>

<script>
import MainLaouyt from '@/UI/MainLaouyt.vue';
export default {
    components: {
        MainLaouyt
}
}
</script>

<style>
    body {
        background-color: #1f2636;
        display: flex;
    }

    p {
        color: white;
    }
</style>
<template>
    <template v-for="repository in repositories" :key="repository">
        <Repository :repository="repository"></Repository>
    </template>
</template>

<script setup>
import Repository from "@/components/project/Repository.vue"
defineProps(["repositories"]);  
</script>

<style lang="scss">

</style>
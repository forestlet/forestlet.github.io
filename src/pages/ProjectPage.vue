<template>
    <Project :repositories="repositories" position="all"></Project>
</template>
<script setup>
import Project from '@/components/project/Project.vue';
// @ts-ignore
import repositories from "/public/data/repositories.json"
</script>
<style>

</style>
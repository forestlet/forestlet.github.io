<template>
    <Project :repositories="repositories" position="all"></Project>
</template>
<script setup>
import Project from '@/components/project/Project.vue';
import { repositories } from "@/data/repositories"
</script>
<style>

</style>
<template>
    <Project :repositories="all_repositories"></Project>
</template>
<script setup>
import Project from '@/components/project/Project.vue';
import { all_repositories } from "@/data/repositories"
</script>
<style>

</style>
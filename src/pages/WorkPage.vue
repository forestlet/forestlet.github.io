<template>
    <Work :works="works" position="all"></Work>
</template>
<script setup>
import Work from '@/components/work/Work.vue';
import { works } from "@/data/works.js"
</script>
<style>

</style>
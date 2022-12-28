<template>
    <Work :works="all_works"></Work>
</template>
<script setup>
import Work from '@/components/work/Work.vue';
import { all_works } from "@/data/works.js"
</script>
<style>

</style>
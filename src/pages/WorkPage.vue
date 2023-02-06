<template>
    <Work :works="works" position="all"></Work>
</template>
<script setup>
import Work from '@/components/work/Work.vue';
// @ts-ignore
import works from "@/data/works.json"
</script>
<style>

</style>